import React from "react";

const JSTypeofOperators = () => {
  const operators = [
    {
      name: "typeof operand",
      symbol: "typeof",
      meaning: "Returns a string indicating the type of the operand",
      example: 'console.log(typeof 42); // "number"',
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
      <h2>Typeof Operators</h2>

      <table>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Meaning</th>
          <th>Example</th>
        </tr>
        {renderOperators}
      </table>
      <p>
        The typeof operator in JavaScript is a unary operator that is used to
        determine the data type of a given value. When applied to an operand,
        such as a variable or a literal value, it returns a string indicating
        the type of that value. The returned string can be one of the following:
        "number", "string", "boolean", "undefined", "object", or "function". It
        provides a convenient way to dynamically check the type of a value
        during runtime. However, it's important to note that the typeof operator
        has some limitations and peculiarities. For example, it treats null as
        an object and does not distinguish between different object types.
        Therefore, it's recommended to use additional checks or other methods
        for more precise type checking and handling in JavaScript.
      </p>
    </div>
  );
};

export default JSTypeofOperators;
