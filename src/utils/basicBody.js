// basicBody.js
import { faker } from '@faker-js/faker';

// Helper functions to detect specific types of data
const isDateField = (key, value) => key.toLowerCase().includes('date') && typeof value === 'string';
const isUrlField = (key) => key.toLowerCase().includes('url');
const isIdField = (key) => key.toLowerCase().includes('id');
const isEmailField = (key) => key.toLowerCase().includes('email');

// Function to generate a value based on key and original value type
const generateValue = (key, originalValue) => {
  if (typeof originalValue === 'string') {
    if (isDateField(key, originalValue)) {
      return faker.date.recent(90).toISOString();
    } else if (isUrlField(key)) {
      return faker.internet.url();
    } else if (isEmailField(key)) {
      return faker.internet.email();
    } else {
      return faker.lorem.word();
    }
  } else if (typeof originalValue === 'number') {
    return isIdField(key) ? faker.datatype.number({ min: 1, max: 10000 }) : faker.datatype.number();
  } else if (typeof originalValue === 'boolean') {
    return faker.datatype.boolean();
  } else if (Array.isArray(originalValue)) {
    return originalValue.map(item => generateValue(key, item));
  } else if (typeof originalValue === 'object' && originalValue !== null) {
    return Object.keys(originalValue).reduce((obj, childKey) => {
      obj[childKey] = generateValue(childKey, originalValue[childKey]);
      return obj;
    }, {});
  }
  return originalValue;
};

// Main function to generate a body matching the template structure
export const generateBasicBody = (template) => {
  return generateValue(null, template);
};
