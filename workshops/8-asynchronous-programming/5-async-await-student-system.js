/*
 * Copyright (C) Mathstronauts. All rights reserved.
 * This information is confidential and proprietary to Mathstronauts and may not be used, modified, copied or distributed.
 */

// 19. Intro to Web Dev - Asynchronous Programming (Async/Await Student System).

// Access the student (which takes two seconds).
function obtainStudent(studentName, studentSurname) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Obtained the student.");
            resolve({ firstName: studentName, surname: studentSurname });
        }, 2000);
    })
}

// Access the student's courses (which takes three seconds).
function obtainStudentCourses(studentNames) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Obtained the student's courses.");

            // If the student's name matches "John Doe."
            if (studentNames.firstName === "John" && studentNames.surname === "Doe") {
                resolve(["Mathematics", "Physics", "Chemistry", "Biology"]);
            } else {
                reject(new Error);
            }
        }, 3000);
    })
}

// Access the student's course marks (which takes three seconds).
function obtainStudentCourseMarks(studentCourses) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Obtained the student's course marks.");

            // If the student's courses are Mathematics, Physics, Chemistry, and Biology.
            if (studentCourses.includes("Mathematics") && studentCourses.includes("Physics") && studentCourses.includes("Chemistry") && studentCourses.includes("Biology")) {
                resolve({ 
                    mathematics: 80,
                    physics: 85,
                    chemistry: 89,
                    biology: 87
                })
            } else {
                reject(new Error);
            }
        }, 3000);
    })
}

// Define a function with "async", which informs JavaScript that the "await" keyword can be utilized inside the said function.

// Call the runStudent() function.
