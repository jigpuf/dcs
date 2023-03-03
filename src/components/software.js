import React from 'react';
import Office from './software/office.js';
import Visio from './software/visio.js';
import Control from './software/control.js';
import Jira from './software/workflow/jira.js';
import Confluence from './software/workflow/confluence.js';
import Command from './software/command.js';
import ButtonMaker from '../utilities/buttonMaker.js';

const Software = () => {
    const items = [
      {name: 'Office', slug: 'office', component:<Office />},
      {name: 'Visio', slug: 'visio', component:<Visio />},
      {name: 'Control', slug: 'control', component:<Control />},
      {name: 'Jira', slug: 'jira', component:<Jira />},
      {name: 'Confluence', slug: 'confluence', component:<Confluence />},
      {name: 'Command Line', slug: 'command', component:<Command />},
      {name: 'Borg', slug: 'borg',},

    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }
export default Software;
