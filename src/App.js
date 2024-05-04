// src/App.js
import React, { useState } from 'react';
import { generateBodies } from './generateBodies';
import './App.css';
import examples from './examples';
import ReactJson from 'react-json-view';

function App() {
  const [input, setInput] = useState('');
  const [outputs, setOutputs] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleGenerate = () => {
    let jsonData;
    try {
      jsonData = input ? JSON.parse(input) : JSON.parse(examples[0]);
      const generatedOutputs = generateBodies(jsonData);
      setOutputs(generatedOutputs);
      setCopiedIndex(null);
    } catch (e) {
      alert('Invalid JSON input. Please check your JSON format.');
      console.error('Parsing error:', e);
    }
  };

  return (
    <div className="app">
      <h1>Swagger Body Fill</h1>
      <textarea
        placeholder={examples[0]}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={(e) => e.target.placeholder = ''}
        onBlur={(e) => { if (!e.target.value) e.target.placeholder = examples[0]; }}
        rows={10}
        cols={50}
      />
      <button onClick={handleGenerate}>Generate</button>
      <div className="output-grid">
        {outputs.map((output, index) => (
          <div className="output-container" key={index}>
            <ReactJson 
              src={output} 
              theme="monokai" 
              collapsed={false} 
              enableClipboard={false}
            />
            <button 
              className={`copy-button ${copiedIndex === index ? 'copied' : ''}`}
              onClick={() => {
                navigator.clipboard.writeText(JSON.stringify(output, null, 2));
                setCopiedIndex(index);
                setTimeout(() => setCopiedIndex(null), 2000);
              }}
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
