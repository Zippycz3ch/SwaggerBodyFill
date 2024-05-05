import React from 'react';
import { useAppState } from './hooks/useAppState';
import Header from './components/Header';
import TextareaInput from './components/TextareaInput';
import OutputGrid from './components/OutputGrid';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';

function App() {
  const { state, placeholder, handleGenerate, handleRandom, setCopiedIndex } = useAppState();

  // A new function to handle click on Generate with proper fallback
  const handleGenerateClick = () => {
    const input = state.input || placeholder;
    handleGenerate(input);
  };

  return (
    <div className="app">
      <Header error={state.error} />
      <TextareaInput state={state} placeholder={placeholder} handleGenerate={handleGenerateClick} />
      <div className="button-container">
        <button onClick={handleGenerateClick}>Generate</button>
        <button onClick={handleRandom} aria-label="Randomize">
          <FontAwesomeIcon icon={faDice} />
        </button>
      </div>
      <OutputGrid outputs={state.outputs} copiedIndex={state.copiedIndex} setCopiedIndex={setCopiedIndex} />
    </div>
  );
}

export default App;
