import React from "react";
import CSSLectures from "./css/cssLectures.js";
import CSSNotes from "./css/cssNotes.js";
import CSSInsert from "./css/cssInsert.js";
import Layout from "./css/layout.js";
import Color from "./css/color.js";
import Size from "./css/size.js";
import Selectors from "./css/selectors.js";
import Position from "./css/position.js";
import Text from "./css/text.js";
import Box from "./css/box.js";
import FlexBox from "./css/flexBox.js";

import ButtonMaker from "../../../utilities/buttonMaker.js";
import Placeholder from "../../../utilities/placeholder.js";

const CSS = () => {
  const items = [
    { name: "Lectures", slug: "lectures", component: <CSSLectures /> },
    { name: "Notes", slug: "notes", component: <CSSNotes /> },
    { name: "Inserting", slug: "inserting", component: <CSSInsert /> },
    { name: "Selectors", slug: "selectors", component: <Selectors /> },
    { name: "Inheritance", slug: "inheritance", component: <Placeholder /> },
    { name: "Properties", slug: "Properties", component: <Placeholder /> },
    { name: "Variables", slug: "Variables", component: <Placeholder /> },

    {
      name: "Specificity,Last rule, Universal",
      slug: "specificity",
      component: <Placeholder />,
    },
    { name: "Units", slug: "units", component: <Placeholder /> },
    { name: "Display", slug: "display", component: <Placeholder /> },
    { name: "Images", slug: "images", component: <Placeholder /> },

    { name: "Layout", slug: "layouts", component: <Layout /> },
    { name: "Color", slug: "color", component: <Color /> },
    { name: "Size Units", slug: "size", component: <Size /> },
    { name: "Position", slug: "position", component: <Position /> },
    { name: "Text Properties", slug: "text", component: <Text /> },
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
