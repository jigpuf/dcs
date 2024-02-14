import React from "react";
import ButtonMaker from "../../../../../../utilities/buttonMaker.js";
import LVFront from "./lvFunctional/lvFront.js";
import LVBlock from "./lvFunctional/lvBlock.js";

const LVSoftwareRequirements = () => {
  const items = [
    {
      name: "Block Diagram",
      slug: "block",
      component: <LVBlock />,
    },
    {
      name: "Front Panel",
      slug: "front",
      component: <LVFront />,
    },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default LVSoftwareRequirements;
