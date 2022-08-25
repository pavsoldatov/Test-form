const createOptionFromObject = (object) => {
  const newOption = document.createElement("option");
  newOption.textContent = Object.keys(object) + "=" + Object.values(object);
  newOption.classList.add("content__option");

  return newOption;
};

export default createOptionFromObject;
