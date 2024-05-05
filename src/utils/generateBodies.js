import { faker } from '@faker-js/faker';
import { parse, isValid, format } from 'date-fns';

export function generateBodies(template) {
  // Function to detect date format and generate a new date in the same format
  const handleDate = (dateStr) => {
    // List of potential date formats
    const formats = ['yyyy-MM-dd', 'MM/dd/yyyy', 'dd-MM-yyyy', 'yyyyMMdd'];
    for (let fmt of formats) {
      const parsedDate = parse(dateStr, fmt, new Date());
      if (isValid(parsedDate)) {
        // If valid, generate a new date in the same format
        return format(faker.date.soon(90, new Date()), fmt);
      }
    }
    return dateStr; // Return original if no valid format found
  };

  // Recursive function to generate values based on the original structure
  const generateValue = (value, key = '', isFirstOutput = false) => {
    if (typeof value === 'string') {
      // Check if the key suggests it's a date field
      if (key.toLowerCase().includes('date')) {
        return handleDate(value);
      } else {
        return faker.lorem.word();
      }
    } else if (Array.isArray(value)) {
      // Determine the length of the array: same as input for the first output, random otherwise
      const length = isFirstOutput ? value.length : faker.datatype.number({ min: 1, max: 10 });
      return Array.from({ length }, () => generateValue(value[0], key, isFirstOutput)); // Apply recursively to arrays
    } else if (typeof value === 'object' && value !== null) {
      // Recurse over each key in the object
      return Object.keys(value).reduce((obj, currentKey) => {
        obj[currentKey] = generateValue(value[currentKey], currentKey, isFirstOutput);
        return obj;
      }, {});
    }
    return value; // Return as is for any other type
  };

  // Generate an array of bodies, ensuring the first one keeps the same array length
  try {
    const firstOutput = generateValue(template, '', true); // First output with original array lengths
    const otherOutputs = Array.from({ length: 3 }, () => generateValue(template)); // Other outputs with varied array lengths
    return [firstOutput, ...otherOutputs];
  } catch (error) {
    console.error("Failed to generate bodies:", error);
    return [];  // Return an empty array in case of error
  }
}

// Example usage
const input = {
  "name": "Alice",
  "age": 25,
  "city": "New York",
  "birthDate": "1997-08-20",
  "photoUrl": "https://example.com/alice.jpg"
};

console.log(generateBodies(input));
