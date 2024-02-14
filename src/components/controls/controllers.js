import React from "react";
import Placeholder from "../../utilities/placeholder.js";
import ButtonMaker from "../../utilities/buttonMaker.js";
import SeaLevel from "./controllers/seaLevel.js";

const Controllers = () => {
  const items = [
    { name: "Motor drivers", slug: "motor", component: <Placeholder /> },
    { name: "Sea Level", slug: "seaLevel", component: <SeaLevel /> },
  ];
  return (
    <div>
      <ul>
        <ButtonMaker buttons={items} />
      </ul>
    </div>
  );
};
export default Controllers;
