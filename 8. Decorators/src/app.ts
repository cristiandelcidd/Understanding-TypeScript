// function Logger( constructor: Function ) {
//     console.log( 'Logging' )
//     console.log( constructor )
// }
function Logger( logString: string ) { // Decorator Factories
    return function( constructor: Function ) {
        console.log( logString )
        console.log( constructor )
    }
}

@Logger( 'LOGGING - PERSON' )
class Person {
    name = 'Cristian'

    constructor() {
        console.log('Creating a new person')
    }
}

const person = new Person()

// console.log( person )