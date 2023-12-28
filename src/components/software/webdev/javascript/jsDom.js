import React from "react";
import ButtonMaker from "../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../utilities/placeholder.js";
import JSEventListeners from "./flow/listeners.js";
import JSSelectors from "./dom/jsSelectors.js";

const JSDom = () => {
  const items = [
    { name: "Selectors", slug: "selectors", component: <JSSelectors /> },
    { name: "Listeners", slug: "listeners", component: <JSEventListeners /> },
    { name: "Nodes", slug: "nodes", component: <Placeholder /> },
    { name: "Validation", slug: "valid", component: <Placeholder /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default JSDom;
