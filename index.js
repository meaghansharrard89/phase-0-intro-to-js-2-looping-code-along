// Assignment 1

const newNames = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newNames;
}

//Assignment 2

function countDown(count) {
    while (count >= 0) {
        console.log(count--);
    }
}