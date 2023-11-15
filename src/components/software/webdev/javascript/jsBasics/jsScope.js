import React from "react";
const JSScope = () => {
  const scopes = [
    {
      name: "Global Scope",
      explanation:
        "The global scope is the outermost scope in JavaScript. Variables declared in the global scope are accessible throughout the entire program.",
    },
    {
      name: "Function Scope",
      explanation:
        "Function scope refers to the scope created within a function. Variables declared inside a function are only accessible within that function and its nested scopes.",
    },
    {
      name: "Block Scope",
      explanation:
        "Block scope is created within curly braces ({}) that are not part of a function. Variables declared with 'let' or 'const' inside a block are only accessible within that block and its nested scopes.",
    },
    {
      name: "Module Scope",
      explanation:
        "Module scope pertains to the scope of variables and functions defined within a JavaScript module. Variables declared with 'const' or 'let' at the top level of a module are scoped to that module.",
    },
    {
      name: "Class Scope",
      explanation:
        "Class scope refers to the scope created within a class definition. Variables declared inside a class (outside of methods) are scoped to the class and can be accessed by its methods and constructors.",
    },
  ];
  const renderScopes = scopes.map((item) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.explanation}</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <tr>
          <th>Scope</th>
          <th>Description</th>
        </tr>
        {renderScopes}
      </table>
      Variables and Block Scope:
      <br />
      <ol>
        <li>Variables are global within code block they are found</li>
        <li>If outside of functions, they are global variable</li>
        <li>
          If global variable is changed inside of code block, it is changed
          globally
        </li>
        <li>
          If a variable is redefined in a code block, it creates a local scope
          for a global variable
        </li>
        <li>
          Scope in a nested block will only go up in levels until it finds its
          definition
        </li>
        <li>Var makes things global</li>
        <li>
          Variables in loops are local to the function in which they live.
        </li>
        <li>
          Global variables are global to all scripts including linked ones.
        </li>
      </ol>
    </div>
  );
};

export default JSScope;
