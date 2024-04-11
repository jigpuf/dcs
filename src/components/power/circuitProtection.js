import React from "react";
import ButtonMaker from "../../utilities/buttonMaker";
import Fuses from "../panels/fuses";
import Breaker from "./circuitProtection/breaker";

const CircuitProtection = () => {
  const items = [
    { name: "Fuses", slug: "fuses", component: <Fuses /> },
    { name: "Breakers", slug: "breakers", component: <Breaker /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default CircuitProtection;
