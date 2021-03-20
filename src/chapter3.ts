/*
	Contains the chapter 3 exercises.
*/

/*
	Guessing inferred types.
*/
function exercise1() {
	// Guess: number
	let a = 1042
	// Guess: string
	let b = 'apples and oranges'
	// Guess: type literal 'pineapples'
	const c = 'pineapples'
	// Guess: boolean[]
	let d = [true, true, false]
	// Guess: {type: string}
	let e = {type: 'ficus'}
	// Guess: [number, boolean]
	let f = [1, false] // Actual: (number | boolean)[]
	// Guess: number[]
	const g = [3]
	// Guess: any (maybe?)
	let h = null // Actual: any
}

/*
	Determining reason for error throwing.

	Comment out this function to compile code.
*/
function exercise2() {
	// Errors because i is a type literal.
	let i: 3 = 3
	i = 4

	// Errors because pushing a string to a number[].
	let j = [1, 2, 3]
	j.push(4)
	j.push('5')

	// Errors because never is a subtype of number.
	let k: never = 4

	// Errors because unknown is less specific than number and has no arithmetic
	// operators.
	let l: unknown = 4
	let m = l*2
}

exercise1()
