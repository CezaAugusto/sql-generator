'use strict'
function swap (array, indexTo, indexFrom) {
    const tmp = array[indexFrom]
    array[indexFrom] = array[indexTo]
    array[indexTo] = tmp
}

function sort (array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j][0] > array[j + 1][0]) {
                swap(array, j, j + 1)
            }
        }
    }
    return array
}

module.exports = { sort }