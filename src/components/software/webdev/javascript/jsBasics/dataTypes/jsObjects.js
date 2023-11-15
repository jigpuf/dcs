import React from "react";
import JSArrays from "./jsObjects/jsArrays.js";
import JSFunction from "./jsObjects/jsFunctions.js";
import JSNumberObject from "./primitive/jsNumbers.js";
import ObjectLiterals from "./jsObjects/objectLiterals.js";
import ButtonMaker from "../../../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../../../utilities/placeholder.js";
//import Placeholder from '../../../utilities/placeholder.js';

const JSObjects = () => {
  const items = [
    { name: "Array", slug: "array", component: <JSArrays /> },
    { name: "Function", slug: "function", component: <JSFunction /> },
    { name: "Created Object", slug: "created", component: <Placeholder /> },
    { name: "Number Object", slug: "number", component: <JSNumberObject /> },
    { name: "Math Object", slug: "math", component: <Placeholder /> },
    { name: "Date Object", slug: "dat", component: <Placeholder /> },
    { name: "Console Object", slug: "console", component: <Placeholder /> },
    { name: "Browser Object", slug: "browser", component: <Placeholder /> },
    { name: "Window Object", slug: "window", component: <Placeholder /> },
    {
      name: "Spread Operator W/ objects",
      slug: "spread",
      component: <Placeholder />,
    },
    {
      name: "Object Literals",
      slug: "literals",
      component: <ObjectLiterals />,
    },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default JSObjects;
