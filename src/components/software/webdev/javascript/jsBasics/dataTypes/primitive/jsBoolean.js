import React from "react";

const JSBoolean = () => {
  const bool = [
    { operation: "equal to", operator: "==" },
    { operation: "Strict Equal to", operator: "===" },
    { operation: "Not Equal to", operator: "!=" },
    { operation: "Not", operator: "!" },
    { operation: "Greater Than", operator: ">" },
    { operation: "Greater than or equal to", operator: ">=" },
    { operation: "Less than", operator: "<" },
    { operation: "Less than or equal to", operator: "<=" },
    { operation: "And", operator: "&&" },
    { operation: "Or", operator: "||" },
  ];
  const renderBool = bool.map((item) => {
    return (
      <tr>
        <td>{item.operation}</td>
        <td>{item.operator}</td>
      </tr>
    );
  });
  const truthiness = [
    { trueValue: "true", falseValue: "false" },
    { trueValue: "Non-zero numbers (e.g., 1, -1)", falseValue: "0" },
    {
      trueValue: "Non-empty strings (e.g., 'hello')",
      falseValue: "Empty string ('')",
    },
    {
      trueValue: "Arrays with at least one element",
      falseValue: "Empty array ([])",
    },
    { trueValue: "Objects", falseValue: "null" },
    { trueValue: "Functions", falseValue: "undefined" },
  ];

  const renderTruthiness = truthiness.map((item) => {
    return (
      <tr>
        <td>{item.trueValue}</td>
        <td>{item.falseValue}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Boolean</h2>
      <h2>Operators</h2>
      <table>
        <tr>
          <th>Operation</th>
          <th>Operator</th>
        </tr>
        {renderBool}
      </table>
      <h2>Comparing letters</h2>
      Later Letters in alphebet are greater
      <br />
      Lower Case is greater than Upper Case
      <br />
      <h3>Loose Verses Strict</h3>
      let age = 25;
      <br />
      (age == 25) //true
      <br />
      (age == '25') //true
      <br />
      (age === '25') //false
      <br />
      (age === 25) //true
      <br />
      <h3>Truthy vs. Falsy</h3>
      <table>
        <tr>
          <th>Truthy Values</th>
          <th>Falsy Values</th>
        </tr>
        {renderTruthiness}
      </table>
    </div>
  );
};

export default JSBoolean;
