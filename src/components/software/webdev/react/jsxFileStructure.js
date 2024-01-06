import React from "react";

const JSXFileStructure = () => {
  const reactFiles = [
    {
      name: "index.html",
      purpose:
        "The main HTML file that serves as the entry point for the React application.This is the only HTML file in the program. This is where the root div lives that the entire program feeds into. It is otherwise a standard HTML file. Since react is for making single page Applictaions, this is the only page that exists and everything else is placed here dynamically",
    },
    {
      name: "index.css",
      purpose:
        "CSS file that contains styles specific to the index.html file or overall application styling.",
    },
    {
      name: "index.js",
      purpose:
        "The main JavaScript file that renders the React application and mounts it to the DOM.",
    },
    {
      name: "App.js",
      purpose:
        "A React component that serves as the root component for the application, containing the main structure and logic.",
    },
    {
      name: "serviceWorker.js",
      purpose:
        "An optional file that enables the use of a service worker for offline functionality and caching.",
    },
    {
      name: ".gitignore",
      purpose:
        "A file that specifies which files and directories should be ignored by Git when tracking changes.",
    },
    {
      name: "package-lock.json",
      purpose:
        "A file that locks down the versions of installed npm packages, ensuring consistent installations across different environments.",
    },
    {
      name: "package.json",
      purpose:
        "A file that contains metadata about the project, including project dependencies, scripts, and other configurations.",
    },
    {
      name: "App.test.js",
      purpose:
        "A test file that contains test cases and assertions for testing the functionality of the App.js component.",
    },
    {
      name: "node_modules",
      purpose:
        "A directory that contains the installed npm packages and their dependencies for the project.These make things run. Don't touch them",
    },
    {
      name: "public",
      purpose: "Any static files,Pictures, json, text, index.html",
    },
  ];
  const renderReactFiles = reactFiles.map((item) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.purpose}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>JSX/React File Structure</h2>
      <table>
        <tr>
          <th>File</th>
          <th>Purpose</th>
        </tr>
        {renderReactFiles}
      </table>
    </div>
  );
};

export default JSXFileStructure;
