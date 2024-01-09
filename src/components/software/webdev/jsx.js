import React from "react";
import JSXFileStructure from "./react/jsxFileStructure.js";
import Setup from "./react/setup.js";

import ButtonMaker from "../../../utilities/buttonMaker.js";
import Placeholder from "../../../utilities/placeholder.js";
import JSXUsefulCode from "./react/jsxcode.js";
import JSXLifeCycle from "./react/jsxLifeCycle.js";
import JSXHooks from "./react/hooks.js";
import JSXProps from "./react/props.js";

const JSX = () => {
  const items = [
    { name: "Setup", slug: "setup", component: <Setup /> },
    { name: "Command Line", slug: "", component: <Placeholder /> },
    { name: "File Structure", slug: "jsx", component: <JSXFileStructure /> },
    { name: "Useful Code", slug: "useful", component: <JSXUsefulCode /> },
    { name: "Hooks", slug: "hooks", component: <JSXHooks /> },
    { name: "Props", slug: "props", component: <JSXProps /> },
    {
      name: "Event Handlers",
      slug: "Event Handlers",
      component: <Placeholder />,
    },
    {
      name: "Life Cycle",
      slug: "Life Cycle",
      component: <JSXLifeCycle />,
    },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default JSX;
