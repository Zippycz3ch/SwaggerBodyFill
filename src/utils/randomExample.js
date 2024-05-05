import examples from './examples';

// Function to get a random example from the examples array
export const getRandomExample = () => {
  const randomIndex = Math.floor(Math.random() * examples.length);
  return examples[randomIndex];
};
