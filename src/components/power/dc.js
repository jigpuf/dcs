import React from "react";
import DcPowerSupply from "./dc/dcPowerSupply";
import ButtonMaker from "../../utilities/buttonMaker";

const Dc = () => {
  const items = [
    {
      name: "DC Power Supply",
      slug: "dcpowersupply",
      component: <DcPowerSupply />,
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

export default Dc;
