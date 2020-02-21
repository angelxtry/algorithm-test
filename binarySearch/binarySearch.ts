const binarySearch = (numbers: number[], target: number): number | null => {
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (numbers[mid] === target) return mid;
    if (numbers[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return null;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
