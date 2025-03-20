// Alternate elements

function recursiveApproach(arr, idx, res) {
	if (idx < arr.length) {
		res.push(arr[idx]);
		recursiveApproach(arr, idx + 2, res);
	}
}

function getAlternates(arr) {
  let res = []
  recursiveApproach(arr, 0, res)
  return res
}

console.log(getAlternates([1, 2, 3, 4, 5]));
