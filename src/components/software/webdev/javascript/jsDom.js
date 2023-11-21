import React from "react";
import ButtonMaker from "../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../utilities/placeholder.js";
import JSEventListeners from "./flow/listeners.js";
//import Placeholder from '../../../utilities/placeholder.js';

const JSDom = () => {
  const items = [
    { name: "Selectors", slug: "selectors", component: <Placeholder /> },
    { name: "Listeners", slug: "listeners", component: <JSEventListeners /> },
    { name: "Nodes", slug: "nodes", component: <Placeholder /> },
    { name: "Validation", slug: "valid", component: <Placeholder /> },
    { name: "Persistant Data", slug: "data", component: <Placeholder /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default JSDom;
