import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ containerRef }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const animationFrameRef = useRef();

  useEffect(() => {
    // Check if containerRef and containerRef.current are valid before proceeding
    const container = containerRef?.current;
    if (!container) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resizeCanvas = () => {
      // Set canvas size to match the container's size
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.velocity = {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2
        };
      }

      draw() {
        ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x <= 0 || this.x >= canvas.width) {
          this.velocity.x *= -1;
        }
        if (this.y <= 0 || this.y >= canvas.height) {
          this.velocity.y *= -1;
        }

        const mouse = {
          x: mouseRef.current.x,
          y: mouseRef.current.y
        };

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const directionX = dx / distance || 0;
          const directionY = dy / distance || 0;
          const speed = force * 2;

          this.x += directionX * speed;
          this.y += directionY * speed;

          const opacity = (maxDistance - distance) / maxDistance;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.5})`;
          ctx.lineWidth = opacity * 2;
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        this.x = Math.max(0, Math.min(this.x, canvas.width));
        this.y = Math.max(0, Math.min(this.y, canvas.height));
      }
    }

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
      particlesRef.current = particles;
    };

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

    resizeCanvas();
    init();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,  // Make sure it's behind other content
      }}
    />
  );
};

export default ParticleBackground;
