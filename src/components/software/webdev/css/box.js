import React from "react";

const Box = () => {
  const boxModelParts = [
    {
      part: "Content",
      explanation:
        "The content area of the element, where the actual content like text, images, or other elements is displayed. Background image can be used instead of color.",
      properties:
        "width, height, max-width, max-height, min-width, min-height, overflow, text-align(this will adjust any inline elements), vertical-align, display, box-sizing, position, z-index, opacity, background-color, overflow",
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
        "border-width, border-color, border-style, border-radius, box-sizing; border-style options: solid, double, groove, outset, dotted, dashed, inset, ridges",
    },
    {
      part: "Margin",
      explanation:
        "The space outside the border, which creates a gap between the element and surrounding elements. You can use negative numbers if you want things to overlap.  Margin for 2 block elements on top of each other collapses to the lagest margin. Margins for inline elements add together.",
      properties: "margin-top, margin-right, margin-bottom, margin-left",
    },
    {
      part: "border-box",
      explanation:
        "The space inside the border, containing the content and padding areas.In border-box, the properties that control the spacing outside the border are the padding properties, not the margin properties.",
      properties: "padding-top, padding-right, padding-bottom, padding-left",
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
