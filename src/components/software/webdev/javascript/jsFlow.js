import React from "react";
import Break from "./flow/breakStatement.js";
import If from "./flow/if.js";
import Loops from "./flow/loops.js";
import SwitchStatement from "./flow/switchStatement.js";
import Ternary from "./flow/ternary.js";

import ButtonMaker from "../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../utilities/placeholder.js";
//import Placeholder from '../../../utilities/placeholder.js';

const JSFlow = () => {
  const other = [
    {
      name: "Logical Operators",
      slug: "logical",
      component: <Break />,
    },
  ];
  const items = [
    {
      name: "Break/Return/Continue statements",
      slug: "conditionals",
      component: <Break />,
    },
    { name: "If", slug: "if", component: <If /> },
    { name: "Listeners", slug: "listeners", component: <Placeholder /> },
    { name: "ASYNC", slug: "async", component: <Placeholder /> },
    { name: "Loops", slug: "loops", component: <Loops /> },
    { name: "Switch", slug: "switch", component: <SwitchStatement /> },
    { name: "Ternary", slug: "ternary", component: <Ternary /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
      <ButtonMaker buttons={other} />
    </div>
  );
};

export default JSFlow;
