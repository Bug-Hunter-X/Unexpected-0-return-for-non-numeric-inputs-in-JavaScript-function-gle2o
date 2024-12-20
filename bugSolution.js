function foo(x) {
  if (typeof x !== 'number' || isNaN(x)) {
    throw new Error('Invalid input: Input must be a number.');
  } 
  return x + 1;
}

console.log(foo(10)); // Output: 11
//console.log(foo(null)); // Throws an error
//console.log(foo(NaN));  //Throws an error
//console.log(foo('abc')); // Throws an error