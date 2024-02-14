import React from "react";
import LVSoftwareRequirements from "./labview/lvSoftwareRequirements.js";
import LVFunction from "./labview/lvFunctional.js";
import ButtonMaker from "../../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../../utilities/placeholder.js";
import LVDataTypes from "./labview/lvDataTypes.js";

const Labview = () => {
  const items = [
    {
      name: "Software Requirements",
      slug: "software",
      component: <LVSoftwareRequirements />,
    },
    { name: "Data Types", slug: "data", component: <LVDataTypes /> },
    { name: "Functional Parts", slug: "functions", component: <LVFunction /> },
    { name: "Structures and Loops", slug: "loops", component: <Placeholder /> },
    { name: "Arrays", slug: "arrays", component: <Placeholder /> },
    { name: "Numeric", slug: "numeric", component: <Placeholder /> },
    { name: "Booloean", slug: "boolean", component: <Placeholder /> },
    { name: "String", slug: "string", component: <Placeholder /> },
    { name: "File and Report", slug: "file", component: <Placeholder /> },
    { name: "Extras", slug: "extra", component: <Placeholder /> },
  ];
  return (
    <div>
      <ul>
        <ButtonMaker buttons={items} />
      </ul>
    </div>
  );
};

export default Labview;
