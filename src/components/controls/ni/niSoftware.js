import React from "react";
import ButtonMaker from "../../../utilities/buttonMaker.js";
import Placeholder from "../../../utilities/placeholder.js";
import Labview from "./niSoftware/labview.js";

const NISoftware = () => {
  const items = [
    { name: "Labview", slug: "labview", component: <Labview /> },
    { name: "NIMax", slug: "nimax", component: <Placeholder /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default NISoftware;
