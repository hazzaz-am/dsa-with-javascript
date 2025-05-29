function checkLength1(arr) {
	if (arr.length <= 1) {
		return arr;
	}
}

//! Approach 1: Using the map() method

function usingMapMethod(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	let firstElement = arr[0];

	const newArray = arr.map((num, i) => {
		if (num === arr[arr.length - 1]) {
			return (num = firstElement);
		} else {
			return (num = arr[i + 1]);
		}
	});
	return newArray;
}

const arr = [4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//! Approach 2: Using the map() method

function approach2(arr) {
	checkLength1(arr);

	return arr.map((_, i, array) => array[(i + 1) % array.length]);
}

//! Approach 2: Using slice() method

function usingSliceMethod(arr) {
	checkLength1(arr);

	const slicedArray = arr.slice(1);
	return [...slicedArray, arr[0]];
}

//! Approach 3: Using shift() and push() method

function usingShiftPush(arr) {
	checkLength1(arr);

	arr.push(arr.shift());
	return arr;
}

//! Approach 4: Using for loop

function usingForLoop(arr) {
	checkLength1(arr);
	const firstElement = arr[0];

	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}

	arr[arr.length - 1] = firstElement;
	return arr;
}

//! Approach 5: Using destructuring assignment and the spread operator

function usingDestructuring(arr) {
	checkLength1(arr);

	const [first, ...rest] = arr;
	return [...rest, first];
}

//! Approach 6: Using the reduce() Method

function usingReduceMethod(arr) {
	checkLength1(arr);

	return arr
		.slice(1)
		.reduce((acc, curr) => [...acc, curr], [])
		.concat(arr[0]);
}

//! Approach 7: Using Array destructuring and Array.prototype.concat()

function usingConcat(arr) {
	checkLength1(arr);
	const [first, ...rest] = arr;
	return rest.concat(first);
}

console.log(usingReduceMethod(arr));
