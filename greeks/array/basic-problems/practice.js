// find second largest

// naive approach
function naiveApproach(arr) {
	let len = arr.length;

	arr.sort((a, b) => a - b);
	for (let i = len - 2; i >= 0; i--) {
		if (arr[i] !== arr[len - 1]) {
			return arr[i];
		}
	}
	return -1;
}

// better approach
function betterApproach(arr) {
	let max = -1;
	let secondMax = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	for (let j = 0; j < arr.length; j++) {
		if (arr[j] > secondMax && arr[j] !== max) {
			secondMax = arr[j];
		}
	}

	return secondMax;
}

// expected approach
function expectedApproach(arr) {
	let max = arr[0];
	let secondMax = -1;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			secondMax = max;
			max = arr[i];
		} else {
			if (arr[i] > secondMax) {
				secondMax = arr[i];
			}
		}
	}

	return secondMax;
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(expectedApproach(arr));
