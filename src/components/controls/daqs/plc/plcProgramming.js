import React from "react";
import PlcLogic from "./plcProgramming/plcLogic.js";
import PlcInstructions from "./plcProgramming/plcInstructions.js";
import PlcProgramHandling from "./plcProgramming/plcProgramHandling.js";
import ButtonMaker from "../../../../utilities/buttonMaker.js";

const PlcProgramming = () => {
  const items = [
    { name: "Instructions", slug: "commands", component: <PlcInstructions /> },
    { name: "Logic Examples", slug: "logic", component: <PlcLogic /> },
    {
      name: "Program Handling",
      slug: "handling",
      component: <PlcProgramHandling />,
    },
    { name: "File Structure", slug: "structure" },
    { name: "Sequential Function", slug: "sequential" },
    { name: "Structured Text", slug: "structured" },
    { name: "Ladder Logic", slug: "ladder" },
    { name: "Function Block", slug: "function" },
  ];
  return (
    <div>
      <ul>
        <ButtonMaker buttons={items} />
      </ul>
    </div>
  );
};

export default PlcProgramming;
