abstract class Department {
    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;
    // private employees: string[] = []; // private, only is available within the Department class
    protected employees: string[] = []; // protected, makes the array available in the Department class and its subclasses

    constructor( protected readonly id: string, public name: string ) {
        // this.id = id;
        // this.name = n;
    };

    static createEmployee( name: string ) {
        return { name };
    };

    // abstract describe( this: Department ) {
        // console.log(`Department (${ this.id }): ${ this.name }`);
    // };

    abstract describe( this: Department ): void;

    addEmployee( employee: string ) {
        this.employees.push( employee );
    };

    printEmployeeInformation(){
        console.log( this.employees.length );
        console.log( this.employees );
    };
};

class ITDepartment extends Department {
    constructor ( id: string, public admins: string[] ) {
        super( id, 'IT' )
    };

    describe() {
        console.log( `IT Department ID: ${ this.id }` );
    }
};

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if ( this.lastReport ) {
            return this.lastReport;
        };
        throw new Error('No report found...');
    };

    set mostRecentReport( value: string ) {
        if ( !value ) throw new Error('Please pass a valid value');
        this.addReport( value );
    }

    private constructor ( id: string, private reports: string[] ) {
        super( id, 'Accounting' );
        this.lastReport = reports[0];
    };

    static getInstance() {
        if ( AccountingDepartment.instance ) {
            return this.instance;
        }
        this.instance = new AccountingDepartment( '123it', []);
        return this.instance;
    }

    describe() {
        console.log(`Accounting Department - ID: ${ this.id }.`);
    }

    addEmployee( name: string ) {
        if ( name === 'Cristian'  ) {
            return;
        }
        this.employees.push( name );
    };

    addReport( text: string ) {
        this.reports.push( text );
        this.lastReport = text;
    };

    printReports() {
        console.log( this.reports )
    };
};

const employee1 = Department.createEmployee( 'Cristian Delcid' ); // Using the static method 'createEmployee'
console.log( employee1, Department.fiscalYear );

const it = new ITDepartment('it', [ 'Cristian' ]);
console.log( it );
it.describe();


it.addEmployee('Cristian');
it.addEmployee('Katherine');
it.addEmployee('Allan');
// it.employees[3] = 'Yudis';
it.printEmployeeInformation();

// const accounting = new AccountingDepartment( '2389238', [] );
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log( accounting, accounting2 );

accounting.mostRecentReport = 'Year End Report'; // It´s defined with a equal sign
accounting.addReport( 'Something went wrong...' );
console.log( accounting.mostRecentReport );

accounting.addEmployee( 'Yudis' );
accounting.addEmployee( 'Alan' );

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const financeCopy = { name: 'Finance Copy', describe: finance.describe };

// financeCopy.describe();