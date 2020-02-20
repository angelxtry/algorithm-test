const replaceSameTerm = (
  termList: string[],
  originalText: string,
  referText: string
): string => {
  let result: string = originalText;
  termList.forEach(term => {
    const re = new RegExp(`\\[(\\w+)\\]\\(${term}\\)`);
    const referMatch = referText.match(re);
    if (referMatch) {
      result = result.replace(re, referMatch[1]);
    }
  });
  return result;
};

const originalText = 'change this [good](adj) sentence [quickly](adv)';
const referText = '[carefully](adv) referring this [short](adj) sentence';

console.log(replaceSameTerm(['adj', 'adv'], originalText, referText));
