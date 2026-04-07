// Object Keys and Values
// Turning object data into arrays

const inventory = {
	apples: 12,
	oranges: 8,
	bananas: 0,
	mangoes: 4,
}

// 🐨 Use Object.keys to get an array of item names
const itemNames: Array<string> = Object.keys(inventory)

// 🐨 Use Object.values to get an array of quantities
const quantities: Array<number> = Object.values(inventory)

// 🐨 Use the quantities array to compute the total quantity
const totalQuantity: number = quantities.reduce((total, q) => (total + q), 0)

// or

// let totalQuantity: number = 0
// for (const quantity of Object.values(inventory)) {
// 	totalQuantity += quantity
// }

console.log('Item names:', itemNames)
console.log('Quantities:', quantities)
console.log('Total:', totalQuantity)

// 🐨 Export your variables so we can verify your work
export { itemNames, quantities, totalQuantity }
