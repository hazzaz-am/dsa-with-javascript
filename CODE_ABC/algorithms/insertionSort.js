function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		for (let j = i; j > 0; j--) {
			console.log(array[j], array[j - 1]);
			if (array[j] < array[j - 1]) {
				[array[j], array[j - 1]] = [array[j - 1], array[j]];
			} else {
				break;
			}
		}
	}

	return array;
}

console.log(insertionSort([1, 2, 3, 4]));

function insertionSort2(array) {
	for (let i = 1; i < array.length; i++) {
		for (let j = i; j > 0; j--) {
			if (array[j] < array[j - 1]) {
				[array[j], array[j - 1]] = [array[j - 1], array[j]];
			} else {
				break;
			}
		}
	}

	return array;
}

console.log(insertionSort2([9, 1, 2, 8]));
