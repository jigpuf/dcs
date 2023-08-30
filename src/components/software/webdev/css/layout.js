import React from "react";
import ButtonMaker from "../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../utilities/placeholder.js";

const Layout = () => {
  const items = [
    { name: "Tables", slug: "tables", component: <Placeholder /> },
    { name: "Typography", slug: "typography", component: <Placeholder /> },
    { name: "Images", slug: "images", component: <Placeholder /> },
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
