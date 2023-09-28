import React from "react";
import ButtonMaker from "../../utilities/buttonMaker.js";
import Placeholder from "../../utilities/placeholder.js";
import Javascript from "./webdev/javascript.js";
import JSX from "./webdev/jsx.js";
import Node from "./webdev/node.js";
import Mongo from "./webdev/mongo.js";
import HTML from "./webdev/html.js";
import CSS from "./webdev/css.js";
import Webpage from "./webdev/webpage.js";
import Chrome from "./webdev/chrome.js";

const Webdev = () => {
  const items = [
    { name: "HTML", slug: "html", component: <HTML /> },
    { name: "CSS", slug: "css", component: <CSS /> },
    { name: "Javascript", slug: "js", component: <Javascript /> },
    { name: "React", slug: "react", component: <JSX /> },
    { name: "Node", slug: "node", component: <Node /> },
    { name: "MongoDB", slug: "mongo", component: <Mongo /> },
    { name: "New Webpage", slug: "webpage", component: <Webpage /> },
    { name: "Chrome", slug: "chrome", component: <Chrome /> },
  ];
  const progress = [
    {
      name: "Angel Yu",
      course: "The Complete 2023 Web Development Bootcamp",
      class: "49",
      last: "398",
    },
    {
      name: "John Smilga",
      course: "HTML&CSS Tutorial and Projects Course (Flexbox&Grid)",
      class: "123",
      last: "445",
    },
    {
      name: "Colt Steel",
      course: "The Web Developer Bootcamp 2023",
      class: "95",
      last: "721",
    },
    {
      name: "Mark Wahlbeck",
      course: "Beginner Full Stack Web Development: HTML, CSS, React & Node",
      class: "25",
      last: "168",
    },
    {
      name: "Shaun Pelling",
      course: "Modern JavaScript (Complete guide, from Novice to Ninja)",
      class: "18",
      last: "188",
    },

    {
      name: "Maxamillion Schwarzmuller",
      course: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      class: "0",
      last: "543",
    },
    {
      name: "Packt Publishing",
      course: "Hands-On MERN Stack Web Development",
      class: "0",
      last: "47",
    },

    {
      name: "Stephan Grider",
      course: "Modern React with Redux [2023 Update]",
      class: "0",
      last: "412",
    },
    {
      name: "Stephan Grider",
      course: "Advanced React and Redux",
      class: "0",
      last: "239",
    },
    {
      name: "Stephan Grider",
      course: "The Complete React Native + Hooks Course",
      class: "0",
      last: "436",
    },
    {
      name: "Maxamillion Schwarzmuller",
      course: "MongoDB - The Complete Developer's Guide 2023",
      class: "0",
      last: "436",
    },
  ];
  const renderProgress = progress.map((item) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.course}</td>
        <td>{item.class}</td>
        <td>{item.last}</td>
      </tr>
    );
  });
  return (
    <div>
      <ButtonMaker buttons={items} />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <h3>Progress</h3>
      <table>
        <tr>
          <th>Author</th>
          <th>Course</th>
          <th>Progress</th>
          <th>Last Class</th>
        </tr>
        {renderProgress}
      </table>
    </div>
  );
};

export default Webdev;
