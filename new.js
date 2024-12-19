// Function to get the message based on the day of the week
// function getDayMessage(day) {
//     switch (day) {
//         case 'Monday':
//             console.log("Start of the work week!");
//             break;
//         case 'Tuesday':
//             console.log("It's Tuesday, keep going!");
//             break;
//         case 'Wednesday':
//             console.log("Midweek already!");
//             break;
//         case 'Thursday':
//             console.log("Almost the weekend!");
//             break;
//         case 'Friday':
//             console.log("It's Friday! Time to relax!");
//             break;
//         case 'Saturday':
//             console.log("Enjoy your weekend!");
//             break;
//         case 'Sunday':
//             console.log("Prepare for the week ahead!");
//             break;
//         default:
//             console.log("That's not a valid day!");
//             break;
//     }
// }

// // Example usage
// const today = 'Wednesday'; // Change this value to test different days
// getDayMessage(today);
// Function to print numbers from 1 to the user-defined limit
// function printNumbers() {
//     // Get the user input
//    // const limit = parseInt(document.getElementById("numberInput").value);
//     let result = "";
//    let limit=5;
//     // Check if the input is a valid number
//     if (isNaN(limit) || limit <= 0) {
//         result = "Please enter a valid positive number.";
//     } else {
//         // Use a for loop to print numbers from 1 to the limit
//         for (let i = 1; i <= limit; i++) {
//             console.log(i) ; // Append each number to the result string
//         }
//     }

//     // Display the result
//     // C result;let 
// }
// printNumbers()
// Function to print a message on the webpage
function printMessage(message) {
    // Get the result div
    const resultDiv = document.getElementById("result");
    // Set the inner HTML to the message
    resultDiv.innerHTML = message;
}

// Add an event listener to the link
document.getElementById("helloLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    printMessage("Hello, World!"); // Call the function with the message
});