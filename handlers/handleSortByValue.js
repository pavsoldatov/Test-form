import { output, pairList } from "../script.js";
import createOptionFromObject from "../utility/createOptionFromObject.js";

const handleSortByValue = () => {
  if (output.options.length <= 0) return;

  const enCollator = new Intl.Collator("en", {
    numeric: true,
    sensitivity: "accent",
  });

  pairList.sort((a, b) => {
    const [valA] = Object.values(a);
    const [valB] = Object.values(b);

    return enCollator.compare(valA, valB);
  });

  output.options.length = 0;
  // before this loop starts, the pairList has already been sorted by value, i.e. mutated
  for (const sortedPair of pairList) {
    const sortedOption = createOptionFromObject(sortedPair);
    output.options.add(sortedOption);
  }
};

export default handleSortByValue;
