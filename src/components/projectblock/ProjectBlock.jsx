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

// const AddProjectForm = ({ onAdd, onCancel }) => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [pdfFile, setPdfFile] = useState(null);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!title || !description || !pdfFile) return;

//         const pdfUrl = URL.createObjectURL(pdfFile);

//         onAdd({
//             title, description, pdfUrl
//         });

//         setTitle('');
//         setDescription('');
//         setPdfFile(null);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="p-6 border-2 border-dashed border-indigo-200 rounded-xl bg-white">
//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//             required
//           />
//         </div>
        
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//             rows="3"
//             required
//           />
//         </div>
        
//         <div>
//           <label className="block text-sm font-medium text-gray-700">PDF File</label>
//           <input
//             type="file"
//             accept=".pdf"
//             onChange={(e) => setPdfFile(e.target.files[0])}
//             className="mt-1 block w-full"
//             required
//           />
//         </div>

//         <div className="flex space-x-4">
//           <button
//             type="submit"
//             className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
//           >
//             Add Project
//           </button>
//           <button
//             type="button"
//             onClick={onCancel}
//             className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </form>
//     );

    
// };

// export const ProjectGrid = () => {
//     // List of project blocks
//     const projects = [

//     ];
// };

// function addProjectBlock( { Pdfviewer, textblock } ) {
//     if (Pdfviewer == null) {
//         return false;
//     }
//     if (textblock == null) {
//         return false;
//     }

//     return true;

// }