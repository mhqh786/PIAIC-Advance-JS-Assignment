// object creation
const person = { 
    name: 'Hassan',
    age: 20
};
console.log(typeof person); // object



const person1 = {
    name: 'Qureshi',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person1.greet(); // hello