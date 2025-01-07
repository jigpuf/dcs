import React from "react";
const JSXButtons = () => {
  const buttons = [
    {
      step: "Buttons component",
      code: [
        "import React from 'react';",
        "import ButtonMaker from '../../utilities/buttonMaker';",
        "import Fuses from '../panels/fuses';",
        "import Breaker from './circuitProtection/breaker';",
        "const CircuitProtection = () => {",
        "const items = [",
        "{ name: 'Fuses', slug: 'fuses', component: <Fuses /> },",
        "{ name: 'Breakers', slug: 'breakers', component: <Breaker /> },",
        "];",
        "return (",
        "<div>",
        "<ButtonMaker buttons={items} />",
        "</div>",
        ");",
        "};",
        "export default CircuitProtection;",
      ],
      notes: [""],
      display: "",
    },
    {
      step: "Render button",
      code: [
        "import React, {useState} from 'react';",
        "const ButtonMaker = (props) =>{",
        "const [buttonState, setButtonState] = useState(undefined);",
        "const buttons = props.buttons.map(item =>{",
        "return (",
        "<button ",
        "key={item.slug}",
        "onClick={() => setButtonState(item.slug)}",
        "className={buttonState === item.slug ? 'tier1 active': 'teir1'}",
        ">{item.name}",
        "</button>)",
        "});",
        "const activeButton = props.buttons.filter(item =>{",
        "return buttonState ===item.slug;",
        "})",
        "const renderActiveButton = activeButton[0] && activeButton[0].component;",
        "return(",
        "<div>",
        "<ul>",
        "{buttons}",
        "</ul>",
        "<hr />",
        "{renderActiveButton}",
        "</div>",
        ");",
        "}",
        "export default ButtonMaker;",
        "",
      ],
      notes: [""],
      display: "",
    },
    {
      step: "CSS",
      code: [
        ".active {",
        "background-color: lightblue;",
        "}",
        "button {",
        "border-radius: 10px;",
        "color: black;",
        "}",
        "",
      ],
      notes: [""],
      display: "",
    },
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
          <details>
            <summary>Code</summary>
            <ol>{codes}</ol>
          </details>
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
