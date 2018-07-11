//find value using classical binary search

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

function binarySearch(array, value) {
  let lo = 0;
  let hi = array.length - 1;

  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);

    if (array[mid] === value) {
      return mid
    } else if (array[mid] < value) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
}
