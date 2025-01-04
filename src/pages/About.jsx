// STL imports
import React from 'react';

// Internal imports
import Textblock from '../components/textblock/Textblock';


/**
 * @summary About page for the website. Will have summaries of people and projects involved.
 */
function About() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">About Me</h1>
            <Textblock
                content='Hello, my name is Michael Speckhart'
                height='h-24'
                backgroundColor='bg-white'
            />
        </div>
    );
}



export default About;