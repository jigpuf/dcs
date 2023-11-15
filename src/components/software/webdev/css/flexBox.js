import React from "react";
import ButtonMaker from "../../../../utilities/buttonMaker";
import Placeholder from "../../../../utilities/placeholder";
import AboutFlex from "./flex/aboutFlex";

const FlexBox = () => {
  const items = [
    { name: "About Flex", slug: "about", component: <AboutFlex /> },
    { name: "Display:Flex", slug: "display", component: <Placeholder /> },
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

export default FlexBox;
