import React from "react";

const Ternary = () => {
  const ternaryStatements = {
    syntax: "condition ? expression1 : expression2",
    example: "const result = (score >= 70) ? 'Pass' : 'Fail';",
    explanation: (
      <ol>
        <li>
          Ternary statements provide a concise way to express conditional logic
          in JavaScript.
        </li>
        <li>
          The syntax consists of a condition followed by a question mark (?), an
          expression to evaluate if the condition is true, a colon (:), and an
          expression to evaluate if the condition is false.
        </li>
        <li>
          If the condition is true, the first expression is executed; otherwise,
          the second expression is executed.
        </li>
        <li>
          The result of the ternary statement is the evaluated expression.
        </li>
      </ol>
    ),
  };
  return (
    <div>
      <h2>Ternary</h2>
      <table>
        <tr>
          <th>Syntax</th>
          <th>Example</th>
          <th>Explanation</th>
        </tr>
        <tr>
          <td>{ternaryStatements.syntax}</td>
          <td>{ternaryStatements.example}</td>
          <td>{ternaryStatements.explanation}</td>
        </tr>
      </table>
    </div>
  );
};

export default Ternary;
