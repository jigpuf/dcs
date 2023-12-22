import React from "react";
import TableMaker from "../../utilities/tableMaker.js";
import Placeholder from "../../utilities/placeholder.js";
import ArduinoSoftware from "../software/arduinoSoftware.js";
import ButtonMaker from "../../utilities/buttonMaker.js";
import ArduinoHardware from "./arduino/arduinoHardware.js";

const Arduino = () => {
  const items = [
    {
      name: "Arduino IDE",
      slug: "arduinoIDE",
      component: <ArduinoSoftware />,
    },
    {
      name: "Arduino Hardware",
      slug: "hardware",
      component: <ArduinoHardware />,
    },
  ];

  return (
    <div>
      <h2>Arduino</h2>
      <ul>
        <ButtonMaker buttons={items} />
      </ul>
    </div>
  );
};

export default Arduino;
