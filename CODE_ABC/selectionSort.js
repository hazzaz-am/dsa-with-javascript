/**
 * 1. Take the first element as the smallest
 * 2. Compare it with the next elements if any smaller element is found then make it as the smallest
 * 3. Swap the smallest element with the first element
 * 4. Repeat the process for the remaining elements except the first element
 */

let arr = [1, 2, 3, 4];
// length = 7

// function selectionSort(arr) {
// 	let isSorted = false;
// 	for (let i = 0; i < arr.length; i++) {
// 		let min = i;
// 		isSorted = false;
// 		for (let j = i + 1; j < arr.length; j++) {
// 			console.log(arr, arr[i], arr[j]);
// 			if (arr[min] > arr[j]) {
// 				let temp = arr[min];
// 				arr[min] = arr[j];
// 				arr[j] = temp;
// 				isSorted = true;
// 			}
// 		}
// 		if (!isSorted) {
// 			break;
// 		}
// 	}
// 	return arr;
// }

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
