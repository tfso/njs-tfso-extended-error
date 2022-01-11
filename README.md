# @tfso/extended-error
`ExtendedError` makes it easier to create `Error` with custom properties

## Installation
Install from the command line:
```
$ npm install @tfso/extended-error@1.0.0 --save
```

Install via package.json:
```
"@tfso/extended-error": "1.0.0"
```

## Contribution
### CI/CD
This package is build and auto version using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

Example **commit message**:
* `fix: <a message>` creates a patch `1.2.1` -> `1.2.2`
* `feat: <a message>` creates en minor `1.2.1` -> `1.3.0`
* `BREAKING CHANGE <a message>` creates a major  `1.2.1` -> `2.0.0`

## Usage

```javascript
const ExtendedError = require('@tfso/extended-error')

let error = new ExtendedError('Not found', {status:404})

console.log(error.message)                      // Not found
console.log(error.status)                       // 404
console.log(error instanceof Error)             // true 
console.log(error instanceof ExtendedError)     // true 
console.log(error.stack)                        // 'Error: Not found\n    at repl:1:9\n ...
```

This:
```javascript
throw new ExtendedError('Not found', {status:404})
```
is equivalent to:
```javascript
let error = new Error('Not found')
error.status = 400
throw error
```


# Credits
https://gist.github.com/slavafomin/b164e3e710a6fc9352c934b9073e7216