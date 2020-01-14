// #anchor Locals
const minimumPasswordLength = 6;
const maximumPasswordLength = 24;

/**
 * #anchor generatePassword
 * @param {int} length 
 * @param {bool} lowercase 
 * @param {bool} uppercase 
 * @param {bool} number 
 * @param {bool} symbol 
 */
export function generatePassword(
    length = (minimumPasswordLength * 2),
    lowercase = true,
    uppercase = true,
    number = true,
    symbol = true,
)
{
    const randomGenerator = {
        lowercase:  _getRandomLowercaseLetter,
        uppercase:  _getRandomUppercaseLetter,
        number:     _getRandomNumber,
        symbol:     _getRandomSymbol
    };

    let generatedPassword = '';
    
    const generatorCount = (lowercase + uppercase + number + symbol);
    const generatorArray = [{lowercase}, {uppercase}, {number}, {symbol}].filter(generator => Object.values(generator)[0]);

    if (!generatorCount) {
        alert('Please select 1 or more configurations.');
        return;
    };

    if (length < minimumPasswordLength) {
        alert(`Password length must be greater than ${minimumPasswordLength} characters.`);
        return;
    } else if (length > maximumPasswordLength) {
        alert(`Password length does not exceed ${maximumPasswordLength} characters.`);
        return;
    }

    for (let i = 0; i < length; i += generatorCount) {
        generatorArray.forEach(gen => {
            const genName = Object.keys(gen)[0];
            generatedPassword += randomGenerator[genName]();
        });
    }
    
    const password = generatedPassword.slice(0, length);

    return password;
}

/**
 * #anchor _getRandomLowercaseLetter
 * @private
 */
function _getRandomLowercaseLetter() 
{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
} 

/**
 * #anchor _getRandomUppercaseLetter
 * @private
 */
function _getRandomUppercaseLetter()
{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

/**
 * #anchor _getRandomNumber
 * @private
 */
function _getRandomNumber()
{
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

/**
 * #anchor _getRandomSymbol
 * @private
 */
function _getRandomSymbol()
{
    const symbols = '!@#$%^&*(){}[]=<>/:;,._-+~|';
    
    return symbols[Math.floor(Math.random() * symbols.length)];
}