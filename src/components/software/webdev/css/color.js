import React from "react";

const Color = () => {
  const colorSyntax = [
    {
      type: "Keyword",
      syntax: "color: keyword;",
      example: "color: red;",
      bestUses: "Applying predefined color names such as red, blue, or green.",
    },
    {
      type: "Hexadecimal",
      syntax: "color: #RRGGBB;",
      example: "color: #FF0000;",
      bestUses:
        "Specifying colors using a six-digit hexadecimal representation.",
    },
    {
      type: "RGB",
      syntax: "color: rgb(red, green, blue);",
      example: "color: rgb(255, 0, 0);",
      bestUses:
        "Defining colors using the red, green, and blue color channels.",
    },
    {
      type: "RGBA",
      syntax: "color: rgba(red, green, blue, alpha);",
      example: "color: rgba(255, 0, 0, 0.5);",
      bestUses:
        "Specifying colors with an additional alpha (transparency) channel.",
    },
    {
      type: "HSL",
      syntax: "color: hsl(hue, saturation, lightness);",
      example: "color: hsl(0, 100%, 50%);",
      bestUses:
        "Defining colors using the hue, saturation, and lightness values.",
    },
    {
      type: "HSLA",
      syntax: "color: hsla(hue, saturation, lightness, alpha);",
      example: "color: hsla(0, 100%, 50%, 0.5);",
      bestUses:
        "Specifying colors with an additional alpha (transparency) channel using the HSL color model.",
    },
  ];
  const renderColorSyntax = colorSyntax.map((item) => {
    return (
      <tr>
        <td>{item.type}</td>
        <td>{item.syntax}</td>
        <td>{item.example}</td>
        <td>{item.bestUses}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Color</h2>
      <h3>Color syntax</h3>
      <table>
        <tr>
          <th>Type</th>
          <th>Syntax</th>
          <th>Example</th>
          <th>Best Uses</th>
        </tr>
        {renderColorSyntax}
      </table>
      <h3>Sources</h3>
      <a href="https://coolors.co/generate" target="_blank">
        Coolors
      </a>
      <br />
      <a href="https://colorhunt.co/" target="_blank">
        Color Hunt
      </a>
    </div>
  );
};

export default Color;
