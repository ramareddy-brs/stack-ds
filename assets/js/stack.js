/** 
 Author : Build Rise Shine 

Created : 2023

Script : Stack 

Description : Implementation of Stack Data Structure

  The Stack class represents a custom implementation of a stack data structure in JavaScript. 
  It provides methods to perform basic stack operations, such as adding elements to the top of the 
  stack (push) and removing elements from the top of the stack (pop). 

  The stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, meaning 
  the last element added to the stack will be the first one to be removed. The example demonstrates 
  how to create an instance of the Stack class and perform push and pop operations on it.

(c) Copyright by BRS Studio. 
**/

/** Stack Implementation using Array */

let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack after push operations:", stack);

// Pop operation (remove the element from the top of the stack)
let poppedElement = stack.pop();
console.log("Popped element:", poppedElement);
console.log("Stack after pop operation:", stack);

// Peek operation (get the element at the top of the stack without removing it)
let topElement = stack[stack.length - 1];
console.log("Element at the top of the stack:", topElement);

// Check if the stack is empty
let isEmpty = stack.length === 0;
console.log("Is the stack empty?", isEmpty);