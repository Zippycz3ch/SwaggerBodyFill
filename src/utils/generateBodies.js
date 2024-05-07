import { faker } from '@faker-js/faker';
import { parse, isValid, format } from 'date-fns';

export function generateBodies(template) {
  // Function to detect date format and generate a new date in the same format
  const handleDate = (dateStr) => {
    const formats = ['yyyy-MM-dd', 'MM/dd/yyyy', 'dd-MM-yyyy', 'yyyyMMdd'];
    for (let fmt of formats) {
      const parsedDate = parse(dateStr, fmt, new Date());
      if (isValid(parsedDate)) {
        return format(faker.date.soon(90), fmt);
      }
    }
    return dateStr;
  };

  // Function to randomly mutate numeric (integers and floats) and string values
  const mutateValue = (value, key) => {
    if (typeof value === 'number') {
      let newValue;
      if (Number.isInteger(value)) {
        do {
          newValue = faker.datatype.number({ min: 1, max: 100 });
        } while (newValue === value);
      } else {
        do {
          newValue = parseFloat((faker.datatype.number({ min: 1, max: 100 }) + Math.random()).toFixed(2));
        } while (newValue === value);
      }
      return newValue;
    } else if (typeof value === 'string' && !key.toLowerCase().includes('date')) {
      return faker.lorem.word();
    }
    return value; // return unchanged value if it's a date type to preserve format
  };

  // Recursive function to generate values based on the original structure
  const generateValue = (value, key = '', isFirstOutput = false) => {
    if (typeof value === 'string') {
      if (key.toLowerCase().includes('date')) {
        return handleDate(value);
      } else {
        return mutateValue(value, key);
      }
    } else if (Array.isArray(value)) {
      const length = isFirstOutput ? value.length : faker.datatype.number({ min: 1, max: value.length * 2 });
      return Array.from({ length }, () => generateValue(value[0], key, isFirstOutput));
    } else if (typeof value === 'object' && value !== null) {
      return Object.keys(value).reduce((obj, currentKey) => {
        obj[currentKey] = generateValue(value[currentKey], currentKey, isFirstOutput);
        return obj;
      }, {});
    } else if (typeof value === 'number') {
      return mutateValue(value, key);
    }
    return value;
  };

  // Generate output where the first output maintains the original structure and count of elements
  try {
    const firstOutput = generateValue(template, '', true);
    const otherOutputs = Array.from({ length: 3 }, () => generateValue(template));
    return [firstOutput, ...otherOutputs];
  } catch (error) {
    console.error("Failed to generate bodies:", error);
    return [];
  }
}

// Example usage
const input = {
  "name": "Alice",
  "age": 25,
  "city": "New York",
  "birthDate": "1997-08-20",
  "salary": 55.75,  // Example of a float value
  "photoUrl": "https://example.com/alice.jpg"
};

console.log(generateBodies(input));
