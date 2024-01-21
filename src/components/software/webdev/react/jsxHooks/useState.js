import React, { useState } from "react";

import TableMaker from "../../../../../utilities/tableMaker";
const UseStateHook = () => {
  const [number, setNumber] = useState(0);
  const multiplier = 5;
  const codeHead = ["Step", "Explain", "Code"];
  const syntax = [
    {
      step: "Input to set Variables",
      points: [
        "Import react statement requires the useState hook added",
        "Component arrow function, scope open",
        "///////Setting up state variables",
        "Set up variables from the hook syntax: const [variableName, FunctionNameToSetVariable] = useState(myStartingValue)",
        "Simple constant variable",
        "/////component return statement",
        "Component return statement",
        "<div> wrapper open scope",
        "number input of type number, on change of the number, anonymous callback function with 'e' as the argument. function sets the value of number using the value in the input",
        "Displays the number by the multiplier and it will show onscreen",
        "Close Div wrapper",
        "Close return scope, close component scope",
        "export default statement",
      ],
      code: [
        "import React, {useState} from 'react'",
        "const Number = () =>{",
        "///////Setting up state variables",
        "const [number, setNumber] = useState(0)",
        "const multiplier = 5",
        "/////component return statement",
        "return(",
        " <div>",
        "<input type='number' value={number} onChange={(e) =>setNumber(e.target.value)}/>",
        "{number*multiplier}",
        "</div>",
        ")}",
        "export default Number",
      ],
    },
  ];
  return (
    <div>
      <h1>UseState Hook</h1>
      <TableMaker head={codeHead} array={syntax} tableType="coding" />
      <p>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <h3>{number * multiplier}</h3>
      </p>
    </div>
  );
};
export default UseStateHook;
