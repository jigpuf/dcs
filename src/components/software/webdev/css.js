import React from "react";
import CSSBasics from "./css/cssBasics.js";

import CSSLectures from "./css/cssBasics/cssLectures.js";
import CSSNotes from "./css/cssBasics/cssNotes.js";
import CSSInsert from "./css/cssBasics/cssInsert.js";
import Layout from "./css/layout.js";
import Color from "./css/cssBasics/color.js";
import CSSUnits from "./css/cssBasics/cssUnits.js";

import Selectors from "./css/cssBasics/selectors.js";
import Position from "./css/position.js";
import Box from "./css/box.js";
import FlexBox from "./css/flexBox.js";

import ButtonMaker from "../../../utilities/buttonMaker.js";
import Placeholder from "../../../utilities/placeholder.js";
import CSSDisplays from "./css/cssDisplay.js";

const CSS = () => {
  const items = [
    { name: "Basics", slug: "basics", component: <CSSBasics /> },
    { name: "Position", slug: "position", component: <Position /> },

    { name: "Display", slug: "display", component: <CSSDisplays /> },
    { name: "Layout", slug: "layouts", component: <Layout /> },
    { name: "Box Model", slug: "box", component: <Box /> },
    { name: "FlexBox", slug: "flex", component: <FlexBox /> },
    { name: "Grid", slug: "Grid", component: <Placeholder /> },
    {
      name: "Transformation/Transition/Animation",
      slug: "Transformation/Transition/Animation",
      component: <Placeholder />,
    },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default CSS;
