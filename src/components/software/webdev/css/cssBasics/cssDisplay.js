import React from "react";

const CSSDisplays = () => {
  const display = [
    {
      type: "Block",
      syntax: "display:block;",
      notes: "takes all horizontal space in container",
    },
    {
      type: "inline",
      syntax: "display:inline;",
      notes:
        "Only takes horizontal space that it ocupies.  It will ignore any height and width settings onf the individual members of the line",
    },
    {
      type: "inline-block",
      syntax: "display:inline-block;",
      notes:
        "Allows setting of height and width.  All items will stay in the same horizontal space until it runs out",
    },
    {
      type: "none",
      syntax: "display: none;",
      notes: "Hides the item by removing it from the display flow.",
    },
    {
      type: "opacity",
      syntax: "opacity: 0;",
      notes:
        "Makes the item completely transparent, effectively hiding it. But this does preserve the space",
    },
    {
      type: "visibility",
      syntax: "visibility: hidden;",
      notes: "Hides the item while still preserving its space in the layout.",
    },
    {
      type: "grid",
      syntax: "display:grid;",
      notes: "This is what is used with grid style formatting",
    },
    {
      type: "flex",
      syntax: "display:flex;",
      notes: "This is what is used with flex box style formatting",
    },
  ];
  const renderDisplay = display.map((item) => {
    return (
      <tr>
        <td>{item.type}</td>
        <td>{item.syntax}</td>
        <td>{item.notes}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>CSS Displays</h1>
      <table>
        <tr>
          <th>Type</th>
          <th>Syntax</th>
          <th>Notes</th>
        </tr>
        {renderDisplay}
      </table>
    </div>
  );
};

export default CSSDisplays;
