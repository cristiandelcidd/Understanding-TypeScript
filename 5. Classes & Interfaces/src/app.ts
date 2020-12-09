// type AddFn = ( a: number, b: number ) => number;
interface AddFn {
    ( a: number, b: number ): number;
}

let add: AddFn;

add = ( n1: number, n2: number ) => n1 + n2;

console.log( add( 291, 4 ) );

interface Named {
    readonly name?: string;
    outputName?: string;
}
interface Greetable extends Named {
    greet( phrase: string ): void;
};

class Person implements Greetable {
    name?: string;
    age = 24;

    constructor( n?: string ) {
        if ( n ) {
            this.name = n;
        }
    }

    greet( phrase: string ) {
        if ( this.name ) {
            console.log( `${ phrase } ${ this.name }.` );
        } else {
            console.log( 'Hi!' );
        }
    }
}

let p: Greetable;

p = new Person();
// p.name = 'Rosario';

p.greet('Hi there - I\'m');

console.log( p );

let person: Greetable;

person = {
    name: 'Cristian Delcid',

    greet( phrase: string ) {
        console.log( `${ phrase } ${ this.name }.` );
    }
};

person.greet( 'Hello, I\'m' );