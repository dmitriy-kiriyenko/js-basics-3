function range(start, end, step) {
  if (typeof end === 'undefined') return range(0, start, step);
  if (typeof step === 'undefined') return range(start, end, 1);
  if (step * (end - start) < 0) return [];
  return [start].concat(range(start + step, end, step));
}

function sum(numbers) {
  return numbers.reduce(function (acc, i) { return acc + i; }, 0)
}

function reverseArray(arr) {
  return arr.reduce(function (acc, i) { return [i].concat(acc); }, [])
}

function reverseArrayInPlace(arr) {
  // Write a function that does what the reverse method does:
  // it modifies the array given as argument in order to reverse
  // its elements. It should not use the standard reverse method.
}

function arrayToList(arr) {
  // Objects, as generic blobs of values, can be used to build all
  // sorts of data structures. A common data structure is the list
  // (not to be confused with the array). A list is a nested set of
  // objects, with the first object holding a reference to the second,
  // the second to the third, and so on.
  // For example:
  //
  // var list = {
  //   value: 1,
  //   rest: {
  //     value: 2,
  //     rest: {
  //       value: 3,
  //       rest: null
  //     }
  //   }
  // };
  //
  // Write a function arrayToList that builds up a data structure like
  // the previous one when given [1, 2, 3] as argument. It should use
  // helper function prepend.
}

function listToArray(list) {
  // Write a function that produces an array from a list
}

function prepend(item, list) {
  // Write a function which takes an element and a list and creates a new list
  // that adds the element to the front of the input list.
}

function nth(n, list) {
  // Write which takes a list and a number and returns the element at the
  // given position in the list, or undefined when there is no such element.
  // It should be recursive.
}

function deepEqual(a, b) {
  // The == operator compares objects by identity. But sometimes,
  // you would prefer to compare the values of their actual properties.
  //
  // Write a function, deepEqual, that takes two values and returns true
  // only if they are the same value or are objects with the same
  // properties whose values are also equal when compared with
  // a recursive call to deepEqual.
}

module.exports = {
  range: range,
  sum: sum,
  reverseArray: reverseArray,
  reverseArrayInPlace: reverseArrayInPlace,
  arrayToList: arrayToList,
  listToArray: listToArray,
  prepend: prepend,
  nth: nth,
  deepEqual: deepEqual
}
