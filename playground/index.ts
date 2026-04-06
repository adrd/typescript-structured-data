// Error Pages
// Computed property names in object literals

const notFoundKey = '404-status'
const serverErrorKey = '500-status'

const notFoundPath = '/not-found'
const serverErrorPath = '/server-error'

// 🐨 Create an `errorPages` object literal that uses computed property names
// for the keys above and assigns the matching paths as values
const errorPages = {
	[notFoundKey]: notFoundPath,
	[serverErrorKey]: serverErrorPath
}

// 🐨 Export your variables so we can verify your work
export { errorPages }
