import React from "react";
import TableMaker from "../../../../utilities/tableMaker";
const JSXProps = () => {
  const codeHead = ["Step", "Explain", "Code"];
  const syntax = [
    {
      step: "Parent Component",
      points: [
        "react import statement",
        "import ChildComponent so it can be used in this component",
        "functional component arrow function, Open Scope",
        "Variable called propValue is defined",
        "return statement of Parent component calls the child component named ChildComponent,  With the call is made and and a prop called propName is being passed kind of like an argument into the ChildComponent.  The value of this prop is set equal to the value of the variable propValue",
        "Close scope",
        "Export Default Statement so other components can use this one",
      ],
      code: [
        "import React from 'react'",
        "import ChildComponent from './filePath...",
        "const ParentComponent = () => {",
        "const propValue = 'Hello, props!'",
        "return <ChildComponent propName={propValue} />",
        "}",
        "export default  ParentComponent",
      ],
    },
    {
      step: "Child component Component",
      points: [
        "React import Statement",
        "functional component arrow function, The props allows props to be passed to this component,Open Scope",
        "return statement returns a paragraph.  The syntax for the prop is what is shown in the parameters above(props) and has dot notation for the name of the prop passed.  Since the name of the prop passed was propName, then props.propName is how to call the string value that was passed from the parreth component",
        "Close Scope",
        "Export default statement so this can be used by other components",
      ],
      code: [
        "import React from 'react'",
        "const ChildComponent = (props) => {",
        "return (<p>{props.propName}</p>)",
        "}",
        "export default ChildComponent",
      ],
    },
    {
      step: "Syntax",
      points: [
        "The component is called",
        "Multiple props can be sent",
        "Strings can be sent inside of quotes directly",
        "all other data types can be sent, but they need to be inside of curly braces",
        "notice the function does not carry parenthesis, only its name",
      ],
      code: [
        "<ComponentName age={30} name='Roger' isAdult={true} personObject={person} numberArray={numbers} onClick={clickFunction}>",
      ],
    },
  ];
  return (
    <div>
      <h1>JSX Props</h1>
      <p className="info">
        In React, props (short for "properties") are a way to pass data from a
        parent component to its child components. Props allow you to customize
        and configure child components with the values or behaviors they need.
      </p>
      <TableMaker head={codeHead} array={syntax} tableType="coding" />
    </div>
  );
};
export default JSXProps;
