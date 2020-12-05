function add( n1: number, n2: number ) {
    return n1 + n2;
};

function printResult( num: number ): void {
    console.log( `Result: ${ num }` );
};

function addAndHandle( n1: number, n2: number, cb: ( a: number ) => void ) {
    const result = n1 + n2;
    cb( result );
};

printResult( add( 1, 3 ) ); // Result: 4

// let combineValues: Function;
let combineValues: ( a: number, b: number ) => number;

combineValues = add;

console.log( combineValues( 8, 63 ) ); // 71

addAndHandle( 16, 46, ( result ) => console.log( result ) ); // 62