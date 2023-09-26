import React from "react";
import NiModuleSwap from "./ni/niModuleSwap.js";
import NiHardware from "./ni/niHardware.js";
import NiCommunications from "./ni/niCommunications.js";
import Nimax from "./ni/nimax.js";
import NiControl from "./ni/nicontrol.js";
import Scb100 from "./ni/scb100.js";
import ButtonMaker from "../../utilities/buttonMaker.js";
import NISoftware from "./ni/niSoftware.js";

const Ni = () => {
  const items = [
    {
      name: "Module Swap",
      slug: "niModuleSwap",
      component: <NiModuleSwap />,
    },
    { name: "Hardware", slug: "niHardware", component: <NiHardware /> },
    {
      name: "Communications",
      slug: "niCommunications",
      component: <NiCommunications />,
    },
    { name: "SCB100", slug: "scb", component: <Scb100 /> },
    { name: "NIMAX", slug: "nimax", component: <Nimax /> },
    { name: "NI Control Program", slug: "control", component: <NiControl /> },
    { name: "NI Software", slug: "software", component: <NISoftware /> },
  ];
  return (
    <div>
      <ul>
        <ButtonMaker buttons={items} />
      </ul>
    </div>
  );
};

export default Ni;
