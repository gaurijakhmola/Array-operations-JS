 Array Operations in JavaScript

This repository contains a simple JavaScript script that performs various operations on an array of numbers. The operations include adding a number, removing a number, sorting the array, calculating the sum, and finding the average of the numbers in the array.

 Features

1. Add a Number: 
   - Adds a specified number to the array.
   - Example: `addNumber(numbers, 4);`

2. Remove a Number: 
   - Removes a specified number from the array if it exists.
   - Example: `removeNumber(numbers, 3);`

3. Sort the Array: 
   - Sorts the array in ascending order.
   - Example: `sortArray(numbers);`

4. Calculate Sum: 
   - Calculates the sum of all numbers in the array.
   - Example: `calculateSum(numbers);`

5. Calculate Average:
   - Calculates the average of all numbers in the array.
   - Example: `calculateAverage(numbers);`

Example:

Here's an example of how the script works:

```javascript
// Initial array
let numbers = [5, 3, 8, 1, 2];
console.log("Initial array:", numbers);

// Add a number
addNumber(numbers, 4);

// Remove a number
removeNumber(numbers, 3);

// Sort the array
sortArray(numbers);

// Calculate the sum
calculateSum(numbers);

// Calculate the average
calculateAverage(numbers);
