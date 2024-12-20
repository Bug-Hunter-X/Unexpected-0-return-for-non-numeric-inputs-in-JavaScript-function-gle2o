# JavaScript Function Bug: Unexpected 0 Return for Non-Numeric Inputs

This repository demonstrates a common yet subtle bug in JavaScript functions that handle different input types. The `foo` function aims to add 1 to a numeric input, but it returns 0 for any input that isn't a number, including strings and other data types. Although it appears to work correctly for null and NaN, this can mask more severe errors that might otherwise be caught.

## Bug Description

The `foo` function doesn't explicitly handle all non-numeric data types leading to a potential misinterpretation of results.  It uses loose comparison (==) which may lead to unanticipated behaviour in some cases. This can lead to unexpected behavior and incorrect results.

## Solution

The solution in `bugSolution.js` uses stricter type checking and throws an error for invalid input types. This allows developers to catch these errors more effectively, making debugging and program maintenance easier.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` to review the code.
3. Run the JavaScript code and observe the output.  Test with various inputs (numbers, strings, null, NaN) to see the difference between the flawed function and the corrected version.
