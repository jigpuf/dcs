import React from "react";
import TableMaker from "../../../../../utilities/tableMaker";
const JSXTableBuilder = () => {
  const codeHead = ["Step", "Explain", "Code"];
  const syntax = [
    {
      step: "Data Module",
      points: [""],
      code: [
        "export default[",
        "{name:'Kman', age:33, foods:['pizza', 'cake']},",
        "{name:'Kwoman', age:27, foods:['hot dogs', 'ice cream']},",
        "]",
        "//fileName=people.js",
      ],
    },
    {
      step: "Table Building Component",
      points: [""],
      code: [
        "import React from 'react'",
        "import peopleList from './people.js'",
        "",
        "const TableMaker = () =>{",
        "/////////function to create table",
        "const table = peopleList.map(item=>{",
        "const foods= item.foods.map(food=>{",
        "return(<li>{food}</li>)",
        "})",
        "return(",
        "<tr>",
        "<td>{item.name}</td>",
        "<td>{item.age}</td>",
        "<td><ol>{foods}</ol></td>",
        "</tr>",
        ")",
        "})",
        "///////////Component return Statement",
        "return(",
        "<table>",
        "<tr>",
        "<th>Name</th>",
        "<th>Age</th>",
        "<th>Foods</th>",
        "</tr>",
        "{renderTable}",
        "</table>",
        ")",
        "}",
        "export default TableMaker",
      ],
    },
  ];
  return (
    <div>
      <h1>Table from Array of objects</h1>
      <TableMaker head={codeHead} array={syntax} tableType="coding" />
    </div>
  );
};
export default JSXTableBuilder;
