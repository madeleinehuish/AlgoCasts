//reverse an array without a built in function

function reverseArray(arr) {
	let reversed =[];
	for (let i = arr.length -1; i >= 0; i--) {
		reversed.push(arr[i]);
	}
	return reversed;
}

module.exports = reverseArray;
