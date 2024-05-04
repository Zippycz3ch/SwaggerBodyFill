// src/nonvalidgenerateBodies.js
import { faker } from '@faker-js/faker';

// Function to generate non-valid data bodies
export function nonValidGenerateBodies(template) {
  // Function to generate values of the incorrect type intentionally
  const generateIncorrectValue = (value) => {
    switch (typeof value) {
      case 'number':
        return faker.lorem.words(); // String instead of number
      case 'string':
        return faker.datatype.number(); // Number instead of string
      case 'boolean':
        return faker.lorem.sentence(); // String instead of boolean
      case 'object':
        if (Array.isArray(value)) {
          return {}; // Object instead of array
        } else {
          return []; // Array instead of object
        }
      default:
        return null; // For unexpected types
    }
  };

  // Apply incorrect data generation across the entire template
  return Object.keys(template).reduce((obj, key) => {
    obj[key] = generateIncorrectValue(template[key]);
    return obj;
  }, {});
}

