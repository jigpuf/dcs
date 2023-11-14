import React from "react";
import Placeholder from "../../../../../utilities/placeholder";
import ButtonMaker from "../../../../../utilities/buttonMaker";
import Micro850 from "./ccwCompatibleHardware/micro850";

const CCWCompatibleHardware = () => {
  const items = [
    {
      name: "Micro850",
      slug: "micro850",
      component: <Micro850 />,
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
export default CCWCompatibleHardware;
