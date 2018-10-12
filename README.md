# extended-error
`ExtendedError` makes it easier to create `Error` with custom properties

## installation
```
npm install @tfso/extended-error
```

## Usage

```
const ExtendedError = require('extended-error')

let error = new ExtendedError('Not found', {status:404})

console.log(error.message)                      // Not found
console.log(error.status)                       // 404
console.log(error instanceof Error)             // true 
console.log(error instanceof ExtendedError)     // true 
console.log(error.stack)                        // 'Error: Not found\n    at repl:1:9\n ...
```

This:
```
throw new ExtendedError('Not found', {status:404})
```
is equivalent to:
```
let error = new Error('Not found')
error.status = 400
throw error
```


# Credits
https://gist.github.com/slavafomin/b164e3e710a6fc9352c934b9073e7216