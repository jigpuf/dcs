import React from "react";
import ButtonMaker from "../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../utilities/placeholder.js";
import { render } from "@testing-library/react";

const JSComments = () => {
  const jsComments = [
    {
      type: "Single Line",
      syntax: "//",
      description:
        "Comments that span a single line and are ignored by the JavaScript interpreter.",
    },
    {
      type: "Multi-line (Block)",
      syntax: "/* */",
      description:
        "Comments that can span multiple lines and are ignored by the JavaScript interpreter.",
    },
    {
      type: "Documentation (JSDoc)",
      syntax: "/** */",
      description:
        "Special comments used to generate documentation. They can include additional annotations and tags.",
    },
  ];
  const renderJSComments = jsComments.map((item) => {
    return (
      <tr>
        <td>{item.type}</td>
        <td>{item.syntax}</td>
        <td>{item.description}</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <tr>
          <th>Type</th>
          <th>Syntax</th>
          <th>Description</th>
        </tr>
        {renderJSComments}
      </table>
    </div>
  );
};

export default JSComments;
