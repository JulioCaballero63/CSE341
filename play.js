const name = 'Julio';
let age = 30;
const hasHobbies = true;

age = 31;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + userName + ', age is ' + userAge + ', and the user has hobbies: ' + userHasHobby
    );
};

// const add = (a, b) => a + b;
// const addOne = a => a + 1;
const addRandom = () => 1 + 2;

console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));

