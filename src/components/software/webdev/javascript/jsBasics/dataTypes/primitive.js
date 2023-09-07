import React from "react";
import JSStrings from "./primitive/jsStrings.js";
import JSNumber from "./primitive/jsNumbers.js";
import JSBoolean from "./primitive/jsBoolean.js";
import JSNull from "./primitive/jsNull.js";
import ButtonMaker from "../../../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../../../utilities/placeholder.js";
import JSUndefined from "./primitive/jsUndefined.js";
import JSSymbol from "./primitive/jsSymbol.js";

const Primitive = () => {
  const items = [
    { name: "String", slug: "string", component: <JSStrings /> },
    { name: "Number", slug: "number", component: <JSNumber /> },
    { name: "Boolean", slug: "boolean", component: <JSBoolean /> },
    { name: "Null", slug: "null", component: <JSNull /> },
    { name: "Undefined", slug: "undefined", component: <JSUndefined /> },
    { name: "Symbol", slug: "symbol", component: <JSSymbol /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default Primitive;
