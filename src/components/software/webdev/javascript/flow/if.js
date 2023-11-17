import React from "react";
import TableMaker from "../../../../../utilities/tableMaker.js";

const If = () => {
  const codeHead = ["Step", "Explanation", "Code"];
  const ifStatement = [
    {
      step: "Starting Code",
      points: ["Set value of kman", "Set value of kwoman"],
      code: ["const kman = 5;", "const kwoman = 7;"],
    },
    {
      step: "If Statement",
      points: [
        "if the value of kman is higher than the value of kwoman, return the statement",
        "if instead the value of kman is equal to the value of kwoman, return the statement",
        "if else is reached, return the statement",
      ],
      code: [
        "if(kman > kwoman){return('Kman is Greater!!');}",
        "elseif(kman == kwoman){return('Kman is equal to KWoman!!');}",
        "else{return('Kman must not be as great as KWoman!!');}",
      ],
    },
    {
      step: "Return value",
      points: [
        "Neither of the first statements was true so the else statement returned a value",
        "instead of returning a value, the code block could also be used to manipulate values of global variables",
      ],
      code: ["'Kman must not be as great as KWoman!!'"],
    },
  ];
  return (
    <div>
      <h2>If Statements</h2>
      <TableMaker tableType="coding" array={ifStatement} head={codeHead} />
    </div>
  );
};

export default If;
/*
    checklist:
    1) tableType = 'coding'
    2) array keys should be formatted [{step:'', points:['',''], code:['','']},]
    3) Make sure to pass head  eg. ['Step', 'Explaination', 'Code']
    4)Make sure array name being passed matches name of array you are using
    */
