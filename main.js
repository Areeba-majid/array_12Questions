"use strict";
//AREEBA
//20-MAY-2024
Object.defineProperty(exports, "__esModule", { value: true });
//Assignmenmt Of Array
/*Question 1

Create an array named fruits that contains the following string
elements: "apple", "banana", "mango", "orange".*/
console.log("\n Question 01 \n");
let fruits_name = ["apple", "banana", "mango", "orange"];
console.log(fruits_name);
/*Question 2

Declare an array named numbers that can contain only number
elements and initialize it with the values 10, 20, 30, and 40.*/
console.log("\n Question 02 \n");
let number1 = [10, 20, 30, 40];
console.log(number1);
/*Question 3

Access the third element of the fruits array and assign it to a
variable named thirdFruit.*/
console.log("\n Question 03 \n");
let fruit_name = ["apple", "banana", "mango", "orange"];
let thirdFruit = fruit_name[2];
console.log(fruit_name);
/* Question 4
Change the second element of the numbers array to 25. */
console.log("\n Question 04 \n");
let numbers = [10, 20, 30, 40];
numbers[1] = 25;
console.log(numbers);
/*Question 5

Add the element "grapes" to the end of the fruits array using the
method.*/
console.log("\n Question 05 \n");
let fruits = ["apple", "banana", "mango", "orange"];
fruits.push("graps");
console.log(fruits);
/*Question 6

Remove the last element from the fruits array using the
method and assign it to a variable named lastFruit.*/
console.log("\n Question 06 \n");
let fruit = ["apple", "banana", "mango", "orange"];
fruit.pop();
console.log(fruit);
/*==========Question 7===========

Remove the first element from the fruits array using the
method and assign it to a variable named firstFruit.*/
console.log("\n Question07 \n");
let fruitt = ["apple", "banana", "mango", "orange"];
fruitt.shift();
console.log(fruitt);
/*=======Question 8=============

Add the element "kiwi" to the beginning of the fruits array
using the method.*/
console.log("\n Question 08 \n");
let add_fruit = ["CusterdFruit", "dragonFruit", "pineApple", "mango", "papaya"];
add_fruit.unshift("kiwi");
console.log(add_fruit);
/*=========Question 9===========

Remove 2 elements from the fruits array starting from index 1
using the method.*/
console.log("\n Question09 \n");
let fruiit = ["CusterdFruit", "dragonFruit", "pineApple", "mango", "papaya", "kiwi"];
fruiit.splice(1, 2);
console.log(fruiit);
/*==========Question 10==========

Insert the elements "pineapple" and "pear" at index 2 of the
fruits array using the method.*/
console.log("\n Question 10 \n");
let frits1 = ["apple", "banana", "mango", "orange"];
frits1.push("pineapple", "pear");
console.log(frits1);
/*==========Question 11===========

Create a new array named citrusFruits that contains the first
two elements of the fruits array using the method.*/
console.log("\n Question 11 \n");
let citrusFruits = ["orange", "lemon", "apple", "mango", "kiwi"];
let citrusFruit = citrusFruits.splice(0, 2);
console.log(citrusFruits);
/*==========Question 12===========

Create a new array named lastTwoFruits that contains the last
two elements of the fruits array using the method.*/
console.log("\n Queston 12 \n");
let lastTwoFruits = ["orange", "lemon", "apple", "mango", "kiwi"];
let TwoFruits = lastTwoFruits.splice(0, 3);
console.log(lastTwoFruits);
