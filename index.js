function myEach(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        callback(value);
    }
    return collection;
}

function myMap(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let newArr = [];
    for (let value of values) {
        newArr.push(callback(value));
    }
    return newArr;
}

function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    if (acc === undefined) {
        acc = values[0];
        values = values.slice(1);
    }
    for (let value of values) {
        acc = callback(acc, value, collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        if (predicate(value)) return value;
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let value of values) {
        if (predicate(value)) result.push(value);
    }
    return result;
}

function mySize(collection) {
    let values = Array.isArray(collection) ? collection : Object.keys(collection);
    return values.length;
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

// Export functions for testing if needed
// module.exports = { myEach, myMap, myReduce, myFind, myFilter, mySize, myFirst, myLast, myKeys, myValues };
