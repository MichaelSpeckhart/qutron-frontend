// STL imports
import React from 'react'

// Internal imports
import Textblock from '../textblock/Textblock'
import PDFViewer from '../pdf/PDFViewer'

/**
 * @summary Project block consists of a text block, a pdf, and an optional image
 */
const ProjectBlock = ( { 
    title = 'Title', 
    description = 'sample description', 
    pdfUrl = "/sample.pdf",
    pdfHeight = "h-96",
    descriptionHeight = "h-32",
    backgroundColor = "bg-gray-50"} ) => {
    
    return (
        <div className="space-y-4">
        { }a
        <h2 className="text-2xl font-bold">{title}</h2>
      
        { }
        <PDFViewer 
            url={pdfUrl}
            height={pdfHeight}
        />
      
        { }
        <Textblock 
            content={description}
            height={descriptionHeight}
            backgroundColor={backgroundColor}
        />
        </div>
    );
};


export default ProjectBlock;
//export default ProjectGrid;

// Frontend (React) -> <- Backend (Django) -> (API Gateway Nginx) -> (Microservices in C)

export const ProjectGrid = () => {
    // List of project blocks
};