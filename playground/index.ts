// Filtering Data
// Selecting elements that match criteria

const products = [
	{ name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
	{ name: 'Toaster', price: 79.99, category: 'Kitchen', inStock: true },
	{
		name: 'Headphones',
		price: 149.99,
		category: 'Electronics',
		inStock: false,
	},
	{ name: 'Blender', price: 49.99, category: 'Kitchen', inStock: true },
	{ name: 'Monitor', price: 299.99, category: 'Electronics', inStock: true },
]

// 🐨 Filter to get only Electronics products
const electronics = products.filter(p => p.category === 'Electronics')

// 🐨 Filter to get products under $100
const affordable = products.filter(p => p.price < 100)

// 🐨 Filter to get products that are in stock
const available = products.filter(p => p.inStock)

// 🐨 Chain: get names of in-stock Electronics under $500
// 💰 Chain filters, then map to names
const inStockElectronicsUnder500 = products
	.filter(p => p.inStock && p.category === 'Electronics' && p.price < 500)
	.map(p => p.name)

console.log('Electronics:', electronics.map(p => p.name))
console.log('Affordable:', affordable.map(p => p.name))
console.log('In Stock:', available.map(p => p.name))
console.log('In-stock Electronics under $500:', inStockElectronicsUnder500)

// 🐨 Export your variables so we can verify your work
export { electronics, affordable, available, inStockElectronicsUnder500 }
