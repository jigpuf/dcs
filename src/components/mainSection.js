import React from "react";
import Controls from "./controls.js";
import Instruments from "./instruments.js";
import Cables from "./cables.js";
import Raceways from "./raceways.js";
import Electronics from "./electronics.js";
import Power from "./power.js";
import Software from "./software.js";
import Tools from "./tools.js";
import Panels from "./panels.js";
import Inventory from "./inventory.js";
import Network from "./network.js";
import Manager from "./manager.js";
import Apps from "./apps.js";
import Build from "./build.js";
import Cars from "./cars.js";

import Links from "./links.js";

const MainSection = (props) => {
  const activeTab = props.activeTab; //from App.js
  /*
Here's how the && operator works:

If the left operand (the expression before &&) evaluates to a truthy value, the operator evaluates the right operand (the expression after &&) and returns the value of the right operand.

If the left operand evaluates to a falsy value, the operator short-circuits and returns the value of the left operand without evaluating the right operand.
The  active Tab is set  by the props brought in from the parrent App component.  It is set by the buttons formed from the side menu
  */
  return (
    <div className="main">
      {activeTab === "apps" && <Apps />}
      {activeTab === "controls" && <Controls />}
      {activeTab === "instruments" && <Instruments />}
      {activeTab === "cables" && <Cables />}
      {activeTab === "raceways" && <Raceways />}
      {activeTab === "electronics" && <Electronics />}
      {activeTab === "power" && <Power />}
      {activeTab === "networking" && <Network />}
      {activeTab === "software" && <Software />}
      {activeTab === "tools" && <Tools />}
      {activeTab === "panels" && <Panels />}
      {activeTab === "inventory" && <Inventory />}
      {activeTab === "manage" && <Manager />}
      {activeTab === "build" && <Build />}
      {activeTab === "cars" && <Cars />}

      {activeTab === "links" && <Links />}
    </div>
  );
};

export default MainSection;
