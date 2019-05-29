/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - this is the default binding of the 'this' keyword. When this is not implicitly or explicity 'pointing' at an object, the 'this' keword will bind to the Window object.
* 2. Implicit Binding - implicit binding points to the object a function/method is being invoked with. What ever object is to the left of the 'dot' is what the 'this' keyword is bound to.
* 3. Explicit Binding - explicit binding points to the object a function/method is being invoked with by calling an object using .call, .apply, or .bind methods
* 4. New Binding - new binding is used in conjection with constructor functions. 'This' refers to the new object being created.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name){
    console.log(this);
}


// Principle 2

// code example for Implicit Binding
const ray = {
    name: 'Ray',
    age: 26,
    hometown: 'New Bedford',
    greeting: function(){
        console.log(`Hi, my name is ${this.name}, and I'm from ${this.hometown}.`);
    }
}

ray.greeting();



// Principle 3

// code example for New Binding

function Person(name,age,hometown) {
    this.name = name;
    this.age = age;
    this.hometown = hometown;
    this.greeting = function(){
        console.log(`Hi, my name is ${this.name}, and I'm from ${this.hometown}.`);
    };
}

const brian = new Person('Brian', 30, 'New Bedford');

brian.greeting();


// Principle 4

// code example for Explicit Binding

const greeting = function(){
    console.log(`Hi, my name is ${this.name}, and I'm from ${this.hometown}.`);
};

const aaron = {
    name: 'Aaron',
    age: 36,
    hometown: 'New Bedford'
}

greeting.call(aaron);