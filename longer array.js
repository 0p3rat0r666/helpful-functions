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