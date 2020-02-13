const merge = (left: number[], right: number[]): number[] => {
  const result: number[] = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift() as number);
    } else {
      result.push(left.shift() as number);
    }
  }

  if (left) result.push(...left);
  if (right) result.push(...right);

  return result;
};

const mergeSort = (array: number[]): number[] => {
  if (array.length < 2) return array;
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([3, 4, 2, 9, 7, 8, 6, 5, 1]));
