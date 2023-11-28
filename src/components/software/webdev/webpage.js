import React from "react";

const Webpage = () => {
  const parts = [
    {
      part: "Get Software",
      steps: [
        "Get Google Browser",
        "Get NodeJS",
        "Get github Desktop",
        "Get visual Studio Code",
        "Get any extensions for VSC",
      ],
    },
    {
      part: "Create Accounts",
      steps: ["Create Netlify account", "Create Github Account"],
      details: ["", ""],
    },
    {
      part: "Build App Locally",
      steps: ["npx create-react-app my-app", "Start Coding"],
      details: [
        "Open terminal, navigate to the folder you want to put the App in, put in 'npx create-react-app my-app' with my-app being the name of the app",
        "",
      ],
    },
    {
      part: "Run code Locally to test",
      steps: ["npm start"],
      details: ["", ""],
    },
    { part: "Upload to git repository", steps: [""], details: ["", ""] },
    { part: "Connect host to repository", steps: [""], details: ["", ""] },
    { part: "Set up webpage options", steps: [""], details: ["", ""] },
    {
      part: "Upload to gitHub with any updates",
      steps: [""],
      details: ["", ""],
    },
    { part: "", steps: [""], details: ["", ""] },
  ];
  const renderParts = parts.map((item) => {
    const steps = item.steps.map((step) => {
      return <li>{step}</li>;
    });
    const details = item.details.map((detail) => {
      return <li>{detail}</li>;
    });
    return (
      <tr>
        <td>{item.part}</td>
        <td>
          <ol>{steps}</ol>
        </td>
        <td>
          <ol>{details}</ol>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Publish a free Webpage</h2>
      <table>
        <tr>
          <th>Part</th>
          <th>Steps</th>
          <th>Details</th>
        </tr>
        {renderParts}
      </table>

      <h2>Putting a new Webpage Online for money</h2>
      <ol>
        <li>Choose A web hosting company</li>
        <ul>
          <li>Storage Space</li>
          <li>Cost / month</li>
          <li>Cost of renewal / month</li>
          <li>Traffic Allowed or costs</li>
          <li>Get your own domain?</li>
          <li>Get email address</li>
        </ul>
        <li>Decide on a domain name</li>
        <li>Purchase Domain</li>
        <li>Find out what they name the root folder</li>
        <li>Find out upload procedure of hosting company</li>
        <ul>
          <li>FTP</li>
          Fetch, Transmit, cyberduck
          <li>GUI interface</li>
        </ul>
        <li>Send files to root folder</li>
      </ol>
    </div>
  );
};

export default Webpage;
