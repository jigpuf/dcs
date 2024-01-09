import React from "react";
import TableMaker from "../../../../../utilities/tableMaker";
const DataModule = () => {
  const codeHead = ["Step", "Explain", "Code"];
  const syntax = [
    {
      step: "Data Module",
      points: [
        "The file doesn't require import statements since it is plain JS.  This is just an export statement for the module, open array of objects",
        "First Object",
        "Second object",
        "close array",
        "The filename will be used the same way it always is in calling components",
      ],
      code: [
        "export default [",
        "{name:'kman', age:30},",
        "{name:'kwoman', age:25},",
        "]",
        "//fileName people.js",
      ],
    },
    {
      step: "Calling Component",
      points: [
        "Import React Statement",
        "the name of the variable for the object can be anything you want, but lowercase",
        "functional component arrow function, open scope",
        "creates local vaiable using data from the imported array of objects",
        "return statement open scope",
        "returns paragraph with new local variable as the content",
        "close return scope",
        "close component scope",
        "export default statement",
        "This is the output of the component",
      ],
      code: [
        "import React from 'react'",
        "import people from './people.js'",
        "const peopleLister = () =>{",
        "const persons = `${people[0].name} and ${people[1].name}`",
        "return(",
        "<p>{persons}</p>",
        ")",
        "}",
        "export default PeopleLister",
        "//<p>kman and kwoman</p>",
      ],
    },
  ];
  return (
    <div>
      <h1>Data Modules</h1>
      <p className="info">
        Data can be made available from other components. This way a type of
        Database can be created to be used from many locations
      </p>
      <TableMaker head={codeHead} array={syntax} tableType="coding" />
    </div>
  );
};
export default DataModule;
