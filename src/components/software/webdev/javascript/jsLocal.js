import React from "react";
import ButtonMaker from "../../../../utilities/buttonMaker.js";
import Placeholder from "../../../../utilities/placeholder.js";
import JSLocalOverview from "./jsLocal/jsLocalOverview.js";
import JSLocalStorage from "./jsLocal/jsLocalStorage.js";

const JSLocal = () => {
  const items = [
    { name: "Overview", slug: "overview", component: <JSLocalOverview /> },
    { name: "Cashe", slug: "cashe", component: <Placeholder /> },
    { name: "Cookies", slug: "cookies", component: <Placeholder /> },
    {
      name: "Local Storage",
      slug: "localStorage",
      component: <JSLocalStorage />,
    },
    { name: "IndexedDB", slug: "index", component: <Placeholder /> },
    { name: "OPFS", slug: "opfs", component: <Placeholder /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default JSLocal;
