import React from "react";
import CSSBasics from "./css/cssBasics.js";
import Layout from "./css/layout.js";
import Box from "./css/box.js";
import FlexBox from "./css/flexBox.js";
import ButtonMaker from "../../../utilities/buttonMaker.js";
import Placeholder from "../../../utilities/placeholder.js";
import CSSTransitions from "./css/cssTransition.js";
import CSSMediaQuerry from "./css/cssMediaQuerry.js";

const CSS = () => {
  const items = [
    { name: "Basics", slug: "basics", component: <CSSBasics /> },
    { name: "Layout", slug: "layouts", component: <Layout /> },
    { name: "Media Querries", slug: "media", component: <CSSMediaQuerry /> },

    {
      name: "Transition",
      slug: "Transition",
      component: <CSSTransitions />,
    },
    { name: "Box Model", slug: "box", component: <Box /> },
    { name: "FlexBox", slug: "flex", component: <FlexBox /> },
    { name: "Grid", slug: "Grid", component: <Placeholder /> },
    { name: "Bootstrap", slug: "bootstrap", component: <Placeholder /> },

    {
      name: "Transformation/Animation",
      slug: "Transformation",
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
