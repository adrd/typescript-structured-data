// Object Entries and fromEntries
// Transforming object values with array methods

const priceBySku = {
	'sku-1': 1299,
	'sku-2': 499,
	'sku-3': 2500,
}

// 🐨 Use Object.entries to get an array of [sku, price] pairs
const entries: Array<[string, number]> = Object.entries(priceBySku)

// 🐨 Create discounted entries with 10% off (rounded to the nearest whole number)
const discountedEntries: Array<[string, number]> = entries.map(([sku, price]) => ([sku, Math.round(price * 0.9)]))

// 🐨 Use Object.fromEntries to create a discountedPrices object
const discountedPrices = Object.fromEntries(discountedEntries)

console.log('Entries:', entries)
console.log('Discounted:', discountedPrices)

// 🐨 Export your variables so we can verify your work
export { entries, discountedEntries, discountedPrices }
