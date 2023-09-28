import React from "react";
import CSSPurpose from "./cssBasics/cssPurpose.js";
import CSSNotes from "./cssBasics/cssNotes.js";
import CSSInsert from "./cssBasics/cssInsert.js";
import Selectors from "./cssBasics/selectors.js";
import Color from "./cssBasics/color.js";
import CSSUnits from "./cssBasics/cssUnits.js";
import ButtonMaker from "../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../utilities/placeholder.js";
import CSSVariables from "./cssBasics/cssVariables.js";
import Position from "./cssBasics/cssPosition.js";
import CSSDisplays from "./cssBasics/cssDisplay.js";

const CSSBasics = () => {
  const items = [
    { name: "Purpose", slug: "purpose", component: <CSSPurpose /> },
    { name: "Syntax", slug: "notes", component: <CSSNotes /> },
    { name: "Inserting", slug: "inserting", component: <CSSInsert /> },
    { name: "Variables", slug: "variables", component: <CSSVariables /> },
    { name: "Color", slug: "color", component: <Color /> },
    { name: "Units", slug: "units", component: <CSSUnits /> },
    { name: "Selectors", slug: "selectors", component: <Selectors /> },
    { name: "Position", slug: "position", component: <Position /> },

    { name: "Display", slug: "display", component: <CSSDisplays /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default CSSBasics;
