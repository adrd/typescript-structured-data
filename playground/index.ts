// Product Inventory
// Arrays of objects

// 🐨 Create a `Product` type alias with:
// - name: string
// - price: number
// - inStock: boolean
type Product = {
	name: string,
	price: number,
	inStock: boolean
}

// 🐨 Create a `products` array with `Product` objects
// Start with 2-3 products
const products: Array<Product> = [
	{ name: "Laptop", price: 20.99, inStock: true},
	{ name: "Mouse", price: 10.99, inStock: true},
	{ name: "Keyboard", price: 1.99, inStock: false}
]

// 🐨 Add a new product using push
products.push({name: "Monitor", price: 30.99, inStock: true })

// 🐨 Log the name of the first product from the array
console.log(`First product = ${products[0].name}`)
console.log(`Last product = ${products[products.length - 1].name}`)

// 🐨 Calculate the total value of all products (sum of prices)
// 💰 You'll need to iterate through the array
let totalValue = 0
for (const product of products) {
	totalValue += product.price
}

console.log(`Total inventory value: $${totalValue.toFixed(2)}`)

// 🐨 Export your variables so we can verify your work
export { products, totalValue }
