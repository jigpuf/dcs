import React from "react";
import Placeholder from "../../../../utilities/placeholder.js";
import ButtonMaker from "../../../../utilities/buttonMaker.js";
import CCWSoftwareRequirements from "./ccw/ccwSoftwareRequirements.js";
import CCWCompatibleHardware from "./ccw/ccwCompatibleHardware.js";
import CCWProgramSetup from "./ccw/ccwProgramSetup.js";

const CCW = () => {
  const items = [
    {
      name: "Software Requirements",
      slug: "software",
      component: <CCWSoftwareRequirements />,
    },
    {
      name: "Compatible Hardware",
      slug: "hardware",
      component: <CCWCompatibleHardware />,
    },
    {
      name: "Program Setup",
      slug: "program",
      component: <CCWProgramSetup />,
    },
    {
      name: "Logic",
      slug: "logic",
      component: <Placeholder />,
    },
    {
      name: "Best Practices",
      slug: "practices",
      component: <Placeholder />,
    },
  ];
  return (
    <div>
      <ul>
        <ButtonMaker buttons={items} />
      </ul>
    </div>
  );
};
export default CCW;
