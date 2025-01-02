// 1st Way
const str = "hello Everyone,";

/**
 *
 * @param {String} str
 */

function charCount1(str) {
	let obj = {};

	for (let i = 0; i < str.length; i++) {
		let char = str[i].toLowerCase();

		if (/[a-zA-Z0-9]/.test(str[i])) {
			if (obj[char] > 0) {
				obj[char]++;
			} else {
				obj[char] = 1;
			}
		}
	}

	return obj;
}

// 2nd Way
/**
 * Counts the occurrence of alphanumeric characters in a string (case-insensitive)
 * @param {string} str - The input string to analyze
 * @returns {Object.<string, number>} An object with characters as keys and their counts as values
 * @throws {TypeError} If input is not a string
 */

function charCount(str) {
	// Input validation
	if (typeof str !== "string") {
		throw new TypeError("Input must be a string");
	}

	// Use reduce instead of for loop for cleaner code
	return str
		.toLowerCase()
		.split("")
		.reduce((acc, char) => {
			// Use regex test only once by storing the result
			if (/[a-z0-9]/.test(char)) {
				acc[char] = (acc[char] || 0) + 1;
			}
			return acc;
		}, {});
}

// Test cases
const testCases = [
	"hello Everyone,",
	"12345",
	"Special @#$ Characters!",
	"", // Empty string test
];

testCases.forEach((test) => {
	console.log(`\nInput: "${test}"`);
	console.log("Result:", charCount(test));
});

// Error case
try {
	charCount(123); // Should throw TypeError
} catch (error) {
	console.error("Error:", error.message);
}
