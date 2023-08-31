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
    {
      type: "Gradient",
      syntax:
        "background-image: linear-gradient(direction, firstColor, secondColor);",
      example: "background-image: linear-gradient(to right, red, blue);",
      bestUses: "Creating gradient effects using CSS linear gradients.",
    },
    {
      type: "Shadow",
      syntax:
        "box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius] [color] [inset];",
      example: "box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);",
      bestUses:
        "Applying shadow effects to elements using box-shadow property. Can be used for tex shadow also.Horizontal Offset: This specifies the horizontal distance of the shadow from the element. It can be a positive value (to the right) or a negative value (to the left).Vertical Offset: This specifies the vertical distance of the shadow from the element. It can be a positive value (downward) or a negative value (upward).Blur Radius: This determines the blurring effect applied to the shadow. It represents the amount of blur to be applied and creates a softer, more diffuse shadow. A value of 0 means no blur, and larger values produce more significant blurring.Spread Radius: This controls the size of the shadow. It specifies how much the shadow should spread outward from the element's boundaries. A positive value expands the shadow, while a negative value contracts it. This parameter is optional, and if omitted, the shadow will have a uniform size based on the blur radius.Color: This defines the color of the shadow. It can be specified using color names, hexadecimal values, RGB values, or RGBA values. The color parameter is mandatory for the box-shadow property.Inset: This is an optional parameter that, when present, creates an inset shadow instead of an outset shadow. An inset shadow appears inside the element rather than outside. To create an inset shadow, you can use the keyword inset.",
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
      <h3>Color Theory</h3>
      <li>Hue-Color</li>
      <li>Saturation-Intensity, suddle or vibrant</li>
      <li>Value-More black or white</li>
      <li>Monochromatic- 1 hue and changes in sautration and value</li>
      <li>Analagous- uses colors next to each other on the wheel</li>
      <li>Complimentary colors are oppsite on wheel</li>
      <li>
        Split complimentary- colors are next to the opposite on the color wheel
        gives more options but same contrast
      </li>
      <li>Triadic- three colors evenly spaced, be careful with this one</li>
      <li>Tetratic, more than one complimentary colors</li>
      <li>If colors are too busy together, adjust contrast or saturation</li>
      <li>Bright colors- fun or modern</li>
      <h3>Sources</h3>
      <a href="https://coolors.co/generate" target="_blank">
        Coolors
      </a>
      <br />
      <a href="https://colorhunt.co/" target="_blank">
        Color Hunt
      </a>
      <br />
      <a
        href="https://www.w3schools.com/colors/colors_picker.asp"
        target="_blank"
      >
        W3 Color Selector
      </a>
    </div>
  );
};

export default Color;
