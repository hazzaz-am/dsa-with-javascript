var maxArea = function (height) {
	let right = height.length - 1;
	let left = 0;
	let maxContainer = 0;
	for (let i = left; i < height.length; i++) {
		for (let j = right; j > i; j--) {
			if (height[i] < height[j]) {
				let minHeight = Math.min(height[left], height[right]);
				let area = (right - left) * minHeight;
				maxContainer = Math.max(maxContainer, area);
				left++;
				break;
			} else {
				let minHeight = Math.min(height[left], height[right]);
				let area = (right - left) * minHeight;
				maxContainer = Math.max(maxContainer, area);
        right--;
			}
		}
	}

	return maxContainer;
};

var maxArea = function (height) {
	let right = height.length - 1;
	let left = 0;
	let maxContainer = 0;

	while (left < right) {
		let minHeight = Math.min(height[left], height[right]);
		let area = (right - left) * minHeight;
		maxContainer = Math.max(maxContainer, area);

		height[left] < height[right] ? left++ : right--;
	}

	return maxContainer;
};

console.log(maxArea([1, 1]));
