const allAnagramString = (string: string) => {
  const anagrams: string[] = [];
  const recur = (str: string, anagram = '') => {
    if (!str) {
      anagrams.push(anagram);
      return;
    }
    for (let i = 0; i < str.length; i += 1) {
      anagram += str[i];
      recur(`${str.slice(0, i)}${str.slice(i + 1)}`, anagram);
      anagram = anagram.slice(0, anagram.length - 1);
    }
  };
  recur(string);
  return [...new Set(anagrams)];
};

console.log(allAnagramString('ABC'));
