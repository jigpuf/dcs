import React from "react";

const JSAdding = () => {
  const javascriptAdding = [
    {
      method: "Internal Script",
      syntax: "<script> JavaScript code </script>",
      description:
        "Embedding JavaScript code directly within an HTML file using the <script> tag.",
    },
    {
      method: "External Script",
      syntax: '<script src="script.js"></script>',
      description:
        "Linking an external JavaScript file to an HTML file using the <script> tag's 'src' attribute.",
    },
    {
      method: "JavaScript Libraries",
      syntax: '<script src="library.js"></script>',
      description:
        "Including an external JavaScript library that provides additional functionality for your webpage.",
    },
    {
      method: "JavaScript Modules",
      syntax: "import { module } from 'module.js';",
      description:
        "Using JavaScript modules to organize code into reusable and modular pieces.",
    },
  ];
  const renderJavascriptAdding = javascriptAdding.map((item) => {
    return (
      <tr>
        <td>{item.method}</td>
        <td>{item.syntax}</td>
        <td>{item.description}</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <tr>
          <th>Method</th>
          <th>Syntax</th>
          <th>Description</th>
        </tr>
        {renderJavascriptAdding}
      </table>
    </div>
  );
};

export default JSAdding;
