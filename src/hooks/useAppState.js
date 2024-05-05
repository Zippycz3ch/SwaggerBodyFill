import { useState } from 'react';
import { generateBodies } from '../utils/generateBodies';
import { nonValidGenerateBodies } from '../utils/nonvalidgenerateBodies';
import { getRandomExample } from '../utils/randomExample';

export function useAppState() {
  const [state, setState] = useState({
    input: '',
    outputs: [],
    error: null,
    copiedIndex: null,  // This state will manage which item's copy button was clicked
  });

  const [placeholder, setPlaceholder] = useState(getRandomExample());

  const handleGenerate = (input) => {
    try {
      const jsonData = JSON.parse(input);
      const validOutputs = generateBodies(jsonData).map(body => ({ type: 'valid', data: body }));
      const nonValidOutputs = Array(2).fill().map(() => ({ type: 'non-valid', data: nonValidGenerateBodies(jsonData) }));

      setState({
        ...state,
        input,
        outputs: window.innerWidth <= 600 ? [...validOutputs.slice(0, 2), nonValidOutputs[0]] : [...validOutputs, ...nonValidOutputs],
        error: null,
      });
    } catch (e) {
      setState({ ...state, error: `Parsing error: ${e.message}` });
    }
  };

  const handleRandom = () => {
    const randomExample = getRandomExample();
    handleGenerate(randomExample);
  };

  // Function to handle setting the copied index
  const setCopiedIndex = (index) => {
    setState(prevState => ({
      ...prevState,
      copiedIndex: index
    }));
    // Automatically reset copiedIndex after 2 seconds
    setTimeout(() => {
      setState(prevState => ({
        ...prevState,
        copiedIndex: null
      }));
    }, 2000);
  };

  return {
    state,
    setState,
    placeholder,
    setPlaceholder,
    handleGenerate,
    handleRandom,
    setCopiedIndex  // Expose the method to update the copied index
  };
}
