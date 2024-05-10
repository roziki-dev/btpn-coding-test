export const checkWhiteSpace = str => {
  const wordSpaceRegex = /\s/;
  return wordSpaceRegex.test(str.toLowerCase());
};
