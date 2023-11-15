import React from "react";
import ButtonMaker from "../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../utilities/placeholder.js";
import JSAdding from "./jsBasics/jsAdding.js";
import JSComments from "./jsBasics/jsComments.js";
import JSDataTypes from "./jsBasics/jsDataTypes.js";
import JSScope from "./jsBasics/jsScope.js";
import JSVariables from "./jsBasics/jsVariables.js";
import JSOperators from "./jsBasics/jsOperators.js";

const JsBasics = () => {
  const items = [
    { name: "Adding JS", slug: "adding", component: <JSAdding /> },
    { name: "Operators", slug: "jsoperators", component: <JSOperators /> },
    { name: "Data Types", slug: "data", component: <JSDataTypes /> },
    { name: "Variables", slug: "variables", component: <JSVariables /> },
    { name: "Comments", slug: "comments", component: <JSComments /> },
    { name: "Scope", slug: "scope", component: <JSScope /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default JsBasics;
