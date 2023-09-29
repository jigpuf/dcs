import React from "react";

const Box = () => {
  const boxModelParts = [
    {
      part: "Content",
      explanation:
        "The content area of the element, where the actual content like text, images, or other elements is displayed.",
      properties:
        "width, height, max-width, max-height, min-width, min-height, overflow, text-align, vertical-align, display, box-sizing, position, z-index, opacity, background-color, overflow",
    },
    {
      part: "Padding",
      explanation:
        "The space between the content and the element's border. It provides an area of cushioning around the content.",
      properties: "padding-top, padding-right, padding-bottom, padding-left",
    },
    {
      part: "Border",
      explanation:
        "The border that surrounds the padding and content. It can be customized with properties like color, width, and style.",
      properties:
        "border-width, border-color, border-style, border-radius, box-sizing",
    },
    {
      part: "Margin",
      explanation:
        "The space outside the border, which creates a gap between the element and surrounding elements. You can use negative numbers if you want things to overlap",
      properties: "margin-top, margin-right, margin-bottom, margin-left",
    },
  ];
  const renderBoxModelParts = boxModelParts.map((item) => {
    return (
      <tr>
        <td>{item.part}</td>
        <td>{item.explanation}</td>
        <td>{item.properties}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Box Model</h2>
      <table>
        <tr>
          <th>Part</th>
          <th>Explaination</th>
          <th>Properties</th>
        </tr>
        {renderBoxModelParts}
      </table>
      <p>
        Total width = content width + left padding + right padding + left border
        + right border + left margin + right margin
      </p>
      <img src="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/box-model.png" />
      <br />
    </div>
  );
};

export default Box;
