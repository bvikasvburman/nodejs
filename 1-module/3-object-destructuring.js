// Object Destructuring
person = {
    firstName: 'Vikas', 
    lastName: 'Burman',
    age: 35
};

// before es6 
const firstName = person.firstName;
const lastName = person.lastName;

// console.log(firstName);
// console.log(lastName);

// In es6
const { firstName: fName, lastName: lName } = person;

console.log(fName);
console.log(lName);
