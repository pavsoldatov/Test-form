import handleFormSubmit from "./handlers/handleFormSubmit.js";
import handleDelete from "./handlers/handleDelete.js";
import handleSortByName from "./handlers/handleSortByName.js";
import handleSortByValue from "./handlers/handleSortByValue.js";
import handleShowXml from "./handlers/handleShowXml.js";
import populateDummies from "./test.js"; // dummies for testing

export const input = document.querySelector(".content__input");
export const output = document.querySelector(".content__output");

const form = document.querySelector(".content__block.form");
const deleteButton = document.querySelector(".content__button#delete");
const sortByNameButton = document.querySelector(".content__button#sortByName");
const sortByValueButton = document.querySelector(".content__button#sortByValue");
const showXmlButton = document.querySelector(".content__button#showXML");

export const pairList = [];
/*  This is our source of truth where we store key-value pairs as objects. */

form.addEventListener("submit", handleFormSubmit);
deleteButton.addEventListener("click", handleDelete);
sortByNameButton.addEventListener("click", handleSortByName);
sortByValueButton.addEventListener("click", handleSortByValue);
showXmlButton.addEventListener("click", handleShowXml);

/* uncomment this function to populate dummy pairs to output*/
// populateDummies();
