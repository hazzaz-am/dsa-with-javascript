function sumOfNum(n) {
	if (n < 0) return 0;

	return n + sumOfNum(n - 1);
}
// console.log(sumOfNum(10));

// find some of array
function sumOfArray(arr) {
	if (arr.length === 0) return 0;

	const rest = arr.slice(1);

	return arr[0] + sumOfArray(rest);
}

//  find some of array:
// Time Complexity => O(n^2)
// Space Complexity => O(n)

// another way some of array
const helperFunction = (arr, index) => {
	if (arr.length === index) return 0;

	return arr[index] + helperFunction(arr, index + 1);
};

function someOfArray2(arr) {
	return helperFunction(arr, 0);
}

const array = new Array(8000).fill(1);

const startFirst = Date.now();
console.log(sumOfArray(array));
const endFirst = Date.now();
console.log(`First function takes, ${endFirst - startFirst}`);

const startSecond = Date.now();
console.log(someOfArray2(array));
const endSecond = Date.now();
console.log(`Second function takes, ${endSecond - startSecond}`);

//  find some of array 2:
// Time Complexity => bigO(n)
// Space Complexity => bigO(n)
