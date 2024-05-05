const examples = [
  // Example 1
  JSON.stringify({"name": "John", "age": 30, "birthDate": "1992-05-15"}, null, 2),

  // Example 2
  JSON.stringify({"name": "Alice", "age": 25, "city": "New York", "birthDate": "1997-08-20", "photoUrl": "https://example.com/alice.jpg"}, null, 2),

  // Example 3
  JSON.stringify({"title": "Blog Post", "content": "Lorem ipsum dolor sit amet.", "photoUrl": "https://example.com/blog_post.jpg"}, null, 2),

  // Example 4
  JSON.stringify({"title": "Article", "author": "Jane Doe", "views": 500}, null, 2),

  // Example 5
  JSON.stringify({"product": "Laptop", "price": 999.99}, null, 2),

  // Example 6
  JSON.stringify({"product": "Smartphone", "price": 599.99, "color": "Black"}, null, 2),

  // Example 7
  JSON.stringify({"name": "John", "email": "john@example.com", "phone": "123-456-7890", "birthDate": "1985-10-10"}, null, 2),

  // Example 8
  JSON.stringify({"name": "Jane", "email": "jane@example.com", "address": "123 Main St", "photoUrl": "https://example.com/jane.jpg"}, null, 2),

  // Example 9
  JSON.stringify({"company": "ABC Inc.", "employees": 100, "photoUrl": "https://example.com/abc_logo.png"}, null, 2),

  // Example 10
  JSON.stringify({"company": "XYZ Corp.", "employees": 500, "location": "San Francisco"}, null, 2),

  // Example 11
  JSON.stringify({"book": "The Great Gatsby", "author": "F. Scott Fitzgerald", "pages": 180}, null, 2),

  // Example 12
  JSON.stringify({"book": "To Kill a Mockingbird", "author": "Harper Lee", "pages": 281}, null, 2),

  // Example 13
  JSON.stringify({"animal": "Dog", "breed": "Labrador", "age": 5}, null, 2),

  // Example 14
  JSON.stringify({"animal": "Cat", "breed": "Siamese", "age": 3, "color": "White"}, null, 2),

  // Example 15
  JSON.stringify({"car": "Toyota", "model": "Camry", "year": 2022}, null, 2),

  // Example 16
  JSON.stringify({"car": "Honda", "model": "Civic", "year": 2021, "color": "Blue"}, null, 2),

  // Example 17
  JSON.stringify({"fruit": "Apple", "color": "Red", "quantity": 10}, null, 2),

  // Example 18
  JSON.stringify({"fruit": "Banana", "color": "Yellow", "quantity": 5, "ripe": true}, null, 2),

  // Example 19
  JSON.stringify({"movie": "Inception", "director": "Christopher Nolan", "duration": "2h 28m"}, null, 2),

  // Example 20
  JSON.stringify({"movie": "The Shawshank Redemption", "director": "Frank Darabont", "duration": "2h 22m"}, null, 2),

  // Example 21
  JSON.stringify({"city": "Paris", "population": 2_140_526}, null, 2),

  // Example 22
  JSON.stringify({"city": "Tokyo", "population": 9_273_000, "country": "Japan"}, null, 2),

  // Example 23
  JSON.stringify({"language": "English", "level": "Advanced", "certification": true}, null, 2),

  // Example 24
  JSON.stringify({"language": "Spanish", "level": "Intermediate", "certification": false}, null, 2),

  // Example 25
  JSON.stringify({"sport": "Soccer", "team": "Manchester United", "players": 25}, null, 2),

  // Example 26
  JSON.stringify({"sport": "Basketball", "team": "Los Angeles Lakers", "players": 15, "championships": 17}, null, 2),

  // Example 27
  JSON.stringify({"city": "London", "attractions": ["Big Ben", "London Eye", "Buckingham Palace"]}, null, 2),

  // Example 28
  JSON.stringify({"city": "Rome", "attractions": ["Colosseum", "Vatican City", "Trevi Fountain"]}, null, 2),

  // Example 29
  JSON.stringify({"color": "Green", "hexCode": "#008000", "rgb": [0, 128, 0], "photoUrl": "https://example.com/green_color.jpg"}, null, 2),

  // Example 30
  JSON.stringify({"color": "Purple", "hexCode": "#800080", "rgba": [128, 0, 128, 0.5], "photoUrl": "https://example.com/purple_color.jpg"}, null, 2),

  // Example 31
  JSON.stringify({"device": "Smartwatch", "brand": "Apple", "price": 399.99, "features": ["Heart Rate Monitor", "Fitness Tracking", "Notifications"]}, null, 2),

  // Example 32
  JSON.stringify({"device": "Bluetooth Speaker", "brand": "Sony", "price": 99.99, "features": ["Waterproof", "Portable", "Long Battery Life"], "photoUrl": "https://example.com/bluetooth_speaker.jpg"}, null, 2),

  // Example 33
  JSON.stringify({"city": "Sydney", "attractions": ["Sydney Opera House", "Bondi Beach", "Sydney Harbour Bridge"]}, null, 2),

  // Example 34
  JSON.stringify({"city": "Dubai", "attractions": ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"]}, null, 2),

  // Example 35
  JSON.stringify({"color": "Yellow", "hexCode": "#FFFF00", "rgb": [255, 255, 0], "photoUrl": "https://example.com/yellow_color.jpg"}, null, 2),

  // Example 36
  JSON.stringify({"color": "Orange", "hexCode": "#FFA500", "rgba": [255, 165, 0, 0.5], "photoUrl": "https://example.com/orange_color.jpg"}, null, 2),

  // Example 37
  JSON.stringify({"device": "Laptop", "brand": "Dell", "price": 1299.99, "features": ["Intel Core i7 Processor", "16GB RAM", "512GB SSD"]}, null, 2),

  // Example 38
  JSON.stringify({"device": "Tablet", "brand": "Samsung", "price": 599.99, "features": ["10-inch Display", "4GB RAM", "128GB Storage"], "photoUrl": "https://example.com/tablet.jpg"}, null, 2),

  // Example 39
  JSON.stringify({"flower": "Rose", "color": "Red", "fragrance": true}, null, 2),

  // Example 40
  JSON.stringify({"flower": "Tulip", "color": "Yellow", "fragrance": false}, null, 2),

  // Example 41
  JSON.stringify({"country": "Australia", "capital": "Canberra", "population": 254_998_84}, null, 2),

  // Example 42
  JSON.stringify({"country": "Brazil", "capital": "Brasília", "population": 214_288_286}, null, 2),

  // Example 43
  JSON.stringify({"instrument": "Guitar", "type": "Acoustic", "brand": "Martin", "price": 1999.99}, null, 2),

  // Example 44
  JSON.stringify({"instrument": "Piano", "type": "Grand", "brand": "Steinway & Sons", "price": 50000}, null, 2),

  // Example 45
  JSON.stringify({"food": "Pizza", "type": "Margherita", "toppings": ["Tomato", "Mozzarella", "Basil"]}, null, 2),

  // Example 46
  JSON.stringify({"food": "Sushi", "type": "Nigiri", "toppings": ["Salmon", "Tuna", "Shrimp"]}, null, 2),

  // Example 47
  JSON.stringify({"game": "Chess", "players": 2, "pieces": 32}, null, 2),

  // Example 48
  JSON.stringify({"game": "Monopoly", "players": 4, "duration": "2 hours"}, null, 2),

  // Example 49
  JSON.stringify({"beverage": "Coffee", "type": "Espresso", "size": "Small", "price": 2.99}, null, 2),

  // Example 50
  JSON.stringify({"beverage": "Tea", "type": "Green", "size": "Medium", "price": 3.49}, null, 2),

  // Example 51
  JSON.stringify({"tree": "Oak", "height": "Tall", "leafType": "Broad"}, null, 2),

  // Example 52
  JSON.stringify({"tree": "Pine", "height": "Medium", "leafType": "Needle"}, null, 2),

  // Example 53
  JSON.stringify({"job": "Software Engineer", "company": "Google", "salary": 150000}, null, 2),

  // Example 54
  JSON.stringify({"job": "Teacher", "school": "High School", "subject": "Math", "salary": 60000}, null, 2),

  // Example 55
  JSON.stringify({"continent": "Europe", "countries": 50, "population": 741_447_158}, null, 2),

  // Example 56
  JSON.stringify({"continent": "Asia", "countries": 49, "population": 4_641_054_775}, null, 2),

  // Example 57
  JSON.stringify({"building": "Eiffel Tower", "city": "Paris", "height": "324 meters"}, null, 2),

  // Example 58
  JSON.stringify({"building": "Empire State Building", "city": "New York", "height": "381 meters"}, null, 2),

  // Example 59
  JSON.stringify({"programmingLanguage": "JavaScript", "paradigm": ["Object-oriented", "Functional"], "usage": "Web development"}, null, 2),

  // Example 60
  JSON.stringify({"programmingLanguage": "Python", "paradigm": ["Object-oriented", "Imperative", "Functional"], "usage": "Data science"}, null, 2),

  // Example 61
  JSON.stringify({"city": "Berlin", "attractions": ["Brandenburg Gate", "Berlin Wall", "Museum Island"]}, null, 2),

  // Example 62
  JSON.stringify({"city": "Barcelona", "attractions": ["Sagrada Família", "Park Güell", "Barcelona Cathedral"]}, null, 2),

  // Example 63
  JSON.stringify({"tool": "Hammer", "type": "Claw", "material": "Steel", "price": 19.99}, null, 2),

  // Example 64
  JSON.stringify({"tool": "Screwdriver", "type": "Phillips", "material": "Chrome Vanadium", "price": 9.99}, null, 2),

  // Example 65
  JSON.stringify({"weather": "Sunny", "temperature": 25, "humidity": 50}, null, 2),

  // Example 66
  JSON.stringify({"weather": "Rainy", "temperature": 15, "humidity": 80}, null, 2),

  // Example 67
  JSON.stringify({"city": "Los Angeles", "attractions": ["Hollywood Sign", "Universal Studios Hollywood", "Santa Monica Pier"]}, null, 2),

  // Example 68
  JSON.stringify({"city": "Singapore", "attractions": ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"]}, null, 2),

  // Example 69
  JSON.stringify({"dish": "Pasta", "type": "Spaghetti", "sauce": "Marinara", "toppings": ["Parmesan Cheese", "Basil"]}, null, 2),

  // Example 70
  JSON.stringify({"dish": "Sushi", "type": "Sashimi", "fish": "Salmon", "sides": ["Soy Sauce", "Wasabi", "Pickled Ginger"]}, null, 2),

  // Example 71
  JSON.stringify({"activity": "Hiking", "location": "Mountain Trails", "duration": "3 hours", "difficulty": "Moderate"}, null, 2),

  // Example 72
  JSON.stringify({"activity": "Swimming", "location": "Beach", "duration": "1 hour", "temperature": 28}, null, 2),

  // Example 73
  JSON.stringify({"device": "Smart TV", "brand": "LG", "price": 999.99, "features": ["4K Resolution", "Smart Hub", "Voice Control"]}, null, 2),

  // Example 74
  JSON.stringify({"device": "Smart Refrigerator", "brand": "Samsung", "price": 2999.99, "features": ["Touchscreen", "Camera Inside", "Food Management"]}, null, 2),

  // Example 75
  JSON.stringify({"dessert": "Cake", "type": "Chocolate", "size": "Large", "price": 29.99}, null, 2),

  // Example 76
  JSON.stringify({"dessert": "Ice Cream", "flavor": "Vanilla", "toppings": ["Chocolate Chips", "Whipped Cream"], "price": 4.99}, null, 2),

  // Example 77
  JSON.stringify({"sport": "Tennis", "tournament": "Wimbledon", "surface": "Grass", "prizeMoney": 2_500_000}, null, 2),

  // Example 78
  JSON.stringify({"sport": "Golf", "tournament": "The Masters", "course": "Augusta National Golf Club", "prizeMoney": 2_070_000}, null, 2),

  // Example 79
  JSON.stringify({"instrument": "Violin", "type": "Acoustic", "brand": "Stradivarius", "price": 5000000}, null, 2),

  // Example 80
  JSON.stringify({"instrument": "Drums", "type": "Percussion", "brand": "DW", "price": 1500}, null, 2),

  // Example 81
  JSON.stringify({"building": "Petronas Towers", "city": "Kuala Lumpur", "height": "452 meters"}, null, 2),

  // Example 82
  JSON.stringify({"building": "Taipei 101", "city": "Taipei", "height": "508 meters"}, null, 2),

  // Example 83
  JSON.stringify({"vehicle": "Motorcycle", "brand": "Harley-Davidson", "model": "Sportster Iron 883", "price": 9499.99}, null, 2),

  // Example 84
  JSON.stringify({"vehicle": "SUV", "brand": "Ford", "model": "Explorer", "price": 35999.99}, null, 2),

  // Example 85
  JSON.stringify({"drink": "Coca-Cola", "type": "Classic", "size": "Medium", "price": 1.99}, null, 2),

  // Example 86
  JSON.stringify({"drink": "Sprite", "type": "Lemon Lime", "size": "Large", "price": 2.49}, null, 2),

  // Example 87
  JSON.stringify({"boardGame": "Scrabble", "players": 4, "tiles": 100}, null, 2),

  // Example 88
  JSON.stringify({"boardGame": "Risk", "players": 6, "territories": 42}, null, 2),

  // Example 89
  JSON.stringify({"activity": "Cycling", "location": "Mountain Trails", "duration": "2 hours", "difficulty": "Advanced"}, null, 2),

  // Example 90
  JSON.stringify({"activity": "Yoga", "location": "Studio", "duration": "1 hour", "difficulty": "Beginner"}, null, 2),

  // Example 91
  JSON.stringify({"country": "China", "capital": "Beijing", "population": 1_439_323_776}, null, 2),

  // Example 92
  JSON.stringify({"country": "India", "capital": "New Delhi", "population": 1_393_409_038}, null, 2),

  // Example 93
  JSON.stringify({"game": "Fortnite", "players": 100, "genre": "Battle Royale", "platforms": ["PC", "PlayStation", "Xbox", "Mobile"]}, null, 2),

  // Example 94
  JSON.stringify({"game": "Minecraft", "players": 91, "genre": "Sandbox", "platforms": ["PC", "PlayStation", "Xbox", "Nintendo Switch"]}, null, 2),

  // Example 95
  JSON.stringify({"activity": "Rock Climbing", "location": "Indoor Climbing Gym", "duration": "2 hours", "difficulty": "Intermediate"}, null, 2),

  // Example 96
  JSON.stringify({"activity": "Kayaking", "location": "River", "duration": "3 hours", "equipment": "Kayak, Paddle, Life Jacket"}, null, 2),

  // Example 97
  JSON.stringify({"city": "Seoul", "attractions": ["Gyeongbokgung Palace", "N Seoul Tower", "Myeong-dong"]}, null, 2),

  // Example 98
  JSON.stringify({"city": "Toronto", "attractions": ["CN Tower", "Royal Ontario Museum", "Ripley's Aquarium of Canada"]}, null, 2),

  // Example 99
  JSON.stringify({"beverage": "Beer", "type": "Pale Ale", "size": "Pint", "price": 5.99}, null, 2),

  // Example 100
  JSON.stringify({"beverage": "Wine", "type": "Merlot", "size": "Bottle", "price": 19.99}, null, 2),

  // Example 101
  JSON.stringify({"flower": "Sunflower", "color": "Yellow", "fragrance": false}, null, 2),

  // Example 102
  JSON.stringify({"flower": "Lily", "color": "White", "fragrance": true}, null, 2),

  // Example 103
  JSON.stringify({"movie": "Avatar", "director": "James Cameron", "duration": "2h 42m"}, null, 2),

  // Example 104
  JSON.stringify({"movie": "The Godfather", "director": "Francis Ford Coppola", "duration": "2h 55m"}, null, 2),

  // Example 105
  JSON.stringify({"vehicle": "Electric Car", "brand": "Tesla", "model": "Model S", "price": 89999.99}, null, 2),

  // Example 106
  JSON.stringify({"vehicle": "Truck", "brand": "Chevrolet", "model": "Silverado", "price": 45999.99}, null, 2),

  // Example 107
  JSON.stringify({"city": "Mumbai", "attractions": ["Gateway of India", "Marine Drive", "Siddhivinayak Temple"]}, null, 2),

  // Example 108
  JSON.stringify({"city": "Moscow", "attractions": ["Red Square", "Kremlin", "Saint Basil's Cathedral"]}, null, 2),

  // Example 109
  JSON.stringify({"dessert": "Cheesecake", "type": "New York Style", "size": "Slice", "price": 6.99}, null, 2),

  // Example 110
  JSON.stringify({"dessert": "Brownie", "type": "Fudge", "size": "Square", "price": 3.99}, null, 2),

  // Example 111
  JSON.stringify({"country": "United Kingdom", "capital": "London", "population": 68_207_116}, null, 2),

  // Example 112
  JSON.stringify({"country": "Canada", "capital": "Ottawa", "population": 38_005_238}, null, 2),

  // Example 113
  JSON.stringify({"drink": "Juice", "type": "Orange", "size": "Large", "price": 3.99}, null, 2),

  // Example 114
  JSON.stringify({"drink": "Smoothie", "flavor": "Strawberry Banana", "size": "Medium", "price": 4.49}, null, 2),

  // Example 115
  JSON.stringify({"game": "League of Legends", "players": 10, "genre": "MOBA", "platforms": ["PC"]}, null, 2),

  // Example 116
  JSON.stringify({"game": "Call of Duty", "players": 100, "genre": "Battle Royale", "platforms": ["PC", "PlayStation", "Xbox"]}, null, 2),

  // Example 117
  JSON.stringify({"activity": "Skiing", "location": "Mountain Resort", "duration": "4 hours", "difficulty": "Advanced"}, null, 2),

  // Example 118
  JSON.stringify({"activity": "Snowboarding", "location": "Ski Slope", "duration": "3 hours", "difficulty": "Intermediate"}, null, 2),

  // Example 119
  JSON.stringify({"sport": "Baseball", "team": "New York Yankees", "players": 26}, null, 2),

  // Example 120
  JSON.stringify({"sport": "American Football", "team": "Kansas City Chiefs", "players": 53, "championships": 2}, null, 2),

  // Example 121
  JSON.stringify({"city": "Chicago", "attractions": ["Willis Tower", "Navy Pier", "Millennium Park"]}, null, 2),

  // Example 122
  JSON.stringify({"city": "Dublin", "attractions": ["Guinness Storehouse", "Dublin Castle", "Trinity College Dublin"]}, null, 2),

  // Example 123
  JSON.stringify({"language": "French", "level": "Beginner", "certification": false}, null, 2),

  // Example 124
  JSON.stringify({"language": "German", "level": "Intermediate", "certification": true}, null, 2),

  // Example 125
  JSON.stringify({"job": "Doctor", "hospital": "General Hospital", "specialization": "Cardiology", "salary": 200000}, null, 2),

  // Example 126
  JSON.stringify({"job": "Lawyer", "firm": "Smith & Associates", "specialization": "Corporate Law", "salary": 120000}, null, 2),

  // Example 127
  JSON.stringify({"building": "Burj Al Arab", "city": "Dubai", "height": "321 meters"}, null, 2),

  // Example 128
  JSON.stringify({"building": "Shanghai Tower", "city": "Shanghai", "height": "632 meters"}, null, 2),

];



// Function to get a random example
export const getRandomExample = () => {
  return examples[Math.floor(Math.random() * examples.length)];
};

// Export the examples array explicitly if you need it elsewhere
export default examples;
