import React from "react";
import Dc from "./power/dc.js";
import Concepts from "./power/concepts.js";
import Transformers from "./power/transformers.js";
import Panels from "./power/panels.js";
import ButtonMaker from "../utilities/buttonMaker.js";
import Placeholder from "../utilities/placeholder.js";
import AC from "./power/ac.js";
import Motors from "./power/motors.js";
import Fuses from "./panels/fuses.js";
import Contactors from "./power/contactors.js";
import Breaker from "./panels/breaker.js";

const Power = () => {
  const items = [
    { name: "DC", slug: "dc", component: <Dc /> },
    { name: "AC", slug: "ac", component: <AC /> },
    { name: "Fuses", slug: "fuses", component: <Fuses /> },

    { name: "Motors", slug: "motors", component: <Motors /> },
    { name: "Contactors", slug: "contactors", component: <Contactors /> },
    { name: "Breakers", slug: "breakers", component: <Breaker /> },

    { name: "Power concepts", slug: "concepts", component: <Concepts /> },
    { name: "Transformers", slug: "transformers", component: <Transformers /> },
    {
      name: "Switches/ Buttons/Indicators",
      slug: "switches",
      component: <Placeholder />,
    },
    { name: "Panels", slug: "panels", component: <Panels /> },
    { name: "Codes", slug: "codes", component: <Placeholder /> },
    { name: "ATS Function", slug: "ats", component: <Placeholder /> },
    {
      name: "Grounding Systems",
      slug: "grounding",
      component: <Placeholder />,
    },
    { name: "Shielding", slug: "shielding", component: <Placeholder /> },
    { name: "VFD", slug: "vfd", component: <Placeholder /> },
    { name: "Circuit Protection", slug: "protect", component: <Placeholder /> },
    { name: "Isolation", slug: "isolation", component: <Placeholder /> },
    { name: "Transient voltage", slug: "protect", component: <Placeholder /> },
    { name: "Redundancy", slug: "redundancy", component: <Placeholder /> },
  ];
  return (
    <div>
      <ul>
        <ButtonMaker buttons={items} />
      </ul>
    </div>
  );
};

export default Power;
