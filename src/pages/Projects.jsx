// STL imports
import React from 'react';

// Internal imports
import "../styles/global.css"
import Navbar from '../components/navbar/NavbarElements';
// import TextBlock from '../components/textblock/Textblock'
// import PDFViewer from '../components/pdf/PDFViewer';
import ProjectBlock from '../components/projectblock/ProjectBlock';

/**
 * @summary 
 * @returns 
 */
function Projects() {
    const pdfurl = '/pdf/probability_computer.pdf';
    return (
        // <div>
        //     <ProjectBlock
        //         title = 'Non-Local Hidden Variables'
        //         description = "Bell's Inequality sets a boundary that no local hidden variable theory could replicate Quantum Mechanics, but I approach it as an engineering question to how someone could make a non-local hidden variable theory."
        //         pdfUrl = { pdfurl }
        //         pdfHeight='h-full'
        //         descriptionHeight='h-32'
        //         backgroundColor='bg-gray-50'
        //     />
        // </div>
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className="flex-grow"> {/* Main content will expand to fill available space */}
                    <div className="container mx-auto px-4 py-8"> {/* Container for content centering */}
                        <div className="home flex flex-col items-center space-y-6">
                        <ProjectBlock
                            title = 'Non-Local Hidden Variables'
                            description = "Bell's Inequality sets a boundary that no local hidden variable theory could replicate Quantum Mechanics, but I approach it as an engineering question to how someone could make a non-local hidden variable theory."
                            pdfUrl = { pdfurl }
                            pdfHeight='h-full'
                            descriptionHeight='h-32'
                            backgroundColor='bg-gray-50'
                        />
                        </div>
                    </div>
                </main>
            <Footer />
        </div>
    );



}

export default Projects;