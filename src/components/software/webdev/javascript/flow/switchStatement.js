import React from "react";

const SwitchStatement = () => {
  const switcher = [
    {
      type: "Initial Code",
      code: ["const grade ==’B’;"],
      output: "",
    },
    {
      type: "Switch Statement",
      code: [
        "switch(grade){",
        "case ‘A’:",
        "Console.log(‘You got an A’);",
        "case ‘B’:",
        "Console.log(‘You got a B’);",
        "default:",
        "Console.log(‘You are stupid’);",
        "}",
      ],
      output: "Switch statements are strict when looking at boolean statements",
    },
    {
      type: "Output",
      code: ["'You got a B'"],
      output: "‘You got a B’",
    },
  ];
  const renderSwitcher = switcher.map((item) => {
    let codes = item.code.map((code) => {
      return <li>{code}</li>;
    });
    return (
      <tr>
        <td>{item.type}</td>
        <td>
          <ol>{codes}</ol>
        </td>
        <td>{item.output}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Switch Statement</h1>
      <table>
        <tr>
          <th>Type</th>
          <th>code</th>
          <th>meaning</th>
        </tr>
        {renderSwitcher}
      </table>
    </div>
  );
};

export default SwitchStatement;
