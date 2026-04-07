// Unique Values with Set
// Removing duplicates

const tags = [
	'typescript',
	'data',
	'typescript',
	'arrays',
	'data',
	'objects',
]

// 🐨 Create a Set of unique tags
const uniqueTags: Set<string> = new Set(tags)

// 🐨 Check whether the set has the "typescript" tag
const hasTypeScript: boolean = uniqueTags.has("typescript")

// 🐨 Convert the set back into an array
const tagList: Array<string> = [...uniqueTags]

// or

// const tagList: Array<string> = Array.from(uniqueTags)

console.log('Unique tags:', tagList)
console.log('Has TypeScript:', hasTypeScript)

// 🐨 Export your variables so we can verify your work
export { uniqueTags, hasTypeScript, tagList }
