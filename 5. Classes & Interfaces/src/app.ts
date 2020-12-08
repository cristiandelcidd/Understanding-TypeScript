class Department {
    // private readonly id: string;
    // private name: string;
    private employees: string[] = [];

    constructor( private readonly id: string, public name: string ) {
        // this.id = id;
        // this.name = n;
    }

    describe( this: Department ) {
        console.log(`Department (${ this.id }): ${ this.name }`);
    }

    addEmployee( employee: string ) {
        this.employees.push( employee );
    }

    printEmployeeInformation(){
        console.log( this.employees.length );
        console.log( this.employees );
    }
};

class ITDepartment extends Department {
    constructor ( id: string, public admins: string[] ) {
        super( id, 'IT' )
    }
}

class AccountingDepartment extends Department {
    constructor ( id: string, private reports: string[] ) {
        super( id, 'Accounting' );
    }

    addReport( text: string ) {
        this.reports.push( text );
    }

    printReports() {
        console.log( this.reports )
    }
}

const it = new ITDepartment('it', [ 'Cristian' ]);
console.log( it );
it.describe();


it.addEmployee('Cristian');
it.addEmployee('Katherine');
it.addEmployee('Allan');
// it.employees[3] = 'Yudis';
it.printEmployeeInformation();

const accounting = new AccountingDepartment( '124', [] );

accounting.addReport( 'Something went wrong...' );
accounting.printReports();

// const financeCopy = { name: 'Finance Copy', describe: finance.describe };

// financeCopy.describe();