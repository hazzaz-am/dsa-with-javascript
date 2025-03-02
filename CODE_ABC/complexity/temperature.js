// find highest and lowest temperature. find if there is any value without number, if is exist than skip it and return highest - lowest value

const temperatures = [2, 3, null, 5, undefined, 4, -1, "error", 6, 8, 34, -3];

/**
 * @param {Array} temperatures
 */

function getHighestAndLowest(temperatures) {
	let highestTemperature = temperatures[0];
	let lowestTemperature = temperatures[0];

	for (let i = 1; i < temperatures.length; i++) {
		if (typeof temperatures[i] !== "number") continue;

		if (highestTemperature < temperatures[i]) {
			highestTemperature = temperatures[i];
		}

		if (lowestTemperature > temperatures[i]) {
			lowestTemperature = temperatures[i];
		}
	}

	return highestTemperature - lowestTemperature;
}

console.log(getHighestAndLowest(temperatures));
