// src/examples.js
const examples = [
    JSON.stringify({
      "id": 0,
      "petId": 0,
      "quantity": 0,
      "shipDate": "2024-05-04T09:46:53.629Z",
      "status": "placed",
      "complete": true
    }, null, 2),
    JSON.stringify({
      "id": 0,
      "category": {
        "id": 0,
        "name": "string"
      },
      "name": "doggie",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available"
    }, null, 2)
  ];
  
  // Function to get a random example
  export const getRandomExample = () => {
    return examples[Math.floor(Math.random() * examples.length)];
  };
  
  export default examples;
  