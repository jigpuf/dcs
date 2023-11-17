import React from "react";
import ButtonMaker from "../utilities/buttonMaker.js";
import Scaling from "./apps/scaling.js";
import LoadCellCalc from "./apps/loadCellCalc.js";
import ResCaps from "./apps/resCaps.js";
import AvionicsFlow from "./apps/avionicsFlow.js";
import FresnoTime from "./apps/fresno.js";

const Apps = () => {
  const items = [
    { name: "Scaling", slug: "scaling", component: <Scaling /> },
    { name: "LoadCellCalc", slug: "loadCell", component: <LoadCellCalc /> },
    { name: "Resisters&Caps", slug: "resisters", component: <ResCaps /> },
    { name: "Avionics Flow", slug: "avionics", component: <AvionicsFlow /> },
    { name: "Fresno", slug: "fresno", component: <FresnoTime /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default Apps;
