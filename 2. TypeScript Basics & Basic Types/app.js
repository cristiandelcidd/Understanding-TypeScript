var userInput;
var userName;
userInput = 24;
userInput = 'Cristian';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Ocurrió un error', 400);
