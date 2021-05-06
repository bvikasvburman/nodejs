// Before es6 class

function Person(firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,

    this.getAge = function() {
        return 'Your age is ' + this.age;
    }
}

Person.prototype.getDetails = function() {
    return 'Hello ' + this.firstName + ' your age is ' + this.age;
}

let newPerson = new Person('Vikas', 'Burman', 35);

console.log(newPerson.getAge());


// In ES6

class PersonEs {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getAge() {
        return 'Your age is ' + this.age;
    }
}

let newPersonEs = new PersonEs('Pooja', 'Burman', 28);

console.log(newPersonEs.getAge());
