import React from "react";

const JSMathOperators = () => {
  const operators = [
    {
      operator: "Addition",
      sign: "+",
      example: "let result = 5 + 3; // result will be 8",
    },
    {
      operator: "Subtraction",
      sign: "-",
      example: "let result = 10 - 4; // result will be 6",
    },
    {
      operator: "Multiplication",
      sign: "*",
      example: "let result = 2 * 6; // result will be 12",
    },
    {
      operator: "Division",
      sign: "/",
      example: "let result = 20 / 5; // result will be 4",
    },
    {
      operator: "Remainder (Modulus)",
      sign: "%",
      example: "let result = 15 % 4; // result will be 3",
    },
    {
      operator: "Exponentiation",
      sign: "**",
      example: "let result = 2 ** 3; // result will be 8",
    },
    {
      operator: "Increment",
      sign: "++",
      example: "let x = 5; x++; // x will be 6",
    },
    {
      operator: "Decrement",
      sign: "--",
      example: "let y = 8; y--; // y will be 7",
    },
  ];
  const renderOperators = operators.map((item) => {
    return (
      <tr>
        <td>{item.operator}</td>
        <td>{item.sign}</td>
        <td>{item.example}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Mathmatic Operators</h2>
      <table>
        <tr>
          <th>Operator</th>
          <th>Sign</th>
          <th>Example</th>
        </tr>
        {renderOperators}
      </table>
    </div>
  );
};

export default JSMathOperators;
