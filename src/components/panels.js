import React from "react";

import Examples from "./panels/examples.js";
import ButtonMaker from "../utilities/buttonMaker.js";
import Placeholder from "../utilities/placeholder.js";
import Relays from "./panels/relays.js";
import CircuitProtection from "./power/circuitProtection.js";
import TerminalBlocks from "./panels/terminalBlocks.js";
import WireCodes from "./power/wireCodes.js";
import DcPowerSupply from "./power/dc/dcPowerSupply.js";
const Controls = () => {
  const items = [
    {
      name: "Circuit Protection",
      slug: "protection",
      component: <CircuitProtection />,
    },
    { name: "Terminals", slug: "blocks", component: <TerminalBlocks /> },

    { name: "Contactor", slug: "contactor", component: <Placeholder /> },
    { name: "Relay", slug: "relay", component: <Relays /> },
    { name: "DC Power Supply", slug: "power", component: <DcPowerSupply /> },
    { name: "HOA Switches", slug: "hoa", component: <Placeholder /> },
    { name: "Current Transducers", slug: "ct", component: <Placeholder /> },
    { name: "Panel Examples", slug: "examples", component: <Examples /> },
    { name: "Resisters", slug: "resisters", component: <Placeholder /> },
    { name: "Backplane", slug: "backplane", component: <Placeholder /> },
    { name: "Enclosure", slug: "enclosure", component: <Placeholder /> },
    { name: "Wire Codes", slug: "Wire Codes", component: <WireCodes /> },
  ];
  return (
    <div>
      <ul>
        <ButtonMaker buttons={items} />
      </ul>
    </div>
  );
};

export default Controls;
