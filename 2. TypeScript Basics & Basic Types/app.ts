let userInput: unknown;
let userName: string;

userInput = 24;
userInput = 'Cristian';
if ( typeof userInput === 'string' ) {
    userName = userInput;
}

function generateError( message: string, code: number ): never {
    throw { message, errorCode: code };
}

generateError( 'Ocurrió un error', 400 );