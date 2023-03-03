import React, {useState} from 'react';
import './App.css';
import SideMenu from './components/sideMenu.js';
import MainSection from './components/mainSection.js';

const App = () =>{
  const [activeTab,setActiveTab]= useState(null);

  let openTab = (tab) =>{
    return () =>{
      setActiveTab(tab)
    };
  }
  return (
    <div className="App">
      <SideMenu openTab={openTab} activeTab={activeTab} />
      <MainSection activeTab={activeTab}/>
    </div>
  );
}

export default App;

