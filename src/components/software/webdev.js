import React from "react";
import ButtonMaker from "../../utilities/buttonMaker.js";
import Placeholder from "../../utilities/placeholder.js";
import Javascript from "./webdev/javascript.js";
import JSX from "./webdev/jsx.js";
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
    { name: "Node", slug: "node", component: <Placeholder /> },
    { name: "MongoDB", slug: "mongo", component: <Mongo /> },
    { name: "New Webpage", slug: "webpage", component: <Webpage /> },
    { name: "Chrome Inspector", slug: "chrome", component: <Chrome /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
      <hr />
      Yu 32 of 74, smilga 52 of 444, whalbeck 13 of 35, Steel 58 of 141, pelling
      0
    </div>
  );
};

export default Webdev;
