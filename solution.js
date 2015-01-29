function range(start, end, step) {
  if (typeof end === 'undefined') return range(0, start, step);
  if (typeof step === 'undefined') return range(start, end, 1);

  return (function iter(start, end, step, acc) {
    if (step * (end - start) < 0) {
      return acc;
    } else {
      return iter(start + step, end, step, acc.concat(start));
    }
  })(start, end, step, []);
}

function sum(numbers) {
  return numbers.reduce(function (acc, i) { return acc + i; }, 0)
}

function reverseArray(arr) {
  return arr.reduce(function (acc, i) { return [i].concat(acc); }, [])
}

function reverseArrayInPlace(arr) {
  for (var i = 0; i < ~~(arr.length/2); ++i) {
    arr[arr.length - i - 1] = [arr[i], arr[i] = arr[arr.length - i - 1]][0];
  }
  return arr;
}

function arrayToList(arr) {
  return reverseArray(arr).reduce(function (acc, i) { return prepend(i, acc); }, null )
}

function listToArray(list) {
  return (function iter(list, acc) {
    return !list ? acc : iter(list.rest, acc.concat(list.value));
  })(list, []);
}

function prepend(item, list) {
  return { value: item, rest: list };
}

function nth(n, list) {
  if (n == 0) {
    return list && list.value;
  } else if (list) {
    return nth(n-1, list.rest);
  }
}

function deepEqual(a, b) {
  // Yes, I consulted with underscore.
  // Yes, I don't care of +0, -0 and NaN.
  // Yes, I don't care about different constructors.
  // Yes, I don't care about arrays.
  // Yes, I don't care about Regex and Date.
  // Continous improvement will move me closer and closer to underscore.

  if (a === b) return true;
  if (a == null || b == null) return a === b;

  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    case '[object String]': return '' + a === '' + b;
    case '[object Number]':
    case '[object Boolean]': return +a === +b;
  }

  var names = Object.getOwnPropertyNames(a);
  if (names.length !== Object.getOwnPropertyNames(b).length) return false;

  return names.every(function (k) {
    return b.hasOwnProperty(k) && deepEqual(a[k], b[k]);
  });
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
