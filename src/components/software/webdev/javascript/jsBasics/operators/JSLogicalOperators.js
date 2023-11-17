import React from "react";

const JSLogicalOperators = () => {
  const operators = [
    {
      name: "Equal to",
      symbol: "==",
      meaning: "Checks if two values are equal, allowing type coercion",
      example: "5 == 5 // true",
    },
    {
      name: "Not equal to",
      symbol: "!=",
      meaning: "Checks if two values are not equal, allowing type coercion",
      example: "5 != 3 // true",
    },
    {
      name: "Strict equal to",
      symbol: "===",
      meaning: "Checks if two values are equal without type coercion",
      example: "5 === 5 // true",
    },
    {
      name: "Strict not equal to",
      symbol: "!==",
      meaning: "Checks if two values are not equal without type coercion",
      example: "5 !== 3 // true",
    },
    {
      name: "Greater than",
      symbol: ">",
      meaning: "Checks if the left value is greater than the right value",
      example: "5 > 3 // true",
    },
    {
      name: "Less than",
      symbol: "<",
      meaning: "Checks if the left value is less than the right value",
      example: "5 < 3 // false",
    },
    {
      name: "Greater than or equal to",
      symbol: ">=",
      meaning:
        "Checks if the left value is greater than or equal to the right value",
      example: "5 >= 5 // true",
    },
    {
      name: "Less than or equal to",
      symbol: "<=",
      meaning:
        "Checks if the left value is less than or equal to the right value",
      example: "5 <= 3 // false ",
    },
    {
      name: "Logical AND",
      symbol: "&&",
      meaning: "Returns true if both operands are true",
      example: "true && false // false ",
    },
    {
      name: "Logical OR",
      symbol: "||",
      meaning: "Returns true if either operand is true",
      example: "true || false // true",
    },
    {
      name: "Logical NOT",
      symbol: "!",
      meaning: "Returns the opposite of the operand",
      example: "!true // false ",
    },
    {
      name: "Conditional (Ternary) Operator",
      symbol: "condition ? value1 : value2",
      meaning:
        "Evaluates a condition and returns one of two values based on the result of the condition",
      example: 'x > 5 ? "Greater than 5" : "Less than or equal to 5"',
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
      <h2>Logical Operators</h2>

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

export default JSLogicalOperators;
