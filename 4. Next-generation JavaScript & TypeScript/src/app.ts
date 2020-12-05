const divElement = <HTMLDivElement>document.querySelector('.result');

let result;

// function add ( a: number, b: number ) {
//     result = a + b;
//     return result;
// }

const add = ( a: number, b: number = 14 ) => a + b;

// divElement.innerText = String( result );
divElement.innerText = String( add( 40, 34 ) );
// divElement.innerText = 'Estoy aprendiendo TypeScript';

// const printOutput = ( output: string | number ) => {
const printOutput: ( a: string | number ) => void = output => console.log( output );

const button = document.querySelector('button')!;

button.addEventListener('click', e => {
    e.preventDefault();
    printOutput( add( 30 ) );
});

const hobbies = [ 'Cooking', 'Coding', 'Traveling', 'Studying' ];
const activeHobbies = [ 'Play soccer' ];

activeHobbies.push( ...hobbies );

const person = {
    firstName: 'Cristian',
    age: 24
};

const copiedPerson = { ...person };

// ...numbers => rest-parameter
const add2 = ( ...numbers: number[] ) => numbers.reduce(( prevValue, curValue ) => prevValue + curValue, 0);

const addedNumbers = add2( 1, 2, 3, 4, 5, 4 );
console.log( 'Add', addedNumbers );

const [ hobby1, hobby2, ...remainingHobbies ] = hobbies;
// console.log( hobby1 );
// console.log( hobby2 );
// console.log( remainingHobbies );

const { firstName: userName, age } = person;

console.log( userName, age, person );