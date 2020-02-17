const quickSortStable = (array: number[]): number[] => {
  if (array.length < 2) return array;

  const pivot = [array[0]];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i += 1) {
    const cur = array[i];
    if (cur > pivot[0]) {
      right.push(cur);
    } else if (cur < pivot[0]) {
      left.push(cur);
    } else {
      pivot.push(cur);
    }
  }
  return quickSortStable(left).concat(pivot, quickSortStable(right));
};

console.log(quickSortStable([5, 4, 1, 3, 2, 9, 5, 5, 9, 8, 7]));
