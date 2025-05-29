// https://www.geeksforgeeks.org/sorting-array-of-number-by-increasing-frequency-using-javascript/

function sortIncreaseFreq(array) {
	const freqObj = {};

	array.forEach((val) => (freqObj[val] = (freqObj[val] || 0) + 1));

	return array.sort((a, b) => {
		if (freqObj[a] !== freqObj[b]) {
			return freqObj[a] - freqObj[b];
		} else {
			return a - b;
		}
	});
}

const array = [3, 3, 1, 1, 1, 8, 3, 6, 8, 8];

function sortIncreaseFreqMap(array) {
	const freqMap = new Map();
	array.forEach((num) => {
		freqMap.set(num, (freqMap.get(num) || 0) + 1);
	});

	return array.sort((a, b) => {
		if (freqMap.get(a) !== freqMap.get(b)) {
			return freqMap.get(a) - freqMap.get(b);
		} else {
			return a - b;
		}
	});
}

console.log(sortIncreaseFreqMap(array));
