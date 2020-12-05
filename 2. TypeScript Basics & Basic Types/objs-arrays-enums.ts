// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [ number, string ]
// } = {
//     name: 'Cristian Delcid',
//     age: 24,
//     hobbies: [ 'Cooking', 'Coding', 'Running' ],
//     role: [ 2, 'admin' ]
// };

enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
    name: 'Cristian Delcid',
    age: 24,
    hobbies: [ 'Cooking', 'Coding', 'Running' ],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

console.log( Role.ADMIN )

let favoriteActivities: string[];
favoriteActivities = [ 'Coding', 'Cooking', 'Running' ];

console.log( person.name );
console.log( favoriteActivities );

for ( const hobby of person.hobbies ) {
    console.log( hobby.toUpperCase() );
}

if ( person.role === Role.ADMIN ) {
    console.log( 'is admin' )
}