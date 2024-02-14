import React from "react";
import Placeholder from "../../utilities/placeholder";
import ButtonMaker from "../../utilities/buttonMaker";
import TerminalBlocks from "./panels/terminalBlocks";
const Panels = () => {
  const items = [
    { name: "Terminal Blocks", slug: "blocks", component: <TerminalBlocks /> },
    { name: "Components", slug: "components", component: <Placeholder /> },
    {
      name: "Signal Conditioners",
      slug: "conditioners",
      component: <Placeholder />,
    },
    {
      name: "Channel Types",
      slug: "Channel Types",
      component: <Placeholder />,
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
export default Panels;
