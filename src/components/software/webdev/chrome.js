import React from "react";
import ButtonMaker from "../../../utilities/buttonMaker.js";
import Placeholder from "../../../utilities/placeholder.js";
import ChromeConsole from "./chrome/chromeConsole.js";
import ChromeElements from "./chrome/chromeElements.js";
import ChromeSources from "./chrome/chromeSources.js";

const Chrome = () => {
  const items = [
    { name: "Console", slug: "console", component: <ChromeConsole /> },
    { name: "Elements", slug: "elements", component: <ChromeElements /> },
    { name: "Sources", slug: "sources", component: <ChromeSources /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default Chrome;
