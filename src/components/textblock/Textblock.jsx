import React from 'react';

const Textblock = ( {content = "Default Content", height = "h-24", backgroundColor = "bg-gray-50"}) => {
    return (
        <div 
      className={`
        ${height} 
        ${backgroundColor}
        w-full 
        p-4 
        border 
        rounded-md 
        overflow-auto
      `}
    >
      {content}
    </div>
    );
}


export default Textblock;