export {}

/**
 * Interface for the date format options
 */
interface DateFormatOptions {
    /**
     * Property for the day format options
     */
    day: Intl.DateTimeFormatOptions['day']
    /**
     * Property for the month format options
     */
    month: Intl.DateTimeFormatOptions['month']
    /**
     * Property for the year format options
     */
    year: Intl.DateTimeFormatOptions['year']
}

/**
 * Function to formatDate and return it as string
 * @param d - Date or String value to format it
 * @param formatOptions - {@link DateFormatOptions}. By default `{ day: '2-digit', month: '2-digit', year: 'numeric' }`
 * @param separator - Character used to separate day, month and year. By default "/"
 * @returns The formatted date
 */
function formatDate(
    d: Date | String,
    formatOptions?: DateFormatOptions | null,
    separator?: string | null
): string {
    const options = formatOptions || { day: '2-digit', month: '2-digit', year: 'numeric' }
    const separate = separator || '/'

    const date = new Date(d as string)
    const day = new Intl.DateTimeFormat('en', { day: options.day }).format(date)
    const month = new Intl.DateTimeFormat('en', { month: options.month }).format(date)
    const year = new Intl.DateTimeFormat('en', { year: options.year }).format(date)

    return `${day}${separate}${month}${separate}${year}`
}

declare global {
    interface String {
        /**
         * It uses {@link Number} to return the numeric value of the string
         * @returns The numeric value of the string
         */
        toNumber(this: String): number
        /**
         * Ignoring case, returns `true` if the string is equal to "true"
         * @returns `true` if the string is equal to "true", ignoring case, and `false` otherwise
         */
        toBoolean(this: String | never): Boolean
        /**
         * If the string is equal to "true", returns `true`, if it's equal to "false", returns `false`
         * @returns `true` if the string is equal to "true", `false` if it is equal to "false"
         * @throws {@link Error} if the string is not equal to "true" nor "false"
         */
        toBooleanStrict(this: String): Boolean
        /**
         * If the string is equal to "true", returns `true`, if it's equal to "false", returns `false`, otherwise returns `null`
         * @returns `true` if the string is equal to "true", `false` if it is equal to "false" and `null` otherwise
         */
        toBooleanStrictOrNull(this: String): Boolean | null
        /**
         * Returns the formatted date as string
         * @param formatOptions - {@link DateFormatOptions}. By default `{ day: '2-digit', month: '2-digit', year: 'numeric' }`
         * @param separator - Character used to separate day, month and year. By default "/"
         * @returns The formatted date
         */
        toFormattedDate(this: String, formatOptions?: DateFormatOptions | null, separator?: string | null): string
        /**
         * It uses {@link RegExp} to return the regular expression object created
         * @returns Regular expression object created from the string
         */
        toRegExp(this: String): RegExp
        /**
         * Returns `true` if the string contains the sentence specified
         * @param s - The sentence to search for in the string
         * @param ignoreCase - true to ignore case. By default `false`
         * @returns `true` if the string contains the sentence specified, otherwise `false`
         */
        contains(this: String, s: string, ignoreCase?: boolean): boolean
        /**
         * Returns `true` if the string ends with the sentence specified
         * @param s - The sentence to search for in the end of string
         * @param ignoreCase - `true` to ignore case. By default `false`
         * @returns `true` if the string ends with the sentence specified, otherwise `false`
         */
        endsWith(this: String, s: string, ignoreCase?: boolean): boolean
        /**
         * Returns `true` if the string has not characters
         * @returns `true` if the string is empty, otherwise `false`
         */
        isEmpty(this: String): boolean
        /**
         * Returns `true` if the string is empty or contains whitespace characters
         * @returns `true` if the string is empty or contains whitespace characters, otherwise `false`
         */
        isBlank(this: String): boolean
        /**
         * Returns `true` if the string has characters
         * @returns `true` if the string is not empty, otherwise `false`
         */
        isNotEmpty(this: String): boolean
        /**
         * Returns `true` if the string is not empty and does not contain whitespace characters
         * @returns `true` if the string is not empty and not contains whitespace characters, otherwise `false`
         */
        isNotBlank(this: String): boolean
    }
    interface Number {
        /**
         * Returns `true` if the number is a decimal value
         * @returns `true` if the number is a decimal value, otherwise `false`
         */
        isDecimal(this: Number): Boolean
        /**
         * It uses {@link parseInt} to return an integer of the specified radix.
         * @param radix - A value between 2 and 36 that specifies the base of the number in `string`
         * @returns An integer of the specified radix
         */
        toInt(this: Number, radix?: number): number
        /**
         * It uses {@link Math.pow} to return the result of the exponentiation
         * @param x - The exponent
         * @returns The result of the exponentiation
         */
        pow(this: Number, x: number): number
    }
    interface Date {
        /**
         * Returns the formatted date as string
         * @param formatOptions - {@link DateFormatOptions}. By default `{ day: '2-digit', month: '2-digit', year: 'numeric' }`
         * @param separator - Character used to separate day, month and year. By default "/"
         * @returns The formatted date
         */
        toFormattedDate(this: Date, formatOptions?: DateFormatOptions | null, separator?: string | null): string
    }
    interface Array<T> {
        /**
         * Returns an array containing all elements of the original array plus the specified elements
         * @param elements - Elements to add to the original array
         * @returns The new array containing the new elements
         */
        plus(this: Array<T>, elements: Array<T>): Array<T>
        /**
         * Returns an array containing all elements of the original array except the specified elements
         * @param elements - Elements to remove from the original array
         * @returns The new array without the specified elements
         */
        minus(this: Array<T>, elements: Array<T>): Array<T>
        /**
         * Returns `true` if the array has not elements
         * @returns `true` if the array is empty, `false` otherwise
         */
        isEmpty(this: Array<T>): Boolean
        /**
         * Returns `true` if the array contains the element specified
         * @param element - The element to search for in the string
         * @returns `true` if the array contains the element specified, otherwise `false`
         */
         contains(this: Array<T>, element: T): Boolean
         /**
          * Returns the smallest element in the array or `null` if the array has not elements
          * @returns the smallest element or `null` if the array is empty
          */
         minOrNull(this: Array<number>): number | null
         /**
          * Returns the largest element in the array or `null` if the array has not elements
          * @returns the largest element or `null` if the array is empty
          */
         maxOrNull(this: Array<number>): number | null
         /**
          * Returns an average of the elements in the array
          * @returns an average of elements in the array
          */
         average(this: Array<number>): number
         /**
          * Returns the sum of all elements in the array
          * @returns the sum of elements in the array
          */
         sum(this: Array<number>): number
         /**
          * Returns the number of elements in the array
          * @returns the count of elements in the array
          */
         count(this: Array<number>): number
         /**
          * Returns `true` if the array has elements
          * @returns `true` if the array is not empty, otherwise `false`
          */
         isNotEmpty(this: Array<T>): boolean
         /**
          * Removes all elements from the array
          */
         clear(this: Array<T>): void
    }
}

