import React from "react";

const JSBrowserObject = () => {
  const windowMethods = [
    {
      type: "Alert",
      syntax: ["window.alert(message)"],
      code: ['window.alert("Hello, world!")'],
      explanation: ["Displays an alert dialog box with the specified message."],
    },

    {
      type: "Confirm",
      syntax: ["window.confirm(message)"],
      code: ['const result = window.confirm("Are you sure?")'],
      explanation: [
        "Displays a confirmation dialog box with the specified message and returns a boolean value indicating the user's choice.",
      ],
    },
    {
      type: "Prompt",
      syntax: ["window.prompt(message, defaultValue)"],
      code: [
        'const userInput = window.prompt("Please enter your name", "John")',
      ],
      explanation: [
        "Displays a dialog box with a message and an input field for the user to enter text. It returns the entered text as a string.",
      ],
    },
    {
      type: "Open",
      syntax: ["window.open(url, target, features)"],
      code: [
        'const newWindow = window.open("https://www.example.com", "_blank")',
      ],
      explanation: [
        "Opens a new browser window or tab with the specified URL.",
      ],
    },
    {
      type: "Close",
      syntax: ["window.close()"],
      code: ["window.close()"],
      explanation: [
        "Closes the current browser window or tab if it was opened by a script.",
      ],
    },
    {
      type: "Timeout",
      syntax: ["window.setTimeout(function, delay)"],
      code: [
        'const timeoutId = window.setTimeout(() => { console.log("Timeout expired!") }, 2000)',
      ],
      explanation: [
        "Executes a function after a specified delay (in milliseconds).",
      ],
    },
    {
      type: "Interval",
      syntax: ["window.setInterval(function, delay)"],
      code: [
        'const intervalId = window.setInterval(() => { console.log("Interval tick!") }, 1000)',
      ],
      explanation: [
        "Executes a function repeatedly at the specified interval (in milliseconds).",
      ],
    },
    {
      type: "Scroll To",
      syntax: ["window.scrollTo(x, y)"],
      code: ["window.scrollTo(0, 0)"],
      explanation: [
        "Scrolls the document to the specified coordinates (x, y).",
      ],
    },
    {
      type: "Scroll By",
      syntax: ["window.scrollBy(x, y)"],
      code: ["window.scrollBy(0, 100)"],
      explanation: [
        "Scrolls the document by the specified amount of pixels (x, y).",
      ],
    },
    {
      type: "History Back",
      syntax: ["window.history.back()"],
      code: ["window.history.back()"],
      explanation: ["Moves the browser back one step in the browsing history."],
    },
    {
      type: "History Forward",
      syntax: ["window.history.forward()"],
      code: ["window.history.forward()"],
      explanation: [
        "Moves the browser forward one step in the browsing history.",
      ],
    },
    {
      type: "History Go",
      syntax: ["window.history.go(n)"],
      code: ["window.history.go(-2)"],
      explanation: [
        "Moves the browser to a specific position in the browsing history (positive number for forward, negative number for back).",
      ],
    },
  ];

  const renderWindowMethods = windowMethods.map((item) => {
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
      <h1>Window Object</h1>
      <p>
        In JavaScript, the window object represents the global context in a web
        browser environment. It is the top-level object that provides access to
        various browser-related features and properties. The window object is
        often referred to as the "browser object" because it represents the
        current browser window or tab. Here are some important aspects of the
        browser object (window):
      </p>
      <ol>
        <li>
          Global Scope: Variables and functions defined in the global scope are
          accessible as properties and methods of the window object. For
          example, if you define a global variable varName, you can access it as
          window.varName.
        </li>
        <li>
          Window Dimensions: The window object provides properties to retrieve
          information about the dimensions of the browser window, such as
          window.innerWidth and window.innerHeight, which give the width and
          height of the viewport, excluding scrollbars.
        </li>
        <li>
          Manipulating the Document: The window object provides methods to
          interact with the current web page or document, such as:
        </li>
        <ol>
          <li>
            window.document: Represents the HTML document loaded in the window,
            providing access to its elements, styles, and other properties.
          </li>
          <li>
            window.location: Provides information about the URL of the current
            page and allows you to navigate to a different URL.
          </li>
          <li>
            window.alert(), window.confirm(), and window.prompt(): Display modal
            dialogs to show messages, obtain user confirmation, or request user
            input.
          </li>
        </ol>
        <li>
          Timers: The window object provides methods for scheduling and
          canceling timed events, such as:
        </li>
        <ol>
          <li>
            window.setTimeout(), window.setInterval(): Schedule a function to be
            executed once or repeatedly after a specified delay.
          </li>
          <li>
            window.clearTimeout(), window.clearInterval(): Cancel a previously
            scheduled timer.
          </li>
        </ol>
        <li>
          Browser History: The window object provides methods to navigate
          through the browser's history, such as window.history.back(),
          window.history.forward(), and window.history.go().
        </li>
        <li>
          Working with Frames and Windows: The window object allows you to
          interact with frames and windows within the browser, such as accessing
          the content of an iframe using window.frames, opening new windows with
          window.open(), or closing the current window with window.close().
        </li>
        <li>
          Browser Events: The window object handles various browser events, such
          as window.onload for executing code when the page finishes loading,
          window.onresize for handling resizing events, and many others.
        </li>
      </ol>
      <h2>Window Methods</h2>
      <table>
        <tr>
          <th>Type</th>
          <th>Syntax</th>
          <th>Code</th>
          <th>Explanation</th>
        </tr>
        {renderWindowMethods}
      </table>
    </div>
  );
};
export default JSBrowserObject;
