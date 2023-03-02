import React from 'react';
import './App.css';
import SideMenu from './components/sideMenu';
import MainSection from './components/mainSection';
//must import all components that will render in this App component.

class App extends React.Component {
  state = {
    activeTab: '',
  }
/*Creates activeTab state. Shows that no value will be chosen upon loading Page.
State is the way that the virtual DOM knows to compare the page against the DOM
*/
  openTab = (tab) => {
    return () => {
      this.setState({ activeTab: tab });
    }
  }
/*
This creates a function called openTab(tab) for the class App or this.  The
function returns the .setState method that already lives as part of the App.
In the return of that function, it is setting the state of activeTab to whatever
the argument on openTab is.  When called it will take an argument and apply that
to the state of active Tab.
*/
  render() {
    const activeTab = this.state.activeTab;
    //create variable based on current state
    return (
      <div className="App">
        <header>
          <h2>DCS Helper Elite 3</h2>
        </header>
        <SideMenu openTab={this.openTab} activeTab={activeTab} />
        <MainSection activeTab2={activeTab} />
      </div>
    );
/*
This renders the header,SideMenu, and MainSection.  In the two components,
SideMenu and MainSection, the second atribute is a prop being passed into the
component.  Everything after the component name is creating props and setting
values to them. The openTab prop passes a function into the component.
*/
  }
}

export default App;
