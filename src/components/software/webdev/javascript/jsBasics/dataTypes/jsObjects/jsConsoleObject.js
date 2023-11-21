import React from "react";

const JSConsoleObject = () => {
  const consoleMethods = [
    {
      type: "console.log()",
      syntax: ["console.log()"],
      code: ["console.log('Hello', 'world!');"],
      explanation: [
        "Outputs a message to the console. It can accept multiple arguments and concatenates them into a single string for display.",
      ],
    },
    {
      type: "console.error()",
      syntax: ["console.error()"],
      code: ["console.error('An error occurred!');"],
      explanation: [
        "Outputs an error message to the console. It is typically used to log error information.",
      ],
    },
    {
      type: "console.warn()",
      syntax: ["console.warn()"],
      code: ["console.warn('This is a warning!');"],
      explanation: [
        "Outputs a warning message to the console. It is used to log non-fatal warnings or potential issues.",
      ],
    },
    {
      type: "console.info()",
      syntax: ["console.info()"],
      code: ["console.info('This is an information message.');"],
      explanation: [
        "Outputs an informational message to the console. It is used to log general information.",
      ],
    },
    {
      type: "console.clear()",
      syntax: ["console.clear()"],
      code: ["console.clear()"],
      explanation: [
        "Clears the console, removing all previously logged output.",
        "",
      ],
    },
    {
      type: "console.table()",
      syntax: ["console.table()"],
      code: [
        "const data = [",
        "{ name: 'John', age: 25 },",
        "{ name: 'Jane', age: 30 },",
        "];",
        "console.table(data);",
      ],
      explanation: [
        "Displays tabular data in a table format. It accepts an array or an object as an argument.",
        "",
      ],
    },
    {
      type: "console.time(),console.timeEnd() ",
      syntax: ["console.time(label);", "console.timeEnd(label);"],
      code: ["console.time('Timer');", "console.timeEnd('Timer');"],
      explanation: [
        "You can measure the time taken by a specific portion of your code using console.time() and console.timeEnd() methods.",
        "output: Timer: 1234.567ms",
      ],
    },
  ];
  const renderConsoleMethods = consoleMethods.map((item) => {
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
  });
  return (
    <div>
      <h1>Console Object</h1>
      <p>
        In JavaScript, the console object is a built-in object that provides a
        set of methods for logging information to the browser's console. It is
        commonly used for debugging and troubleshooting purposes during
        development. The console object is available in most modern web browsers
        and also in server-side JavaScript environments like Node.js.
      </p>
      <h2>Console Methods</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>Syntax</th>
          <th>Code</th>
          <th>Explanation</th>
        </tr>
        {renderConsoleMethods}
      </table>
    </div>
  );
};
export default JSConsoleObject;
