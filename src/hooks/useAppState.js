import { useState } from 'react';
import { generateBodies } from '../utils/generateBodies';
import { nonValidGenerateBodies } from '../utils/nonvalidgenerateBodies';
import { getRandomExample } from '../utils/randomExample';

export function useAppState() {
  const [state, setState] = useState({
    input: '',
    outputs: [],
    error: null,
    copiedIndex: null,
  });

  const placeholder = getRandomExample(); 

  const updateInput = (input) => {
    setState(prevState => ({
      ...prevState,
      input
    }));
  };

  const handleGenerate = (input) => {
    if (!input.trim()) {
      setState(prevState => ({ ...prevState, error: 'Input cannot be empty.' }));
      return;
    }

    try {
      const jsonData = JSON.parse(input);
      const validOutputs = generateBodies(jsonData).map(body => ({ type: 'valid', data: body }));
      const nonValidOutputs = Array(2).fill().map(() => ({ type: 'non-valid', data: nonValidGenerateBodies(jsonData) }));

      setState({
        ...state,
        input,
        outputs: [...validOutputs, ...nonValidOutputs],
        error: null,
      });
    } catch (e) {
      setState(prevState => ({ ...prevState, error: `Invalid JSON: ${e.message}` }));
    }
  };

  const handleRandom = () => {
    const randomExample = getRandomExample();
    handleGenerate(randomExample);
  };

  const setCopiedIndex = (index) => {
    setState(prevState => ({
      ...prevState,
      copiedIndex: index
    }));
    setTimeout(() => {
      setState(prevState => ({
        ...prevState,
        copiedIndex: null
      }));
    }, 2000);
  };

  return {
    state,
    placeholder,
    handleGenerate,
    handleRandom,
    updateInput,
    setCopiedIndex
  };
}
