// Inventory Analysis
// Iterating and filtering arrays

type Product = {
	name: string
	price: number
	inStock: boolean
}

const products: Array<Product> = [
	{ name: 'Laptop', price: 999.99, inStock: true },
	{ name: 'Mouse', price: 29.99, inStock: true },
	{ name: 'Keyboard', price: 79.99, inStock: false },
	{ name: 'Monitor', price: 299.99, inStock: true },
	{ name: 'Webcam', price: 49.99, inStock: false },
]

// 🐨 Use for...of to log each product's name and price
console.log('All products:')
for (const product of products) {
	console.log(`${product.name} - ${product.price}`)
}

// 🐨 Create an array of products that are in stock
// const inStockProducts: Array<Product> = []
// for (const product of products) {
// 	if (product.inStock) {
// 		inStockProducts.push(product)
// 	}
// }

const inStockProducts: Array<Product> = products.filter(p => p.inStock === true)

// 🐨 Count how many products cost more than $50
let expensiveCount: number = 0
for (const product of products) {
	if (product.price > 50) {
		expensiveCount++
	}
}

// Again, this works, but filter().length is more expressive
// const expensiveCount = products.filter(p => p.price > 50).length

console.log('In stock:', inStockProducts.length)
console.log('Expensive products:', expensiveCount)

// 🐨 Export your variables so we can verify your work
export { products, inStockProducts, expensiveCount }
