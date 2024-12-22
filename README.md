# Type 'string[]' is not assignable to type 'string'
This bug demonstrates a common type error in TypeScript.  The `greeter` function expects a single string argument, but an array of strings is passed.  This results in a type error because the array cannot be implicitly converted to a string.

## How to reproduce
1. Run `bug.ts`.
2. Observe the type error.

## Solution
The `bugSolution.ts` file provides a solution by explicitly handling the array of strings.