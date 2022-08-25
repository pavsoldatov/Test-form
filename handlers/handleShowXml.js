import { pairList } from "../script.js";

const handleShowXml = () => {
  const showXmlPage = window.open("./showXMLpage.html", "_blank", "popup");
  showXmlPage.addEventListener("DOMContentLoaded", () => {
    const showXmlTextarea =
      showXmlPage.document.querySelector(".showXML_textarea");

    for (const pair of pairList) {
      const [key] = Object.keys(pair);
      const [val] = Object.values(pair);

      const formattedPair = `<${key}>${val}</${key}>\n`;
      showXmlTextarea.append(formattedPair);
    }
  });
};

export default handleShowXml;
