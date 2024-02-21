
//1. What is javascript? How does an interpreted programming language differ from a compiled language?
//JavaScript is a lightweight programming language commonly used by web developers to add dynamic interactions
//to web pages, applications, servers, and even games. 
//An interpreted language is a programming language that is generally interpreted, without compiling a program 
//into machine intructions. It is one where the instructions are not directly executed by the target machine, but instead, 
//read and executed by some other program. 

//2. What is the difference between var, let, and const when declaring variables?
//var: old school, global+funcation scoped, can be redeclarable and reassigned
//let: block scoped, can be reassigned but not redeclared 
//const: block scoped, not redeclarable or reassigned 

//3. What are anonymous functions? Higher order functions?
//An anonymous function is a function without a name. 

//4. Define objects in JavaScript and how they are different from objects in more traditional OOP languages. 
//An object is a collection of properties, and a property is an association between a name (or key) and a value.
//A property's value can be a function, in which case the property is known as a method. Traditional OOP languages 
//like Java or C++ have classes as blueprints for objects. 

const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
];


const avaliableCats = [];


for (const cat of cats) {
    
    if (cat.adoptionStatus === 'available') {
        
        avaliableCats.push(cat.name);
    }
}

const newSentence = `I've adopted ${avaliableCats.join(', ')} as my new furry companions!`;


console.log(newSentence);
