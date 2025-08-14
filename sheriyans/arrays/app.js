//! zeros on the left
const array = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1];

let i = 0;
let j = 0;

while (i < array.length) {
	if (array[i] === 0) {
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
		j++;
	}
	i++;
}

//! left rotation by 1 element
const arr = [1, 2, 3, 4, 5];
const copy = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
	arr[i] = arr[i + 1];
}

arr[arr.length - 1] = copy;

//! right rotation by 1 element
const rightArr = [1, 2, 3, 4, 5];
const copyLast = rightArr[rightArr.length - 1];

for (let i = rightArr.length - 1; i >= 0; i--) {
	rightArr[i] = rightArr[i - 1];
}

rightArr[0] = copyLast;

//!  left rotation by k element

const leftRotation = [1, 2, 3, 4, 5];
let k = 2 % leftRotation.length;
for (let i = 0; i < k; i++) {
	const store = leftRotation[0];
	for (let j = 0; j < leftRotation.length - 1; j++) {
		leftRotation[j] = leftRotation[j + 1];
	}
	leftRotation[leftRotation.length - 1] = store;
}
// --------------------------------
const leftRotation1 = [1, 2, 3, 4, 5];
const leftTemp = new Array(leftRotation1.length);
for (let i = 0; i < leftRotation1.length; i++) {
	leftTemp[i] = leftRotation1[(i + k) % leftRotation1.length];
}
// --------------------------------
const leftRotation2 = [1, 2, 3, 4, 5];
leftReverse(0, k - 1);
leftReverse(k, leftRotation2.length - 1);
leftReverse(0, leftRotation2.length - 1);

function leftReverse(i, j) {
	while (i < j) {
		let temp = leftRotation2[i];
		leftRotation2[i] = leftRotation2[j];
		leftRotation2[j] = temp;
		i++;
		j--;
	}
}
// --------------------------------

//! right rotation by k element
const rightRotation = [1, 2, 3, 4, 5];
const promptInput = 2 % rightRotation.length;

for (let i = 0; i < promptInput; i++) {
	const store = rightRotation[rightRotation.length - 1];
	for (let j = rightRotation.length - 1; j > 0; j--) {
		rightRotation[j] = rightRotation[j - 1];
	}
	rightRotation[0] = store;
}
// --------------------------------
const rightRotation1 = [1, 2, 3, 4, 5];
const rightTemp = new Array(rightRotation1.length);
for (let i = rightRotation1.length - 1; i >= 0; i--) {
	rightTemp[(i + k) % rightRotation1.length] = rightRotation1[i];
}

// --------------------------------
const rightRotation2 = [1, 2, 3, 4, 5];
rightReverse(0, rightRotation2.length - 1);
rightReverse(0, k - 1);
rightReverse(k, rightRotation2.length - 1);

console.log(rightRotation2);

function rightReverse(i, j) {
	while (i < j) {
		let temp = rightRotation2[i];
		rightRotation2[i] = rightRotation2[j];
		rightRotation2[j] = temp;
		i++;
		j--;
	}
}
