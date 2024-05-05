import React from 'react';
import ReactJson from 'react-json-view';

const OutputGrid = ({ outputs, copiedIndex, setCopiedIndex }) => {
  const handleCopy = (data, index) => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2))
      .then(() => {
        setCopiedIndex(index);  // Set index to show "Copied!"
        setTimeout(() => setCopiedIndex(null), 2000);  // Reset after 2 seconds
      })
      .catch(err => console.error('Failed to copy text: ', err));
  };

  return (
    <div className="output-grid">
      {outputs.map((output, index) => (
        <div key={index} className={`output-container ${output.type === 'valid' ? 'output-valid' : 'output-non-valid'}`}>
          <ReactJson src={output.data} theme="monokai" collapsed={false} enableClipboard={false} />
          <button
            className={`copy-button ${copiedIndex === index ? 'copied' : ''}`}
            onClick={() => handleCopy(output.data, index)}
          >
            {copiedIndex === index ? 'Copied!' : 'Copy'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default OutputGrid;
