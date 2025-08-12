const prompt = require("prompt-sync")();
const n = Number(prompt("Enter number "));

for (let i = 1; i <= n; i++) {
	for (let j = n; j >= i; j--) {
		process.stdout.write("* ");
	}
	console.log();
}

for (let i = 1; i <= n; i++) {
	for (let j = 1; j <= n - i + 1; j++) {
		process.stdout.write("* ");
	}
	console.log();
}

// Answer:

// * * * * * 
// * * * * 
// * * *
// * *
// *