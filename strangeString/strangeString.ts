const strangeString = (string: string) => {
  const re = new RegExp('(\\w)(\\w?)', 'g');
  return string.toLowerCase().replace(re, a => {
    return a.length === 2
      ? a[0].toUpperCase() + a[1].toLowerCase()
      : a[0].toUpperCase();
  });
};

console.log(strangeString('abcd efg'));
