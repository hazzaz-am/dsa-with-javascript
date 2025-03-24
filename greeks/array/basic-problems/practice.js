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

console.log(usingTemporaryArray([1, 2, 3, 4, 5, 6], 8));
