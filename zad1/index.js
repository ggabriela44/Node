const randomUtils = require('./randomUtils');

const randomInt = randomUtils.getRandomInt(1, 100);
const randomString = randomUtils.getRandomString(10);
const randomIntArray = randomUtils.getRandomIntArray(1, 50, 5);

console.log('Losowa liczba całkowita:', randomInt);
console.log('Losowy ciąg znaków alfanumerycznych:', randomString);
console.log('Tablica losowych liczb całkowitych:', randomIntArray);
