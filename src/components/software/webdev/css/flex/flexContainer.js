import React from "react";
import ButtonMaker from "../../../../../utilities/buttonMaker";
import Placeholder from "../../../../../utilities/placeholder";
import DisplayFlex from "./flexContainer/displyFlex";

const FlexContainer = () => {
  const items = [
    { name: "Display:Flex", slug: "display", component: <DisplayFlex /> },
    { name: "Flex-Direction", slug: "direction", component: <Placeholder /> },
    { name: "Flex-Wrap", slug: "wrap", component: <Placeholder /> },
    { name: "Justify-Content", slug: "", component: <Placeholder /> },
    { name: "Align Items", slug: "", component: <Placeholder /> },
    { name: "Align Content", slug: "", component: <Placeholder /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default FlexContainer;
