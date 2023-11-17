import React from "react";

const JSBitwiseOperators = () => {
  const operators = [
    {
      name: "Bitwise AND",
      symbol: "&",
      meaning: "Performs a bitwise AND operation",
      example: "5 & 3, // 1",
    },
    {
      name: "Bitwise OR",
      symbol: "|",
      meaning: "Performs a bitwise OR operation",
      example: "5 | 3, // 7",
    },
    {
      name: "Bitwise XOR",
      symbol: "^",
      meaning: "Performs a bitwise XOR (exclusive OR) operation",
      example: "5 ^ 3, // 6",
    },
    {
      name: "Bitwise NOT",
      symbol: "~",
      meaning: "Performs a bitwise NOT operation",
      example: "~5, // -6",
    },
    {
      name: "Left shift",
      symbol: "<<",
      meaning:
        "Shifts the bits of the left operand to the left by the number of positions specified by the right operand",
      example: "5 << 1, // 10",
    },
    {
      name: "Sign-propagating right shift",
      symbol: ">>",
      meaning:
        "Shifts the bits of the left operand to the right by the number of positions specified by the right operand, preserving the sign",
      example: "5 >> 1, // 2",
    },
    {
      name: "Zero-fill right shift",
      symbol: ">>>",
      meaning:
        "Shifts the bits of the left operand to the right by the number of positions specified by the right operand, filling the vacant positions with zeros",
      example: "5 >>> 1, // 2",
    },
  ];
  const renderOperators = operators.map((item) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.symbol}</td>
        <td>{item.meaning}</td>
        <td>{item.example}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Bitwise Operators</h2>

      <table>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Meaning</th>
          <th>Example</th>
        </tr>
        {renderOperators}
      </table>
    </div>
  );
};

export default JSBitwiseOperators;
