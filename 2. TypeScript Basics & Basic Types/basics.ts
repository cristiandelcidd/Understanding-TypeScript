function add( a: number, b: number, showResult: boolean, phrase: string ) {
    const result = a + b;
    if( showResult ) {
        console.log( phrase + result );
    } else {
        return result;
    }
}

const number1 = 58;
const number2 = 4;
const printResult = true
const resultPhrase = 'Result is ';

add( number1, number2, printResult, resultPhrase );