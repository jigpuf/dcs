import React from "react";
import JSNumber from "./primitive/jsNumbers.js";
import JSBoolean from "./primitive/jsBoolean.js";

import ButtonMaker from "../../../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../../../utilities/buttonMaker.js";
import JSStrings from "./primitive/jsStrings.js";
//import Placeholder from '../../../utilities/placeholder.js';

const Primitive = () => {
  const items = [
    { name: "String", slug: "string", component: <JSStrings /> },
    { name: "Number", slug: "number", component: <JSNumber /> },
    { name: "Boolean", slug: "boolean", component: <JSBoolean /> },
    { name: "Null", slug: "null", component: <Placeholder /> },
    { name: "Undefined", slug: "undefined", component: <Placeholder /> },
    { name: "Symbol", slug: "symbol", component: <Placeholder /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default Primitive;
