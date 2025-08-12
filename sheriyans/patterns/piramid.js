const prompt = require("prompt-sync")();
const n = Number(prompt("Enter number "));

// base piramid
function basePiramid(n) {
	for (let i = 1; i <= n; i++) {
		let spaces = " ".repeat(n - i);
		let stars = "* ".repeat(i);
		console.log(spaces + stars);
	}
}
// basePiramid(n);
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// reverse piramid
function reversePiramid(n) {
	for (let i = n; i >= 1; i--) {
		let spaces = " ".repeat(n - i);
		let stars = "* ".repeat(i);
		console.log(spaces + stars);
	}
}

// reversePiramid(n);
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

function rightSidePiramid(n) {
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n - i; j++) {
			process.stdout.write("  ");
		}

		for (let j = 1; j <= i; j++) {
			process.stdout.write("* ");
		}

		console.log();
	}
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			process.stdout.write("  ");
		}

		for (let j = 1; j <= n - i; j++) {
			process.stdout.write("* ");
		}

		console.log();
	}
}

// rightSidePiramid(n);
//         *
//       * *
//     * * *
//   * * * *
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

function leftSidePiramid(n) {
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			process.stdout.write("* ");
		}

		for (let j = 1; j <= n - i; j++) {
			process.stdout.write("  ");
		}

		console.log();
	}

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n - i; j++) {
			process.stdout.write("* ");
		}

		for (let j = 1; j <= i; j++) {
			process.stdout.write("  ");
		}

		console.log();
	}
}

leftSidePiramid(n);
// *
// * *       
// * * *     
// * * * *   
// * * * * * 
// * * * *   
// * * *     
// * *       
// *