// Reducing Data
// Accumulating arrays into single values

const products = [
	{ name: 'Laptop', price: 999.99, category: 'Electronics' },
	{ name: 'Toaster', price: 79.99, category: 'Kitchen' },
	{ name: 'Headphones', price: 149.99, category: 'Electronics' },
	{ name: 'Blender', price: 49.99, category: 'Kitchen' },
	{ name: 'Monitor', price: 299.99, category: 'Electronics' },
]

// 🐨 Use reduce to sum all prices
const total: number = products.reduce((acc, product) => (acc + product.price), 0)

// 🐨 Use reduce to find the most expensive product
// 💰 You can use the first product as the initial value (products[0])
const mostExpensive = products.reduce(
	(max, product) => (product.price > max.price ? product : max), 
	products[0]
)

// 🐨 Use reduce to count products by category
// 💰 The accumulator can be an object ({} as Record<string, number>)
const init: any = {}
const countByCategory = products.reduce((acc, product) => {

	console.log(acc)

	acc[product.category] = (acc[product.category] || 0) + 1

	return acc

}, init)

// or

// const countByCategory: Record<string, number> = products.reduce(
// 	(acc, p) => ({
// 		...acc,
// 		[p.category]: (acc[p.category] || 0) + 1,
// 	}),
// 	{} as Record<string, number>,
// )

console.log('Total:', total)
console.log('Most expensive:', mostExpensive.name)
console.log('By category:', countByCategory)

// 🐨 Export your variables so we can verify your work
export { total, mostExpensive, countByCategory }
