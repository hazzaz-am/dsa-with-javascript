/**
 * 1. Take the first element as the smallest
 * 2. Compare it with the next elements if any smaller element is found then make it as the smallest
 * 3. Swap the smallest element with the first element
 * 4. Repeat the process for the remaining elements except the first element
 */

let arr = [5, 3, 4, 1, 2, 7, 6];
length = 7;

function selectionSort2(arr) {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[lowest] > arr[j]) {
				lowest = j;
			}
		}

		if (lowest !== i) {
			console.log(arr, i, lowest);
			let temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}

	return arr;
}

console.log(selectionSort2(arr));

function selectionSort2(array) {
	for (let i = 0; i < array.length; i++) {
		let min = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}

		if (min !== i) {
			let temp = array[i];
			array[i] = array[min];
			array[min] = temp;
		}
	}

	return array;
}

console.log(selectionSort2(arr));
