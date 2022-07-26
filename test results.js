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
// works