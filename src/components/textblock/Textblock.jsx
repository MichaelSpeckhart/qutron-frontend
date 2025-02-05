import React from 'react';

const Textblock = ({
  content = "Default Content", 
  height = "h-24", 
  backgroundColor = "bg-gray-50",  // Default Background
  textColor = "text-primary",   
  fontSize = "text-lg",         
  padding = "p-4", 
  border = "border", 
  borderRadius = "rounded-md", 
  boxShadow = "shadow-sm", 
  maxWidth = "max-w-full", 
  customClass = ""
}) => {
  return (
    <div
      className={`w-full overflow-auto transition-all
        ${height || 'h-auto'}  
        ${backgroundColor || 'bg-gray-50'}  /* ✅ Ensure fallback */
        ${textColor || 'text-primary'}  
        ${fontSize || 'text-lg'}  
        ${padding || 'p-4'}  
        ${border || 'border'}  
        ${borderRadius || 'rounded-md'}  
        ${boxShadow || 'shadow-sm'}  
        ${maxWidth || 'max-w-full'}  
        ${customClass}
      `}
    >
      {content}
    </div>
  );
};

export default Textblock;
