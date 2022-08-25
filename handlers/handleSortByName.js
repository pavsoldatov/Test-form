import { output, pairList } from "../script.js";
import createOptionFromObject from "../utility/createOptionFromObject.js";

const handleSortByName = () => {
  if (output.options.length <= 0) return;

  const enCollator = new Intl.Collator("en", {
    numeric: true,
    sensitivity: "accent",
  });

  pairList.sort((a, b) => {
    const [keyA] = Object.keys(a);
    const [keyB] = Object.keys(b);

    return enCollator.compare(keyA, keyB);
  });

  output.options.length = 0;
  // before this loop starts, the pairList has already been sorted by name, i.e. mutated
  for (const sortedPair of pairList) {
    const sortedOption = createOptionFromObject(sortedPair);
    output.options.add(sortedOption);
  }
};

export default handleSortByName;
