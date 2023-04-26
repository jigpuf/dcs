import React from 'react';
import Office from './software/office.js';
import Visio from './software/visio.js';
import Control from './software/control.js';
import Jira from './software/workflow/jira.js';
import Confluence from './software/workflow/confluence.js';
import Command from './software/command.js';
import Webdev from './software/webdev.js';
import Typing from './software/typing.js';
import Methodology from './software/methodology.js';
import CPP from './software/cpp.js';
import CSharp from './software/cSharp.js';
import PLC from './software/plc.js';
import Labview from './software/labview.js';
import Media from './software/media.js';
import Mac from './software/mac.js';
import Arduino from './controls/arduino.js';
import Raspberry from './software/raspberry.js';
import Python from './software/python.js';
import Learning from './software/learning.js';

import ButtonMaker from '../utilities/buttonMaker.js';
import Placeholder from '../utilities/placeholder.js';

const Software = () => {
    const items = [
      {name: 'Office', slug: 'office', component:<Office />},
      {name: 'Visio', slug: 'visio', component:<Visio />},
      {name: 'Control', slug: 'control', component:<Control />},
      {name: 'Jira', slug: 'jira', component:<Jira />},
      {name: 'Confluence', slug: 'confluence', component:<Confluence />},
      {name: 'Command Line', slug: 'command', component:<Command />},
      {name: 'Web Development', slug: 'webdev', component:<Webdev />},
      {name: 'Typing', slug: 'typing', component:<Typing />},
      {name: 'Methodology', slug: 'methodology', component:<Methodology />},
      {name: 'C++', slug: 'cpp', component:<CPP />},
      {name: 'C#', slug: 'csharp', component:<CSharp />},
      {name: 'PLC', slug: 'plc', component:<PLC />},
      {name: 'Labview', slug: 'labview', component:<Labview />},
      {name: 'Media', slug: 'media', component:<Media />},
      {name: 'Mac OS', slug: 'mac', component:<Mac />},
      {name: 'Arduino', slug: 'arduino', component:<Arduino />},
      {name: 'Raspberry Pi', slug: 'raspberry', component:<Raspberry />},
      {name: 'Python', slug: 'python', component:<Python />},
      {name: 'Learning', slug: 'learning', component:<Learning />},
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
