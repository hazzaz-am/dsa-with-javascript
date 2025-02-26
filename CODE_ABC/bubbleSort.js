/**
 * 1. Check the if the length is 1 than stop the loop
 * 2. check if the first element is greater tha second element than swap them
 * 3. if the first element is less than second element than move to the next element
 * 4. after it reaches the end minus the length by 1
 * 5. repeat the process until the length is 1
 */

let arr = [45, 34, 50, 40, 5];
// [ 34, 45, 50, 40, 5 ]
// [ 0 1 2 3 4 ] 
let length = arr.length;
let firstNum = 0;
let secondNum = 1;

while (length > 1) {
	if (arr[firstNum] <= arr[secondNum] && secondNum < length) {
		if (secondNum === length - 1) {
			length = length - 1;
		}

		firstNum++;
		secondNum++;
    console.log(firstNum, secondNum)
	} else if (arr[firstNum] > arr[secondNum] && secondNum < length) {
		if (secondNum === length - 1) {
			length = length - 1;
      // console.log(length)
		}
		let temp = arr[firstNum];
		arr[firstNum] = arr[secondNum];
		arr[secondNum] = temp;
    // console.log(arr)
		firstNum++;
		secondNum++;
    // console.log(firstNum, secondNum)
	}
}

console.log(arr);

/**
 * [ 34, 45, 50, 40, 5 ]
 */