import React from 'react';

const TextareaInput = ({ state, placeholder, handleGenerate }) => {
  return (
    <textarea
      placeholder={placeholder}
      value={state.input}
      onChange={(e) => handleGenerate(e.target.value)}
      style={{
        overflowY: 'auto',  // Ensures scroll inside textarea if content exceeds the height
        height: '200px',     // Fixed height
        transition: 'height 0.2s' // Smooth transition for height change
      }}
    />
  );
};

export default TextareaInput;
