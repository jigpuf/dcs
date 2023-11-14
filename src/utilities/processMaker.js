import React from "react";

const ProcessBuilder = (props) => {
  const renderProcess = props.array.map((item) => {
    const parts = item.parts.map((part) => {
      return <li>{part}</li>;
    });
    const notes = item.notes.map((note) => {
      return <li>{note}</li>;
    });
    return (
      <tr>
        <td>{item.step}</td>
        <td>
          <ol>{parts}</ol>
        </td>
        <td>
          <details>
            <summary>Notes</summary>
            <ol>{notes}</ol>
          </details>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <caption>{props.name}</caption>
        <thead>
          <tr>
            <th>Step</th>
            <th>Parts</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{renderProcess}</tbody>
      </table>
    </div>
  );
};

export default ProcessBuilder;
/*

props format:

[
    {step:'', parts:['','',], notes:['','',]},
]

component call format:

<ProcessBuilder array={arrayName} name ='Process Name'/>
*/
