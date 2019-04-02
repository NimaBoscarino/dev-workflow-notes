var allArguments = process.argv
var justTheNumbers = allArguments.slice(2)

// console log all of the arguments!

console.log('PROCESS ARGV:', allArguments)

// only want everything but the first two. How do I do this?

console.log('SLICED!', justTheNumbers)

// some kind of for loop to go through the numbers

for (var i = 0; i < justTheNumbers.length; i++) {
	var number = justTheNumbers[i]
	console.log(number)
}