import React from "react";

const CSSInsert = () => {
  const cssMethods = [
    {
      method: "Inline CSS",
      syntax: '<element style="property: value;">',
      purpose:
        "Allows applying styles directly to individual HTML elements. Useful for quick, specific styling needs or dynamically generated content.",
    },
    {
      method: "Internal CSS",
      syntax: "<style> CSS code </style>",
      purpose:
        "Allows defining CSS rules within the HTML file, typically in the head section. Useful for small-scale styling needs specific to a single HTML file.",
    },
    {
      method: "External CSS",
      syntax: '<link rel="stylesheet" href="styles.css">',
      purpose:
        'Separates CSS code into an external file (e.g., "styles.css") and links it to the HTML file. Enables reusability and easy maintenance across multiple HTML files.',
    },
    {
      method: "CSS Libraries",
      syntax:
        "Using CSS frameworks or libraries like Bootstrap, Foundation, or Bulma",
      purpose:
        "Leverages pre-defined CSS rules and classes to style web pages consistently and efficiently. Provides a collection of ready-to-use styles, components, and layout systems.",
    },
  ];
  const rendercssMethods = cssMethods.map((item) => {
    return (
      <tr>
        <td>{item.method}</td>
        <td>{item.syntax}</td>
        <td>{item.purpose}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Insert CSS in Webpage</h2>
      <table>
        <tr>
          <th>Method</th>
          <th>Syntax</th>
          <th>Purpose</th>
        </tr>
        {rendercssMethods}
      </table>
    </div>
  );
};

export default CSSInsert;
