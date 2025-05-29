// rotate an array

function rotateOneByOne(arr, times) {
	for (let i = 0; i < times; i++) {
		let lastElem = arr[arr.length - 1];
		for (let j = 0; j < arr.length; j++) {
			arr[arr.length - 1 - j] = arr[arr.length - 1 - (j + 1)];
		}
		arr[0] = lastElem;
	}
	return arr;
}

function usingTemporaryArray(arr, times) {
	const len = arr.length;
	let tempArr = new Array(len);
	times %= len;
	for (let i = 0; i < times; i++) {
		tempArr[i] = arr[len - times + i];
	}

	for (let i = 0; i < len - times; i++) {
		tempArr[times + i] = arr[i];
	}

	return tempArr;
}

function jugglingAlgorithm(arr, times) {
	const len = arr.length;
	times %= len;
	const cycles = G_C_D(len, times);

	for (let i = 0; i < cycles; i++) {
		let currIdx = i;
		let currElem = arr[currIdx];

		do {
			let nextIdx = (currIdx + times) % len;
			let nextElem = arr[nextIdx];

			arr[nextIdx] = currElem;
			currElem = nextElem;
			currIdx = nextIdx;
		} while (currIdx !== i);
	}

	return arr;
}

function G_C_D(a, b) {
	while (b !== 0) {
		console.log("from GCD");
		const temp = b;
		b = a % b;
		a = temp;
	}

	return a;
}

/**
 *
 * @param {Array} arr
 * @param {Number} times
 */
function recursionAlgorithm(arr, times) {
	const len = arr.length;
	times %= len;
	arr.reverse();

	customReverse(arr, 0, times - 1);
	customReverse(arr, times, len - 1);
	return arr;
}

function customReverse(arr, start, end) {
	while (start < end) {
		const temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
}

console.log(recursionAlgorithm([1, 2, 3, 4, 5, 6], 2));
