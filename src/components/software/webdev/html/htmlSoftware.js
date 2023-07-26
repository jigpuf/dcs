import React from "react";
import VSCExtentions from "../../vsc/vscExtensions.js";
import TableMaker from "../../../../utilities/tableMaker.js";
import ButtonMaker from "../../../../utilities/buttonMaker.js";
const HtmlNeededSoftware = () => {
  const softwareHead = [
    "Program",
    "Purpose",
    "Status Check",
    "Download location",
  ];
  const software = [
    {
      program: "Google Chrome",
      purpose: "Browser to render Webpage",
      status: "google>more>help>about",
      download: "google.com",
    },
    {
      program: "Visual Studio Code",
      purpose: "Text editor with bells and whistles",
      status: "Code>About Visual Studio Code",
      download: "code.visualstudio.com",
    },
    {
      program: "VSC Extensions",
      purpose: "Makes VSC work better with HTML(live server, html, emmit)",
      status: "view>extensions",
      download: "Extensions menu",
    },
    {
      program: "Github Account",
      purpose:
        "This sets up a repository to hold your files online where web hosting site will pull from repository",
      status: "",
      download: "gitHub.com",
    },
    {
      program: "Github Desktop",
      purpose:
        "Manages updating github repository so that it is easy ang graphically presented",
      status: "Github Desktop>About GitHub Desktop",
      download: "",
    },
    {
      program: "Netlify Account",
      purpose: "Free Webhosting",
      status: "",
      download: "none",
    },
  ];
  const items = [
    { name: "VSC Extentions", slug: "vsc", component: <VSCExtentions /> },
  ];
  return (
    <div>
      <h2>Needed Software</h2>
      <TableMaker
        head={softwareHead}
        array={software}
        tableType="simpleColumn"
      />
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default HtmlNeededSoftware;
