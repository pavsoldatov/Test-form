const convertPairToObject = (string, delimiter) => {
  const key = string.substring("0", string.indexOf(delimiter)).trim();
  const value = string
    .substring(string.indexOf(delimiter) + 1, string.length)
    .trim();

  return { [key]: value };
};

export default convertPairToObject;
