// Array Operations

// Initial array
let numbers = [5, 3, 8, 1, 2];
console.log("Initial array:", numbers);

// Function to add a number to the array
function addNumber(arr, num) {
    arr.push(num);
    console.log(`After adding ${num}:`, arr); // Fixed template literals
}

// Function to remove a number from the array
function removeNumber(arr, num) {
    const index = arr.indexOf(num);
    if (index > -1) {
        arr.splice(index, 1);
        console.log(`After removing ${num}:`, arr); // Fixed template literals
    } else {
        console.log(`Number ${num} not found in the array.`); // Fixed template literals
    }
}

// Function to sort the array
function sortArray(arr) {
    arr.sort((a, b) => a - b);
    console.log("Sorted array:", arr);
}

// Function to calculate the sum of the numbers in the array
function calculateSum(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    console.log("Sum of numbers:", sum);
    return sum;
}

// Function to calculate the average of the numbers in the array
function calculateAverage(arr) {
    const sum = calculateSum(arr);
    const average = sum / arr.length;
    console.log("Average of numbers:", average);
}

// Perform operations
addNumber(numbers, 4);
removeNumber(numbers, 3);
sortArray(numbers);
calculateSum(numbers);
calculateAverage(numbers);
