import { faker } from '@faker-js/faker';

export function generateBodies(template) {
  // Determines if a key suggests the field should contain a date
  const isDateField = (key, value) => {
    return key.toLowerCase().includes('date') || (typeof value === 'string' && value.includes('T') && value.includes('Z'));
  };

  // Determines if a key suggests the field should contain a URL
  const isUrlField = (key) => {
    return key.toLowerCase().includes('url');
  };

  const generateValue = (value, key) => {
    if (typeof value === 'number') {
      return faker.datatype.number();
    } else if (typeof value === 'string') {
      if (isDateField(key, value)) {
        const startDate = new Date('1900-01-01');
        const endDate = new Date('2100-12-31');
        return faker.date.between(startDate, endDate).toISOString();
      } else if (isUrlField(key)) {
        return faker.internet.url();  // Generates a URL if the field name includes "url"
      } else {
        return faker.lorem.word();
      }
    } else if (typeof value === 'boolean') {
      return faker.datatype.boolean();
    } else if (Array.isArray(value)) {
      return value.map(v => generateValue(v, key)); // assuming key doesn't change meaning within arrays
    } else if (typeof value === 'object' && value !== null) {
      return Object.keys(value).reduce((obj, key) => {
        obj[key] = generateValue(value[key], key);
        return obj;
      }, {});
    }
    return value;
  };

  // Generate 6 outputs using the updated logic
  return Array.from({ length: 4 }, () => generateValue(template, null));
}
