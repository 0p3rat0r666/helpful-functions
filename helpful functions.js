//all the functions that could be helpful

// calculates tax of a price in texas
function calculateTexasTax(total) {
    let TaxRateInTexas = .0825;
    let tax = TaxRateInTexas * total;
    return total + tax;
};
console.log(calculateTexasTax(50));
// works

// prints the word and says how many letters are in it, could be used for names or words
function getLength(words) {
    console.log(words);
    console.log(words.length + ' letters');
};
getLength('hallo');
// works

// tells you which word is longer word
function longer(a, b) {
    if (a.length > b.length) {
        return a;
    } else {
        return b;
    }
};
console.log(longer('hallo', 'ja'));
// works

// tells you the longer array
function longer(array1, array2) {
    if (array1.length > array2.length) {
        return array1;
    } else {
        return array2;
    }
};
var german = [
    'hallo',
    'ficken',
    'ja',
    'nein',
    'was',
    'das',
    'die',
    'der',
    'frau',
    'frauen',
    'mann',
    'manner'
];
var english = [
    'hello',
    'fuck',
    'yes',
    'no',
    'what',
    'the',
    'woman',
    'man'
];
console.log(longer(german, english));
// works

//last letter
function lastLetter(word) {
    let lastLetter = word.length - 1;
    return word[lastLetter];
};
console.log(lastLetter('hallo'));
// works

// tells you if a word fits in a space
function check(space, word) {
    if (space.length !== word.length) {
        return false;
    }
    for (let i = 0; i < space.length; i++) {
        if (space[i] !== '-' && space[i] !== word[i]) {
            return false;
        }
    }
    return true;
};
console.log(check('-e--', 'test'));
// works

// spells out the inputted string letter by letter
function printCharacters(string) {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
};
printCharacters('hallo');
// works

// tells you the resolution of a screen
function totalPixels(w, h) {
    return w * h;
};
console.log(totalPixels(1080, 420));
// works

// adds the numbers in the array together
function sum(numberArray) {
    let output = 0;
    for (var element of numberArray) {
        output += element;
    }
    return output;
};
var numbers = [
    77,
    20,
    4,
    100
];
console.log(sum(numbers));
// works

// tells you if an array of tests has been failed
function checkTests(results) {
    for (var element of results) {
        if (element === 'fail') {
            return 'failed';
        }
    }
    return results.length + ' results passed';
};
var test = [
    'passed',
    'passed',
    'passed',
    'fail',
    'passed'
];
console.log(checkTests(test));
// worksS