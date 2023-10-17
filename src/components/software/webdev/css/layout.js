import React from "react";
import CSSTables from "./layouts/cssTables.js";
import ButtonMaker from "../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../utilities/placeholder.js";
import CSSText from "./layouts/text.js";
import CSSImages from "./layouts/cssImages.js";
import CSSNavBar from "./layouts/cssNavBar.js";
import BackgroundImage from "./layouts/backgroundImage.js";

const Layout = () => {
  const items = [
    { name: "Tables", slug: "tables", component: <CSSTables /> },
    { name: "NavBar", slug: "NavBar", component: <CSSNavBar /> },
    {
      name: "Background Image",
      slug: "background image",
      component: <BackgroundImage />,
    },

    { name: "Typography", slug: "typography", component: <CSSText /> },
    { name: "Images", slug: "images", component: <CSSImages /> },
    { name: "Lists", slug: "lists", component: <Placeholder /> },
    { name: "Navigation", slug: "navigation", component: <Placeholder /> },
    { name: "Links", slug: "links", component: <Placeholder /> },
    { name: "Video", slug: "video", component: <Placeholder /> },
    { name: "Buttons", slug: "buttons", component: <Placeholder /> },
    { name: "Audio", slug: "audio", component: <Placeholder /> },
    { name: "Checkbox", slug: "checkbox", component: <Placeholder /> },
    { name: "Radio", slug: "radio", component: <Placeholder /> },
    { name: "Option", slug: "option", component: <Placeholder /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default Layout;
