// largest element in the array

// Iterative Approach

function largestNumber(arr) {
	let max = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max;
}

// Recursive Approach
function recursiveApproach(arr, i) {
	if (i === arr.length - 1) {
		return arr[i];
	}

	let recMax = recursiveApproach(arr, i + 1);
	return Math.max(recMax, i);
}

// Method Approach
function methodApproach(arr) {
  return Math.max(...arr)
}
const arr = [20, 10, 20, 4, 100];
console.log(methodApproach(arr, 0));
