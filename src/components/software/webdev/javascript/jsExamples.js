import React from "react";
import JSTables from "./examples/jsTables.js";
import ButtonMaker from "../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../utilities/placeholder.js";

const JSExamples = () => {
  const items = [{ name: "Tables", slug: "tables", component: <JSTables /> }];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default JSExamples;
