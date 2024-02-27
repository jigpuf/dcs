import React from "react";
import ButtonMaker from "../../../../utilities/buttonMaker";
import Placeholder from "../../../../utilities/placeholder";
import AboutFlex from "./flex/aboutFlex";
import FlexContainer from "./flex/flexContainer";
import FlexItem from "./flex/flexItem";

const FlexBox = () => {
  const items = [
    { name: "About Flex", slug: "about", component: <AboutFlex /> },
    {
      name: "Flex Container",
      slug: "flexcontainer",
      component: <FlexContainer />,
    },
    { name: "FlexItem", slug: "flexitem", component: <FlexItem /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default FlexBox;
