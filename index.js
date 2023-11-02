// Assignment 1


function writeCards(names, event) {
    const newNames = [];
    for (let i = 0; i < names.length; i++) {
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newNames;
}

writeCards(["Buffy", "Neville"], "birthday");

//Assignment 2

function countDown(count) {
    while (count >= 0) {
        console.log(count--);
    }
}

countDown(10);