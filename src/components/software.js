import React from "react";
import Office from "./software/office.js";
import Visio from "./software/visio.js";
import Jira from "./software/workflow/jira.js";
import Confluence from "./software/workflow/confluence.js";
import Command from "./software/command.js";
import Webdev from "./software/webdev.js";
import Typing from "./software/typing.js";
import Methodology from "./software/methodology.js";
import Languages from "./software/languages.js";
import Media from "./software/media.js";
import Mac from "./software/mac.js";
import ArduinoSoftware from "./controls/arduinoSoftware.js";
import Raspberry from "./software/raspberry.js";
import Learning from "./software/learning.js";
import VSC from "./software/vsc.js";
import ButtonMaker from "../utilities/buttonMaker.js";
import Placeholder from "../utilities/placeholder.js";

const Software = () => {
  const items = [
    { name: "Web Development", slug: "webdev", component: <Webdev /> },
    { name: "Office", slug: "office", component: <Office /> },
    { name: "Languages", slug: "languages", component: <Languages /> },
    { name: "Visio", slug: "visio", component: <Visio /> },
    { name: "Jira", slug: "jira", component: <Jira /> },
    { name: "Confluence", slug: "confluence", component: <Confluence /> },
    { name: "Command Line", slug: "command", component: <Command /> },
    { name: "Typing", slug: "typing", component: <Typing /> },
    { name: "Methodology", slug: "methodology", component: <Methodology /> },
    { name: "Media", slug: "media", component: <Media /> },
    { name: "Mac OS", slug: "mac", component: <Mac /> },
    { name: "Raspberry Pi", slug: "raspberry", component: <Raspberry /> },
    { name: "Learning", slug: "learning", component: <Learning /> },
    { name: "VSC", slug: "vsc", component: <VSC /> },
  ];
  return (
    <div>
      <ul>
        <ButtonMaker buttons={items} />
      </ul>
    </div>
  );
};
export default Software;
