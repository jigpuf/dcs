import React from "react";

const Setup = () => {
  const software = [
    {
      program: "NodeJS",
      purpose:
        "App to build full stack applications.  It allows JS use on serverside applications",
      source: "https://node.org/",
    },
    {
      program: "React",
      purpose: "Library for writing JSX, installs with Terminal",
      source: "",
    },
    { program: "Visual Studio Code", purpose: "Text editor", source: "" },
    {
      program: "iTerm",
      purpose: "Better Command Line tool",
      source: "https://www.iterm2.com/",
    },
    {
      program: "Github Desktop",
      purpose: "GUI for git repository",
      source: "https://desktop.github.com/",
    },
  ];
  const accounts = [
    { account: "Github", instructions: [""] },
    { account: "Netlify", instructions: [""] },
  ];
  const renderAccounts = accounts.map((item) => {
    const instructions = item.instructions.map((instruction) => {
      return <li>{instruction}</li>;
    });
    return (
      <tr>
        <td>{item.account}</td>
        <td>
          <ol>{instructions}</ol>
        </td>
      </tr>
    );
  });
  const appCreation = [
    {
      step: "Create new react app",
      instructions: [
        "Open terminal and navigate to the folder where the app is going to live",
        "in the command type: npx create-react-app myAppName",
        "It will take a few minutes, but all the files will be put into the folder under the name you gave the app",
      ],
    },
    { step: "Connect app to Github Desktop App", instructions: [""] },
    { step: "Set up in Github repository", instructions: [""] },
    { step: "Set up in Netlify", instructions: [""] },
  ];
  const renderSoftware = software.map((item) => {
    return (
      <tr>
        <td>
          <a href={item.source} target="_blank">
            {item.program}
          </a>
        </td>
        <td>{item.purpose}</td>
      </tr>
    );
  });
  const renderAppCreation = appCreation.map((item) => {
    const instruction = item.instructions.map((instruction) => {
      return <li>{instruction}</li>;
    });
    return (
      <tr>
        <td>{item.step}</td>
        <td>
          <ol>{instruction}</ol>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>React Setup</h1>
      <h2>Needed Software</h2>
      <table>
        <tr>
          <th>Program</th>
          <th>Function</th>
        </tr>
        {renderSoftware}
      </table>
      <h2>Set up Accounts</h2>
      <table>
        <tr>
          <th>Account</th>
          <th>Instructions</th>
        </tr>
        {renderAccounts}
      </table>
      <h2>Checking versions</h2>
      <table>
        <tr>
          <th>Program</th>
          <th>Comandline</th>
        </tr>
        <tr>
          <td>Node</td>
          <td>node -v</td>
        </tr>
        <tr>
          <td>React</td>
          <td>npm review react version</td>
        </tr>
        <tr>
          <td>iTerm</td>
          <td></td>
        </tr>
      </table>
      <h2>Creating new app</h2>
      <table>
        <tr>
          <th>Step</th>
          <th>Instructions</th>
        </tr>
        {renderAppCreation}
      </table>
    </div>
  );
};

export default Setup;
