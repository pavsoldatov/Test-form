import { pairList, output } from "../script.js";

const handleDelete = () => {
  if (output.options.length <= 0) return;

  const options = Array.from(output.options);
  let indicesToDelete = []; // should be in sync to those of the pairList array of objects

  for (const opt of options) {
    if (opt.selected) {
      indicesToDelete.push(options.indexOf(opt));
      opt.remove();
    }
  }

  const filtered = pairList.filter((o, i) => !indicesToDelete.includes(i));
  pairList.length = 0;
  for (const f of filtered) {
    pairList.push(f); // mutates the pairList array to update its 'state' */
  }
};

export default handleDelete;
