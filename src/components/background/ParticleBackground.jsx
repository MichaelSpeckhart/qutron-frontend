import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const animationFrameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.distance = undefined;
      }

      draw() {
        ctx.fillStyle = 'rgba(59, 130, 246, 0.8)'; // Blue color matching our theme
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        // Get mouse position relative to canvas
        const mouse = {
          x: mouseRef.current.x,
          y: mouseRef.current.y
        };
    
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100; // Interaction radius
    
        if (distance < maxDistance) {
          // Calculate force based on distance
          const force = (maxDistance - distance) / maxDistance;
          
          // Stronger movement towards cursor
          const directionX = dx / distance || 0;
          const directionY = dy / distance || 0;
          
          // Adjust speed based on distance
          const speed = force * 2; // Increase this number for faster movement
    
          // Move particle towards cursor
          this.x += directionX * speed;
          this.y += directionY * speed;
    
          // Draw connection line with opacity based on distance
          const opacity = (maxDistance - distance) / maxDistance;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.5})`; // Adjusted opacity
          ctx.lineWidth = opacity * 2; // Line width varies with distance
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        } else {
          // Return to original position more smoothly
          const returnSpeed = 0.05; // Adjust this for faster/slower return
          this.x += (this.baseX - this.x) * returnSpeed;
          this.y += (this.baseY - this.y) * returnSpeed;
        }
      }
    }
    
    // Update the mouse position handler
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };
    // Initialize particles
    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
      particlesRef.current = particles;
    };

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach(particle => {
        particle.draw();
        particle.update();
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };



    const handleResize = () => {
      resizeCanvas();
      init();
    };

    // Initial setup
    resizeCanvas();
    init();
    animate();

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticleBackground;