import React from "react";
import Placeholder from "../../utilities/placeholder";
import ButtonMaker from "../../utilities/buttonMaker";
import TerminalBlocks from "./panels/terminalBlocks";
const Panels = () => {
  const items = [
    { name: "Terminal Blocks", slug: "blocks", component: <TerminalBlocks /> },
    { name: "Placeholder", slug: "placeholder", component: <Placeholder /> },
    { name: "Placeholder", slug: "placeholder", component: <Placeholder /> },
    { name: "Placeholder", slug: "placeholder", component: <Placeholder /> },
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
