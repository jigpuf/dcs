import React from "react";
const JSXCommandLine = () => {
  const commands = [
    {
      command: "Create react app",
      syntax: ["npx npx create-react-app my-app"],
      notes: [
        "Creates React app in the folder where the command is given.This cretes the new app, takes a few minutes",
      ],
    },
    {
      command: "NPM Start",
      syntax: ["npm start"],
      notes: [
        "navigate to folder where the top level folder of the app lives.  This opens the app in the browser",
      ],
    },
    {
      command: "^c",
      syntax: ["control + c"],
      notes: ["Kills the app from running"],
    },
  ];
  const renderCommands = commands.map((item) => {
    const syntax = item.syntax.map((code) => {
      return <li>{code}</li>;
    });
    const notes = item.notes.map((note) => {
      return <li>{note}</li>;
    });
    return (
      <tr>
        <td>{item.command}</td>
        <td>
          <ol>{syntax}</ol>
        </td>
        <td>
          <ol>{notes}</ol>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>React Command Line</h1>
      <table>
        <tr>
          <th>Command</th>
          <th>Syntax</th>
          <th>Notes</th>
        </tr>
        {renderCommands}
      </table>
    </div>
  );
};
export default JSXCommandLine;
