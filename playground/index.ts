// Task Board
// Naming object types

// 🐨 Create a type called `Task` with:
// - id: number
// - title: string
// - completed: boolean
type Task = {
	id: number,
	title: string,
	completed: boolean
}

// 🐨 Create a `firstTask` and `secondTask` using the Task type
// - firstTask: id 1, title "Write tests", completed false
// - secondTask: id 2, title "Ship release", completed true
const firstTask: Task = {
	id: 1,
	title: "Write tests",
	completed: false
}

const secondTask: Task = {
	id: 2,
	title: "Ship release",
	completed: true
}

// 🐨 Export your variables so we can verify your work
export { firstTask, secondTask }
