import React from "react";

class Selectors extends React.Component {
  render() {
    const selectors = [
      {
        selector: "ID",
        syntax: "#id {property:value;}",
        example: "#mainTitle {color: blue;}",
        notes:
          "Selects the one elements with the id of 'mainTitle' and turns the content blue",
      },
      {
        selector: "Class",
        syntax: ".class {property:value;}",
        example: ".scripture {color: blue;}",
        notes:
          "Selects all elements with the class of 'scripture' and turns the content blue",
      },
      {
        selector: "Attribute",
        syntax: "element[attribute:'value'] {property:value;}",
        example: "a[target='_blank'] {color: 'red';}",
        notes:
          "Any anchor tag with the attribute of target set to blank will have red text",
      },
      {
        selector: "Pseudo-class",
        syntax: "element:condition {property: value;}",
        example: "a:hover {color: red;}",
        notes: "Any anchor tag that is being hovered over will have red text",
      },
      {
        selector: "Element",
        syntax: "element {property:value;}",
        example: "p {color: blue;}",
        notes: "Selects all p tags and turns the content blue",
      },
      {
        selector: "Pseudo-element",
        syntax: "element::pseudoElement {property:value;}",
        example: " p::first-line{color: 'red';}",
        notes:
          "Any paragraph element will have the first line turned red. Pseudo elements change pieces of elements",
      },
      {
        selector: "element with a class",
        syntax: "element.class {property:value;}",
        example: " {color: 'red';}",
        notes:
          "Any anchor tag with the attribute of target set to blank will have red text",
      },
      {
        selector: "Universal",
        syntax: "* {property:value;}",
        example: "* {margin: 0;}",
        notes: "All tags will have a margin of 0",
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
    const operators = [
      {
        operator: "Space Parent with any descendant",
        syntax: "parentElement descendantElement {property:value;}",
        example: "div p {color: blue;}",
        notes:
          "This selector targets all <p> elements that are descendants of <div> elements. It applies the specified styles to those <p> elements.",
      },
      {
        operator: ". class or multiple class",
        syntax: ".class1.class2 {property:value;}",
        example: ".btn.primary {background-color: blue;}",
        notes:
          "This selector targets elements with both the 'btn' and 'primary' classes. It applies the specified styles to those elements.",
      },
      {
        operator: "> imediate child",
        syntax: "parentElement > childElement {property:value;}",
        example: "ul > li {font-weight: bold;}",
        notes:
          "This selector targets <li> elements that are immediate children of <ul> elements. It applies the specified styles to those <li> elements.",
      },
      {
        operator: ", multiple elements",
        syntax: "element, element {property:value;}",
        example: "h1, h2, h3 {color: red;}",
        notes:
          "This selector targets multiple elements (<h1>, <h2>, <h3>) and applies the specified styles to all of them.",
      },
    ];
    const renderOperators = operators.map((item) => {
      return (
        <tr>
          <td>{item.operator}</td>
          <td>{item.syntax}</td>
          <td>{item.example}</td>
          <td>{item.notes}</td>
        </tr>
      );
    });
    const specificityRules = [
      {
        selector: "Inline Styles",
        specificity: "Highest",
        description:
          "Inline styles have the highest specificity. Styles applied directly to an element using the style attribute.",
      },
      {
        selector: "ID Selectors",
        specificity: "High",
        description:
          "ID selectors have a high specificity. Styles applied to elements with the id attribute.",
      },
      {
        selector: "Class Selectors, Attribute Selectors, Pseudo-classes",
        specificity: "Medium",
        description:
          "Class selectors, attribute selectors, and pseudo-classes have medium specificity. Styles applied to elements with specific classes, attributes, or pseudo-classes.",
      },
      {
        selector: "Element Selectors, Pseudo-elements",
        specificity: "Low",
        description:
          "Element selectors and pseudo-elements have low specificity. Styles applied to elements based on their tag name or pseudo-elements.",
      },
      {
        selector: "Universal Selectors",
        specificity: "Lowest",
        description:
          "Universal selectors have the lowest specificity. Styles applied to all elements in the document.",
      },
    ];
    const renderSpecificityRules = specificityRules.map((item) => {
      return (
        <tr>
          <td>{item.selector}</td>
          <td>{item.specificity}</td>
          <td>{item.description}</td>
        </tr>
      );
    });
    return (
      <div>
        <h2>Selectors</h2>
        <a
          href="https://www.w3schools.com/cssref/css_selectors.asp"
          target="_blank"
        >
          Selector Reference Page
        </a>
        <br />
        <br />
        <table>
          <tr>
            <th>Selector</th>
            <th>Syntax</th>
            <th>Example</th>
            <th>Notes</th>
          </tr>
          {renderSelectors}
        </table>
        <h3>Operators</h3>
        <table>
          <tr>
            <th>Selector</th>
            <th>Syntax</th>
            <th>Example</th>
            <th>Notes</th>
          </tr>
          {renderOperators}
        </table>
        <h3>Specificity</h3>
        <table>
          <tr>
            <th>Selector</th>
            <th>Specificity</th>
            <th>Description</th>
          </tr>
          {renderSpecificityRules}
        </table>
      </div>
    );
  }
}

export default Selectors;
