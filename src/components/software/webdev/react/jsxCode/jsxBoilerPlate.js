import React from "react";
import TableMaker from "../../../../../utilities/tableMaker";

const JSXComponentBoilerPlate = () => {
  const codeHead = ["Step", "Explain", "Code"];
  const syntax = [
    {
      step: "Standard Boiler Plate",
      points: [
        "In JavaScript, the import statement is used to import functionality from other modules. In the case of React, import React from 'react' is used to import the core React library. React is a JavaScript library for building user interfaces. It provides a set of tools and components that allow developers to create reusable UI components and manage the state and lifecycle of those components. By importing React, you gain access to the fundamental features of React, such as the ability to define and render React components, manage component state, handle events, and more. The import React from 'react' statement is typically included at the beginning of a React component file to ensure that React functionality is available within that file. It allows you to write JSX (a syntax extension for JavaScript used by React) and use React-specific features in your component code.",
        "In JavaScript, the const keyword is used to declare a constant variable. In this case, const MyComponent = () => { ... } declares a constant variable named MyComponent and assigns it an arrow function. The arrow function () => { ... } is a concise way to define a function in JavaScript. In this case, it is defining a React component. React components are essentially functions that return JSX (a syntax extension for JavaScript used by React) to describe the structure and behavior of a user interface. The () => { ... } arrow function syntax is a shorthand for writing a function with an empty parameter list. It indicates that the component doesn't expect any input props. Inside the function body { ... }, you define the logic and structure of the component. This includes JSX code that describes the HTML-like structure of the component, event handlers, state management, and any other functionality specific to the component. So, const MyComponent = () => { ... } is declaring a constant variable named MyComponent that holds a function that defines a React component. This component can be used and rendered in other parts of your application.",
        "In React, components are typically defined using JSX (JavaScript XML), which is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. In the example code I provided, the return statement within the MyComponent function uses JSX to define the structure and content of the component's rendered output. JSX allows youto write HTML-like markup directly within your JavaScript code, making it easier to express the desired structure of your user interface. JSX is not actual HTML, but a syntax extension that gets transformed into JavaScript function calls behind the scenes. The JSX code is transpiled into equivalent React.createElemen() calls, which create React elements representing the desired structure and content of the component.",
        "The return statement has to be contained within a single jsx tag.  Div is being used here.  We can put as much as we want inside of it, but there must only ba a single outer level tag being returned",
        "This will just return it like HTML",
        "Close Div tag",
        "Close return statement scope",
        "Close myComponent function",
        "In JavaScript, the export statement is used to export a value, such as a variable, function, or class, from a module. It allows you to make the exported value available for use in other files or modules. In the example code I provided, the last line export default MyComponent; is an export statement. It exports the MyComponent constant, which represents the React component, as the default export of the module. The export default syntax allows you to export a single value as the default export of the module. It is commonly used when there is a single main value or component that is intended to be imported and used by other parts of the application. By exporting MyComponent as the default export, you can import it in another file using the import statement.  This is requred if the component is to be imported into any other component",
      ],
      code: [
        "import React from 'react'",
        "const MyComponent = () => {",
        "return (",
        "<div>",
        "<h1>Component Name</h1>",
        "</div>",
        ")",
        "}",
        "export default MyComponent",
      ],
    },
    {
      step: "UseState Boiler Plate",
      points: [""],
      code: [""],
    },
    {
      step: "UseState/ UseEffect Standard Boiler Plate",
      points: [
        "{ useState, useEffect }: These are named exports from the 'react' module. By using destructuring assignment, we can selectively import only the specific named exports we need from the 'react' module. In this case, we are importing useState and useEffect. useState: This is a React hook that allows you to add state to your functional components. It returns a stateful value and a function to update that value. By using useState, you can manage state within your functional components without having to convert them into class components. useEffect: This is another React hook that allows you to perform side effects in functional components. It enables you to run code in response to component lifecycle events, such as when the component mounts, updates, or unmounts. useEffect is commonly used for fetching data, subscribing to events, or performing cleanup operations.",
        "Standard arrow function for the component",
        "Set up variable and function for the useState functionality",
        "This code will run after the component has mounted",
        "This code will run when the component is unmounted",
        "",
        "",
        "",
        "The empty dependency array ensures that this effect runs only once on mount",
        "This code will run whenever the 'count' state changes",
        "Specify the 'count' state as a dependency",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      code: [
        "import React, { useState, useEffect } from 'react';",
        "const MyComponent = () => {",
        "const [count, setCount] = useState(0);",
        "useEffect(() => {",
        "console.log('Component mounted');",
        "return () => {",
        "console.log('Component unmounted');",
        "};",
        "}, []);",
        "useEffect(() => {",
        "console.log('Count changed:', count);",
        "}, [count]);",
        "const increment = () => {",
        "setCount(count + 1);",
        "};",
        "const decrement = () => {",
        "setCount(count - 1);",
        "};",
        "return (",
        "<div>",
        "<h1>Count: {count}</h1>",
        "<button onClick={increment}>Increment</button>",
        "<button onClick={decrement}>Decrement</button>",
        "</div>",
        ");",
        "};",
        "export default MyComponent;",
      ],
    },
  ];
  return (
    <div>
      <h1>React Component boiler plate</h1>
      <TableMaker head={codeHead} array={syntax} tableType="coding" />
    </div>
  );
};

export default JSXComponentBoilerPlate;
