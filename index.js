
// 1. Ways to print in Javascript
// console.log("Hello World");
//alert("me");
// document.write("This is document write")
// console.warn("This is warning")
// console.error("This is an error")

// 2. Javascript console API
// console.log("Hello World", 4 + 6, "Another log");
//alert("me");
// document.write("This is document write")
// console.warn("This is warning")
// console.error("This is an error")

// 3. Javascript variables
// Waht are variables? - containers to store data values
// var number1 = 56;
// var number2 = 53;
// console.log(number1 + number2);

// 4. Data types in JavaScript
// numbers
// var num1 = 305;
// var num2 = 233;

//string
// var str1 = "This is a string";
// var str2 = 'This is also a string';

// Objescts
// var marks = {
//     ravi: 63,
//     saurabh: 77,
//     ajit: 99.977
// }

// console.log(marks);

//Booleans
// var a = true;
// var b = false;
// console.log(a, b);

// var und = undefined;
// var und;
// console.log(und);

// var n = null;
// console.log(n);


// At a very high level there are two types of data types
// in JavaScript
// 1. Primitive data types: undefined, null, number, string, boolean, symbol
// 2. Reference data types: arrays and objects

// var arr = [1, 2, 3, 4, 5]
// console.log(arr);


// Operators in JavaScript
// var a = 57;
// var b = 33;
// console.log("The value of a + b is ", a + b);
// console.log("The value of a - b is ", a - b);
// console.log("The value of a * b is ", a * b);
// console.log("The value of a / b is ", a / b);


// Assignment operators
// var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c);


// Comparison Operators
// var x = 34;
// var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);


// // Logical Operators

//Logical And
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// //Logical Or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical Not
// console.log(!false);
// console.log(!true);

//functions in JavaScript
// function avg(a, b) {
//     c = (a + b) / 2;
//     return c;
// }

// DRY Principal (Do not repeat yourself)
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JavaScript

// var age = 27;
// Single if statement
// if (age > 18) {
//     console.log('You can rasna drink Water');
// }

// if-else statement
// if (age > 18) {
//     console.log('You can drink rasna Water');
// }
// else {
//     console.log('You cannot rasna drink Water');
// }

// if-else ladder
// if (age > 32) {
//     console.log("You are not a kid");
// }
// else if (age > 26) {
//     console.log("Bacche nahi rahe");
// }
// else if (age > 22) {
//     console.log("Yes Bacche nahi rahe");
// }
// else if (age > 18) {
//     console.log("18 Bacche nahi rahe");
// }
// else {
//     console.log("Bachhe Rahe");
// }
// console.log("End of ladder");

// function rasna(ag) {
//     if (ag > 18) {
//         console.log("You can drink rasna water");
//     }
//     else if (ag > 22) {
//         console.log("Yes you can drink rasna water");
//     }
//     else if (ag > 30) {
//         console.log("Definately you can drink rasna water");
//     }
//     else {
//         console.log("You cannot drink rasna water");
//     }
// }

// drink_age = rasna(16);
// console.log(drink_age);



// LOOPS IN JAVASCRIPT

// var arr = [1, 2, 3, 4, 5, 6, 7];
// // console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function (element) {
//     console.log(element);
// })

// let j = 0;
// const ac = 0;
// ac++;
// ac = ac + 1;
//use let when u have to use a variable in a block only
//use const when you want to ahve a fixed value throughout the entire program

// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);


// let myArr = ["Cooler", "Phone", 43, null, true];
// ARRAY METHODS
// console.log(myArr.length);
// myArr.pop(); //to remove last element from the array
// myArr.push("ajit"); //to add one element to the end of array
// myArr.shift(); //to remove first element from the array
// myArr.unshift("ajit"); //to add one element to the beginning of array
// const newLen = myArr.unshift("Ajit")
// console.log(newLen)
// console.log(myArr);

//refer to mdn array methods documentation online.

// String Methods in JavaScript
// let myLovelyString = "she is a good boy among all the boy";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("ajit"));
// console.log(myLovelyString.lastIndexOf("boy"));

// console.log(myLovelyString.slice(0, 3));
// d = myLovelyString.replace("boy", "girl");
// d = d.replace("boy", "girl");
// console.log(d, myLovelyString);

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manupulation
// document object model

// let elem = document.getElementById("click");
// // console.log(elem);

// let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "red";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
// tn = document.getElementsByTagName('div')
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is created para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is created bold";
// tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ----> removes an element


// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);


// function clicked() {
//     console.log('The button was clicked');
// }

// window.onload = function () {
//     console.log('The document was loaded');
// }
// Events in javascript


// firstContainer.addEventListener('click', function () {
//     // document.querySelectorAll('.container')[1].innerHTML = "<b>  We have clicked on conatiner</b>"
//     console.log("Clicked on container");
// })

// firstContainer.addEventListener('mouseover', function () {
//     console.log("Mouse on container");
// })

// firstContainer.addEventListener('mouseout', function () {
//     console.log("Mouse out of container");
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function () {
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on container");
// })

// firstContainer.addEventListener('mousedown', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>  We have clicked</b>"
//     console.log("Mouse down when clicked on container");
// })

// Arrow functions
// function summ(a, b) {
//     return a + b;
// }

summ = (a, b) => {
    return a + b;
}

// logKaro = () => {
//     // console.log('I am your log');
//     document.querySelectorAll('.container')[1].innerHTML = "<b>  Set TimeOut fired </b>"
// }
// SetTimeout and setInterval
// setTimeout(logKaro, 2000);

logKaro = () => {
    console.log('I am your log');
    document.querySelectorAll('.container')[1].innerHTML = "<b>  Set TimeInterval  fired </b>"
}
clr = setTimeout(logKaro, 5000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
// clr = setInterval(logKaro, 2000);

// Javascript localStorage
// localStorage.setItem('name', 'ajit');
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();


// JSON: JavaScript Object Notation used in exchange of data
// obj = { name: "ajit", length: 1, a: { this: 'tha"t' } }
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// json = JSON.parse('{ "name": "ajit", "length": 1, "a": { "this": "that" }}');
// console.log(json);

