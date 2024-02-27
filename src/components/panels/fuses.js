import React from "react";
import FuseSelection from "./fuses/fuseSelection.js";
import ButtonMaker from "../../utilities/buttonMaker.js";

const Fuses = () => {
  const items = [
    { name: "FuseSelection", slug: "selection", component: <FuseSelection /> },
    { name: "Ordering", slug: "ordering" },
    { name: "Testing", slug: "testing" },
  ];
  return (
    <div>
      <ul>
        <ButtonMaker buttons={items} />
      </ul>
    </div>
  );
};

export default Fuses;
