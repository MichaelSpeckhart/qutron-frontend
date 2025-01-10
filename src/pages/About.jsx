// STL imports
import React from 'react';

// Internal imports
import Textblock from '../components/textblock/Textblock';
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/NavbarElements';
import '../styles/global.css'


/**
 * @summary About page for the website. Will have summaries of people and projects involved.
 */
function About() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
                <main className="flex-grow"> {/* Main content will expand to fill available space */}
                    <div className="container mx-auto px-4 py-8"> {/* Container for content centering */}
                        <div className="home flex flex-col items-center space-y-6">
                            <h1> About Qutron </h1>
                            
                            <Textblock
                                content='hello'
                                height='h-32'
                                backgroundColor='bg-gray-50'
                            />
            
                        </div>
                    </div>
                </main>
            <Footer />
        </div>
    );
}



export default About;