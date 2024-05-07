import React from 'react';

const TextareaInput = ({ state, placeholder, handleInputChange }) => {
  return (
    <textarea
      placeholder={placeholder}
      value={state.input}
      onChange={(e) => handleInputChange(e.target.value)}
      style={{
        overflowY: 'auto',
        height: '200px',
        transition: 'height 0.2s'
      }}
    />
  );
};

export default TextareaInput;
