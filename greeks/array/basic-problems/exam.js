// Liner Search element is in their

function linearSearch(arr, exp) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === exp) {
			return i;
		}
	}
	return -1;
}
const arr = [2, 3, 4, 10, 40];
console.log(linearSearch(arr, 10));
