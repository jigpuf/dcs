import React from "react";
import ButtonMaker from "../../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../../utilities/placeholder.js";
import JSLogicalOperators from "./operators/JSLogicalOperators.js";
import JSMathOperators from "./operators/jsMathOperators.js";
import JSBitwiseOperators from "./operators/jsBitwiseOperators.js";
import JSAsignmentOperators from "./operators/jsAssignmentOperators.js";
import JSTypeofOperators from "./operators/jsTypeofOperator.js";
import JSSpreadOperator from "./operators/JSSpreadOperator.js";

const JSOperators = () => {
  const items = [
    { name: "Math", slug: "math", component: <JSMathOperators /> },
    { name: "Bitwise", slug: "bitwise", component: <JSBitwiseOperators /> },
    {
      name: "Assignment",
      slug: "Asignment",
      component: <JSAsignmentOperators />,
    },
    { name: "Logical", slug: "logical", component: <JSLogicalOperators /> },
    { name: "Spread", slug: "spread", component: <JSSpreadOperator /> },
    { name: "TypeOf", slug: "typeof", component: <JSTypeofOperators /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default JSOperators;
