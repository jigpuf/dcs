import React from "react";
import Videos from "./cars/videos.js";
import Steering from "./cars/steering.js";
import Hvac from "./cars/hvac.js";
import Body from "./cars/body.js";
import Fluids from "./cars/fluids.js";
import Electrical from "./cars/electrical.js";
import Stats from "./cars/stats.js";
import ButtonMaker from "../utilities/buttonMaker.js";
import Placeholder from "../utilities/placeholder.js";
import CarTools from "./cars/carTools.js";

const Cars = () => {
  const items = [
    { name: "Tools", slug: "tools", component: <CarTools /> },
    { name: "Videos", slug: "videos", component: <Videos /> },
    { name: "Steering/Suspension", slug: "steering", component: <Steering /> },
    { name: "HVAC", slug: "hvac", component: <Hvac /> },
    { name: "Body/chasis", slug: "body", component: <Body /> },
    { name: "Electrical", slug: "electrical", component: <Electrical /> },
    { name: "Interior", slug: "interior", component: <Placeholder /> },
    { name: "Fuel", slug: "fuel", component: <Placeholder /> },
    { name: "Cooling", slug: "cool", component: <Placeholder /> },
    { name: "Lubrication", slug: "lubrication", component: <Placeholder /> },
    { name: "Fluids", slug: "fluids", component: <Fluids /> },
    { name: "Stats", slug: "stats", component: <Stats /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default Cars;
