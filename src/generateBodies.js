// src/generateBodies.js
import { faker } from '@faker-js/faker';

export function generateBodies(template) {
  const generateValue = (value) => {
    if (typeof value === 'number') {
      return faker.datatype.number();
    } else if (typeof value === 'string') {
      // Checking if the string could be a date
      if (value.includes('T') && value.includes('Z')) {
        // Generate a random date and convert to ISO string format
        // Use faker.date.between with a wide range
        const startDate = new Date('1900-01-01');
        const endDate = new Date('2100-12-31');
        return faker.date.between(startDate, endDate).toISOString();
      } else {
        // Generate a random word if not a date
        return faker.lorem.word();
      }
    } else if (typeof value === 'boolean') {
      return faker.datatype.boolean();
    } else if (Array.isArray(value)) {
      // Map over each item in the array and generate a value
      return value.map(v => generateValue(v));
    } else if (typeof value === 'object' && value !== null) {
      // Recursively handle objects
      return Object.keys(value).reduce((obj, key) => {
        obj[key] = generateValue(value[key]);
        return obj;
      }, {});
    }
    return value;
  };

  // Generate 4 examples from the input template
  return Array.from({ length: 4 }, () => generateValue(template));
}
