//find factorial of given number

//recursive solution
function factorialRecursive (num) {
	if(num<0) {
		return -1;
	} else if(num===0) {
		return 1;
	} else {
			return (num * factorialRecursive(num-1));
	}
}

//while loop iterative solution
function factorialWhile(num) {
	let result = num;
  if (num === 0 || num === 1)
    return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}

//for loop iterative solution
function factorialFor(num) {
	if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

module.exports = { factorialRecursive, factorialWhile, factorialFor };
