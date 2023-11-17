import React from "react";

const BreakStatement = () => {
  const items = [
    {
      statement: "break",
      description:
        "The break statement is used to exit or terminate a loop prematurely. When encountered, it immediately terminates the loop, and the program execution continues with the statement following the loop. It is commonly used to exit a loop based on a certain condition.",
      example: "",
    },
    {
      statement: "return",
      description:
        "The return statement is used to exit a function and optionally provide a value back to the caller. It not only terminates the current loop but also exits the entire function in which the loop resides. It is typically used when you want to exit the loop and return a value from the function",
      example: "",
    },
    {
      statement: "continue",
      description:
        "The continue statement is used to skip the current iteration of a loop and move to the next iteration. When encountered, it immediately jumps to the next iteration without executing the remaining code within the loop for the current iteration. It is commonly used to skip certain values or conditions within a loop.",
      example: "",
    },
  ];
  const renderItems = items.map((item) => {
    return (
      <tr>
        <td>{item.statement}</td>
        <td>{item.description}</td>
        <td>{item.example}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Break / Continue / return</h2>
      <table>
        <tr>
          <th>Statement</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
        {renderItems}
      </table>
    </div>
  );
};

export default BreakStatement;
