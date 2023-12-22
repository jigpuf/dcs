import React from "react";
import ButtonMaker from "../../utilities/buttonMaker.js";
import Placeholder from "../../utilities/placeholder.js";
import ArduinoSoftware from "../software/arduinoSoftware.js";
import ESP32Hardware from "./esp32/esp32Hardware.js";
const ESP32 = () => {
  const items = [
    { name: "Arduino IDE", slug: "arduinoIDE", component: <ArduinoSoftware /> },
    {
      name: "ESP32 Hardware",
      slug: "esp32hardware",
      component: <ESP32Hardware />,
    },
  ];
  return (
    <div>
      <ul>
        <ButtonMaker buttons={items} />
      </ul>
    </div>
  );
};

export default ESP32;
