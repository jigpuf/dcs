import React from "react";
import ButtonMaker from "../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../utilities/placeholder.js";
import { render } from "@testing-library/react";

const JSAdding = () => {
  const javascriptAdding = [
    {
      method: "Internal Script",
      syntax: "<script>\n  // JavaScript code goes here\n</script>",
      description:
        "Embedding JavaScript code directly within the HTML file using the <script> tag.",
    },
    {
      method: "External Script",
      syntax: '<script src="path/to/script.js"></script>',
      description:
        "Linking an external JavaScript file to the HTML file using the src attribute of the <script> tag.",
    },
    {
      method: "JavaScript Libraries",
      syntax: '<script src="path/to/library.js"></script>',
      description:
        "Including external JavaScript libraries/frameworks using the <script> tag, often by referencing a URL or a local file.",
    },
    {
      method: "ES Modules",
      syntax:
        '<script type="module">\n  // JavaScript module code goes here\n</script>',
      description:
        'Using the ES module syntax to import and export JavaScript modules in modern browsers, using the <script type="module"> tag.',
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
