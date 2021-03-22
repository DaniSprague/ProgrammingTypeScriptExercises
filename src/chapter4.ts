/*
	Contains the chapter 4 exercises.
*/


// Exercise 3. Adding third overload (just destination).


type Reservation = { destination: string }

type Reserve = {
	(from: Date, to: Date, destination: string): Reservation
	(from: Date, destination: string): Reservation
	(destination: string): Reservation
}

let reserve: Reserve = (
	fromOrDestination: Date | string,
	toOrDestination?: Date | string,
	destination?: string
) => {
	if (toOrDestination instanceof Date && destination !== undefined) {
		// Round trip
		return {destination: destination}
	} else if (typeof toOrDestination === 'string') {
		// One-way trip
		return {destination: toOrDestination}
	} else if (typeof fromOrDestination === 'string') {
		return {destination: fromOrDestination}
	}
	destination = "OOF, how'd you get here?"
	return {destination: destination}
}

console.log(reserve(new Date(), new Date(), "Location 1")) // { destination: 'Location 1' }
console.log(reserve(new Date(), "Location 2")) // { destination: 'Location 2' }
console.log(reserve("location 3")) // { destination: 'location 3' }


// Exercise 4. Making second arg required string.


function call<T extends unknown[], R, U>(
	f: (arg1: U, arg2: string, ...args: T) => R,
	arg1: U,
	arg2: string,
	...args: T
): R {
	return f(arg1, arg2, ...args)
}

function func1(arg1: number, arg2: string): void {}

function func2(arg1: string, arg2: string): void {}

function func3(arg1: number, arg2: string, arg3: number): void {}

function func4(arg1: number, arg2: number, arg3: number): void {}

call(func1, 2, "arg")
call(func2, "arrg", "arrrg")
call(func3, 1, "arrrrg", 2)
// call(func4, 1, 1.5, 2)


// Exercise 5. Implement is, an typesafe assertion function with 2+ args.


function is<T>(arg1: T, arg2: T, ...args: T[]) {
	let matches = arg1 === arg2
	for (const arg of args) {
		matches = matches && arg === arg1
	}
	return matches
}

console.log(is('string', 'otherstring')) // false
console.log(is(true, false)) // false
console.log(is(42, 42)) // true
//console.log(is(10, 'foo')) // error
console.log(is([1], [1, 2], [1, 2, 3])) // false
console.log(is(1, 1, 1)) // true
console.log(is(1, 1, 2, 1)) // false
//console.log(is(1, 1, 1, "1", 1)) // error
