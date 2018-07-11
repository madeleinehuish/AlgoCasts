//find sum of all digits of a given number

function sumOfAllDigits(number) {
	let sum = 0;
	let n = number;
	while(n>0) {
		sum += n%10;
		n = Math.floor(n/10);
	}
	return sum;
}

module.exports = sumOfAllDigits;
