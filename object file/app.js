// 1. Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;

// Define the array of objects
// var itemsArray = [
//     { name: "juice", price: "50", quantity: "3" },
//     { name: "cookie", price: "30", quantity: "9" },
//     { name: "shirt", price: "880", quantity: "1" },
//     { name: "pen", price: "100", quantity: "2" }
// ];

// // Function to calculate total price for each item and all items
// function calculateTotalPrices(items) {
//     var totalPriceAllItems = 0;

//     // Loop through each item in the array
//     items.forEach(function(item) {
//         // Calculate total price for each item
//         var totalPricePerItem = parseFloat(item.price) * parseInt(item.quantity);
//         console.log(`Total price for ${item.name}: ${totalPricePerItem}`);

//         // Add to the total price of all items
//         totalPriceAllItems += totalPricePerItem;
//     });

//     // Output the total price of all items
//     console.log(`Total price of all items: ${totalPriceAllItems}`);
// }

// // Call the function with the itemsArray
// calculateTotalPrices(itemsArray);


// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.


// Create an object with properties
// var person = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     password: "password123",
//     age: 30,
//     gender: "male",
//     city: "New York",
//     country: "USA"
// };

// // Function to check if properties exist in the object
// function checkProperties(obj) {
//     // Check if age and country properties exist
//     var ageExists = obj.hasOwnProperty('age');
//     var countryExists = obj.hasOwnProperty('country');

//     // Check if firstName and lastName properties exist
//     var firstNameExists = obj.hasOwnProperty('firstName');
//     var lastNameExists = obj.hasOwnProperty('lastName');

//     // Output the results
//     console.log(`Age property exists: ${ageExists}`);
//     console.log(`Country property exists: ${countryExists}`);
//     console.log(`firstName property exists: ${firstNameExists}`);
//     console.log(`lastName property exists: ${lastNameExists}`);
// }

// // Call the function with the person object
// checkProperties(person);


// 3. Create a constructor function with some properties. Now
// create multiple records using the constructor

// Define a constructor function
// function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// // Create multiple records using the constructor function
// var person1 = new Person("Alice", 25, "London");
// var person2 = new Person("Bob", 30, "New York");
// var person3 = new Person("Charlie", 22, "Paris");

// // Output the created records
// console.log(person1);
// console.log(person2);
// console.log(person3);

// 4. Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:
//  use select box for education and profession,
//  use radio box for gender
// Bonus : use can use localStorage to save records.


// Constructor function for Person
// function Person(name, gender, address, education, profession) {
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession;
// }

// // Function to add a new record
// function addRecord(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get form values
//     var name = document.getElementById('name').value;
//     var gender = document.querySelector('input[name="gender"]:checked').value;
//     var address = document.getElementById('address').value;
//     var education = document.getElementById('education').value;
//     var profession = document.getElementById('profession').value;

//     // Create new Person instance
//     var person = new Person(name, gender, address, education, profession);

//     // Save record to localStorage
//     saveRecord(person);

//     // Clear form fields
//     document.getElementById('name').value = '';
//     document.getElementById('address').value = '';

//     // Display record in the list
//     displayRecord(person);
// }

// // Function to save record to localStorage
// function saveRecord(person) {
//     var records = JSON.parse(localStorage.getItem('populationRecords')) || [];
//     records.push(person);
//     localStorage.setItem('populationRecords', JSON.stringify(records));
// }

// // Function to display record in the list
// function displayRecord(person) {
//     var recordsList = document.getElementById('recordsList');
//     var listItem = document.createElement('li');
//     listItem.textContent = `${person.name} (${person.gender}), ${person.education}, ${person.profession}`;
//     recordsList.appendChild(listItem);
// }

// // Event listener for form submission
// var form = document.getElementById('recordForm');
// form.addEventListener('submit', addRecord);

// // Display existing records from localStorage on page load
// document.addEventListener('DOMContentLoaded', function() {
//     var records = JSON.parse(localStorage.getItem('populationRecords')) || [];
//     records.forEach(function(person) {
//         displayRecord(person);
//     });
// });

