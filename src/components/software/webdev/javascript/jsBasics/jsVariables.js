import React from "react";

const JSVariables = () => {
  const keywords = [
    {
      word: "var",
      scope: "Global",
      writability: "Read/Write",
      hoisting: "",
      syntax: "var variableNameHere = valueHere;",
    },
    {
      word: "let",
      scope: "Local",
      writability: "Read/Write",
      hoisting: "",
      syntax: "let variableNameHere = valueHere;",
    },
    {
      word: "const",
      scope: "Local",
      writability: "Read only after assignment",
      hoisting: "",
      syntax: "const variableNameHere = valueHere;",
    },
    {
      word: "strict",
      scope: "Local",
      writability: "Read Only",
      hoisting: "",
      syntax: "",
    },
  ];

  const renderKeywords = keywords.map((item) => {
    return (
      <tr>
        <td>{item.word}</td>
        <td>{item.scope}</td>
        <td>{item.writability}</td>
        <td>{item.hoisting}</td>
        <td>{item.syntax}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Variable Keywords</h2>
      <table>
        <tr>
          <th>Keyword</th>
          <th>Scope</th>
          <th>Writability</th>
          <th>Hoisting</th>
          <th>Syntax</th>
        </tr>
        {renderKeywords}
      </table>
      Variable Naming Conventions:
      <ol>
        <li>No spaces</li>
        <li>Only contain letters, numbers, underscore, Dollar sign</li>
        <li>Has to start with letter or underscore</li>
        <li>Cannot use Javascript key words</li>
      </ol>
      <h2>Calling, Initializing, Defining</h2>
    </div>
  );
};

export default JSVariables;
