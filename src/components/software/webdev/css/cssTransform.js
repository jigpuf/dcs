import React from "react";

const CSSTransform = () => {
  const transformFunctions = [
    {
      function: "Translate",
      syntax: "translateX(value) translateY(value)",
      notes: "Moves an element along the X and/or Y axis.",
    },
    {
      function: "Scale",
      syntax: "scaleX(value) scaleY(value)",
      notes: "Changes the size of an element.",
    },
    {
      function: "Rotate",
      syntax: "rotate(angle)",
      notes: "Rotates an element clockwise around a fixed point.",
    },
    {
      function: "Skew",
      syntax: "skewX(angle) skewY(angle)",
      notes: "Skews an element along the X and/or Y axis.",
    },
    {
      function: "Matrix",
      syntax: "matrix(a, b, c, d, e, f)",
      notes:
        "Defines a 2D transformation matrix for more control over transformations.",
    },
  ];
  const renderTransformFunctions = transformFunctions.map((item) => {
    return (
      <tr>
        <td>{item.function}</td>
        <td>{item.syntax}</td>
        <td>{item.notes}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>CSS Transform</h1>
      <p>
        The transform attribute in CSS is a powerful property that allows you to
        apply various transformations to the elements on a webpage. It provides
        a way to modify the position, size, rotation, and skew of an element
        without affecting the layout or flow of other elements.
      </p>
      <table>
        <caption>Transform Attribute functions</caption>

        <thead>
          <tr>
            <th>Function</th>
            <th>Syntax</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{renderTransformFunctions}</tbody>
      </table>
      The Transform-Origin attribute can be used to change the point at which
      the transform function pivots from
    </div>
  );
};

export default CSSTransform;
