function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (isNaN(x)) {
    return 0; //Handle NaN case
  } else if (typeof x !== 'number') {
    return 0; // Handle non-number cases
  }

  return x + 1;
}

console.log(foo(10)); // Output: 11
console.log(foo(null)); // Output: 0
console.log(foo(NaN));  //Output: 0
console.log(foo('abc')); //Output: 0