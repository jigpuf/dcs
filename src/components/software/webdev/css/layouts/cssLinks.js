import React from "react";

const CSSLinks = () => {
  const anchorCSSProperties = [
    {
      syntax: "color",
      example: "color: blue;",
      notes: "Specifies the color of the text within the anchor tag.",
    },
    {
      syntax: "text-decoration",
      example: "text-decoration: none;",
      notes:
        "Controls the decoration of the text, such as underline, overline, line-through, or none.",
    },
    {
      syntax: "font-weight",
      example: "font-weight: bold;",
      notes: "Sets the weight (boldness) of the text.",
    },
    {
      syntax: "font-size",
      example: "font-size: 16px;",
      notes: "Determines the size of the text.",
    },
    {
      syntax: "font-family",
      example: 'font-family: "Arial", sans-serif;',
      notes: "Specifies the font family to be used for the text.",
    },
    {
      syntax: "padding",
      example: "padding: 5px 10px;",
      notes:
        "Defines the space between the content of the anchor tag and its border.",
    },
    {
      syntax: "margin",
      example: "margin-right: 10px;",
      notes: "Specifies the space between the anchor tag and other elements.",
    },
    {
      syntax: "display",
      example: "display: inline-block;",
      notes:
        "Determines the display behavior of the anchor tag, such as block, inline, or inline-block.",
    },
    {
      syntax: "background-color",
      example: "background-color: yellow;",
      notes: "Sets the background color behind the anchor tag.",
    },
    {
      syntax: "border",
      example: "border: 1px solid black;",
      notes: "Controls the appearance of the border around the anchor tag.",
    },
  ];
  const anchorPseudoClasses = [
    {
      syntax: ":link",
      example: "a:link { color: blue; }",
      notes: "Targets unvisited anchor links.",
    },
    {
      syntax: ":visited",
      example: "a:visited { color: purple; }",
      notes: "Targets visited anchor links.",
    },
    {
      syntax: ":hover",
      example: "a:hover { color: red; }",
      notes: "Targets anchor links when the mouse hovers over them.",
    },
    {
      syntax: ":active",
      example: "a:active { color: green; }",
      notes: "Targets anchor links when they are being activated or clicked.",
    },
    {
      syntax: ":focus",
      example: "a:focus { outline: 2px solid yellow; }",
      notes:
        "Targets anchor links when they receive focus (e.g., via keyboard navigation).",
    },
  ];
  const renderAnchorCSSProperties = anchorCSSProperties.map((item) => {
    return (
      <tr>
        <td>{item.syntax}</td>
        <td>{item.example}</td>
        <td>{item.notes}</td>
      </tr>
    );
  });
  const renderAnchorPseudoProperties = anchorPseudoClasses.map((item) => {
    return (
      <tr>
        <td>{item.syntax}</td>
        <td>{item.example}</td>
        <td>{item.notes}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>CSS Links</h1>
      <table>
        <tr>
          <th>Syntax</th>
          <th>Example</th>
          <th>Notes</th>
        </tr>
        {renderAnchorCSSProperties}
      </table>
      <table>
        <tr>
          <th>Syntax</th>
          <th>Example</th>
          <th>Notes</th>
        </tr>
        {renderAnchorPseudoProperties}
      </table>
    </div>
  );
};

export default CSSLinks;
