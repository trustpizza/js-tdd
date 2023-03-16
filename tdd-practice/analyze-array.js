function analayzeArray(array) {
    const obj = {
        average: findAverage(array),
        min: findMinimum(array),
        max: findMaximum(array),
        length: findLength(array)
    }
    return obj;
}

function findAverage(array) {
    const average = array.reduce((a,b) => a + b)/array.length;

    return average;
}

function findMinimum(array) {
    return Math.min(...array);
}

function findMaximum(array) {
    return Math.max(...array);
}

function findLength(array) {
    return array.length
}

module.exports = analayzeArray