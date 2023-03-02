import React from 'react';
import Office from './software/office.js';
import Visio from './software/visio.js';
import Control from './software/control.js';
import Jira from './software/workflow/jira.js';
import Confluence from './software/workflow/confluence.js';
import Command from './software/command.js';
import Gui from './software/gui.js';

class Software extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render () {
    const Items = [
      {name: 'Office', slug: 'office', component:<Office />},
      {name: 'Visio', slug: 'visio', component:<Visio />},
      {name: 'Control', slug: 'control', component:<Control />},
      {name: 'Jira', slug: 'jira', component:<Jira />},
      {name: 'Confluence', slug: 'confluence', component:<Confluence />},
      {name: 'Command Line', slug: 'command', component:<Command />},
      {name: 'Borg', slug: 'borg',},
      {name: 'Texas Data Viewer', slug: 'tdv',},
      {name: 'GUIs', slug: 'gui', component:<Gui />},



    ]
    const renderItems = Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}</button>
      )
    })
    const tier1 = Items.filter(item => {
      return this.state.tier1 === item.slug;
    });
    const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
        <ul>
          {renderItems}
        </ul>
        <hr />
        {renderTier2Component}
      </div>
    )
    }
  }
export default Software;
