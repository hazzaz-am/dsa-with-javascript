const prompt = require("prompt-sync")();
const n = Number(prompt("Enter number "));

for (let i = 1; i <= n; i++) {
	for (let j = 1; j <= n; j++) {
		process.stdout.write("* ");
	}
	console.log();
}

// Ans:
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 