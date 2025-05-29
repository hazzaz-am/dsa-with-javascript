// https://www.geeksforgeeks.org/reverse-an-array-in-javascript/

// 1. using reverse method
function reverseMethod(arr) {
	return arr.reverse();
}

// 2. using for loop
function usingForLoop(arr) {
	for (let i = 0; i < arr.length / 2; i++) {
		let temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}

	return arr;
}

// using recursion
function usingRecursion(arr) {
	if (arr.length === 0) {
		return [];
	}

	return [arr.pop()].concat(usingRecursion(arr));
}

// using reduce method
function usingReduce(arr) {
	return arr.reduce((acc, curr) => {
		return [curr, ...acc];
	}, []);
}

// using list in first out
function usingLiFo(arr) {
	let reversedArray = [];

	while (arr.length > 0) {
		reversedArray.push(arr.pop());
	}

	return reversedArray;
}

console.log(usingLiFo([1, 2, 3, 4, 5, 6]));
