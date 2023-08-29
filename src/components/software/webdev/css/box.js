import React from "react";

const Box = () => {
  const boxModelParts = [
    {
      part: "Content",
      explanation:
        "The content area of the element, where the actual content like text, images, or other elements is displayed.",
      properties:
        "width, height, max-width, max-height, min-width, min-height, overflow, text-align, vertical-align, display, box-sizing, position, z-index, opacity, background-color",
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
      properties: "border-width, border-color, border-style, border-radius",
    },
    {
      part: "Margin",
      explanation:
        "The space outside the border, which creates a gap between the element and surrounding elements.",
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
        The box model allows you to have fine-grained control over the size,
        spacing, and appearance of elements on a webpage. By manipulating the
        content, padding, border, and margin of an element, you can create
        visually appealing and well-structured layouts. The content area holds
        the actual content of the element, such as text or images. By setting
        the <code>width</code> and <code>height</code> properties, you can
        determine the dimensions of the content area. This allows you to control
        how much space the content occupies within its parent container.
      </p>

      <p>
        The padding provides space between the content and the element's border.
        It helps create visual separation and breathing room around the content.
        You can adjust the padding using properties such as{" "}
        <code>padding-top</code>, <code>padding-right</code>,{" "}
        <code>padding-bottom</code>, and <code>padding-left</code>. By modifying
        these values, you can increase or decrease the space between the content
        and the border, achieving the desired visual effect.
      </p>

      <p>
        The border surrounds the padding and content areas and serves as a
        visible boundary. It can be customized with properties like{" "}
        <code>border-width</code>, <code>border-color</code>,{" "}
        <code>border-style</code>, and <code>border-radius</code>. Borders are
        commonly used to visually separate elements or add emphasis. By
        manipulating the border properties, you can control the thickness,
        color, and style of the border, allowing for various design
        possibilities.
      </p>

      <p>
        The margin is the space around the element, outside the border. It
        creates a gap between the element and neighboring elements. You can
        adjust the margin using properties like <code>margin-top</code>,{" "}
        <code>margin-right</code>, <code>margin-bottom</code>, and{" "}
        <code>margin-left</code>. By modifying these values, you can control the
        spacing between elements, influencing their positioning and overall
        layout. Margins are particularly useful for creating whitespace and
        controlling the flow of content within a webpage.
      </p>
      <p>
        Total width = content width + left padding + right padding + left border
        + right border + left margin + right margin
      </p>
      <img src="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/box-model.png" />
      <br />

      <a href="https://htmlcolorcodes.com/color-picker/" target="_blank">
        Color Selector
      </a>
    </div>
  );
};

export default Box;
