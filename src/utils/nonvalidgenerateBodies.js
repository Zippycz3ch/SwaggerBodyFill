// src/nonvalidgenerateBodies.js
import { faker } from '@faker-js/faker';

// Function to generate non-valid data bodies
export function nonValidGenerateBodies(template) {
  // Recursive function to generate values of the incorrect type intentionally
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
          // Create an array with incorrect data type entries
          return Array.from({ length: value.length }, () => {
            // Assuming the array elements are of similar type as the first element if present
            return value.length > 0 ? generateIncorrectValue(value[0]) : faker.lorem.word();
          });
        } else {
          // Create an object with incorrect data type properties
          return Object.keys(value).reduce((acc, key) => {
            acc[key] = generateIncorrectValue(value[key]);
            return acc;
          }, {});
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
