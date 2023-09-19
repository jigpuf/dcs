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
        "Allows elements to be placed to the left or right of the surrounding content.Typically if you float 1 direction, it looks better putting a margin to the opposite direction to keep things wrapping around it at a better distance. If you have a block element wrapping around something, it may carry its style into the thing that is floating. By using the clear: both; command on the block element, it willdrop outside of the thing being floated",
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
      syntax: "",
      description: "",
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
