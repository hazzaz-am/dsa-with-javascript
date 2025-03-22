// generate all possible sub arrays

function generateAllPossibleSubarray(array) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = i; j < array.length; j++) {
			let arr = [];
			for (let k = i; k <= j; k++) {
				arr.push(array[k]);
			}
			result.push(arr);
		}
	}

	return result;
}

function recursiveApproach(arr, result, start, end) {
	if (end === arr.length) {
		return;
	} else if (start > end) {
		recursiveApproach(arr, result, 0, end + 1);
	} else {
		let subArray = [];
		for (let i = start; i < end; i++) {
			subArray.push(arr[i]);
		}
		subArray.push(arr[end]);
		result.push(subArray);
		recursiveApproach(arr, result, start + 1, end);
	}
}

function rcf(arr) {
	let result = [];
	recursiveApproach(arr, result, 0, 0);
	return result;
}

const arr = [1, 2, 3, 4];
console.log(rcf(arr, 0, 0));
