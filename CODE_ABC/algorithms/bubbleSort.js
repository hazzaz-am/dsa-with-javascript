/**
 * 1. Check the if the length is 1 than stop the loop
 * 2. check if the first element is greater tha second element than swap them
 * 3. if the first element is less than second element than move to the next element
 * 4. after it reaches the end minus the length by 1
 * 5. repeat the process until the length is 1
 */
let arr = [1, 2, 3, 4];

/**
 * 1. Way to do it
 */
let length = arr.length;
let firstNum = 0;
let secondNum = 1;

while (length > 1) {
	if (secondNum < length) {
		if (arr[firstNum] <= arr[secondNum]) {
			if (secondNum === length - 1) {
				length = length - 1;
			}
			firstNum++;
			secondNum++;
		} else if (arr[firstNum] > arr[secondNum]) {
			if (secondNum === length - 1) {
				length = length - 1;
			}
			let temp = arr[firstNum];
			arr[firstNum] = arr[secondNum];
			arr[secondNum] = temp;
			firstNum++;
			secondNum++;
		}
	} else {
		firstNum = 0;
		secondNum = 1;
	}
}

/**
 * 2. Way to do it
 */
function bubbleSort(arr) {
	let isSwapped = false;
	for (let i = 0; i < arr.length; i++) {
		isSwapped = false;
		for (let j = 0; j < arr.length - i - 1; j++) {
			console.log(arr, arr[j], arr[j + 1]);
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				isSwapped = true;
			}
		}
		if (!isSwapped) break;
	}

	return arr;
}

console.log(bubbleSort(arr));

/**
 * 3. Way to do it
 */

while (length > 1) {
	let newLength = 0;
	for (let i = 1; i < length; i++) {
		if (arr[i - 1] > arr[i]) {
			[arr[i - 1], [arr[i]]] = [arr[i], [arr[i - 1]]];
			newLength = i;
		}
	}
	length = newLength;
}

console.log(arr);

function bubbleSort(array) {
	let swapped;
	for (let i = 0; i < array.length - 1; i++) {
		swapped = false;
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				console.log(array, array[j], array[j + 1]);
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				swapped = true;
			}
		}

		if (!swapped) break;
	}

	return array;
}

console.log(bubbleSort(arr));
