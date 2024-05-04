// src/App.js
import React, { useState } from 'react';
import { generateBodies } from './generateBodies';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [outputs, setOutputs] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null); // State to track copied index

  const handleGenerate = () => {
    try {
      const parsedInput = JSON.parse(input);
      const generatedOutputs = generateBodies(parsedInput);
      setOutputs(generatedOutputs);
      setCopiedIndex(null); // Reset copied index on new generation
    } catch (e) {
      alert('Invalid JSON input. Please check your JSON format.');
      console.error('Parsing error:', e);
    }
  };

  const handleCopyToClipboard = (jsonText, index) => {
    navigator.clipboard.writeText(jsonText)
      .then(() => {
        setCopiedIndex(index); // Set copied index to current
        setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2000ms (2 seconds)
      })
      .catch(err => console.error('Failed to copy text: ', err));
  };

  return (
    <div className="app">
      <h1>Swagger Body Fill</h1>
      <textarea
        placeholder="Enter JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        cols={50}
      />
      <button onClick={handleGenerate}>Generate</button>
      <div className="output-grid">
        {outputs.map((output, index) => (
          <div className="output-container" key={index}>
            <pre>{JSON.stringify(output, null, 2)}</pre>
            <button 
              className={`copy-button ${copiedIndex === index ? 'copied' : ''}`}
              onClick={() => handleCopyToClipboard(JSON.stringify(output, null, 2), index)}
            >
              {copiedIndex === index ? 'Copied!' : 'Copy'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
