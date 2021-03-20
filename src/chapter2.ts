/*
	The test and exercises for chapter 2.
*/

function hello() {
	console.log('Hello TypeScript!')
}

/*
	Getting (and then fixing) my first TypeError, in addition to hovering over 
	to see inferred types.
*/
function exercise() {
	let a = 1 + 2
	let b = a + 3
	let c = {
		apple: a,
		banana: b
	}
	let d = c.apple * 4
	console.log(d)
	let e = "Bartholomew"
	console.log(e + "'s apple")
}

hello()
exercise()
