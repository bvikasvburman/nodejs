// ======================= rest operator =======================
person = {
    firstName: 'Vikas', 
    lastName: 'Burman',
    age: 35
};

// before es6
// const firstName  = person.firstName;
// const lastName  = person.lastName;


// in es6
const { firstName, ...restDetails } = person;

console.log('firstName: ', firstName);
console.log('rest Details: ', restDetails);

// function sum(a, b, ...moreNumbers) {
//     console.log(moreNumbers);

//     let sum = a + b;
//     console.log('sum: ', a + b);
//     let finalSum = sum; 

//     moreNumbers.forEach(function(val){
//         finalSum = finalSum + val;
//     });

//     console.log('Final sum: ', finalSum);
// }

// sum(2, 6, 5, 6, 7, 9, 8);

// ======================= spread operator =======================

// arr = ['Vikas', 'Burman', 35];


// function vic(firstName, lastName,  age) {
//     console.log('first Name: ', firstName);
//     console.log('last Name: ', lastName);
//     console.log('Age: ', age);
// }

// vic(...arr);

newPerson = { ...person, firstName: 'Pooja' };

console.log('new person: ', newPerson);