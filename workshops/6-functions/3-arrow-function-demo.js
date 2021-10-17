/*
 * Copyright (C) Mathstronauts. All rights reserved.
 * This information is confidential and proprietary to Mathstronauts and may not be used, modified, copied or distributed.
 */

// 12. Intro to Web Dev - Functions (Arrow Functions Demo).

// Delay the JavaScript code for one second.
setTimeout(() => {
    // A regular function that greets the user.
    function greeting() {
        return "Hello, world.";
    }

    // An arrow function that greets the user (no parameters). "Return" is implied with one action.

    // Display the same result to the user.

    // A regular function that returns the entered number squared.
    function squareNumber(x) {
        return x ** 2;
    }

    // An arrow function that completes the same squaring task (one parameter).

    // Display the same output to the user.

    // A regular function that accomplishes more than one task.
    function compareNumbers(a, b) {
        if (a > b) {
            return a + " is greater than " + b + ".";
        } else if (a < b) {
            return b + " is greater than " + a + ".";
        } else {
            return a + " is equal to " + b;
        }
    }

    // An arrow function that accomplishes more than one task (two parameters). There is no major advantage of using arrow functions here, other than using a different syntax.

    // Display the (same) output to the user.
    
}, 1000);