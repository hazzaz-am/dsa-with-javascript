/**
 *
 * @param {Array} arr
 * @param {Number} len
 * @returns Array
 *! Solution: 1
 */

function moveAllZeros(arr, len) {
	for (let i = 0; i < len; i++) {
		for (let j = i; j < len; j++) {
			if (arr[i] === 0 && arr[j] !== 0) {
				const temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

const arr = [1, 0, 2, 0, 5, 0, 10];

/**
 *
 * @param {Array} arr
 * @param {Number} len
 * @returns Array
 *! Solution: 1
 */

function moveAllZerosWithWhile(arr, len) {
	let count = 0;

	for (let i = 0; i < len; i++) {
		if (arr[i] !== 0) {
			arr[count++] = arr[i];
		}
	}

	while (count < len) {
		arr[count++] = 0;
	}
	return arr;
}

/**
 *
 * @param {Array} arr
 * @param {Number} len
 * @returns Array
 *! Solution: 3
 */

function moveAllZerosOneLoop(arr, len) {
	let count = 0;
	for (let i = 0; i < len; i++) {
		if (arr[i] !== 0) {
			[arr[i], arr[count]] = [arr[count], arr[i]];
			count++;
		}
	}

	return arr;
}
console.log(moveAllZerosOneLoop(arr, arr.length));
