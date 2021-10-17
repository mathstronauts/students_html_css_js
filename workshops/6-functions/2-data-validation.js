/*
 * Copyright (C) Mathstronauts. All rights reserved.
 * This information is confidential and proprietary to Mathstronauts and may not be used, modified, copied or distributed.
 */

// 11. Intro to Web Dev - Functions (Data Validation Program).

// Delay the JavaScript code by one second.
setTimeout(() => {
    // Welcome the user.
    alert("Welcome to a data validation program.");

    // Receive the first name, surname, and password from the user.

    // Call the validateData function to determine if it is true.

    // Thank the user.
    
}, 1000);

// Define an array that stores objects that will store all data for this program.
const userData = [
    {
        firstName: "John",
        surname: "Doe",
        birthDate: "03/14/2006",
        email: "john.doe@outlook.com",
        phoneNumber: "(123)-456-7891",
        password: "IGNITE_websites"
    },
    {
        firstName: "Jane",
        surname: "Doe",
        birthDate: "03/14/2006",
        email: "jane.doe@gmail.com",
        phoneNumber: "(987)-654-3219",
        password: "IGNITE_JavaScript"
    }
];

// Define an function that can validate the data of the user's selection.