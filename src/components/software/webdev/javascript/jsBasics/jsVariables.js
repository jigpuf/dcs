import React from "react";
import Keywords from "../variables/keywords.js";
import ButtonMaker from "../../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../../utilities/placeholder.js";
//import Placeholder from '../../../utilities/placeholder.js';

const JSVariables = () => {
  const items = [
    { name: "Hoisting", slug: "hoisting", component: <Placeholder /> },
    { name: "Keywords", slug: "keywords", component: <Keywords /> },
    { name: "Naming", slug: "naming", component: <Placeholder /> },
    { name: "Syntax", slug: "syntax", component: <Placeholder /> },
    { name: "Calling/Assigning", slug: "calling", component: <Placeholder /> },
    { name: "Loose Typing", slug: "typing", component: <Placeholder /> },
    {
      name: "Type Conversion/Coercion",
      slug: "coercion",
      component: <Placeholder />,
    },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default JSVariables;
