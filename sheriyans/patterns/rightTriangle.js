const prompt = require("prompt-sync")();
const n = Number(prompt("Enter number "));

for (let i = 1; i <= n; i++) {
	for (let j = 1; j <= i; j++) {
		process.stdout.write("* ");
	}
	console.log();
}

for (let i = 1; i <= n; i++) {
	for (let j = 1; j <= i; j++) {
		process.stdout.write(j + " ");
	}
	console.log();
}

for (let i = 1; i <= n; i++) {
	let ascii = 65;
	for (let j = 1; j <= i; j++) {
		process.stdout.write(String.fromCharCode(ascii) + " ");
		ascii++;
	}
	console.log();
}

// Answer:

// * 
// * *
// * * *
// * * * *
// * * * * *

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5 

// A
// A B
// A B C
// A B C D
// A B C D E