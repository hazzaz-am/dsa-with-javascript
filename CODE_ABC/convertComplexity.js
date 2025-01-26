// check if first arrays number is present in second array with power of 2

/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Boolean}
 */

function convertComplexity(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;

	let sequenceCounter1 = {};
	let sequenceCounter2 = {};

	for (const key of arr1) {
		sequenceCounter1[key] = (sequenceCounter1[key] || 0) + 1;
	}

	for (const key of arr2) {
		sequenceCounter2[key] = (sequenceCounter2[key] || 0) + 1;
	}

	for (const key in sequenceCounter1) {
		if (!(key ** 2) in sequenceCounter2) return false;

		if (sequenceCounter1[key] !== sequenceCounter2[key ** 2]) {
			return false;
		}
	}
	return true;
}

console.log(convertComplexity([2, 3], [16, 9, 4]));
// time complexity O(n)
