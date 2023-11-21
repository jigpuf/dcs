import React from "react";

const JSAsync = () => {
  const async = [
    {
      part: "",
      syntax: [
        "async function functionName(parameters) {",
        "try {",
        "// Code to be executed asynchronously",
        "// You can use the 'await' keyword to pause execution and wait for Promises to resolve",
        "// Use 'return' statement to provide the result as a Promise",
        "} catch (error) {",
        "// Code to handle errors that may occur during the asynchronous operation",
        "}",
        "}",
      ],
      code: [
        "async function fetchData() {",
        "  try {",
        "    const response = await fetch('https://api.example.com/data');",
        "    const data = await response.json();",
        "    console.log(data);",
        "  } catch (error) {",
        "    console.error('Error:', error);",
        "  }",
        "}",
      ],
      explanation: [
        "In this example, the fetchData() function is marked as 'async.' Within the function, the await keyword is used to pause the execution and wait for the Promise to resolve. The fetch() function returns a Promise that represents the asynchronous network request. By using await, we can wait for the response to be received and then call the json() method on the response object to parse the response data.",
        "The try-catch block is used to handle any potential errors that may occur during the asynchronous operation. If an error occurs, it will be caught in the catch block, allowing you to handle and log the error appropriately.",
        "By using async/await, you can write asynchronous code in a more synchronous and readable manner, avoiding the need for nested callbacks or chaining multiple .then() calls.",
      ],
    },
  ];
  const renderAsync = async.map((item) => {
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
        <td>{item.part}</td>
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
      <h1>JS Async</h1>
      <p>
        In the context of programming, "async" is short for "asynchronous." It
        is a feature that allows certain operations or functions to be executed
        independently and concurrently with other parts of a program.
        Asynchronous operations are commonly used in scenarios where tasks may
        take some time to complete, such as network requests, file operations,
        or database queries.
      </p>
      <p>
        When a function is marked as "async" in JavaScript, it means that the
        function will always return a Promise. The Promise represents the
        eventual completion (or failure) of an asynchronous operation and allows
        you to handle the result or error using the then() and catch() methods,
        respectively.
      </p>
      <table>
        <tr>
          <th>Part</th>
          <th>Syntax</th>
          <th>Example</th>
          <th>Explanation</th>
        </tr>
        {renderAsync}
      </table>
    </div>
  );
};

export default JSAsync;
