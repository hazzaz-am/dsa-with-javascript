function charCount(str) {
	// Input Validation
	if (typeof str !== "string") {
		throw new TypeError("Input must be string");
	}

	// use reduce to count the alphabet
	return str
		.toLowerCase()
		.split("")
		.reduce((acc, char) => {
			// use regex test only once by storing the result
			if (/[a-z0-9]/.test(char)) {
				acc[char] = (acc[char] || 0) + 1;
			}
			return acc;
		}, {});
}

// Test Cases
const testCases = ["hello Everyone,", "12345", "^^*$nice & and attractive"];

testCases.forEach((test) => {
	console.log(`\nInput - ${test}`);
	console.log(`Result -`, charCount(test));
});

// Error case
try {
	charCount(12345);
} catch (error) {
	console.log(`\nInput - ${12345}`);
	console.error("Error", error.message);
}
