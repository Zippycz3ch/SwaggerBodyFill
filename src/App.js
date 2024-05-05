import React from 'react';
import { useAppState } from './hooks/useAppState';
import Header from './components/Header';
import TextareaInput from './components/TextareaInput';
import OutputGrid from './components/OutputGrid';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';

function App() {
  const { state, placeholder, handleGenerate, handleRandom, setCopiedIndex } = useAppState();  // Ensure setCopiedIndex is provided by useAppState

  return (
    <div className="app">
      <Header error={state.error} />
      <TextareaInput state={state} placeholder={placeholder} handleGenerate={handleGenerate} />
      <div style={{ display: 'flex', justifyContent: 'start' }}>
        <button onClick={() => handleGenerate(state.input || placeholder)}>Generate</button>
        <button onClick={handleRandom}><FontAwesomeIcon icon={faDice} /></button>
</div>
      <OutputGrid outputs={state.outputs} copiedIndex={state.copiedIndex} setCopiedIndex={setCopiedIndex} />
    </div>
  );
}

export default App;
