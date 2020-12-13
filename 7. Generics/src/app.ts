// Generic Type
const names: Array<string> = []; // string[]
// names[0].split(' ');

const promise: Promise<string> = new Promise( ( resolve ) => {
    setTimeout(() => {
        resolve( 'This is done!' );
    }, 1000);
});

promise.then( data => console.log( data.split( ' ' ) ) ); // ["This", "is", "done!"]

// Generic Function
function merge< T extends object, U extends object >( objA: T, objB: U ) { // < T extends object, U extends object > Constraints
    return Object.assign( objA, objB );
};

const mergedObj = merge( { name: 'Cristian', hobbies: [ 'Coding' ] }, { age: 24 } );
const mergedObj2 = merge( { name: 'Katherine' }, { age: 23 } );
console.log( mergedObj );
console.log( mergedObj2 );

interface Lengthy {
    length: number
};

function countAndPrint< T extends Lengthy >( element: T ): [ T, string ] {
    let descriptionText = 'Got no value';
    if ( element.length === 1 ) {
        descriptionText = `Got 1 element.`;
    } else if ( element.length > 1 ) {
        descriptionText = `Got ${ element.length } elements.`
    }
    return [ element, descriptionText ];
};

console.log( countAndPrint( 'Hello World' ) );
console.log( countAndPrint( [ 'Coding', 'Play FIFA' ] ) );
console.log( countAndPrint( [] ) );

// keyof Constraint
function extractAndConvert< T extends object, U extends keyof T >( obj: T, key: U ) {
    return 'Value: ' + obj[ key ];
};

console.log( extractAndConvert( { name: 'Cristian' }, 'name' ) );

// Generic Classes
class DataStorage< T extends string | number | boolean > {
    private data: T[] = [];

    addItem( item: T ) {
        this.data.push( item );
    }

    removeItem( item: T ) {
        if ( this.data.indexOf( item ) ) {
            return;
        }
        this.data.splice( this.data.indexOf( item ), 1 );
    }

    getItems() {
        return [ ...this.data ];
    }
};

const textStorage = new DataStorage< string >();
textStorage.addItem( 'Rosario' );
textStorage.addItem( 'Cristian' );
textStorage.removeItem( 'Rosario' );
console.log( textStorage.getItems() );

const numberStorage = new DataStorage< number >();
numberStorage.addItem( 3 );
numberStorage.addItem( 7 );
numberStorage.removeItem( 3 );
console.log( numberStorage.getItems() );

// const objectStorage = new DataStorage< object >();
// objectStorage.addItem( { name: 'Cristian' } );
// objectStorage.addItem( { name: 'Yudis' } );
// objectStorage.removeItem( { name: 'Yudis' } );
// console.log( objectStorage.getItems() );

// Generic Utility Types
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal( title: string, description: string, date: Date ): CourseGoal {
    let courseGoal: Partial< CourseGoal > = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
};

const namesArray: Readonly< string[]>  = [ 'Cristian', 'Katherine', 'Allan' ];
// namesArray.push( 'Yudis' );

console.log( namesArray );