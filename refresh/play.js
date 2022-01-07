/*------------- const and let -----------*/
// const name = 'Julio';
// let age = 30;
// const hasHobbies = true;

const { rejects } = require("assert");
const { resolve } = require("path/posix");
const { text } = require("stream/consumers");

// age = 31;


/*-------- arrow functions ----------*/
// const summarizeUser = (userName, userAge, userHasHobby) => {
//     return (
//         'Name is ' + userName + ', age is ' + userAge + ', and the user has hobbies: ' + userHasHobby
//     );
// };

// const add = (a, b) => a + b;
// const addOne = a => a + 1;
// const addRandom = () => 1 + 2;

// console.log(addRandom());

// console.log(summarizeUser(name, age, hasHobbies));


/*----------- objects ------------*/
// const person = {
//     name: 'Julio',
//     age: 30,

    /* to use a function inside an object, remove the colon and the arrow. Otherwise it will return undefined.*/
//     greet() {
//         console.log('Hi, I am ' + this.name);
//      }
// };

// person.greet();


/*---------- arrays  & arrays methods ------------*/
// const myHobbies = ['Sports', 'Cooking'];
// for (let hobby of myHobbies) {
//     console.log(hobby);
// }
// console.log(myHobbies.map(hobby => 'Hobby: ' + hobby));


/*------- arrays, objects & reference types (they are called reference types) --------*/

// myHobbies.push('Programming');
// console.log(myHobbies);


/*------ spread & rest operators -------*/
// const copiedArray = myHobbies.slice();

// const copiedArray = [...myHobbies]; //spread operator, used to pull elements or properties out of arrays or objects.

// const toArray = (...args) => {
//     return args;
// } //rest operator, used to merge multiple arguments into an array, and used in the argument list of a function.

// console.log(toArray(1,2,3,4));


/*-------- destructuring ---------*/
// add curly bracket to function arguments, and type the properties you want from the object. Instead of writing the following function like this:
//     const printName = (person) => {
//         console.log(person.name);
//     }

// You write it like this:
// const printName = ({name}) => {
//     console.log(name);
// }

// another way to do it is like this:
// const {name, age} = person;
// console.log(name, age);
// printName(person);

/*----------- async code & promises ------------*/
// setTimeout(() => {
//     console.log('Time is done!');
// }, 2000); // the function is called a called back function, the 2000 means the time delay, once the timer runs out it will execute any code after the call back function, then it will execute the call back function.

// console.log('Hello');
// console.log('Hi'); // once the timer on the above function runs out, the both of this console.log code will execute first, then the call back function will execute.


// const fetchData = callBack => {
//     setTimeout(() => {
//         callBack('Done!');
//     }, 2000);
// }; // here I wrote a nested function that gets a call back.



// setTimeout(() => {
//     console.log('Time is done!');
//     fetchData(text => {
//         console.log(text);// here I run the above nested function.
//     });
// }, 2000);

     /*----promises section--------*/

// const fetchData = () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Done!');
//         }, 2000);
//     });
//     return promise;
// }; 

// setTimeout(() => {
//         console.log('Time is done!');
//         fetchData()
//         .then(text => {
//             console.log(text);
//             return fetchData();
//         })
//         .then(text2 => {
//             console.log(text2);
//         });
//     }, 2000);



// console.log('Hello');
// console.log('Hi');