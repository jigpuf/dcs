import React from "react";
import Selectors from "../../css/cssBasics/selectors";
import ButtonMaker from "../../../../../utilities/buttonMaker";

const JSSelectors = () => {
  const items = [
    { name: "CSS Selectors", slug: "css", component: <Selectors /> },
  ];
  const selectors = [
    {
      selector: "getElementById",
      syntax: "document.getElementById('elementId')",
      example: "document.getElementById('myButton')",
      notes: "Returns the element with the specified ID.",
    },
    {
      selector: "getElementsByClassName",
      syntax: "document.getElementsByClassName('className')",
      example: "document.getElementsByClassName('myClass')",
      notes: "Returns a collection of elements with the specified class name.",
    },
    {
      selector: "getElementsByTagName",
      syntax: "document.getElementsByTagName('tagName')",
      example: "document.getElementsByTagName('div')",
      notes: "Returns a collection of elements with the specified tag name.",
    },
    {
      selector: "querySelector",
      syntax: "document.querySelector('selector')",
      example: "document.querySelector('#myId .myClass')",
      notes:
        "Returns the first element that matches the specified CSS selector.",
    },
    {
      selector: "querySelectorAll",
      syntax: "document.querySelectorAll('selector')",
      example: "document.querySelectorAll('.myClass')",
      notes:
        "Returns a static (non-live) NodeList of all elements that match the specified CSS selector.",
    },
  ];
  const renderSelectors = selectors.map((item) => {
    return (
      <tr>
        <td>{item.selector}</td>
        <td>{item.syntax}</td>
        <td>{item.example}</td>
        <td>{item.notes}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Javascript Selectors</h1>
      <table>
        <tr>
          <th>Selector</th>
          <th>Syntax</th>
          <th>Example</th>
          <th>Notes</th>
        </tr>
        {renderSelectors}
      </table>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default JSSelectors;
