import React from "react";
import ArduinoCommands from "./arduino/arduinoCommands.js";
import ArduinoDataTypes from "./arduino/arduinoDataTypes.js";
import ButtonMaker from "../../utilities/buttonMaker.js";
import Placeholder from "../../utilities/placeholder.js";

const ArduinoSoftware = () => {
  const items = [
    { name: "Data Types", slug: "types", component: <ArduinoDataTypes /> },
    {
      name: "Program sections",
      slug: "sections",
      component: <Placeholder />,
    },
    { name: "Syntax", slug: "syntax", component: <Placeholder /> },
    { name: "Libraries", slug: "libraries", component: <Placeholder /> },
    { name: "Cloud APIS", slug: "cloud", component: <Placeholder /> },
    { name: "Programs", slug: "programs", component: <Placeholder /> },

    { name: "Commands", slug: "comands", component: <ArduinoCommands /> },
  ];
  return (
    <div>
      <ul>
        <ButtonMaker buttons={items} />
      </ul>
    </div>
  );
};

export default ArduinoSoftware;
