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
        selector: "Pseudo-class nth child",
        syntax: "element:nth-child() {property: value;}",
        example: "ul li:nth-child(2n) {background-color: #f0f0f0;}",
        notes:
          "The argument can take different forms to define the pattern of selection. Here are some examples:(n) selects every element.(2n) selects every even element.(2n+1) selects every odd element.(3n) selects every element at positions that are multiples of 3. (3n+1) selects every element at positions that are multiples of 3 plus 1. (even) selects every even element (same as 2n). (odd) selects every odd element (same as (2n+1)).",
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
      {
        operator: "chaining, no space",
        syntax: "elementelement {property:value;}",
        example: "h1.title#firstTitle {color: red;}",
        notes:
          "This selector is an and operator essentially.  If everything is true, it selects them.  If the element is an h1 and has a class of title and has the id of firstTitle, then it will be styled red.  Element HAS TO be listed first in these if there is an element",
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
    const inheritanceRules = [
      {
        rule: "Inherited Properties",
        description:
          "Some CSS properties are inherited by default. When an element doesn't have a value specified for an inherited property, it inherits the computed value of that property from its parent element.",
        examples: [
          "font-family",
          "font-size",
          "color",
          "line-height",
          "text-align",
        ],
      },
      {
        rule: "Non-Inherited Properties",
        description:
          "Conversely, some CSS properties are not inherited by default. These properties have an initial value defined by the browser, and each element must explicitly specify a value for them.",
        examples: [
          "width",
          "height",
          "padding",
          "margin",
          "border",
          "background",
          "display",
        ],
      },
      {
        rule: "Inheritance and the 'inherit' Keyword",
        description:
          "The 'inherit' keyword can be used to explicitly force an element to inherit the value of a property from its parent, even if the property is not normally inherited.",
        examples: ["color: inherit;"],
      },
      {
        rule: "Specificity and Inheritance",
        description:
          "If multiple styles are applied to an element through different selectors, the specificity of the selectors determines which styles take precedence. Inherited styles have a lower specificity than styles applied directly to an element.",
        examples: [],
      },
      {
        rule: "The 'initial' Keyword",
        description:
          "The 'initial' keyword can be used to reset a property to its initial value. It overrides any inherited or cascaded value and sets the property back to its default value as specified by the CSS standard.",
        examples: [],
      },
      {
        rule: "The 'unset' Keyword",
        description:
          "The 'unset' keyword is similar to 'inherit', but it also resets any property that has been set by the browser's default styles. It sets the property to its inherited value if it's inherited, or to its initial value if it's not inherited.",
        examples: [],
      },
    ];
    const renderInheritanceRules = inheritanceRules.map((item) => {
      return (
        <tr>
          <td>{item.rule}</td>
          <td>{item.description}</td>
        </tr>
      );
    });
    const conflictingRules = [
      {
        priority: "Importance",
        description:
          "The `!important` declaration has the highest priority. When a rule has the `!important` flag, it overrides any other conflicting rule, regardless of specificity.",
      },
      {
        priority: "Specificity",
        description:
          "CSS rules with higher specificity take precedence over rules with lower specificity. Specificity is calculated based on the combination of selectors used to target an element. The more specific the selector, the higher the priority.",
      },
      {
        priority: "Source Order",
        description:
          "When conflicting rules have the same specificity, the rule that appears later in the stylesheet takes precedence. The last rule defined will override any previous conflicting rules targeting the same element.",
      },
    ];
    const renderConflictingRules = conflictingRules.map((item) => {
      return (
        <tr>
          <td>{item.priority}</td>
          <td>{item.description}</td>
        </tr>
      );
    });
    return (
      <div>
        <h1>Rule Handling</h1>
        <h3>How CSS works</h3>
        <ol>
          <li>
            CSS applies rules from top to bottom in the order they are defined.
          </li>
          <li>
            Conflicting rules can occur due to:
            <ul>
              <li>Inheritance</li>
              <li>Directly conflicting rules based on different selectors</li>
              <li>Same type of selector, but declared at different times</li>
            </ul>
          </li>
          <li>
            CSS resolves conflicts in the following ways:
            <ol>
              <li>
                Higher specificity takes precedence over lower specificity.
              </li>
              <li>
                If specificity is the same, the last rule defined takes
                precedence.
              </li>
            </ol>
          </li>
        </ol>

        <h2>Creating Rules</h2>

        <h3>Selectors</h3>
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
        <h3>Inheritance</h3>
        <table>
          <tr>
            <th>Rule</th>
            <th>Description</th>
          </tr>
          {renderInheritanceRules}
        </table>
        <a
          href="https://www.w3schools.com/cssref/css_selectors.asp"
          target="_blank"
        >
          Selector Reference Page
        </a>
        <h2>Handling conflicts</h2>
        <table>
          <tr>
            <th>Priority</th>
            <th>Description</th>
          </tr>
          {renderConflictingRules}
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
