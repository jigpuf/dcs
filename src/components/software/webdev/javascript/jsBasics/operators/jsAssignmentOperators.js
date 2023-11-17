import React from "react";

const JSAsignmentOperators = () => {
  const operators = [
    {
      name: "Assignment",
      symbol: "=",
      meaning: "Assigns the value on the right to the variable on the left",
      example: "x = 5",
    },
    {
      name: "Addition assignment",
      symbol: "+=",
      meaning:
        "Adds the value on the right to the variable on the left and assigns the result to the variable",
      example: "x += 3",
    },
    {
      name: "Subtraction assignment",
      symbol: "-=",
      meaning:
        "Subtracts the value on the right from the variable on the left and assigns the result to the variable",
      example: "x -= 2",
    },
    {
      name: "Multiplication assignment",
      symbol: "*=",
      meaning:
        "Multiplies the variable on the left by the value on the right and assigns the result to the variable",
      example: "x *= 4",
    },
    {
      name: "Division assignment",
      symbol: "/=",
      meaning:
        "Divides the variable on the left by the value on the right and assigns the result to the variable",
      example: "x /= 2",
    },
    {
      name: "Remainder assignment",
      symbol: "%=",
      meaning:
        "Calculates the remainder of dividing the variable on the left by the value on the right and assigns the result to the variable",
      example: "x %= 3",
    },
    {
      name: "Exponentiation assignment",
      symbol: "**=",
      meaning:
        "Raises the variable on the left to the power of the value on the right and assigns the result to the variable",
      example: "x **= 2",
    },
    {
      name: "Bitwise AND assignment",
      symbol: "&=",
      meaning:
        "Performs a bitwise AND operation between the variable on the left and the value on the right and assigns the result to the variable",
      example: "x &= 3",
    },
    {
      name: "Bitwise OR assignment",
      symbol: "|=",
      meaning:
        "Performs a bitwise OR operation between the variable on the left and the value on the right and assigns the result to the variable",
      example: "x |= 5",
    },
    {
      name: "Bitwise XOR assignment",
      symbol: "^=",
      meaning:
        "Performs a bitwise XOR operation between the variable on the left and the value on the right and assigns the result to the variable",
      example: "x ^= 2",
    },
    {
      name: "Left shift assignment",
      symbol: "<<=",
      meaning:
        "Shifts the bits of the variable on the left to the left by the number of positions specified by the value on the right and assigns the result to the variable",
      example: "x <<= 1",
    },
    {
      name: "Right shift assignment",
      symbol: ">>=",
      meaning:
        "Shifts the bits of the variable on the left to the right by the number of positions specified by the value on the right and assigns the result to the variable",
      example: "x >>= 2",
    },
    {
      name: "Unsigned right shift assignment",
      symbol: ">>>=",
      meaning:
        "Shifts the bits of the variable on the left to the right by the number of positions specified by the value on the right, filling the vacant positions with zeros, and assigns the result to the variable",
      example: "x >>>= 1",
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
      <h2>Asignment Operators</h2>

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

export default JSAsignmentOperators;
