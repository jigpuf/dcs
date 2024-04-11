import React, { useState } from "react";
import "./App.css";
import SideMenu from "./components/sideMenu.js";
import MainSection from "./components/mainSection.js";

const App = () => {
  const [activeTab, setActiveTab] = useState(null);

  let openTab = (tab) => {
    return () => {
      setActiveTab(tab);
    };
  };

  return (
    <div className="App">
      <SideMenu openTab={openTab} activeTab={activeTab} />
      <MainSection activeTab={activeTab} />
    </div>
  );
};
/*
When SideMenu is rendered, it recieves the function and  and state it needs to set the activeTab in this component because the buttons come back with the necessary onClick attribute to trigger the openTab functio.  Main section is rendered with that state turned on so that it can render the appropriate component

All the rest of the buttons in the App are made by the buttonMaker component recieveing an array of objects
*/
export default App;
