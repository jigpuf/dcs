import React from "react";
import { render } from "react-dom";

const HtmCSSUnits = () => {
  const cssUnits = [
    {
      name: "Pixels (px)",
      description:
        "A pixel is a relative unit of length commonly used for screen display. It represents a single point of a screen.",
    },
    {
      name: "Percentage (%)",
      description:
        "The percentage unit represents a fraction of the available space. It is relative to the size of the parent container or the property it is applied to.",
    },
    {
      name: "Viewport Width (vw)",
      description:
        "The viewport width unit represents a percentage of the width of the viewport. 1vw is equal to 1% of the viewport width.",
    },
    {
      name: "Viewport Height (vh)",
      description:
        "The viewport height unit represents a percentage of the height of the viewport. 1vh is equal to 1% of the viewport height.",
    },
    {
      name: "Em (em)",
      description:
        "The em unit is relative to the font size of its nearest parent or the element itself. 1em is equal to the current font size.",
    },
    {
      name: "Rem (rem)",
      description:
        "The rem unit is similar to the em unit but is relative to the root (html) font size. 1rem is equal to the font size of the root element.",
    },
    {
      name: "Inches (in)",
      description:
        "The inch unit represents inches as a physical measurement. 1in is equal to 96 pixels.",
    },
    {
      name: "Centimeters (cm)",
      description:
        "The centimeter unit represents centimeters as a physical measurement. 1cm is equal to 37.8 pixels.",
    },
    {
      name: "Points (pt)",
      description:
        "The point unit represents points as a physical measurement. 1pt is equal to 1/72 of an inch.",
    },
    {
      name: "Picas (pc)",

      description:
        "The pica unit represents picas as a physical measurement. 1pc is equal to 12 points.",
    },
    {
      name: "calc(expression)",

      description:
        "This can be used as the value with a math expression inside that allows for a calculation of size.  This can take any set of units.  They don't have to match, so the size can be responsive to changing relative units.**Requires spaces around mathematical operators",
    },
  ];
  const renderCSSUnits = cssUnits.map((item) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.description}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>CSS Units</h2>
      <table>
        <tr>
          <th>Unit</th>
          <th>Description</th>
        </tr>
        {renderCSSUnits}
      </table>
    </div>
  );
};

export default HtmCSSUnits;
