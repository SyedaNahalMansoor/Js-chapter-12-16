                                       ///Chapter : 12 -13///

// Q : Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
// Ans : var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// if (num1 > num2) {
//     alert("The largest number is : " + num1);
// } else if (num2 > num1) {
//     alert("The largest number is : " +num2);
// } else {
//     alert("Both are equal")
// };

// Q : Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// Ans : var number = +prompt("Enter a number:");
// if (number > 0) {
//     alert("The number is positive.");
// } else if (number < 0) {
//     alert("The number is negative.");
// } else {
//     alert("The number is zero.");
// };

// Q : Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
// Ans : var char = prompt("Enter a single character:");
// char = char.toLowerCase();
// if (char.length === 1 && (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")) {
//     alert(true);
// } else {
//     alert(false);
// };

// Q : Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
// Ans : var correctPassword = "Nahal123"; 
// var userPassword = prompt("Enter your password:");
// if (!userPassword) {
//     alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     alert("Correct!");
// } else {
//     alert("Incorrect password.");
// };

                                                ///Chapter : 14-16///

// Q : Declare an empty array using JS literal notation to store student names in future.
// Ans : studentNames = [] ;

// Q : Declare an empty array using JS object notation to store student names in future.
// Ans : var studentNames = new Array();

// Q : Declare and initialize a strings array.
// Ans : var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Q : Declare and initialize a numbers array.
// Ans : var numbers = [10, 20, 30, 40, 50];

// Q : Declare and initialize a boolean array.
// Ans : var flags = [true, false, true, false, true];

// Q : Declare and initialize a mixed array.
// Ans : var mixedArray = ["Nahal", 17, true, null, "Student"];

// Q : Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
// Ans : document.write("<h1>Qualification in Pakistan </h1> <br>")
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// for (var i = 0; i < qualifications.length; i++) {
//     document.write((i + 1) + " ) " + qualifications[i] + "<br>");
// };

// Q : Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students.
// Ans : var studentNames = ["Michel" , "John" , "Tony"];
// var scores = [320 , 230 , 400];
// var totalMarks = 500 ;
// for (i = 0 ; i < studentNames.length; i++) {
//     var percentage = (scores[i] / totalMarks) * 100;
//     document.write("Score of " + studentNames[i] + " is " + scores[i] + " Percentage is : " + percentage + "%<br> ")
// };

// Q : Initialize an array with color names. Display the arrayelements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array.Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.
 
// Ans :  var colors = [" Red ", " Green ", " Blue "];
// document.write("<b>Original Array:</b> " + colors + "<br><br>");
// var firstAdd = prompt("Enter the color you want to add in the beggining");
// colors.unshift(firstAdd);
// document.write("<b>Colors after addition at first:</b> " + colors + "<br><br>");
// var lastAdd = prompt("Enter the color you want to add in the end");
// colors.push(lastAdd);
// document.write("<b>Colors after adding at last:</b> " + colors + "<br><br>");
// colors.unshift(" Pink " , " Yellow ");
// document.write("<b>Two colors add at start</b>" + colors + "<br><br>");
// colors.shift();
// document.write("<b>Colors after remove first one:</b> " + colors + "<br><br>");
// colors.pop();
// document.write("<b>After removing last color</b> " + colors + "<br><br>");
// var addIndex = +prompt("Enter the index where you want to add color");
// var addColor = prompt("Enter the color you want to add");
// colors.splice(addIndex , 0 , addColor);
// document.write("<b>After adding color at index " + addIndex + ":</b>" + colors + "<br><br>");
// var removeIndex = +prompt("Enter the index from you want to remove the color");
// var removingElement = +prompt("Enter the number how many colors you want to remove");
// colors.splice(removeIndex , removingElement);
// document.write("<b>After removing " + removingElement + " colors from index " + removeIndex + ":</b>" + colors + "<br><br>");

// Q : Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
// Ans : var cities = [" Karachi " , " Lahore " , " Islamabad " , "Quetta" , " Peshawar "];
// document.write("<b>All cities:</b>" + cities + "<br>");
// var selectedCities = cities.slice(1 , 4);
// document.write(" <b>Selected Cities</b> " + selectedCities);

// Q : Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
// Ans : var arr = [" This " , " is " , " my " , " cat "];
// var joinString = arr.join("");
// document.write("Array: " + arr + "<br>");
// document.write("String: " + joinString);

// Q : Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out).
// Ans : var devices = [" keyboard ", " mouse ", " printer ", " monitor "];
// document.write(devices + "<br><br>");
// for (var i = 0; i < devices.length; i++) {
//     document.write("Out:<br>" + devices[i] + "<br>");
// };

// Q : Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In - First Out);
// Ans : var devices = [" keyboard ", " mouse ", " printer ", " monitor "];
// document.write(devices + "<br><br>");
// document.write("Out:<br>" + devices.pop() + "<br>");
// document.write("Out:<br>" + devices.pop() + "<br>");
// document.write("Out:<br>" + devices.pop() + "<br>");
// document.write("Out:<br>" + devices.pop() + "<br>");

// Q : Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in your browser using document.write() method:
// Ans : var manufactures = [" Apple " , " Samsung " , " Motorola " , " Sony " , "Haier"];
// document.write("<select>");
// for (i = 0; i < manufactures.length ; i++) {
//     document.write("<option>" + manufactures[i] + "</option>");
// };
// document.write("</select>");

