// find odd number

const findOddNumber = (arr) => {
	if (arr.length === 0) return -1;

	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			newArr.push(arr[i]);
		}
	}

	return newArr;
};

const findOddNumberWithHelper = (arr) => {
	let newArr = [];

	function helper(input) {
		if (input.length === 0) return -1;

		if (input[0] % 2 !== 0) {
			newArr.push(input[0]);
		}

		helper(input.slice(1));
	}
	helper(arr);
	return newArr;
};

console.log(findOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
