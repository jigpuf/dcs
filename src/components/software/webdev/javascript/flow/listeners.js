import React from "react";

const JSEventListeners = () => {
  const eventListeners = [
    {
      type: "Click Event Listener",
      syntax: ["element.addEventListener(event, listener)"],
      code: [
        'const button = document.querySelector("#myButton");',
        "function handleClick(event){",
        'console.log("Button clicked!");',
        "}",
        "button.addEventListener('click', handleClick);",
      ],
      explanation: [
        "Registers a click event listener on the specified element. When the element is clicked, the listener function is called.",
      ],
    },
    {
      type: "Keydown Event Listener",
      syntax: ["element.addEventListener(event, listener)"],
      code: [
        'const input = document.querySelector("#myInput");',
        "function handleKeydown(event) {",
        "console.log('Key pressed:', event.key);",
        "}",
        "input.addEventListener('keydown', handleKeydown);",
      ],
      explanation: [
        "Registers a keydown event listener on the specified element. When a key is pressed while the element has focus, the listener function is called.",
      ],
    },
    {
      type: "Submit Event Listener",
      syntax: ["element.addEventListener(event, listener)"],
      code: [
        'const form = document.querySelector("#myForm");',
        "function handleSubmit(event) {",
        "  event.preventDefault();",
        '  console.log("Form submitted!");',
        "}",
        'form.addEventListener("submit", handleSubmit);',
      ],
      explanation: [
        "Registers a submit event listener on the specified element. When the element (typically a form) is submitted, the listener function is called.",
      ],
    },
    {
      type: "Mouseover Event Listener",
      syntax: ["element.addEventListener(event, listener)"],
      code: [
        'const element = document.querySelector("#myElement");',
        "function handleMouseover(event) {",
        '  console.log("Mouse over the element!");',
        "}",
        'element.addEventListener("mouseover", handleMouseover);',
      ],
      explanation: [
        "Registers a mouseover event listener on the specified element. When the mouse pointer moves over the element, the listener function is called.",
      ],
    },
    {
      type: "Resize Event Listener",
      syntax: ["window.addEventListener(event, listener)"],
      code: [
        "function handleResize(event) {",
        '  console.log("Window resized!");',
        "}",
        'window.addEventListener("resize", handleResize);',
      ],
      explanation: [
        "Registers a resize event listener on the window object. When the browser window is resized, the listener function is called.",
      ],
    },
    {
      type: "Focus Event Listener",
      syntax: ["element.addEventListener(event, listener)"],
      code: [
        'const input = document.querySelector("#myInput");',
        "function handleFocus(event) {",
        '  console.log("Input focused!");',
        "}",
        'input.addEventListener("focus", handleFocus);',
      ],
      explanation: [
        "Registers a focus event listener on the specified element. When the element receives focus, the listener function is called.",
      ],
    },
    {
      type: "Scroll Event Listener",
      syntax: ["element.addEventListener(event, listener)"],
      code: [
        'const container = document.querySelector("#myContainer");',
        "function handleScroll(event) {",
        '  console.log("Container scrolled!");',
        "}",
        'container.addEventListener("scroll", handleScroll);',
      ],
      explanation: [
        "Registers a scroll event listener on the specified element. When the element is scrolled, the listener function is called.",
      ],
    },
  ];

  const renderEventListeners = eventListeners.map((item) => {
    const renderSyntax = item.syntax.map((syntax) => {
      return <li>{syntax}</li>;
    });
    const renderCode = item.code.map((code) => {
      return <li>{code}</li>;
    });
    const renderExplanation = item.explanation.map((explanation) => {
      return <li>{explanation}</li>;
    });
    return (
      <tr>
        <td>{item.type}</td>
        <td>
          <ol>{renderSyntax}</ol>
        </td>
        <td>
          <ol>{renderCode}</ol>
        </td>
        <td>
          <ol>{renderExplanation}</ol>
        </td>
      </tr>
    );
  });
  const inlineEventHandlers = [
    {
      type: "Click Event Handler",
      syntax: ["onclick"],
      code: ['<button onclick="handleClick()">Click Me</button>'],
      explanation: [
        "Attaches a click event handler to the button. When the button is clicked, the handleClick() function is called.",
      ],
    },
    {
      type: "Mouseover Event Handler",
      syntax: ["onmouseover"],
      code: ['<div onmouseover="handleMouseover()">Hover over me</div>'],
      explanation: [
        "Attaches a mouseover event handler to the div. When the mouse pointer is moved over the div, the handleMouseover() function is called.",
      ],
    },
    {
      type: "Keydown Event Handler",
      syntax: ["onkeydown"],
      code: [
        '<input type="text" onkeydown="handleKeydown(event)" placeholder="Type something">',
      ],
      explanation: [
        "Attaches a keydown event handler to the input field. When a key is pressed while the input has focus, the handleKeydown(event) function is called, passing the event object as an argument.",
      ],
    },
    {
      type: "Submit Event Handler",
      syntax: ["onsubmit"],
      code: [
        '<form onsubmit="handleSubmit(event)">',
        '  <input type="submit" value="Submit">',
        "</form>",
      ],
      explanation: [
        "Attaches a submit event handler to the form. When the form is submitted, the handleSubmit(event) function is called, passing the event object as an argument.",
      ],
    },
    {
      type: "Change Event Handler",
      syntax: ["onchange"],
      code: [
        '<select onchange="handleSelectChange(event)">',
        '  <option value="1">Option 1</option>',
        '  <option value="2">Option 2</option>',
        '  <option value="3">Option 3</option>',
        "</select>",
      ],
      explanation: [
        "Attaches a change event handler to the select element. When the selected option in the select element changes, the handleSelectChange(event) function is called, passing the event object as an argument.",
      ],
    },
    {
      type: "Focus Event Handler",
      syntax: ["onfocus"],
      code: ['<input type="text" onfocus="handleFocus()">'],
      explanation: [
        "Attaches a focus event handler to the input field. When the input field receives focus, the handleFocus() function is called.",
      ],
    },
    {
      type: "Blur Event Handler",
      syntax: ["onblur"],
      code: ['<input type="text" onblur="handleBlur()">'],
      explanation: [
        "Attaches a blur event handler to the input field. When the input field loses focus, the handleBlur() function is called.",
      ],
    },
    {
      type: "Double Click Event Handler",
      syntax: ["ondblclick"],
      code: [
        '<button ondblclick="handleDoubleClick()">Double Click Me</button>',
      ],
      explanation: [
        "Attaches a double click event handler to the button. When the button is double clicked, the handleDoubleClick() function is called.",
      ],
    },
    {
      type: "Mouseout Event Handler",
      syntax: ["onmouseout"],
      code: ['<div onmouseout="handleMouseout()">Mouse out of me</div>'],
      explanation: [
        "Attaches a mouseout event handler to the div. When the mouse pointer leaves the div, the handleMouseout() function is called.",
      ],
    },
    {
      type: "Mouseenter Event Handler",
      syntax: ["onmouseenter"],
      code: ['<div onmouseenter="handleMouseEnter()">Mouse enters me</div>'],
      explanation: [
        "Attaches a mouseenter event handler to the div. When the mouse pointer enters the div, the handleMouseEnter() function is called.",
      ],
    },
    {
      type: "Mouseleave Event Handler",
      syntax: ["onmouseleave"],
      code: ['<div onmouseleave="handleMouseLeave()">Mouse leaves me</div>'],
      explanation: [
        "Attaches a mouseleave event handler to the div. When the mouse pointer leaves the div, the handleMouseLeave() function is called.",
      ],
    },
    {
      type: "Load Event Handler",
      syntax: ["onload"],
      code: ['<img src="image.jpg" onload="handleImageLoad()">'],
      explanation: [
        "Attaches a load event handler to the image. When the image is successfully loaded, the handleImageLoad() function is called.",
      ],
    },
  ];
  const renderInlineEventHandlers = inlineEventHandlers.map((item) => {
    const renderSyntax = item.syntax.map((syntax) => {
      return <li>{syntax}</li>;
    });
    const renderCode = item.code.map((code) => {
      return <li>{code}</li>;
    });
    const renderExplanation = item.explanation.map((explanation) => {
      return <li>{explanation}</li>;
    });
    return (
      <tr>
        <td>{item.type}</td>
        <td>
          <ol>{renderSyntax}</ol>
        </td>
        <td>
          <ol>{renderCode}</ol>
        </td>
        <td>
          <ol>{renderExplanation}</ol>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Event Listeners</h1>
      <p>
        Listeners, also known as event listeners or event handlers, are an
        important concept in programming, particularly in the context of user
        interfaces and event-driven programming. They allow you to respond to
        events or user interactions, such as mouse clicks, keyboard input, or
        changes to the state of an application.
      </p>
      <p>
        In general, a listener is a function or a piece of code that is executed
        in response to a specific event occurring. The event can be triggered by
        user actions (like clicking a button or submitting a form) or by other
        parts of the program (like a timer or an asynchronous operation
        completing).
      </p>
      <ol>
        <li>Here's how listeners work:</li>
        <ol>
          <li>
            Event Registration: To use a listener, you need to register it to a
            specific event or element. In the browser environment, you typically
            work with the Document Object Model (DOM) to interact with HTML
            elements. You can select an element and use methods like
            addEventListener to register a listener for specific events on that
            element.
          </li>
          <li>
            Event Handling: When the registered event occurs, the listener
            function associated with that event is executed. It allows you to
            respond to the event by performing certain actions, such as updating
            the user interface, manipulating data, or triggering other
            functions.
          </li>
          <li>
            Event Object: When an event occurs, the browser creates an event
            object that contains information about the event. The event object
            is passed as an argument to the listener function, allowing you to
            access details about the event, such as the target element, event
            type, or additional data associated with the event.
          </li>
          <li>
            Multiple Listeners: You can register multiple listeners for the same
            event or element. When the event occurs, all registered listeners
            will be executed in the order they were registered.
          </li>
        </ol>
      </ol>
      <h2>Listeners</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>Syntax</th>
          <th>Code</th>
          <th>Explanation</th>
        </tr>
        {renderEventListeners}
      </table>
      <h2>Inline Event Handlers</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>Syntax</th>
          <th>Code</th>
          <th>Explanation</th>
        </tr>
        {renderInlineEventHandlers}
      </table>
    </div>
  );
};
export default JSEventListeners;
