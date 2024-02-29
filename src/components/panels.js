import React from "react";
import Fuses from "./panels/fuses.js";
import Breaker from "./panels/breaker.js";
import Examples from "./panels/examples.js";
import ButtonMaker from "../utilities/buttonMaker.js";
import Placeholder from "../utilities/placeholder.js";
import Relays from "./panels/relays.js";
const Controls = () => {
  const items = [
    { name: "Fuse", slug: "fuse", component: <Fuses /> },
    { name: "Breaker", slug: "breaker", component: <Breaker /> },
    { name: "Contactor", slug: "contactor", component: <Placeholder /> },
    { name: "Relay", slug: "relay", component: <Relays /> },
    { name: "Power Supply", slug: "power", component: <Placeholder /> },
    { name: "HOA Switches", slug: "hoa", component: <Placeholder /> },
    { name: "Terminals", slug: "terminals", component: <Placeholder /> },
    { name: "Current Transducers", slug: "ct", component: <Placeholder /> },
    { name: "Panel Examples", slug: "examples", component: <Examples /> },
    { name: "Resisters", slug: "resisters", component: <Placeholder /> },
    { name: "Backplane", slug: "backplane", component: <Placeholder /> },
    { name: "Enclosure", slug: "enclosure", component: <Placeholder /> },
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
