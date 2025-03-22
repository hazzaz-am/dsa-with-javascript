// Remove duplicates from Sorted Array

function removeDuplicates(arr) {
	return Array.from(new Set(arr));
}

function removeUnsortedDuplicates(arr) {
	let newArray = new Set();

	for (let i = 0; i < arr.length; i++) {
		if (!newArray.has(arr[i])) {
			newArray.add(arr[i]);
		}
	}
	return Array.from(newArray);
}

function expectedApproach(arr) {
	if (arr.length <= 1) {
		return arr.length;
	}

	let idx = 1;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] !== arr[i - 1]) {
			arr[idx++] = arr[i];
		}
	}

	return idx;
}

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newSize = expectedApproach(arr);
console.log(arr.slice(0, newSize));
