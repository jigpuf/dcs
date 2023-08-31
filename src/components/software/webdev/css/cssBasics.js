import React from "react";
import CSSPurpose from "./cssBasics/cssPurpose.js";
import CSSLectures from "./cssBasics/cssLectures.js";
import CSSNotes from "./cssBasics/cssNotes.js";
import CSSInsert from "./cssBasics/cssInsert.js";
import Selectors from "./cssBasics/selectors.js";
import Color from "./cssBasics/color.js";
import CSSUnits from "./cssBasics/cssUnits.js";
import ButtonMaker from "../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../utilities/placeholder.js";
import CSSVariables from "./cssBasics/cssVariables.js";

const CSSBasics = () => {
  const items = [
    { name: "Purpose", slug: "purpose", component: <CSSPurpose /> },
    { name: "Lectures", slug: "lectures", component: <CSSLectures /> },
    { name: "Notes", slug: "notes", component: <CSSNotes /> },
    { name: "Inserting", slug: "inserting", component: <CSSInsert /> },
    { name: "Properties", slug: "Properties", component: <Placeholder /> },

    { name: "Variables", slug: "variables", component: <CSSVariables /> },

    { name: "Color", slug: "color", component: <Color /> },
    { name: "Units", slug: "units", component: <CSSUnits /> },
    { name: "Selectors", slug: "selectors", component: <Selectors /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default CSSBasics;
