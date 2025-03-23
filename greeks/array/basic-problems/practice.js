// reverse an array

function reverseArray(arr) {
	let i = 0;
	let j = arr.length - 1;

	while (j > i) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		i++;
		j--;
	}

	return arr;
}

function tempArray(arr) {
	const len = arr.length;
	let newArr = new Array(len);

	for (let i = 0; i < arr.length; i++) {
		newArr[i] = arr[len - i - 1];
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i] = newArr[i];
	}

	return arr;
}

function swappingElements(arr) {
	const len = arr.length;
	for (let i = 0; i < len / 2; i++) {
		let currLast = arr[len - i - 1];
		let temp = arr[i];
		arr[i] = currLast;
		currLast = temp;
	}

	return arr;
}

function recursiveFN(arr, left, right) {
	if (left >= right) {
		return;
	}

	[arr[left], arr[right]] = [arr[right], arr[left]];
	recursiveFN(arr, left + 1, right - 1);
}

function recursiveCall(arr) {
	recursiveFN(arr, 0, arr.length - 1);
	return arr;
}

console.log(recursiveCall([1, 2, 3, 4, 5, 6]));
