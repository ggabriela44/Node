
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

function getRandomIntArray(min, max, length) {
    const randomInts = [];
    for (let i = 0; i < length; i++) {
        randomInts.push(getRandomInt(min, max));
    }
    return randomInts;
}

module.exports = {
    getRandomInt,
    getRandomString,
    getRandomIntArray,
};
