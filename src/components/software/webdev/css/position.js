import React from "react";

const Position = () => {
  const cssPositioning = [
    {
      technique: "Static",
      syntax: "position: static;",
      description:
        "Default positioning behavior. Elements are placed in the normal flow of the document.",
    },
    {
      technique: "Float",
      syntax: "float: left | right;",
      description:
        "The float attribute in CSS allows elements to be positioned to the left or right of the surrounding content. By applying the float property to an element, you can make it 'float' within its container, causing other elements to wrap around it. When you float an element in one direction, it is often recommended to add a margin in the opposite direction. This helps maintain an appropriate distance between the floated element and the wrapping content, resulting in a visually pleasing layout. However, it's important to note that when a block-level element wraps around a floated element, it may inherit some of the floated element's styles. This can affect the layout and appearance of the wrapping element. To prevent this, you can use the clear property. By applying the clear: both; value to a block-level element, you can ensure that it clears any floated elements and drops below them. This means that the block-level element will be positioned outside of the floated elements, maintaining its own distinct style and layout. If you only want to avoid one type of float, the clear attribute can be set to left or right.",
    },
    {
      technique: "Absolute",
      syntax: "position: absolute;\nleft: 0;\ntop: 0;",
      description:
        "Positions elements relative to the nearest positioned ancestor or the initial containing block. This means if nothing is positioned",
    },
    {
      technique: "Relative",
      syntax: "position: relative;\nleft: 10px;\ntop: 10px;",
      description:
        "Positions elements relative to their normal position in the document flow. It is relative to the static position.  Think of the example as being pushed 10 pixels from the left and 10 pixels from the top.",
    },
    {
      technique: "Z-index",
      syntax: "position: relative;\nz-index: 1;",
      description:
        "Controls the stacking order of positioned elements. Higher values appear in front of lower values.",
    },
    {
      technique: "Fixed",
      syntax: "position: fixed;\ntop: 0;\nleft: 0;",
      description:
        "Positions elements relative to the viewport, ensuring they remain fixed even when scrolling.",
    },
    {
      technique: "Sticky",
      syntax: "position: sticky;",
      description:
        "Positions elements relative to their nearest scrolling ancestor or the viewport if there is no scrolling ancestor. The element behaves like a relatively positioned element until it reaches a specified scroll threshold, at which point it sticks to a particular position on the screen.",
    },
  ];
  const renderCssPositioning = cssPositioning.map((item) => {
    return (
      <tr>
        <td>{item.technique}</td>
        <td>{item.syntax}</td>
        <td>{item.description}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Positioning</h2>
      <table>
        <tr>
          <th>Technique</th>
          <th>Syntax</th>
          <th>Description</th>
        </tr>
        {renderCssPositioning}
      </table>
    </div>
  );
};

export default Position;
