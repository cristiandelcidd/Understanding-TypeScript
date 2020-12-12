// Generic Type
const names: Array<string> = []; // string[]
// names[0].split(' ');

const promise: Promise<string> = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
        resolve( 'This is done!' );
    }, 1000);
});

promise.then( data => console.log( data.split( ' ' ) ) ); // ["This", "is", "done!"]

function merge( objA: object, objB: object ) {
    return Object.assign( objA, objB );
};

console.log( merge( { name: 'Cristian' }, { age: 24 } ) );