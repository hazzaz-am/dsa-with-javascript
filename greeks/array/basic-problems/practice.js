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

console.log(rotateOneByOne([1, 2, 3, 4, 5, 6], 2));
