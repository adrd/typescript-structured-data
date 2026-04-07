// Object Destructuring
// Extracting values from objects into variables

type User = {
	id: string
	name: string
	email: string
	role: 'admin' | 'user'
	bio?: string,
	address: {
		street: string,
		city: string,
		state: string,
		zip: string,
		subAddress: {
			floor: string,
			unit: string
		}
	}
}

const user: User = {
	id: 'u123',
	name: 'Alice Johnson',
	email: 'alice@example.com',
	role: 'admin',
	address: {
		street: '1 Street',
		city: 'Los Angeles',
		state: 'CA',
		zip: '12345',
		subAddress: {
			floor: '3',
			unit: 'B'
		}
	}
}

// 🐨 Use object destructuring to extract `name` and `email` from `user`
const { name, email, ...restOfUser } = user

// 🐨 Use destructuring with renaming to extract `id` as `userId`
const { id: userId } = user

// 🐨 Use destructuring with a default value to extract `bio` with a fallback of 'No bio provided'
const { bio = "No bio provided" } = user

// other examples
const { 
	name: name1, 
	email: email1, 
	id: userId1, 
	bio: bio1 = "No bio provided", 
	address: { 
		street,
		city,
		state,
		zip,
		subAddress: {
			floor,
			unit
		}
	}
} = user

// 🐨 Create a function `formatUserCard` that uses destructuring in its parameter
// to extract name, email, and role, then returns a formatted string
// function formatUserCard(user: User): string {
// 	const { name, email, role } = user
// 	return `${name} - ${email} - ${role}`
// }

// or

function formatUserCard({ name, email, role }: User): string {
	return `${name} - ${email} - ${role}`
}

// Test - uncomment when ready
console.log(name) // 'Alice Johnson'
console.log(email) // 'alice@example.com'

console.log(restOfUser) // '{ id: "u123", role: "admin", address: { street: "1 Street", city: "Los Angeles", state: "CA", zip: "12345", subAddress: { floor: "3", unit: "B" } } }'

console.log(userId) // 'u123'
console.log(bio) // 'No bio provided'

console.log(name1) // 'Alice Johnson'
console.log(street) // '1 Street'
console.log(unit) // 'B'

console.log(formatUserCard(user))

// 🐨 Export your variables and functi// 💰 exportcan verify your work
export { name, email, userId, bio, formatUserCard }
