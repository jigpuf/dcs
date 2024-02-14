import React from "react";
import Placeholder from "../../utilities/placeholder.js";
import ButtonMaker from "../../utilities/buttonMaker.js";
import PLC from "./daqs/plc.js";
import Ni from "./daqs/ni.js";
import Vfd from "./daqs/vfd.js";
import Watlow from "./daqs/watlow.js";

const Daqs = () => {
  const items = [
    { name: "PLC", slug: "plc", component: <PLC /> },
    { name: "National Instruments", slug: "ni", component: <Ni /> },
    { name: "VFD", slug: "vfd", component: <Vfd /> },
    { name: "Watlow", slug: "watlow", component: <Watlow /> },
  ];
  return (
    <div>
      <ul>
        <ButtonMaker buttons={items} />
      </ul>
    </div>
  );
};
export default Daqs;
