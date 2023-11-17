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
  const dateGettingSettingMethods = [
    {
      type: "Starting Code",
      syntax: [
        "let currentDate = new Date();",
        "let specificDate = new Date(year, month, day, hour, minute, second, millisecond);",
      ],
      code: [
        "let currentDate = new Date();",
        "let specificDate = new Date(2023, 3, 4, 12, 30, 2, 0);",
      ],
      explanation: [
        "Create a new date object representing the current date and time",
        "Create a new date object with specific components",
      ],
    },
    {
      type: "Getting and setting date components",
      syntax: [
        "let year = currentDate.getFullYear();",
        "let month = currentDate.getMonth();",
        "let day = currentDate.getDate();",
        "currentDate.setFullYear(year);",
        "currentDate.setMonth(month);",
        "currentDate.setDate(day);",
      ],
      code: [""],
      explanation: [
        "Get the year (4 digits) of a date object",
        "Get the month (0-11) of a date object (0 represents January)",
        "Get the day of the month (1-31) of a date object. Similar methods are available for getting hours, minutes, seconds, and milliseconds",
        "Set the year of a date object",
        "Set the month of a date object",
        "Set the day of the month of a date object",
        "Similar methods are available for setting hours, minutes, seconds, and milliseconds",
      ],
    },
    {
      type: "Adding or subtracting time intervals",
      syntax: [""],
      code: [""],
      explanation: [""],
    },
    {
      type: "Formatting and parsing dates",
      syntax: [""],
      code: [""],
      explanation: [""],
    },
  ];
  const renderDateGettingSettingMethods = dateGettingSettingMethods.map(
    (item) => {
      const renderSyntax = item.syntax.map((syntax) => {
        return <li>{syntax}</li>;
      });
      const renderCode = item.code.map((code) => {
        return <li>{code}</li>;
      });
      const renderExplanation = item.explanation.map((explanation) => {
        return <li>{explanation}</li>;
      });
      return (
        <tr>
          <td>{item.type}</td>
          <td>
            <ol>{renderSyntax}</ol>
          </td>
          <td>
            <ol>{renderCode}</ol>
          </td>
          <td>
            <ol>{renderExplanation}</ol>
          </td>
        </tr>
      );
    }
  );
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
      <table>
        <tr>
          <th>Type</th>
          <th>Syntax</th>
          <th>Code</th>
          <th>Explanation</th>
        </tr>
        {renderDateGettingSettingMethods}
      </table>
      <h2>Addind and subtracting time intervals</h2>
      <h2>Formatting and parsing dates</h2>
    </div>
  );
};
export default JSDateObject;
