import { faker } from '@faker-js/faker';

export function generateBodies(template) {
  // Helper function to generate a random lorem word
  const generateWord = () => faker.lorem.word();

  // Recursive function to generate values based on the original structure, maintaining array lengths
  const generateValue = (value, isFirstOutput = false) => {
    if (typeof value === 'string') {
      // Replace any string with a random word
      return generateWord();
    } else if (Array.isArray(value)) {
      // For the first output, maintain the array length; vary it for others
      const length = isFirstOutput ? value.length : faker.datatype.number({ min: 1, max: 10 });
      return Array.from({ length }, () => generateWord());
    } else if (typeof value === 'object' && value !== null) {
      // Recurse over each key in the object
      return Object.keys(value).reduce((obj, key) => {
        obj[key] = generateValue(value[key], isFirstOutput);
        return obj;
      }, {});
    }
    return value; // Return as is for any other type
  };

  // Generate an array of bodies, ensuring the first one keeps the same array length
  try {
    // First output with original array lengths
    const firstOutput = generateValue(template, true);

    // Other outputs with varied array lengths
    const otherOutputs = Array.from({ length: 3 }, () => generateValue(template));
    return [firstOutput, ...otherOutputs];
  } catch (error) {
    console.error("Failed to generate bodies:", error);
    return [];  // Return an empty array in case of error
  }
}

// Example usage
const input = {
  "city": "Chicago",
  "attractions": [
    "Willis Tower",
    "Navy Pier",
    "Millennium Park"
  ]
};

console.log(generateBodies(input)); // Generates the first output with exact array length and others varied
