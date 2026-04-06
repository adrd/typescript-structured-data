// Rest Parameters
// Functions that accept variable numbers of arguments

// 🐨 Create a function `multiply` that:
// - Uses rest parameters to accept any number of numbers
// - Returns the product of all numbers (multiply them together)
// - Returns 1 if no arguments are provided
function multiply(...numbers: Array<number>): number {
	let product = 1

	for (const number of numbers) {
		product = product * number
	}

	return product
}

// or

// function multiply(...numbers: Array<number>): number {
// 	if (numbers.length === 0) 
// 		return 1

// 	return numbers.reduce((a, b) => a * b, 1)
// }

// 🐨 Create a function `logWithPrefix` that:
// - Takes a prefix string as the first parameter
// - Uses rest for remaining messages
// - Logs each message with the prefix
function logWithPrefix(prefix: string, ...messages: Array<string>): void {

	for (const message of messages) {
		console.log(`${prefix} ${message}`)
	}

}

// 🐨 Create a function `sum` that:
// - Uses rest parameters to collect numbers
// - Returns the sum of all numbers
// - Returns 0 if no arguments are provided
function sum(...numbers: Array<number>): number {
	let total = 0

	if (numbers.length === 0)
		return total

	for (const number of numbers) {
		total += number
	}

	return total
}

// or

// function sum(...numbers: Array<number>): number {
// 	return numbers.reduce((a, b) => a + b, 0)
// }

// 🐨 Create a function `mergeArrays` that:
// - Takes rest parameters of number arrays
// - Returns a single merged array using spread inside
function mergeArrays(...arrays: Array<Array<number>>): Array<number> {
	
	const result: Array<number> = []
	
	for (const array of arrays) {
		result.push(...array)
	}

	return result

}

// Test - uncomment when ready
console.log(multiply(2, 3, 4)) // 24
console.log(multiply(5)) // 5
console.log(multiply()) // 1
logWithPrefix('[INFO]', 'Starting', 'Processing', 'Done')
console.log(sum(1, 2, 3, 4)) // 10
console.log(mergeArrays([1, 2], [3, 4], [5])) // [1, 2, 3, 4, 5]

// 🐨 Export your functions so we can verify your work
export { multiply, sum, mergeArrays }
