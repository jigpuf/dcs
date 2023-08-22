import React from "react";
import ButtonMaker from "../../../utilities/buttonMaker.js";
import HtmlSoftware from "./html/htmlSoftware.js";
import HtmlFileStructure from "./html/htmlFileStructure.js";
import HtmlBoilerPlate from "./html/htmlBoilerPlate.js";
import HtmlText from "./html/htmlText.js";
import HtmlStructuredData from "./html/htmlStructuredData.js";
import HtmlMedia from "./html/htmlMedia.js";
import HtmlForms from "./html/htmlForms.js";

//import Placeholder from '../../../utilities/placeholder.js';

const HTML = () => {
  const items = [
    { name: "Needed Software", slug: "html", component: <HtmlSoftware /> },
    { name: "File Structure", slug: "css", component: <HtmlFileStructure /> },
    { name: "Boiler Plate", slug: "node", component: <HtmlBoilerPlate /> },
    { name: "Text", slug: "text", component: <HtmlText /> },
    {
      name: "Structured Content",
      slug: "structure",
      component: <HtmlStructuredData />,
    },
    { name: "Media", slug: "media", component: <HtmlMedia /> },
    { name: "Forms", slug: "forms", component: <HtmlForms /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default HTML;
