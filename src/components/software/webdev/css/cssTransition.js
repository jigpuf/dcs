import React from "react";

const CSSTransitions = () => {
  const components = [
    {
      component: "Syntax",
      description: "transition: property duration timing-function delay;",
      example: "transition: font-size 4s, color 5s;",
    },
    {
      component: "property",
      description:
        "Specifies the CSS property to apply the transition effect to.",
      example: "width",
    },
    {
      component: "duration",
      description: "Specifies the duration of the transition effect.",
      example: "0.5s",
    },
    {
      component: "timing-function",
      description:
        "Specifies the timing function that controls the acceleration of the transition effect.",
      example: "ease-in-out",
    },
    {
      component: "delay",
      description: "Specifies the delay before the transition effect starts.",
      example: "1s (optional)",
    },
  ];
  const renderComponents = components.map((item) => {
    return (
      <tr>
        <td>{item.component}</td>
        <td>{item.description}</td>
        <td>{item.example}</td>
      </tr>
    );
  });
  const timingFunctions = [
    {
      function: "linear",
      description:
        "Specifies a linear timing function, resulting in a constant transition speed.",
    },
    {
      function: "ease",
      description:
        "Specifies an easing timing function, starting slow, then fast, and ending slow.",
    },
    {
      function: "ease-in",
      description:
        "Specifies an easing timing function, starting slow and then fast.",
    },
    {
      function: "ease-out",
      description:
        "Specifies an easing timing function, starting fast and then slow.",
    },
    {
      function: "ease-in-out",
      description:
        "Specifies an easing timing function, starting slow, then fast, and ending slow.",
    },
    {
      function: "cubic-bezier",
      description:
        "Specifies a custom cubic-bezier timing function using control points.",
    },
  ];
  const renderTimingFunctions = timingFunctions.map((item) => {
    return (
      <tr>
        <td>{item.function}</td>
        <td>{item.description}</td>
      </tr>
    );
  });
  const example = [
    {
      step: "HTML",
      code: "<a href='#'>Link</a>",
      visual: <a href="#">Link</a>,
    },
    { step: "CSS", code: "a{}", visual: <div></div> },
    {
      step: "Transition",
      code: "a:hover{font-size: 30px; transition: font-size 10s;}",
      visual: (
        <div>
          <a style={{ color: "blue" }} href="#">
            Link
          </a>
        </div>
      ),
    },
  ];
  const renderExample = example.map((item) => {
    return (
      <tr>
        <td>{item.step}</td>
        <td>{item.code}</td>
        <td>{item.visual}</td>
      </tr>
    );
  });
  return (
    <div>
      <p>
        The transition attribute in CSS is used to specify the transition effect
        when a CSS property changes its value over a specified duration. It
        allows you to create smooth and animated transitions between different
        states of an element.
      </p>

      <table>
        <caption>Transition Component</caption>
        <thead>
          <tr>
            <th>Component</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>{renderComponents}</tbody>
      </table>
      <table>
        <caption>Timing Functions</caption>
        <thead>
          <tr>
            <th>Function</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{renderTimingFunctions}</tbody>
      </table>
      <table>
        <caption>Example</caption>

        <thead>
          <tr>
            <th>Step</th>
            <th>Code</th>
            <th>Visual</th>
          </tr>
        </thead>
        <tbody>{renderExample}</tbody>
      </table>
      <a
        href="https://www.cssportal.com/css-cubic-bezier-generator/"
        target="_blank"
      >
        CSS Cubic Bezier Generator
      </a>
    </div>
  );
};

export default CSSTransitions;
