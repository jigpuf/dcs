import React from "react";
import Placeholder from "../../../../utilities/placeholder";
import ButtonMaker from "../../../../utilities/buttonMaker";
import JSXComponentBoilerPlate from "./jsxCode/jsxBoilerPlate";
import DataModule from "./jsxCode/dataModule";

const JSXUsefulCode = () => {
  const items = [
    {
      name: "Component Boiler Plate",
      slug: "component",
      component: <JSXComponentBoilerPlate />,
    },
    {
      name: "Data Module",
      slug: "data",
      component: <DataModule />,
    },
    {
      name: "JSON",
      slug: "json",
      component: <Placeholder />,
    },
    {
      name: "TableBuilder",
      slug: "tablebuilder",
      component: <Placeholder />,
    },
    {
      name: "Active buttons",
      slug: "active Buttons",
      component: <Placeholder />,
    },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};
export default JSXUsefulCode;
