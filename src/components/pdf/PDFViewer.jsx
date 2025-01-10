/* STL Imports */
import React from 'react'

/* Internal Imports */

/**
 * 
 * @param {*} URL
 * @param {*} Width
 * @param {*} Height
 * @param {*} BackgroundColor Color of background
 * 
 * @summary Block to view PDF file
 * 
 * @returns
 */
const PDFViewer = ( { url = '/sample.pdf', width = 'w-full', height = 'h-screen', backgroundColor = 'bg-gray-100', title = 'PDF Viewer'}) => {

    return  (
        <div className={`${width} ${height} ${backgroundColor} rounded-lg overflow-hidden shadow-lg`}>
            {/* Using iframe for built-in PDF viewer */}
            <iframe
                src={`${url}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full"
                title={title}
            />
        </div>
    );

};

export default PDFViewer;