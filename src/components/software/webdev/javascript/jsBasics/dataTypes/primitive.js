import React from "react";
import JSNumberObject from "./jsObjects/jsNumberObject.js";
import JSStringObject from "./jsObjects/jsStringObject.js";
import JSBoolean from "./primitive/jsBoolean.js";

import ButtonMaker from "../../../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../../../utilities/buttonMaker.js";
//import Placeholder from '../../../utilities/placeholder.js';

const Primitive = () => {
  const items = [
    { name: "Number", slug: "number", component: <JSNumberObject /> },
    { name: "String", slug: "string", component: <JSStringObject /> },
    { name: "Boolean", slug: "boolean", component: <JSBoolean /> },
    { name: "Undefined", slug: "undefined", component: <Placeholder /> },
    { name: "Symbol", slug: "symbol", component: <Placeholder /> },
    { name: "Null", slug: "null", component: <Placeholder /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default Primitive;
