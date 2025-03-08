// check if first arrays number is present in second array with power of 2

/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Boolean}
 */


const correspondingValue = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		const currentIndex = arr2.indexOf(arr1[i] ** 2);

		if (currentIndex === -1) {
			return false;
		}

		arr2.splice(currentIndex, 1);
	}
	return true;
};
console.log(correspondingValue([2, 3, 4], [16, 9, 4]));
