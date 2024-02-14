import React from "react";
import LinksBuilder from "../../../../../../utilities/resourceBuilder";
import ProcessBuilder from "../../../../../../utilities/processMaker";

const CCWSoftwareRequirements = () => {
  const links = [
    {
      url: "https://www.youtube.com/watch?v=6e_2Tx6bmmM&list=PLUi5cdVq3wTBhSDCqPTcXz0GDe7a8-EJC&index=3",
      title:
        "Download Allen Bradley's Connected Components Workbench CCW for Free",
      description: "Download instructions",
    },
    {
      url: "https://compatibility.rockwellautomation.com/Pages/MultiProductFindDownloads.aspx?crumb=112&refSoft=1&toggleState=&versions=57681",
      title: "CCW download location",
      description: "Software download for latest version",
    },
    {
      url: "#",
      title: "",
      description: "",
    },
    {
      url: "#",
      title: "",
      description: "",
    },
  ];
  const downloadProcess = [
    {
      step: "Set up allen Bradley account",
      parts: ["Go to allen Bradley website and create account", "Sign in"],
      notes: [
        "You will have to select language,software version, location. If you don't have a business just use personal name, email etc. You can leave optional info blank. A link will be sent to your email.",
        "",
      ],
    },
    {
      step: "Download Software",
      parts: ["Download Software", "Extract the files"],
      notes: [
        "Choose Direct Download.  There will be 2 files to download with titles that include DVD.part1.exe, and DVD.part2.rar",
        "double click the .exe file and the select extract to begin the process. NOTHING has to be done with the .rar file. This will take a while.  A new folder will appear for the installation file  ",
      ],
    },
    {
      step: "Install CCW",
      parts: [
        "open setup.exe file and start installation",
        "Select Ethernet adapter",
      ],
      notes: [
        "Install now, Accept All",
        "choose the one that will be used for programming.  Truthfully you will be using USB if available which is a slightly simpler process since it doesn't require matching the IPs on the computer and the PLC",
      ],
    },
    {
      step: "Restart computer",
      parts: ["restart"],
      notes: ["Software requires a restart"],
    },
  ];

  return (
    <div>
      <h1>CCW Software requirements</h1>
      <LinksBuilder array={links} />
      <ProcessBuilder array={downloadProcess} name="Get Software" />
      Computer requirements?
    </div>
  );
};
export default CCWSoftwareRequirements;
