import React from "react";
const JSXButtons = () => {
  const buttons = [
    { step: "Top Level copmponent", code: [""], notes: [""], display: "" },
    { step: "Buttons component", code: [""], notes: [""], display: "" },
    { step: "Render button", code: [""], notes: [""], display: "" },
    { step: "CSS", code: [""], notes: [""], display: "" },
    { step: "", code: [""], notes: [""], display: "" },
  ];
  const renderButtons = buttons.map((item) => {
    const notes = item.notes.map((note) => {
      return <li>{note}</li>;
    });
    const codes = item.code.map((code) => {
      return <li>{code}</li>;
    });
    return (
      <tr>
        <td>{item.step}</td>
        <td>
          <ol>{codes}</ol>
        </td>
        <td>
          <ol>{notes}</ol>
        </td>
        <td>{item.display}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Active Buttons</h1>
      <table>
        <tr>
          <th>Step</th>
          <th>Code</th>
          <th>Notes</th>
          <th>Display</th>
        </tr>
        {renderButtons}
      </table>
    </div>
  );
};
export default JSXButtons;
