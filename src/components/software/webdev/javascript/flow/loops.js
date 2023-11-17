import React from "react";

const Loops = () => {
  const loopSyntax = [
    {
      type: "For",
      code: "for (let i = 0; i<5; i++){CodeHere;}",
      meaning: "Initial state; boolean; at end of loop",
    },
    {
      type: "While",
      code: "while (i<5){CodeHere}",
      meaning:
        "Checks Boolean, does code each time. Notice I will have to be initialized prior to the loop so the loop knows what it means.  Also if incementing is needed, it has to be put into the loop code.  Otherwise there will be an infinite loop",
    },
    {
      type: "Do While",
      code: "do{CodeHere;} while(i<5)",
      meaning:
        "Does once then compares against boolean, so same as while loop, but runs once even if logic is not true",
    },
    {
      type: "For Each",
      code: "array.forEach(functionName);",
      meaning:
        "takes an array and does something to each element. Does not change original array",
    },
    {
      type: "Map",
      code: "array.map(CodeHere;);",
      meaning:
        "takes an array and does something to each element. returns new array with changes",
    },
  ];
  const renderLoopSyntax = loopSyntax.map((item) => {
    return (
      <tr>
        <td>{item.type}</td>
        <td>{item.code}</td>
        <td>{item.meaning}</td>
      </tr>
    );
  });
  const loopArray = [
    {
      type: "Initial Code",
      code: ["const names=['Kman','Kwoman','Ksauce'];"],
      output: "",
    },
    {
      type: "For",
      code: [
        "for (let i=0;i<names.length; i++){",
        "console.log(names[i]);",
        "}",
      ],
      output: "Kman Kwoman Ksauce",
    },
    {
      type: "While",
      code: [
        "let 1 = 0;",
        "while (i<names.length){",
        "console.log(names[i]);",
        "i++;",
        "}",
      ],
      output: "Kman Kwoman Ksauce",
    },
    {
      type: "For Each",
      code: [
        "let text = ' ';",
        "function addText(item, index){text += `${index}: ${item} `}",
        "names.forEach(addText);",
      ],
      output: "1:Kman 2:Kwoman 3:Ksauce",
    },
    {
      type: "Map",
      code: ["names.map(toUpperCase())"],
      output: "['KMAN','KWOMAN','KSAUCE']",
    },
  ];
  const renderLoopArray = loopArray.map((item) => {
    let codes = item.code.map((code) => {
      return <li>{code}</li>;
    });
    return (
      <tr>
        <td>{item.type}</td>
        <td>
          <ol>{codes}</ol>
        </td>
        <td>{item.output}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Loops</h1>
      <h2>Syntax</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>code</th>
          <th>meaning</th>
        </tr>
        {renderLoopSyntax}
      </table>
      <h2>Examples</h2>
      <h3>Loop through array</h3>
      <table>
        <tr>
          <th>Type</th>
          <th>Code</th>
          <th>Result</th>
        </tr>
        {renderLoopArray}
      </table>
    </div>
  );
};

export default Loops;