String.prototype.toNumber = function(this) { return Number(this) }
String.prototype.toBoolean = function(this) { return this!.toLowerCase() == 'true' }
String.prototype.toBooleanStrict = function(this) {
    if (this == 'true') return true
    else if (this == 'false') return false
    else throw new Error("The string doesn't represent a boolean value")
}
String.prototype.toBooleanStrictOrNull = function(this) {
    if (this == 'true') return true
    else if (this == 'false') return false
    else return null
}
String.prototype.toFormattedDate = function(this, formatOptions, separator) { return formatDate(this, formatOptions, separator) }
String.prototype.toRegExp = function(this) { return RegExp(this as string) }
String.prototype.contains = function(this, s, ignoreCase = false) {
    if (ignoreCase) return this.toLowerCase().indexOf(s.toLowerCase()) >= 0
    else return this.indexOf(s) >= 0
}
String.prototype.endsWith = function(this, s, ignoreCase = false) {
    if (ignoreCase) return this.toLowerCase().indexOf(s.toLowerCase()) == this.length - 1
    else return this.indexOf(s) == this.length - 1
}
String.prototype.isEmpty = function() { return this == '' }
String.prototype.isBlank = function() { return !this.replace(/\s/g, '').length }
String.prototype.isNotEmpty = function() { return !this.isEmpty() }
String.prototype.isNotBlank = function() { return !this.isBlank()  }

Number.prototype.isDecimal = function(this) { return this as number % 1 != 0 ? true : false }
Number.prototype.toInt = function(this, radix) { return parseInt(this.toString(), radix) }
Number.prototype.pow = function(this, x) { return Math.pow(this as number, x) }

Date.prototype.toFormattedDate = function(this, formatOptions, separator) { return formatDate(this, formatOptions, separator) }

Array.prototype.plus = function(this, elements) { return [...this, ...elements] }
Array.prototype.minus = function(this, elements) {
    const newArray = [...this]
    elements.forEach(element => {
        const index = newArray.indexOf(element)
        if (index > -1) newArray.splice(index, 1)
    })
    return newArray
}
Array.prototype.isEmpty = function(this) { return this.length == 0 }
Array.prototype.contains = function(this, element) { return this.indexOf(element) >= 0 }
Array.prototype.minOrNull = function(this) { return this.isEmpty() ? null : Math.min(...this) }
Array.prototype.maxOrNull = function(this) { return this.isEmpty() ? null : Math.max(...this) }
Array.prototype.average = function(this) { return this.sum() / this.count() }
Array.prototype.sum = function(this) { return this.reduce((partialSum, a) => partialSum + a, 0) }
Array.prototype.count = function(this) { return this.length }
Array.prototype.isNotEmpty = function(this) { return !this.isEmpty() }
Array.prototype.clear = function(this) { this.length = 0 }