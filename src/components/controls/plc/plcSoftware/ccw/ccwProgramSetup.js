import React from "react";
import ProcessBuilder from "../../../../../utilities/processMaker";
import LinksBuilder from "../../../../../utilities/resourceBuilder";

const CCWProgramSetup = () => {
  const links = [
    {
      url: "https://www.youtube.com/watch?v=BU7O8KXfdPA&list=PLUi5cdVq3wTBhSDCqPTcXz0GDe7a8-EJC&index=5",
      title: "Connecting to Allen Bradley Micro800 PLC over Ethernet in CCW",
      description: "Ethernet Coms Setup",
    },
    {
      url: "https://www.youtube.com/watch?v=hJAh_QeAPgY&list=PLUi5cdVq3wTBhSDCqPTcXz0GDe7a8-EJC&index=6",
      title: "Connecting to an Allen Bradley Micro800 PLC over Serial",
      description: "Serial Coms setup",
    },
  ];
  const setup = [
    { step: "Open CCW", parts: [""], notes: [""] },
    {
      step: "Create New Project",
      parts: ["Select New Project", "Create/Name new Project"],
      notes: ["", ""],
    },
    {
      step: "Add Devices",
      parts: ["Controller", "Expansion Modules", "End cap"],
      notes: [
        "If you are running the simulator, that can be found under the 850 options",
        "Make sure you distinguish between the ones that plug in on top of the controller verses those that plug in on the side",
        "Make sure you distinguish between the right and left hand type",
      ],
    },
    {
      step: "Set up Micro 850",
      parts: ["Power", "Comunications", "Set to program Mode"],
      notes: [
        "There will probably be some sort of Power Supply since the controller probably takes 24v depending on model",
        "The easiest way to set up the communications is through usb since it doesn't require any additional setup.  If ethernet is used then the controller and computer IPs will have tio be compatible.  Then you will have to remember to change the IP for deployment. ",
        "Make sure the PLC is in Program mode.  This is on the bottom left of the controller. It is a switch",
      ],
    },
    {
      step: "Add new Ladder Diagram",
      parts: ["Right-Click on Programs, Add new Ladder Diagram"],
      notes: [
        "A new program/Local variables should appear.  You can double click local variables to start making changes",
      ],
    },
    { step: "", parts: ["", ""], notes: ["", ""] },
    { step: "", parts: ["", ""], notes: ["", ""] },
    { step: "", parts: ["", ""], notes: ["", ""] },
  ];
  return (
    <div>
      <h1>CCW Program Setup</h1>
      <LinksBuilder array={links} />
      <ProcessBuilder array={setup} name="Setup Program" />
    </div>
  );
};
export default CCWProgramSetup;
//
