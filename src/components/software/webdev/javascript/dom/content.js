import React from "react";

const Content = () => {
  const syntax = [
    {
      content: " get innerText and change it",
      syntax: ".innerText",
      examples: [
        "const myVariable = document.querrySelector('p');",
        "myVariable.innerText = 'new Text '; //'new Text '",
        "myVariable.innerText += 'is awesome'; //'new Text is awesome",
      ],
      notes: [
        "Creates a variable that holds the inner text",
        "Changes the innerText of the variable to the newText",
        "Appends to the inner text",
      ],
    },
    {
      content: "change innerHTML",
      syntax: ".innerHTML",
      examples: [
        "<p>Whole Thing</p>",
        "const para = document.querrySelector('p'); //<p>Whole Thing</p>",
        "para = '<h2>new Stuff</h2>; //<h2>new Stuff</h2>'",
      ],
      notes: [
        "This is an entire element",
        "set entire element to a variable",
        "change to entirely new element",
      ],
    },
    {
      content: "Getting and Setting Attributes",
      syntax: "",
      examples: [""],
      notes: [""],
    },
    { content: "Changing CSS Styles", syntax: "", examples: [""], notes: [""] },
    {
      content: "Adding Removing classes",
      syntax: "",
      examples: [""],
      notes: [""],
    },
    { content: "", syntax: "", examples: [""], notes: [""] },
    { content: "", syntax: "", examples: [""], notes: [""] },
    { content: "", syntax: "", examples: [""], notes: [""] },
  ];
  const renderSyntax = syntax.map((item) => {
    const examples = item.examples.map((example) => {
      return <li>{example}</li>;
    });
    const notes = item.notes.map((note) => {
      return <li>{note}</li>;
    });
    return (
      <tr>
        <td>{item.content}</td>
        <td>{item.syntax}</td>
        <td>
          <ol>{examples}</ol>
        </td>
        <td>
          <ol>{notes}</ol>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>JS Manipulate Content</h1>
      <table>
        <tr>
          <th>Content</th>
          <th>Syntax</th>
          <th>Example</th>
          <th>Notes</th>
        </tr>
        {renderSyntax}
      </table>
    </div>
  );
};
export default Content;
