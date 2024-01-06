import React from "react";
import JSXFileStructure from "./react/jsxFileStructure.js";
import Setup from "./react/setup.js";

import ButtonMaker from "../../../utilities/buttonMaker.js";
import Placeholder from "../../../utilities/placeholder.js";
import JSXUsefulCode from "./react/jsxcode.js";

const JSX = () => {
  const items = [
    { name: "Setup", slug: "setup", component: <Setup /> },
    { name: "Command Line", slug: "", component: <Placeholder /> },
    { name: "File Structure", slug: "jsx", component: <JSXFileStructure /> },
    { name: "Useful Code", slug: "useful", component: <JSXUsefulCode /> },
    { name: "Hooks", slug: "hooks", component: <Placeholder /> },
    { name: "Props", slug: "props", component: <Placeholder /> },
    { name: "Scope", slug: "scope", component: <Placeholder /> },
    {
      name: "Event Handlers",
      slug: "Event Handlers",
      component: <Placeholder />,
    },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default JSX;
