import React from "react";
import JSArrays from "./jsObjects/jsArrays.js";
import JSFunction from "./jsObjects/jsFunctions.js";
import JSNumberObject from "./primitive/jsNumbers.js";
import ObjectLiterals from "./jsObjects/objectLiterals.js";
import ButtonMaker from "../../../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../../../utilities/placeholder.js";
import JSStrings from "./primitive/jsStrings.js";
import JSDateObject from "./jsObjects/jsDateObject.js";
//import Placeholder from '../../../utilities/placeholder.js';

const JSObjects = () => {
  const items = [
    { name: "Array", slug: "array", component: <JSArrays /> },
    { name: "Function", slug: "function", component: <JSFunction /> },
    { name: "String Object", slug: "string", component: <JSStrings /> },
    {
      name: "Number/Math Object",
      slug: "number",
      component: <JSNumberObject />,
    },
    { name: "Date Object", slug: "dat", component: <JSDateObject /> },
    { name: "Console Object", slug: "console", component: <Placeholder /> },
    { name: "Browser Object", slug: "browser", component: <Placeholder /> },
    { name: "Window Object", slug: "window", component: <Placeholder /> },
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
