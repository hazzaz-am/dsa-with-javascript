// https://www.w3schools.com/dsa/dsa_algo_countingsort.php

function countingSort(array) {
	let max = 0;

	for (let i = 0; i < array.length; i++) {
		max = Math.max(max, array[i]);
	}

	let countArray = new Array(max + 1).fill(0);
	let outputArray = [];

	for (let j = 0; j < array.length; j++) {
		countArray[array[j]]++;
	}

	for (let k = 0; k < countArray.length; k++) {
		console.log(countArray[k]);
		while (countArray[k] > 0) {
			outputArray.push(k);
			countArray[k]--;
		}
	}

	return outputArray;
}

function countSort(inputArray) {
	const N = inputArray.length;

	// Finding the maximum element of inputArray
	let M = 0;
	for (let i = 0; i < N; i++) {
		M = Math.max(M, inputArray[i]);
	}

	// Initializing countArray with 0
	const countArray = new Array(M + 1).fill(0);

	// Mapping each element of inputArray as an index of countArray
	for (let i = 0; i < N; i++) {
		countArray[inputArray[i]]++;
	}

	// console.log(countArray);
	// Calculating prefix sum at every index of countArray
	for (let i = 1; i <= M; i++) {
		countArray[i] += countArray[i - 1];
	}
  // [ 1, 1, 4, 6 ]

	// Creating outputArray from countArray
	const outputArray = new Array(N);
	for (let i = N - 1; i >= 0; i--) {
    outputArray[countArray[inputArray[i]] - 1] = inputArray[i];
    console.log(outputArray)
		countArray[inputArray[i]]--;
	}

	return outputArray;
}

const array = [2, 3, 0, 2, 3, 2];
console.log(countSort(array));
