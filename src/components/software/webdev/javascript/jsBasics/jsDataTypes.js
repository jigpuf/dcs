import React from "react";
import Primitive from "./dataTypes/primitive.js";
import Objects from "./dataTypes/jsObjects.js";
import Casting from "./dataTypes/jsCasting.js";
import ButtonMaker from "../../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../../utilities/placeholder.js";
const JSDataTypes = () => {
  const items = [
    { name: "Primitive", slug: "primitive", component: <Primitive /> },
    { name: "Objects", slug: "objects", component: <Objects /> },
    { name: "Casting/Coercing", slug: "casting", component: <Casting /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default JSDataTypes;
