# data-types-extensions

[![NPM Version](https://img.shields.io/npm/v/data-types-extensions)](https://www.npmjs.com/package/data-types-extensions)

Package for using Kotlin-like extension functions in JavaScript and TypeScript.

## Installation

Install the package using NPM

```shell
npm i data-types-extensions
```

and import it directly.

```javascript
require("data-types-extensions")
```

You can also use ES Module syntax.

```javascript
import "data-types-extensions"
```

## Usage

### String

+ String.toBoolean()

```javascript
console.log("true".toBoolean()) // prints true
```

+ String.toFormattedDate(formatOptions, separator)

```javascript
console.log("06/10/2021".toFormattedDate({
    day: 'numeric',
    month: 'short',
    year: 'numeric'
}, '-')) // prints 13-Jun-2021
```

+ String.contains(s, ignoreCase)

```javascript
console.log("TypeScript".contains("script", true)) // prints true
```

+ String.endsWith(s, ignoreCase)

```javascript
console.log("JavaScript".endsWith("t")) // prints true
```

+ String.isEmpty()

```javascript
console.log("Go".isEmpty()) // prints false
```

### Number

+ Number.toInt()

```javascript
console.log(2021.6.toInt()) // prints 2021
```

+ Number.isDecimal()

```javascript
console.log(2021.6.isDecimal()) // prints true
```

### Array

+ Array\<T>\.plus(elements)

```javascript
console.log([0, 1, 2].plus([3, 4])) // prints [0, 1, 2, 3, 4]
```

+ Array\<T>\.minus(elements)

```javascript
console.log([0, 1, 2, 3, 4]).minus([3, 4]) // prints [0, 1, 2]
```

[See more functions.](https://github.com/Caballero-30/data-types-extensions/blob/master/src/index.ts)
