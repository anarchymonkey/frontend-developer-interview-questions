# 🚀 Front End Interview Questions - JavaScript Basics

Welcome to my GitHub repository, where I have compiled a list of front end interview questions related to JavaScript basics that will help you prepare for your next interview. As we all know, JavaScript is one of the most essential programming languages for front end developers. Therefore, it is crucial to have a good understanding of the basics before going for an interview.

This repository contains a list of theoretical questions related to JavaScript basics that are commonly asked in front end interviews. These questions cover topics such as data types, variables, operators, functions, loops, and more. By going through these questions and understanding the concepts behind them, you will be able to enhance your knowledge and confidence in the subject.

Feel free to use this repository as a resource to prepare for your next front end interview. Good luck!

## Contents

- [🚀 Front End Interview Questions - JavaScript Basics](#-front-end-interview-questions---javascript-basics)
  - [Contents](#contents)
- [Basics](#basics)
    - [What is JavaScript?](#what-is-javascript)
    - [What are the data types in JavaScript?](#what-are-the-data-types-in-javascript)
    - [What is the difference between undefined and null?](#what-is-the-difference-between-undefined-and-null)
    - [What is the difference between == and ===?](#what-is-the-difference-between--and-)
    - [What is the difference between var, let, and const?](#what-is-the-difference-between-var-let-and-const)
    - [What is hoisting in JavaScript?](#what-is-hoisting-in-javascript)
    - [What is the this keyword in JavaScript?](#what-is-the-this-keyword-in-javascript)
    - [What is event bubbling in JavaScript?](#what-is-event-bubbling-in-javascript)
    - [What is a closure in JavaScript?](#what-is-a-closure-in-javascript)
- [Functions](#functions)
    - [What is a higher-order function in JavaScript?](#what-is-a-higher-order-function-in-javascript)
    - [What is a callback function in JavaScript?](#what-is-a-callback-function-in-javascript)
    - [What is a pure function in JavaScript?](#what-is-a-pure-function-in-javascript)
    - [What is the difference between function declaration and function expression?](#what-is-the-difference-between-function-declaration-and-function-expression)
    - [What is a recursive function in JavaScript?](#what-is-a-recursive-function-in-javascript)
    - [What is a generator function in JavaScript?](#what-is-a-generator-function-in-javascript)
    - [What is the difference between .call() and .apply()?](#what-is-the-difference-between-call-and-apply)
    - [What is the difference between .bind() and .call()?](#what-is-the-difference-between-bind-and-call)
    - [What is the arguments object in JavaScript?](#what-is-the-arguments-object-in-javascript)
    - [What is a rest parameter in JavaScript?](#what-is-a-rest-parameter-in-javascript)
- [Objects](#objects)
    - [What is an object in JavaScript?](#what-is-an-object-in-javascript)
    - [What is the difference between an object and an array in JavaScript?](#what-is-the-difference-between-an-object-and-an-array-in-javascript)
    - [What is prototypal inheritance in JavaScript?](#what-is-prototypal-inheritance-in-javascript)
    - [What is the Object.create() method in JavaScript?](#what-is-the-objectcreate-method-in-javascript)
    - [What is the new keyword in JavaScript?](#what-is-the-new-keyword-in-javascript)
    - [What is a constructor function in JavaScript?](#what-is-a-constructor-function-in-javascript)
- [Arrays](#arrays)
    - [What is an array in JavaScript?](#what-is-an-array-in-javascript)
    - [What is the difference between .forEach() and .map()?](#what-is-the-difference-between-foreach-and-map)
    - [What is the difference between .slice() and .splice()?](#what-is-the-difference-between-slice-and-splice)
    - [What is the difference between .shift() and .pop()?](#what-is-the-difference-between-shift-and-pop)
    - [What is the Array.prototype.filter() method in JavaScript?](#what-is-the-arrayprototypefilter-method-in-javascript)
    - [What is the Array.prototype.reduce() method in JavaScript?](#what-is-the-arrayprototypereduce-method-in-javascript)
- [ES6 Features](#es6-features)
    - [What are template literals in JavaScript?](#what-are-template-literals-in-javascript)
    - [What are default parameters in JavaScript?](#what-are-default-parameters-in-javascript)
    - [What are destructuring assignments in JavaScript?](#what-are-destructuring-assignments-in-javascript)
    - [What is the spread operator in JavaScript?](#what-is-the-spread-operator-in-javascript)
    - [What is the class keyword in JavaScript?](#what-is-the-class-keyword-in-javascript)
    - [What is the super keyword in JavaScript?](#what-is-the-super-keyword-in-javascript)
    - [What is the Symbol data type in JavaScript?](#what-is-the-symbol-data-type-in-javascript)
- [Promises](#promises)
    - [What are promises in JavaScript?](#what-are-promises-in-javascript)
    - [What is the difference between a promise and a callback?](#what-is-the-difference-between-a-promise-and-a-callback)
    - [What is the .then() method in promises?](#what-is-the-then-method-in-promises)
    - [What is the .catch() method in promises?](#what-is-the-catch-method-in-promises)
    - [What is the .finally() method in promises?](#what-is-the-finally-method-in-promises)
    - [What is the Promise.all() method in JavaScript?](#what-is-the-promiseall-method-in-javascript)
    - [What is the Promise.race() method in JavaScript?](#what-is-the-promiserace-method-in-javascript)
    - [What is the Promise.allSettled() method in Javascript?](#what-is-the-promiseallsettled-method-in-javascript)
    - [What is the async keyword in JavaScript?](#what-is-the-async-keyword-in-javascript)
    - [What is the await keyword in JavaScript?](#what-is-the-await-keyword-in-javascript)
    - [What is the difference between async/await and promises?](#what-is-the-difference-between-asyncawait-and-promises)
    - [How do you handle errors in async/await?](#how-do-you-handle-errors-in-asyncawait)
    - [What is the try/catch block in JavaScript?](#what-is-the-trycatch-block-in-javascript)
    - [How do you use async/await with Promise.all()?](#how-do-you-use-asyncawait-with-promiseall)
- [DOM (Document Object Model) Manupulation](#dom-document-object-model-manupulation)
    - [What is the Document Object Model (DOM) in JavaScript?](#what-is-the-document-object-model-dom-in-javascript)
    - [What is the difference between innerHTML and textContent?](#what-is-the-difference-between-innerhtml-and-textcontent)
    - [What is the querySelector() method in JavaScript?](#what-is-the-queryselector-method-in-javascript)
    - [What is the addEventListener() method in JavaScript?](#what-is-the-addeventlistener-method-in-javascript)
    - [What is event delegation in JavaScript?](#what-is-event-delegation-in-javascript)
- [Browser APIs](#browser-apis)
    - [What are browser APIs in JavaScript?](#what-are-browser-apis-in-javascript)
    - [What is the localStorage API in JavaScript?](#what-is-the-localstorage-api-in-javascript)
    - [What is the sessionStorage API in JavaScript?](#what-is-the-sessionstorage-api-in-javascript)
    - [What is the window object in JavaScript?](#what-is-the-window-object-in-javascript)
    - [What is the setTimeout() method in JavaScript?](#what-is-the-settimeout-method-in-javascript)
- [Performance \& Event Loop:](#performance--event-loop)
    - [What is event loop in JavaScript?](#what-is-event-loop-in-javascript)
    - [What is the requestAnimationFrame() method in JavaScript?](#what-is-the-requestanimationframe-method-in-javascript)
    - [What is memoization in JavaScript?](#what-is-memoization-in-javascript)
    - [What is lazy loading in JavaScript?](#what-is-lazy-loading-in-javascript)
    - [What is tree shaking in JavaScript?](#what-is-tree-shaking-in-javascript)
- [Security](#security)
    - [What is Cross-Site Scripting (XSS) in JavaScript?](#what-is-cross-site-scripting-xss-in-javascript)
    - [What is Cross-Site Request Forgery (CSRF) in JavaScript?](#what-is-cross-site-request-forgery-csrf-in-javascript)
    - [What is the Same-Origin Policy in JavaScript?](#what-is-the-same-origin-policy-in-javascript)
    - [What is Content Security Policy (CSP) in JavaScript?](#what-is-content-security-policy-csp-in-javascript)
    - [What is the difference between encryption and hashing in JavaScript?](#what-is-the-difference-between-encryption-and-hashing-in-javascript)

# Basics

### What is JavaScript?

JavaScript is a high-level programming language used to create dynamic and interactive web pages. It is mainly used for creating client-side web applications that can run on a web browser. JavaScript is a powerful language that can manipulate web page elements, handle events, and interact with servers.

### What are the data types in JavaScript?
JavaScript has six primitive data types:

* `string`: represents a sequence of characters.
* `number`: represents a numerical value, including integers and floating-point numbers.
* `boolean`: represents a logical value of either true or false.
* `null`: represents a deliberate non-value or empty value.
* `undefined`: represents a variable that has been declared but has not been assigned a value.
* `symbol`: represents a unique identifier.
JavaScript also has a non-primitive data type called object, which includes arrays, functions, and objects.

### What is the difference between undefined and null?

In JavaScript, undefined means a variable has been declared but has not been assigned a value. On the other hand, null represents a deliberate non-value or empty value that a programmer assigns to a variable.

```js
let x; // x is undefined
let y = null; // y is null
```

### What is the difference between == and ===?

The double equals (==) and triple equals (===) are comparison operators in JavaScript. The main difference between the two is that the double equals only compares the values of two operands, while the triple equals compares both the values and the types of the operands.

```js
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

### What is the difference between var, let, and const?

In JavaScript, var, let, and const are used to declare variables. However, they have different scopes and behaviors.

* var: Declares a variable with function scope or global scope.
* let: Declares a variable with block scope, which means it can only be accessed within the block it was declared in.
* const: Declares a constant variable that cannot be reassigned after initialization.

```js
function example() {
  var x = 10; // function scope
  if (true) {
    let y = 20; // block scope
    const z = 30; // block scope
  }
  console.log(x); // 10
  console.log(y); // ReferenceError: y is not defined
  console.log(z); // ReferenceError: z is not defined
}
```

### What is hoisting in JavaScript?

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their respective scopes during the compilation phase. This means that a variable or function can be used before it has been declared.

```js
x = 5; // Assign 5 to x
console.log(x); // Output: 5
var x; // Declare x
```

### What is the this keyword in JavaScript?
The this keyword refers to the current object that is executing the current function. The value of this depends on how a function is called. When a function is called as a method of an object, this refers to that object. When a function is called alone, this refers to the global object.

```js
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is John
```

### What is event bubbling in JavaScript?
Event bubbling is a phenomenon where an event that occurs on an element in the DOM tree will also be propagated to its parent elements in a hierarchy. This means that if an event occurs on a child element, it will also be triggered on all of its parent elements.

HTML:
```html
<!-- HTML -->
<div id="parent">
  <div id="child">Click me!</div>
</div>
```

Javascript:
```js
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

child.addEventListener("click", function () {
  console.log("Child clicked!");
});

parent.addEventListener("click", function () {
  console.log("Parent clicked!");
});
```

If you click the child element, both the child and parent event listeners will be triggered, resulting in the following output:

```cmd
Child clicked!
Parent clicked!
```

### What is a closure in JavaScript?
A closure is a function that has access to variables in its outer lexical scope, even after that scope has been destroyed. In other words, a closure allows a function to access and manipulate variables from its parent function, even after the parent function has returned.

```js
function outer() {
  const name = "John";
  function inner() {
    console.log(`Hello, ${name}!`);
  }
  return inner;
}

const greet = outer(); // assign inner function to a variable
greet(); // Output: Hello, John!

```
In the above example, the inner function has access to the name variable from its parent function, outer. Even after outer has returned and its local variables have been destroyed, greet can still access and use the name variable.

* Bonus (In Depth)

```sql
  +---------------------------------------+
  |          Outer Function Scope          |
  |                                       |
  |    +-----------------------------+    |
  |    | Inner Function Scope        |    |
  |    |                             |    |
  |    |   +---------+  +---------+ |    |
  |    |   |         |  |         | |    |
  |    |   |  Var    |  | Var     | |    |
  |    |   |  x: 5   |  | y: 10   | |    |
  |    |   |         |  |         | |    |
  |    |   +---------+  +---------+ |    |
  |    |                             |    |
  |    |   +---------------------+   |    |
  |    |   |  Inner Function     |   |    |
  |    |   |                     |   |    |
  |    |   |  Return x + y       |   |    |
  |    |   +---------------------+   |    |
  |    |                             |    |
  |    +-----------------------------+    |
  |                                       |
  +---------------------------------------+
```

1. The outer function **outer()** is called, creating its own scope.
2. Within the outer function, the inner function **inner()** is defined.
3. The inner function has access to the outer function's variables (in this case, x and y).
4. When the inner function is returned, it forms a closure with its parent scope, preserving the values of x and y.
5. The closure is returned and assigned to the variable **greet**.
6. When **greet()** is called, it has access to the variables x and y, even though the outer function has already completed execution.

# Functions


### What is a higher-order function in JavaScript?
A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. In other words, a higher-order function is a function that operates on other functions, either by taking them as arguments or by returning them.

```js
function higherOrderFunction(callback) {
  callback();
}

function callbackFunction() {
  console.log('This is a callback function');
}

higherOrderFunction(callbackFunction); // Output: 'This is a callback function'
```
### What is a callback function in JavaScript?
A callback function is a function that is passed as an argument to another function and is executed after the parent function has completed. In other words, a callback function is a function that is called back by another function.

```js
function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name:');
  callback(name);
}

processUserInput(greeting); // Output: 'Hello <name>'
```

### What is a pure function in JavaScript?
A pure function is a function that always returns the same result when given the same inputs, and does not have any observable side effects. In other words, a pure function does not modify the values of its arguments or any other global state, and it does not rely on external input or output.

```js
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3)); // Output: 5
console.log(sum(2, 3)); // Output: 5

```

### What is the difference between function declaration and function expression?
A function declaration is a statement that declares a function with a name and a block of code. A function expression is an expression that defines an anonymous function and assigns it to a variable. The main difference between the two is that function declarations are hoisted to the top of the scope, while function expressions are not.

```js
// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
var sum = function(a, b) {
  return a + b;
};
```

### What is a recursive function in JavaScript?
A recursive function is a function that calls itself repeatedly until it reaches a base case, which is a condition that causes the function to stop calling itself. Recursive functions are useful for solving problems that can be broken down into smaller, similar problems.

```js
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120
```

### What is a generator function in JavaScript?
A generator function is a special type of function that can pause and resume its execution using the yield keyword. Generator functions are useful for generating sequences of values on-the-fly, without having to precompute all the values at once.

```js
function* fibonacci() {
  var a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var generator = fibonacci();

console.log(generator.next().value); // Output: 0
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
```

### What is the difference between .call() and .apply()?
Both .call() and .apply() are methods that can be used to call a function with a specific this value and a set of arguments.
The main difference between them is in how the arguments are passed. With .call(), the arguments are passed as a comma-separated list, whereas with .apply(), the arguments are passed as an array.

Here's an example:

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet.call(null, 'Alice'); // Hello, Alice!
greet.apply(null, ['Bob']); // Hello, Bob!
```
In this example, both call and apply are used to call the greet function with a null this value and a single argument.

### What is the difference between .bind() and .call()?
.bind(), like .call() and .apply(), can be used to call a function with a specific this value and a set of arguments. However, instead of immediately invoking the function, it returns a new function that, when called, will have the specified this value and arguments.

Here's an example:

```js
const person = {
  name: 'Alice',
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

const greetAlice = person.greet.bind(person);
greetAlice(); // Hello, my name is Alice.

```

### What is the arguments object in JavaScript?
The arguments object is a special object that is available inside every function in JavaScript. It contains an array-like list of the arguments that were passed to the function.

Here's an example:

```js
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // 10
```
In this example, the sum function uses the arguments object to calculate the sum of all its arguments.

### What is a rest parameter in JavaScript?
A rest parameter is a special parameter in a function that allows for an arbitrary number of arguments to be passed to the function as an array

```js
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
console.log(sum(10)); // Output: 10
console.log(sum()); // Output: 0
```

In this example, the sum function accepts any number of arguments using the rest parameter syntax (...numbers). Inside the function, the rest parameter numbers is treated as an array that contains all the arguments passed to the function.

The function then uses a for loop to iterate through the array and calculate the total sum of all the numbers. Finally, the function returns the total sum.

This allows us to call the sum function with any number of arguments, and it will calculate the sum correctly.

# Objects

### What is an object in JavaScript?
In JavaScript, an object is a collection of properties and methods, represented as key-value pairs. Properties can be any value, including other objects, and methods are functions that are associated with the object.

Objects can be created using object literals, constructor functions, and the Object.create() method.

```js
// Object literal syntax
const person = {
  name: 'John',
  age: 30,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Object.create() method
const personProto = {
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const person = Object.create(personProto);
person.name = 'John';
person.age = 30;
```


### What is the difference between an object and an array in JavaScript?
In JavaScript, an object is a collection of properties and methods, represented as key-value pairs. Properties can be any value, including other objects, and methods are functions that are associated with the object.

On the other hand, an array is a collection of values, stored in a specific order and accessed using a numeric index.

```js
// Object example
const person = {
  name: 'John',
  age: 30,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// Array example
const numbers = [1, 2, 3, 4, 5];
```

### What is prototypal inheritance in JavaScript?
Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. Each object in JavaScript has an internal property called `[[Prototype]]`, which refers to another object from which it inherits its properties.

If an object doesn't have a particular property or method, JavaScript looks for it in its prototype object, and if it's still not found, it looks in the prototype's prototype and so on, until it reaches the top of the prototype chain.

```js
// Example of prototypal inheritance
const personProto = {
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const person = Object.create(personProto);
person.name = 'John';
person.age = 30;
person.sayHello(); // Output: "Hello, my name is John"
```

In this example, personProto is an object that contains a sayHello method. We then create a new object person using Object.create(), and set it `[[Prototype]]` to personProto. This means that person inherits the sayHello method from 

### What is the Object.create() method in JavaScript?
The Object.create() method in JavaScript creates a new object with a specified prototype object and any additional properties you want to add to the object.

```js
const personProto = {
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const person = Object.create(personProto, {
  name: { value: 'John' },
  age: { value: 30 }
});

person.sayHello(); // Output: "Hello, my name is John"
```
### What is the new keyword in JavaScript?
In JavaScript, the new keyword is used to create an instance of a constructor function. When a function is defined with the function keyword and intended to be used as a constructor, the convention is to capitalize the first letter of the function name. This is not a requirement, but a convention that makes it easier to identify constructors in code.

When a constructor function is invoked with the new keyword, several things happen:

A new empty object is created.
The this keyword is set to point to the new object.
The function body is executed with the this keyword referring to the new object.
The newly created object is returned by default, unless the function explicitly returns another object.
Here's an example of a constructor function and how to use it with the new keyword:

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1); // Output: Person { name: 'Alice', age: 30 }
console.log(person2); // Output: Person { name: 'Bob', age: 25 }
```

In this example, Person is a constructor function that takes two arguments: name and age. When the new keyword is used with Person, two new objects are created (person1 and person2), and the name and age properties are set for each object.

### What is a constructor function in JavaScript?
A constructor function in JavaScript is a special type of function that is used to create and initialize objects created with the new keyword. A constructor function is similar to a regular function, but it is intended to be used as a blueprint for creating objects with the same properties and methods.

When a constructor function is invoked with the new keyword, a new object is created and the this keyword is set to point to the new object. The properties and methods defined inside the constructor function can be used to initialize the new object.

Here's an example of a constructor function:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.start = function() {
    console.log("Starting the " + this.make + " " + this.model);
  };
}

const myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar); // Output: Car { make: 'Toyota', model: 'Corolla', year: 2022, start: [Function] }
myCar.start(); // Output: Starting the Toyota Corolla
```
In this example, Car is a constructor function that takes three arguments: make, model, and year. The properties make, model, and year are set on the new object created with the new keyword. The start method is also defined on the new object, and can be invoked to start the car.

Constructor functions are a powerful tool for creating reusable code and encapsulating related properties and methods. They are often used in object-oriented programming to define classes and create instances of those classes.

# Arrays

### What is an array in JavaScript?
An array is a special type of object used to store multiple values in a single variable. Arrays can hold values of any data type, including other arrays. The values in an array are referred to as elements, and each element has a unique index number that represents its position in the array.

### What is the difference between .forEach() and .map()?
The forEach() and map() methods are both used to iterate over an array and perform a function on each element. However, there are some differences between the two methods:

forEach() modifies the original array, while map() returns a new array with the modified elements.
forEach() does not return anything, while map() returns an array.
map() is more suitable when you want to create a new array with the same number of elements as the original array, but with each element transformed in some way.
Here's an example to illustrate the differences between `forEach()` and `map()`:

```js
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach((num, index) => {
  numbers[index] = num * 2;
});
console.log(numbers); // [2, 4, 6, 8, 10]

// map
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [4, 8, 12, 16, 20]
console.log(numbers); // [2, 4, 6, 8, 10]

```

### What is the difference between .slice() and .splice()?
The slice() and splice() methods are both used to extract a portion of an array, but they have some differences:

slice() returns a new array containing the extracted elements, while splice() modifies the original array by removing or replacing elements.
slice() does not modify the original array, while splice() does.
Here's an example to illustrate the differences between `slice()` and `splice()`:

```js
const numbers = [1, 2, 3, 4, 5];

// slice
const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // [2, 3, 4]
console.log(numbers); // [1, 2, 3, 4, 5]

// splice
const splicedNumbers = numbers.splice(1, 3);
console.log(splicedNumbers); // [2, 3, 4]
console.log(numbers); // [1, 5]
```

### What is the difference between .shift() and .pop()?
The shift() and pop() methods are both used to remove elements from an array, but they have some differences:

shift() removes the first element of the array and returns it, while pop() removes the last element of the array and returns it.
shift() modifies the original array, while pop() does.

Here's an example to illustrate the differences between `shift()` and `pop()`:

```js
const numbers = [1, 2, 3, 4, 5];

// shift
const shiftedNumber = numbers.shift();
console.log(shiftedNumber); // 1
console.log(numbers); // [2, 3, 4, 5]

// pop
const poppedNumber = numbers.pop();
console.log(poppedNumber); // 5
console.log(numbers); // [2, 3, 4]

```

### What is the Array.prototype.filter() method in JavaScript?
The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. It takes a callback function as its argument, which is used to test each element of the array. The callback function takes three arguments: the current element being processed, its index, and the array on which the filter() method was called.

Here is an example that filters out all even numbers from an array:

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

```

In the example above, the callback function number => number % 2 === 0 tests whether each element of the numbers array is even. The filter() method then creates a new array evenNumbers that only contains the even numbers from the original array.

### What is the Array.prototype.reduce() method in JavaScript?
The reduce() method is used to reduce the elements of an array to a single value. It takes a callback function as its argument, which is executed on each element of the array. The callback function takes two arguments: an accumulator and the current element being processed. The accumulator is the value returned from the previous iteration of the callback function, or the initial value passed to the `reduce()` method.

Here is an example that uses the `reduce()` method to calculate the sum of an array of numbers:

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15
```

In the example above, the initial value of the accumulator is 0, and the callback function (accumulator, current) => accumulator + current adds each element of the numbers array to the accumulator, returning the sum of all elements. Finally, the reduce() method returns the final value of the accumulator, which is the sum of all elements of the array.

# ES6 Features

### What are template literals in JavaScript?
Template literals, introduced in ES6, are a new way of creating strings in JavaScript that allow for more dynamic and flexible string creation. They use backticks (`) instead of single or double quotes, and allow for the embedding of expressions and variables directly within the string using ${}.

Example:

```js
const name = "John";
console.log(`Hello, ${name}!`);
// Output: "Hello, John!"

```

### What are default parameters in JavaScript?
Default parameters allow us to provide a default value for a function parameter if none is provided when the function is called. This makes our code more robust and helps us avoid common bugs caused by missing or undefined parameters.

Example:

```js
function greet(name = "World") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: "Hello, World!"
greet("John"); // Output: "Hello, John!"
```

### What are destructuring assignments in JavaScript?
Destructuring assignments allow us to extract values from arrays or objects and assign them to variables in a single line of code. This makes our code more concise and easier to read.

Example:

```js
// Destructuring an array
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // Output: 1 2 3

// Destructuring an object
const person = {name: "John", age: 30};
const {name, age} = person;
console.log(name, age); // Output: John 30
```


### What is the spread operator in JavaScript?
The spread operator is a way of expanding an array or object into individual elements. It allows us to concatenate arrays, pass arrays as arguments to functions, and create new arrays or objects with modified values.

Example:

```js
// Concatenating arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]

// Passing arrays as arguments
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(result); // Output: 6

// Creating new arrays with modified values
const arr = [1, 2, 3];
const newArr = [...arr, 4];
console.log(newArr); // Output: [1, 2, 3, 4]

```

### What is the class keyword in JavaScript?
The class keyword in JavaScript was introduced in ECMAScript 2015 (ES6) as a way to create objects using a syntax similar to class definitions in object-oriented programming. It allows us to define a blueprint for creating objects with specific properties and methods.

A class definition consists of a constructor method and any number of additional methods. The constructor method is called when a new instance of the class is created and is used to set initial values for the object's properties. The other methods define the behavior of the class and can be used by instances of the class to perform actions.

Here is an example of a class definition for a simple Person object:

```js

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
```

In this example, the Person class has a constructor method that sets the name and age properties for each instance of the class. It also has a sayHello method that logs a message to the console.

To create a new instance of the Person class, we can use the new keyword:

```js

const john = new Person('John', 30);
john.sayHello(); // Output: Hello, my name is John and I am 30 years old.

```

### What is the super keyword in JavaScript?
The super keyword in JavaScript is used inside a subclass constructor to call the constructor of its parent class. It is used to inherit the properties and methods of the parent class in the subclass.

Here is an example of a parent `class Person` and a `child class Employee` that inherits from Person using the super keyword:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the constructor of the parent class
    this.jobTitle = jobTitle;
  }
  
  getJobTitle() {
    console.log(`My job title is ${this.jobTitle}.`);
  }
}

```

In this example, the Employee class extends the `Person` class using the extends keyword. The constructor method of Employee calls the constructor of `Person` using the `super` keyword, passing in the name and age arguments. The jobTitle property is then added to the Employee instance.

The `getJobTitle` method is defined on the `Employee` class and can be called on an instance of the `Employee` class:

```js
const john = new Employee('John', 30, 'Software Engineer');
john.getJobTitle(); // Output: My job title is Software Engineer.

```

### What is the Symbol data type in JavaScript?
The Symbol data type in JavaScript was introduced in ECMAScript 2015 (ES6) as a way to create unique, non-enumerable properties on objects. A Symbol is an immutable primitive value that can be used as a property key for an object.

Here is an example of using a Symbol as a property key:

```js
const mySymbol = Symbol('mySymbol');
const myObj = {};

myObj[mySymbol] = 'Hello, world!';

console.log(myObj[mySymbol]); // Output: Hello, world!
```

Symbols are useful for creating unique keys in objects, since each symbol is guaranteed to be unique. They are often used in APIs or libraries where there is a need to create keys for internal use that will not conflict with keys created by the user.

For example, let's say we want to create a library with a method that accepts an object and a callback function. We want to store the object in a map, with a unique identifier that we can use to retrieve it later. We can use a symbol as the key, to ensure that there is no chance of the key conflicting with any keys the user might create:

```js
const objectMap = new Map();

function storeObject(obj, callback) {
  const id = Symbol();
  objectMap.set(id, obj);
  callback(id);
}

function getObject(id) {
  return objectMap.get(id);
}

const myObject = {name: 'John', age: 30};
storeObject(myObject, (id) => {
  console.log(`Object stored with id: ${id.toString()}`);
});

const retrievedObject = getObject(mySymbol);
console.log(retrievedObject); // {name: 'John', age: 30}
```
In the example above, we create a new symbol as the key for each object that is stored in the objectMap using the set() method. The getObject() function retrieves the object from the map using the symbol as the key. The user of the library does not need to worry about generating unique keys themselves, since the library uses symbols to ensure uniqueness.

# Promises

### What are promises in JavaScript?
Promises are a feature in JavaScript that allow us to handle asynchronous operations. They represent a value that may not be available yet, but will be resolved in the future. A promise can either be resolved successfully or be rejected with an error.

### What is the difference between a promise and a callback?
Callbacks and promises are both used to handle asynchronous operations. However, promises provide a more elegant and structured way to handle asynchronous code than callbacks. Promises allow us to chain asynchronous operations, handle errors more easily, and avoid the callback hell problem.

### What is the .then() method in promises?
The .then() method is used to handle the successful completion of a promise. It takes one or two callbacks as arguments. The first callback is called when the promise is resolved successfully, and it receives the resolved value as its argument. The second callback is an optional error handler, which is called when the promise is rejected.

```js
// Example usage of .then() method
somePromise.then(
  function(result) {
    // Handle successful result
  },
  function(error) {
    // Handle error
  }
);

```

### What is the .catch() method in promises?
The .catch() method is used to handle errors that occur during the execution of a promise. It takes one callback as an argument, which is called when the promise is rejected. The .catch() method is a shorthand way of handling errors in promises, and is equivalent to calling `.then(undefined, errorhandler).`

```js
// Example usage of .catch() method
somePromise.catch(function(error) {
  // Handle error
});
```

### What is the .finally() method in promises?
The .finally() method is used to execute code regardless of whether a promise is resolved or rejected. It takes one callback as an argument, which is called when the promise is settled (either resolved or rejected).

```js
// Example usage of .finally() method
somePromise.finally(function() {
  // Execute this code regardless of whether the promise was resolved or rejected
});
```

### What is the Promise.all() method in JavaScript?
The Promise.all() method is used to execute multiple promises in parallel and wait for all of them to complete. It takes an array of promises as an argument and returns a new promise that resolves when all of the input promises have resolved, or rejects when any of the input promises rejects.

```js
// Example usage of Promise.all() method
Promise.all([promise1, promise2, promise3])
  .then(function(results) {
    // Handle results
  })
  .catch(function(error) {
    // Handle error
  });
```

Here is a flowchart for better explanation:

```js
             +---(resolve)---+
             |               |
Promise.all  |  +---(resolve)---+
             |  |               |
             +--|  +---(resolve)---+
                |  |               |
                +--|  +---(resolve)---+
                   |               |
                   +---(resolve)---+

```

### What is the Promise.race() method in JavaScript?
The Promise.race() method is used to execute multiple promises in parallel and wait for the first one to complete, regardless of whether it resolves or rejects. It takes an array of promises as an argument and returns a new promise that resolves or rejects with the result of the first promise that completes.

```js
// Example usage of Promise.race() method
Promise.race([promise1, promise2, promise3])
  .then(function(result) {
    // Handle result
  })
  .catch(function(error) {
    // Handle error
  });

```

Here is a flowchart for `Promise.race()`

```js
             +---(resolve/reject)---+
             |                       |
Promise.race |  +---(resolve/reject)---+
             |  |                       |
             +--|  +---(resolve/reject)---+
                |  |                       |
                +--|  +---(resolve/reject)---+
                   |                       |
                   +---(resolve/reject)---+

```

### What is the Promise.allSettled() method in Javascript?

`Promise.allSettled()` is a method in JavaScript that returns a `promise` that resolves after all of the given promises have either `fulfilled or rejected`, with an array of objects that each describe the outcome of each promise. It was introduced in ES2020.

The objects returned by Promise.allSettled() will have the following shape:

status: A string indicating whether the promise was fulfilled or rejected.
value or reason: Depending on the status, either the fulfillment value or the rejection reason of the promise.
Here is an example code snippet that demonstrates the usage of Promise.allSettled():

```js
const promises = [
  Promise.resolve('Success!'),
  Promise.reject('Error!'),
  Promise.resolve('Another success!'),
];

Promise.allSettled(promises)
  .then(results => {
    console.log(results);
  });
```

In this example, we are passing an array of three promises to Promise.allSettled(). The first and third promises will be fulfilled with the strings 'Success!' and 'Another success!', respectively. The second promise will be rejected with the string 'Error!'. After all promises have settled, the .then() callback will be called with an array of three objects describing the outcome of each promise. Here is the expected output:

```js
[
  { status: 'fulfilled', value: 'Success!' },
  { status: 'rejected', reason: 'Error!' },
  { status: 'fulfilled', value: 'Another success!' },
]
```

Here is a flowchart that visualizes the process of using Promise.allSettled():

```js
                             ┌──────────────────────────┐
                             │     Promise.allSettled    │
                             │                          │
                             └──────────────────────────┘
                                         │
                                         │
                                ┌────────┴────────┐
                                │                 │
                      Promise.resolve      Promise.reject
                                │                 │
                                ▼                 ▼
                      ┌────────────────┐ ┌─────────────────┐
                      │    Fulfilled   │ │    Rejected     │
                      └────────────────┘ └─────────────────┘
                                │                 │
                                │                 │
                     ┌──────────┴────────┐ ┌───────┴───────┐
                     │                   │ │               │
               ┌─────────┐        ┌─────────┐        ┌─────────┐
               │  Value: │        │ Reason: │        │  Value: │
               │ 'Success!' │        │  'Error!'│        │'Another'│
               └─────────┘        └─────────┘        │ 'success!' │
                                                      └─────────┘
```

As we can see from the flowchart, Promise.allSettled() creates a new promise that waits for all of the input promises to either fulfill or reject. Once all of the input promises have settled, Promise.allSettled() resolves with an array of objects describing the outcome of each promise.


### What is the async keyword in JavaScript?

The async keyword is used to declare an asynchronous function in JavaScript. It allows a function to be executed asynchronously by returning a promise, and lets you use the await keyword inside the function to wait for the completion of a promise before continuing with the execution of the function.

### What is the await keyword in JavaScript?

The await keyword is used to wait for the completion of a promise before continuing with the execution of an async function. It can only be used inside an async function, and it pauses the execution of the function until the promise is resolved or rejected. Once the promise is resolved, the result of the promise is returned, and if the promise is rejected, an error is thrown.

Here's an example of using async and await:

```js
async function getUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error(error);
  }
}
```

In this example, the getUserData function is declared as async, which allows us to use the await keyword inside the function. The function makes a GET request to the `https://api.example.com/users/${userId}` endpoint, and waits for the response using the await keyword. Once the response is received, the function waits for the response body to be parsed as JSON using await response.json(). Finally, the function returns the user data. If any errors occur during the execution of the function, they are caught and logged to the console using a try...catch block.

### What is the difference between async/await and promises?
Async/await is a syntactical sugar on top of Promises, and they both work together to handle asynchronous operations in JavaScript. The main difference is that async/await allows for more concise and readable code, especially when dealing with complex chains of asynchronous operations.

### How do you handle errors in async/await?
You can handle errors in async/await using the try/catch block. Any errors that occur within the try block will be caught and handled by the catch block. You can also use `.catch()` on the Promise returned by the async function to handle errors.

### What is the try/catch block in JavaScript?
The try/catch block is a mechanism in JavaScript that allows you to handle errors in a more controlled and structured way. The try block contains the code that may throw an error, and the catch block contains the code to handle the error if it occurs. This helps to prevent the entire program from crashing due to unhandled errors.

### How do you use async/await with Promise.all()?
You can use async/await with Promise.all() to wait for all promises to resolve before continuing with the code. Here's an example:

```js
async function fetchData() {
  const [data1, data2, data3] = await Promise.all([
    fetch('https://api.example.com/data1'),
    fetch('https://api.example.com/data2'),
    fetch('https://api.example.com/data3')
  ]);
  // Code to handle the fetched data
}
```

In the above example, Promise.all() is used to fetch data from three different APIs. The await keyword is used to wait for all three promises to resolve before destructuring the results into data1, data2, and data3 variables.

# DOM (Document Object Model) Manupulation

### What is the Document Object Model (DOM) in JavaScript?
The Document Object Model, or DOM for short, is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

Here's a flowchart that summarizes the basics of the DOM:

```yaml
        Start
          |
          v
     Load Page
          |
          v
    DOM is built
          |
          v
   JavaScript can access and modify the DOM
          |
          v
     User sees changes
          |
          v
        End
```

### What is the difference between innerHTML and textContent?
`innerHTML` and `textContent` are both properties of DOM elements in JavaScript.

`innerHTML` sets or returns the HTML content inside an element, including any tags and their attributes. For example, if you have an HTML element 
```js
<p id="myParagraph">Hello <strong>world</strong>!</p>
```
then `document.getElementById("myParagraph").innerHTML` would return 

```"Hello <strong>world</strong>!".```

`textContent` sets or returns only the text content of an element, without any **HTML tags or attributes**. In the above example, document.getElementById("myParagraph").textContent would return `"Hello world!"`.

Here's a flowchart that illustrates the difference between innerHTML and textContent:

```yaml
        Start
          |
          v
     Select Element
          |
          v
     innerHTML or textContent?
          |
          |        innerHTML
          v
    Modify HTML content
          |
          v
     User sees changes
          |
          v
        End
```

### What is the querySelector() method in JavaScript?
querySelector() is a method of the document object in JavaScript. It allows you to select and manipulate DOM elements using CSS selector syntax.

For example, document.querySelector("#myButton") would select the first element on the page with an id of myButton. You can also use other CSS selectors like class names, element types, and attribute values to select elements.

Here's a flowchart that shows how to use querySelector():

```sql
        Start
          |
          v
     Select Element(s) with querySelector()
          |
          v
     Manipulate Selected Element(s)
          |
          v
     User sees changes
          |
          v
        End
```
### What is the addEventListener() method in JavaScript?
addEventListener() is a method of DOM elements in JavaScript. It allows you to attach an event handler function to an element, which will be executed when the specified event occurs.

For example, document.getElementById("myButton").addEventListener("click", myFunction) would attach the function myFunction to the click event of the element with id of myButton.

Here's a flowchart that shows how to use addEventListener():

```vbnet
        Start
          |
          v
     Select Element to Add Event Listener to
          |
          v
     Specify Event Type and Handler Function
          |
          v
     User Performs Action to Trigger Event
          |
          v
    Event Occurs, Handler Function is Executed
          |
          v
        End
```

### What is event delegation in JavaScript?
Event delegation is a technique in JavaScript where instead of attaching an event listener to every single child element in a parent element, you attach a single event listener to the parent element itself. When the event occurs on a child element, the event bubbles up the DOM tree until it reaches the parent element, which can then handle the event.

This can be useful for performance reasons, as attaching event listeners to a large number of child elements can be slow and inefficient. It can also simplify your code, as you only need to write one event listener instead of many.

Here's a flowchart that shows how event delegation works:

```vbnet
        Start
          |
          v
     Select Parent Element
          |
          v
     Attach Event Listener to Parent Element
          |
          v
     User Performs Action on Child Element
          |
          |  Event Bubbles Up to Parent Element?
          |<---------------------- Yes
          v
    Event is Handled by Parent Element
          |
          v
        End
```

 In summary, the Document Object Model (DOM) is a programming interface for web documents that can be modified with JavaScript. innerHTML and textContent are properties of DOM elements that allow you to modify their content. querySelector() allows you to select elements using CSS selectors, and addEventListener() allows you to attach event handlers to elements. Event delegation is a technique that can improve performance and simplify code by attaching a single event listener to a parent element instead of many child elements.

# Browser APIs

### What are browser APIs in JavaScript?
Browser APIs (Application Programming Interfaces) are built-in interfaces in web browsers that allow JavaScript code to interact with the browser and perform tasks such as modifying the DOM, making HTTP requests, and storing data locally. Examples of browser APIs include the DOM API, the Fetch API, and the Web Storage API.

Here's a flowchart that illustrates the relationship between JavaScript, the browser, and browser APIs:

```sql
        Start
          |
          v
     Write JavaScript Code
          |
          v
    JavaScript Interacts with Browser APIs
          |
          v
     Browser APIs Interact with Browser
          |
          v
     User Sees Changes in Browser
          |
          v
        End
```

### What is the localStorage API in JavaScript?
The localStorage API is a web storage API in JavaScript that allows you to store data locally in a user's web browser. The data is stored as key-value pairs, and persists even after the user closes and reopens their browser.

Here's a flowchart that shows how to use the localStorage API:

```js        Start
          |
          v
     Store Data with localStorage.setItem()
          |
          v
     Retrieve Data with localStorage.getItem()
          |
          v
        End
```

### What is the sessionStorage API in JavaScript?
The sessionStorage API is another web storage API in JavaScript that allows you to store data locally in a user's web browser, but the data only persists for the duration of the user's browser session. Once the user closes their browser, the data is cleared.

Here's a flowchart that shows how to use the sessionStorage API:

```sql
        Start
          |
          v
     Store Data with sessionStorage.setItem()
          |
          v
     Retrieve Data with sessionStorage.getItem()
          |
          v
        End
```

### What is the window object in JavaScript?
The window object is a built-in object in JavaScript that represents the browser window or tab that the JavaScript code is running in. It provides access to browser APIs, as well as global functions and properties like setTimeout() and console.log().

Here's a flowchart that shows some of the things you can do with the window object:

```js
        Start
          |
          v
     Access Browser APIs with window.API()
          |
          v
     Use Global Functions and Properties like window.setTimeout() and window.console.log()
          |
          v
     Manipulate Browser Window with window.open() and window.close()
          |
          v
        End

```

### What is the setTimeout() method in JavaScript?
The setTimeout() method is a function in JavaScript that allows you to schedule a function to be executed after a specified amount of time has elapsed. It takes two arguments: a function to execute, and the number of milliseconds to wait before executing the function.

Here's a flowchart that shows how to use setTimeout():

```sql

        Start
          |
          v
     Call setTimeout() with a Function and a Delay
          |
          v
     Wait for Delay to Elapse
          |
          v
     Execute Function
          |
          v
        End

```
 In summary, browser APIs in JavaScript provide a way to interact with the browser and perform tasks such as modifying the DOM, making HTTP requests, and storing data locally. The localStorage and sessionStorage APIs allow you to store data locally in the user's browser, the window object provides access to browser APIs and global functions and properties, and setTimeout() allows you to schedule a function to be executed after a delay.


# Performance & Event Loop:

### What is event loop in JavaScript?
The event loop is a fundamental concept in JavaScript that allows for asynchronous operations to be executed in a non-blocking way. It continuously listens for events and runs queued tasks, allowing the JavaScript engine to perform other operations in the meantime.

Here's a flowchart that illustrates how the event loop works:

```vbnet
        Start
          |
          v
   Execute Synchronous Code
          |
          v
   Handle Asynchronous Callbacks and Events with the Event Loop
          |
          v
   Run Next Task in the Event Queue
          |
          v
        End
```

### What is the requestAnimationFrame() method in JavaScript?
The requestAnimationFrame() method is a built-in function in JavaScript that is used to schedule animations and other visual updates in a way that maximizes performance and reduces unnecessary CPU usage.

Here's a code snippet that shows how to use requestAnimationFrame():

```js

function animate() {
  // Do something here
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
```

Here's a flowchart that illustrates how requestAnimationFrame() works:

```sql
        Start
          |
          v
   Call requestAnimationFrame() with Animation Function
          |
          v
   Wait for Browser to Render Next Frame
          |
          v
   Execute Animation Function
          |
          v
   Repeat
          |
          v
        End
```

### What is memoization in JavaScript?
Memoization is a technique in JavaScript that involves caching the results of expensive function calls so that they can be quickly retrieved the next time the function is called with the same arguments. This can significantly improve performance in certain scenarios.

Here's a code snippet that shows how to implement memoization in JavaScript:

```js
function memoize(func) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = func.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}
```
Here's a flowchart that illustrates how memoization works:

```sql
        Start
          |
          v
   Call Memoized Function with Arguments
          |
          v
   Check Cache for Result
          |
          v
   If Result is Cached, Return Result
          |
          v
   If Result is Not Cached, Compute Result and Cache it
          |
          v
   Return Result
          |
          v
        End
```

### What is lazy loading in JavaScript?
Lazy loading is a technique in JavaScript that involves delaying the loading of certain resources (such as images, videos, or scripts) until they are actually needed. This can improve the initial loading time of a web page and reduce unnecessary network usage.

Here's a code snippet that shows how to implement lazy loading of images in JavaScript:

```js
<img data-src="image.jpg" alt="Lazy-loaded Image">
<script>
  const images = document.querySelectorAll("img[data-src]");
  const options = {
    rootMargin: "0px 0px 100px 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.setAttribute("src", img.getAttribute("data-src"));
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  }, options);

  images.forEach(image => {
    observer.observe(image);
  });
```
Here's a flowchart that illustrates how lazy loading works:

```sql
        Start
          |
          v
   Identify Lazy-Loaded Resources
          |
          v
   Add IntersectionObserver to Watch for Resource Visibility
          |
          v
   When Resource is Visible, Load it
          |
          v
   Remove IntersectionObserver for Loaded Resource
          |
          v
        End
```

### What is tree shaking in JavaScript?
Tree shaking is a technique in JavaScript that involves removing unused code (such as functions or variables) from a JavaScript module during the bundling process. This can significantly reduce the size of the final bundle and improve the performance of the web page.

Here's a code snippet that shows how to use tree shaking with webpack:

```js
// webpack.config.js
module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    filename: "bundle.js"
  },
  optimization: {
    usedExports: true
  }
};
```

Here's a flowchart that illustrates how tree shaking works:

```sql
        Start
          |
          v
   Identify Used Code with Static Analysis
          |
          v
   Remove Unused Code from Bundle
          |
          v
   Optimize Bundle for Production
          |
          v
        End
```

# Security

### What is Cross-Site Scripting (XSS) in JavaScript?
Cross-Site Scripting (XSS) is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. This can be done by injecting script tags, JavaScript code, or other forms of executable content into user input fields or other parts of a web page.

Here's a flowchart that illustrates how an XSS attack can happen:

```yaml
        Start
          |
          v
   Inject Malicious Script into Web Page
          |
          v
   User Views Infected Web Page
          |
          v
   Malicious Script Runs in User's Browser
          |
          v
   Attacker Can Steal User Data or Perform Other Actions
          |
          v
        End
```

To prevent XSS attacks, developers can use various techniques such as input validation, output encoding, and using security headers like Content Security Policy (CSP).


### What is Cross-Site Request Forgery (CSRF) in JavaScript?
Cross-Site Request Forgery (CSRF) is a security vulnerability that allows attackers to perform actions on behalf of a user without their knowledge or consent. This can be done by tricking the user into clicking a link or button that performs a malicious action on a different website that the user is currently logged into.

Here's a flowchart that illustrates how a CSRF attack can happen:

```vbnet
        Start
          |
          v
   Attacker Creates Malicious Web Page or Email
          |
          v
   User Clicks on Malicious Link or Button
          |
          v
   Malicious Request is Sent to Target Site Using User's Credentials
          |
          v
   Attacker Can Perform Actions on Behalf of User Without Their Consent
          |
          v
        End
```
To prevent CSRF attacks, developers can use techniques such as CSRF tokens, SameSite cookies, and using HTTP headers like X-Requested-With.

### What is the Same-Origin Policy in JavaScript?
The Same-Origin Policy is a security mechanism in web browsers that prevents JavaScript code from accessing content from a different origin (a different domain, port, or protocol) than the one that the JavaScript code originated from. This is designed to prevent unauthorized access to user data and resources.

Here's a flowchart that illustrates how the Same-Origin Policy works:

```css
        Start
          |
          v
   JavaScript Code is Loaded from Origin A
          |
          v
   JavaScript Code Tries to Access Content from Origin B
          |
          v
   Same-Origin Policy Blocks Access to Content from Origin B
          |
          v
   JavaScript Code Can Only Access Content from Origin A
          |
          v
        End
```

To work around the Same-Origin Policy, developers can use techniques such as Cross-Origin Resource Sharing (CORS) or JSONP.


### What is Content Security Policy (CSP) in JavaScript?
Content Security Policy (CSP) is a security mechanism that allows web developers to specify a set of rules that restrict the types of content that can be loaded or executed on a web page. This is designed to prevent various types of attacks such as XSS, clickjacking, and code injection.

Here's a code snippet that shows how to set a CSP header in Node.js:

```js
const express = require('express');
const app = express();

// Set Content-Security-Policy header
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  next();
});

// Handle routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

```
In this example, we're using the Express.js framework to create a simple web server. We're setting the Content-Security-Policy header using the res.setHeader() method, which sets the default source for all resources to be the same origin as the server itself. This helps protect against various types of attacks such as XSS, CSRF, and clickjacking.

We then define a route for the root path (/) and send a "Hello World!" response. Finally, we start the server listening on port 3000 using the app.listen() method.

You can modify the code to suit your needs and add more routes and middleware as required.


### What is the difference between encryption and hashing in JavaScript?
Encryption and hashing are both techniques used to protect sensitive information, but they serve different purposes and use different algorithms.

Encryption is the process of converting plaintext (unencrypted) data into ciphertext (encrypted) data using a cryptographic algorithm and a secret key. The ciphertext can then be decrypted back into plaintext using the same algorithm and key.

Hashing, on the other hand, is the process of converting any data (plaintext or ciphertext) into a fixed-length string of characters called a hash. The hash is computed using a one-way cryptographic algorithm and cannot be reversed to retrieve the original data. Hashing is commonly used for data integrity checks and password storage.

Here's a flowchart that illustrates the differences between encryption and hashing:

* Encryption
  ```vbnet
          Start
          |
          v
   Original Data (Plaintext)
          |
          v
   Encryption Algorithm + Secret Key = Ciphertext
          |
          v
   Ciphertext
          |
          v
   Decryption Algorithm + Secret Key = Original Data (Plaintext)
          |
          v
        End
* Hashing
  ```vbnet
          Start
          |
          v
   Original Data (Plaintext or Ciphertext)
          |
          v
   Hashing Algorithm = Hash
          |
          v
   Hash
          |
          v
   Cannot Be Reversed to Retrieve Original Data
          |
          v
        End

In summary, encryption is used to protect data by keeping it secret and reversible, while hashing is used to verify the integrity of data and store passwords securely.
