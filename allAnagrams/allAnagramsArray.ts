const allAnagramArray = (string: string): string[] => {
  if (string.length === 0) return [''];
  const result: { [key: string]: boolean } = {};

  string.split('').forEach((s, i) => {
    const remainStr = `${string.slice(0, i)}${string.slice(i + 1)}`;
    allAnagramArray(remainStr).forEach(a => {
      result[s + a] = true;
    });
  });

  return Object.keys(result);
}

console.log(allAnagramArray('abc'));
