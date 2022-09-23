[Live](https://pavsoldatov.github.io/Test-form/).

### About

#### Idea:

The idea was to create a responsive form that takes a name-value pair as input and adds the pair to the rendered list.
The list can be sorted by name or value, a list item can be deleted or added, and the resultant list can be shown as XML.
Component-based approach was followed (or at least attempted).

Uncomment `populateDummies()` in `/script.js` to populate dummy data into the list on page load.

#### Technicalities:

When the key-value pair is typed into the input, the equals sign serves as a delimiter. Any space before or after the delimiter is ignored. A respective regular expression tests the input for validity. When the input is valid, it is being added on top (at index 0) of the `pairList` array, which is our source of truth for rendering a list. Then, we create a new selectable option from the `pairList` array and prepend it to the first option element of the list of options that already exists in the DOM (before index 0).

Our `pairList` ("source of truth") reflects the key=value pairs rendered on screen, including deletion and sorts.
Changes to "the state" of the `pairList` array are made by way of MUTATION.

The sorts are alphanumeric and implemented with the use of `Intl.Collator`. These sorts delete the old list of `output.options` entirely and populate (re-render), one-by-one, all new options from the sorted pairList array into the `<select>` element.
