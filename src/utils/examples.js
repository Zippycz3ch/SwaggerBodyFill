const examples = [
  // Example 1
  JSON.stringify({"name": "John", "age": 30, "birthDate": "1992-05-15", "isStudent": false, "height": 6.1}, null, 2),

  // Example 2
  JSON.stringify({"name": "Alice", "age": 25, "city": "New York", "birthDate": "1997-08-20", "photoUrl": "https://example.com/alice.jpg", "isStudent": true, "weight": 120.5}, null, 2),

  // Example 3
  JSON.stringify({"title": "Blog Post", "content": "Lorem ipsum dolor sit amet.", "photoUrl": "https://example.com/blog_post.jpg", "views": 500.5, "rating": 4.2}, null, 2),

  // Example 4
  JSON.stringify({"title": "Article", "author": "Jane Doe", "views": 500, "isPublished": true, "rating": 3.9}, null, 2),

  // Example 5
  JSON.stringify({"product": "Laptop", "price": 999.99, "inStock": true, "quantity": 10, "weight": 2.5}, null, 2),

  // Example 6
  JSON.stringify({"product": "Smartphone", "price": 599.99, "color": "Black", "weight": 0.3, "screenSize": 6.2}, null, 2),

  // Example 7
  JSON.stringify({"name": "John", "email": "john@example.com", "phone": "123-456-7890", "birthDate": "1985-10-10", "isEmployed": true, "height": 5.9}, null, 2),

  // Example 8
  JSON.stringify({"name": "Jane", "email": "jane@example.com", "address": "123 Main St", "photoUrl": "https://example.com/jane.jpg", "isEmployed": false, "weight": 135.2}, null, 2),

  // Example 9
  JSON.stringify({"company": "ABC Inc.", "employees": 100, "photoUrl": "https://example.com/abc_logo.png", "revenue": 1000000.0, "profitMargin": 0.15}, null, 2),

  // Example 10
  JSON.stringify({"company": "XYZ Corp.", "employees": 500, "location": "San Francisco", "revenue": 5000000.0, "profitMargin": 0.12}, null, 2),

  // Example 11
  JSON.stringify({"book": "The Great Gatsby", "author": "F. Scott Fitzgerald", "pages": 180, "isBestseller": true, "rating": 4.5}, null, 2),

  // Example 12
  JSON.stringify({"book": "To Kill a Mockingbird", "author": "Harper Lee", "pages": 281, "isBestseller": false, "rating": 4.0}, null, 2),

  // Example 13
  JSON.stringify({"animal": "Dog", "breed": "Labrador", "age": 5, "isPet": true, "weight": 25.5}, null, 2),

  // Example 14
  JSON.stringify({"animal": "Cat", "breed": "Siamese", "age": 3, "color": "White", "isPet": false, "weight": 12.3}, null, 2),

  // Example 15
  JSON.stringify({"car": "Toyota", "model": "Camry", "year": 2022, "mileage": 15000.5, "fuelEfficiency": 28.5}, null, 2),

  // Example 16
  JSON.stringify({"car": "Honda", "model": "Civic", "year": 2021, "color": "Blue", "mileage": 20000.2, "fuelEfficiency": 30.1}, null, 2),

  // Example 17
  JSON.stringify({"fruit": "Apple", "color": "Red", "quantity": 10, "isFresh": true, "weight": 0.2}, null, 2),

  // Example 18
  JSON.stringify({"fruit": "Banana", "color": "Yellow", "quantity": 5, "ripe": true, "isFresh": false, "weight": 0.3}, null, 2),

  // Example 19
  JSON.stringify({"movie": "Inception", "director": "Christopher Nolan", "duration": "2h 28m", "isPopular": true, "rating": 4.8}, null, 2),

  // Example 20
  JSON.stringify({"movie": "The Shawshank Redemption", "director": "Frank Darabont", "duration": "2h 22m", "isPopular": false, "rating": 4.7}, null, 2),

  // Example 21
  JSON.stringify({"city": "Paris", "population": 2_140_526, "area": 105.4, "isCapital": true, "latitude": 48.8566}, null, 2),

  // Example 22
  JSON.stringify({"city": "Tokyo", "population": 9_273_000, "country": "Japan", "area": 2187.66, "latitude": 35.6895}, null, 2),

  // Example 23
  JSON.stringify({"language": "English", "level": "Advanced", "certification": true, "hoursStudied": 120, "fluencyScore": 8.5}, null, 2),

  // Example 24
  JSON.stringify({"language": "Spanish", "level": "Intermediate", "certification": false, "hoursStudied": 80, "fluencyScore": 6.3}, null, 2),

  // Example 25
  JSON.stringify({"sport": "Soccer", "team": "Manchester United", "players": 25, "isProfessional": true, "averageAge": 27.8}, null, 2),

  // Example 26
  JSON.stringify({"sport": "Basketball", "team": "Los Angeles Lakers", "players": 15, "championships": 17, "isProfessional": true, "averageAge": 28.5}, null, 2),

  // Example 27
  JSON.stringify({"city": "London", "attractions": ["Big Ben", "London Eye", "Buckingham Palace"], "isCapital": true, "longitude": -0.1276}, null, 2),

  // Example 28
  JSON.stringify({"city": "Rome", "attractions": ["Colosseum", "Vatican City", "Trevi Fountain"], "isCapital": false, "longitude": 12.4964}, null, 2),

  // Example 29
  JSON.stringify({"game": "Chess", "players": 2, "duration": "30-60 minutes", "isStrategy": true, "complexity": 7.9}, null, 2),

  // Example 30
  JSON.stringify({"game": "Monopoly", "players": 2-6, "duration": "1-3 hours", "isStrategy": false, "complexity": 5.2}, null, 2),

  // Example 31
  JSON.stringify({"username": "user123", "email": "user123@example.com", "password": "password123", "isActive": true, "priority": 3.5}, null, 2),

  // Example 32
  JSON.stringify({"username": "admin", "email": "admin@example.com", "password": "admin123", "isAdmin": true, "priority": 8.7}, null, 2),

  // Example 33
  JSON.stringify({"product": "Headphones", "brand": "Bose", "price": 299.99, "color": "Black", "isWireless": true, "weight": 0.5}, null, 2),

  // Example 34
  JSON.stringify({"product": "Keyboard", "brand": "Logitech", "price": 49.99, "color": "White", "isWireless": false, "weight": 1.2}, null, 2),

  // Example 35
  JSON.stringify({"country": "Australia", "capital": "Canberra", "population": 25_698_400, "area": 7_692_024, "isIsland": false, "gdp": 1.4}, null, 2),

  // Example 36
  JSON.stringify({"country": "Japan", "capital": "Tokyo", "population": 125_584_838, "area": 377_975, "isIsland": true, "gdp": 5.0}, null, 2),

  // Example 37
  JSON.stringify({"name": "Tom", "age": 25, "height": 180, "weight": 75.5, "isAthlete": true, "performanceScore": 9.2}, null, 2),

  // Example 38
  JSON.stringify({"name": "Emily", "age": 30, "height": 165, "weight": 60.2, "isAthlete": false, "performanceScore": 5.8}, null, 2),

  // Example 39
  JSON.stringify({"username": "user123", "email": "user123@example.com", "password": "password123", "isLoggedIn": false, "sessionDuration": 0.0}, null, 2),

  // Example 40
  JSON.stringify({"username": "admin", "email": "admin@example.com", "password": "admin123", "isLoggedIn": true, "sessionDuration": 3600.5}, null, 2),

  // Example 41
  JSON.stringify({"planet": "Mars", "distanceFromSun": 225_000_000, "diameter": 6_779, "isExplored": false, "temperature": -55.0}, null, 2),

  // Example 42
  JSON.stringify({"planet": "Venus", "distanceFromSun": 108_000_000, "diameter": 12_104, "isExplored": true, "temperature": 464.0}, null, 2),

  // Example 43
  JSON.stringify({"city": "Dubai", "population": 3_331_000, "currency": "AED", "exchangeRate": 3.67, "tourismRating": 8.5}, null, 2),

  // Example 44
  JSON.stringify({"city": "Paris", "population": 2_148_000, "currency": "EUR", "exchangeRate": 0.83, "tourismRating": 9.0}, null, 2),

  // Example 45
  JSON.stringify({"name": "Mark", "age": 35, "occupation": "Engineer", "salary": 85_000.0, "isEmployed": true, "jobSatisfaction": 7.9}, null, 2),

  // Example 46
  JSON.stringify({"name": "Emily", "age": 28, "occupation": "Teacher", "salary": 60_000.0, "isEmployed": false, "jobSatisfaction": 6.2}, null, 2)
];

// Function to get a random example
export const getRandomExample = () => {
  return examples[Math.floor(Math.random() * examples.length)];
};

// Export the examples array explicitly if you need it elsewhere
export default examples;
