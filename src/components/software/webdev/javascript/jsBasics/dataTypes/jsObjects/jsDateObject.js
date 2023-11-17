import React from "react";

const JSDateObject = () => {
  const dateCreationMethods = [
    {
      type: "Current Date and Time",
      syntax: "new Date()",
      example: "new Date()",
      explanation:
        "Creates a `Date` object representing the current date and time.",
    },
    {
      type: "Timestamp or Date String",
      syntax: "new Date(value)",
      example: "new Date(1637091600000)",
      explanation:
        "Creates a `Date` object based on the provided numeric timestamp (1637091600000 in this example).",
    },
    {
      type: "Specific Components",
      syntax: "new Date(year, month, day, hour, minute, second, millisecond)",
      example: "new Date(2023, 0, 1)",
      explanation:
        "Creates a `Date` object with the specified components (year: 2023, month: January, day: 1). Note that the month is zero-based (0 for January, 1 for February, etc.).",
    },
  ];
  const renderDateCreationMethods = dateCreationMethods.map((item) => {
    return (
      <tr>
        <td>{item.type}</td>
        <td>{item.syntax}</td>
        <td>{item.example}</td>
        <td>{item.explanation}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Date Object</h1>
      <p>
        In JavaScript, the Date object is a built-in object that represents a
        specific point in time. It provides methods for creating, manipulating,
        and formatting dates.
      </p>
      <h2>Creating a Date Object</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>Syntax</th>
          <th>Example</th>
          <th>Explanation</th>
        </tr>
        {renderDateCreationMethods}
      </table>
      <h2>Manipulating a Date Object</h2>
      <h2>Addind and subtracting time intervals</h2>
      <h2>Formatting and parsing dates</h2>
    </div>
  );
};
export default JSDateObject;
