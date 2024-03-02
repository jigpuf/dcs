import React from "react";

const Casting = () => {
  const cast = [
    {
      start: "String",
      into: "Number",
      syntax: ["Number('string')"],
      example: ["let score = Number('100');"],
    },
    {
      start: "Number",
      into: "String",
      syntax: ["String(number)"],
      example: ["let string = String(50);"],
    },
    {
      start: "Number",
      into: "Boolean",
      syntax: ["Boolean(number)", "0 is False, any other number is True"],
      example: ["let boolean = Boolean(50);"],
    },
    {
      start: "Find type",
      into: "Find Type",
      syntax: ["typeof(variable)"],
      example: ["let thing =typeof(22); //'number'"],
    },
    { start: "", into: "", syntax: [""], example: [""] },
    { start: "", into: "", syntax: [""], example: [""] },
  ];
  const renderCast = cast.map((item) => {
    const syntaxis = item.syntax.map((syntax) => {
      return <li>{syntax}</li>;
    });
    const examples = item.example.map((example) => {
      return <li>{example}</li>;
    });
    return (
      <tr>
        <td>{item.start}</td>
        <td>{item.into}</td>
        <td>
          <ol>{syntaxis}</ol>
        </td>
        <td>
          <ol>{examples}</ol>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Casting</h2>
      <table>
        <tr>
          <th>Starting </th>
          <th>Into</th>
          <th>Syntax</th>
          <th>Example</th>
        </tr>
        {renderCast}
      </table>
      Finding Type
      <br />
      typeof(variable)
      <br />
    </div>
  );
};

export default Casting;
