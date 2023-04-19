import React from 'react';
import TroubleshootingToolbox from './tools/troubleshootingToolbox.js'
import Taps from './tools/taps.js'
import Crimpers from './tools/crimpers.js'
import Hole from './tools/hole.js'
import Label from './tools/label.js'
import Multimeter from './tools/multimeter.js'
import Injection from './tools/injection.js'
import Oscope from './tools/oscope.js'
import FunctionG from './tools/functionG.js'
import ContactRetention from './tools/contactRetention.js'
import ButtonMaker from '../utilities/buttonMaker.js';
import Placeholder from '../utilities/placeholder.js';

const Tools = () => {
    const items = [
      {name: 'Troubleshooting', slug: 'troubleshooting', component:<TroubleshootingToolbox />},
      {name: 'Taps', slug: 'taps', component:<Taps />},
      {name: 'Crimpers', slug: 'crimpers', component:<Crimpers />},
      {name: 'Hole Punch', slug: 'hole', component:<Hole />},
      {name: 'Label Maker', slug: 'label', component:<Label />},
      {name: 'Multimeter', slug: 'multimeter', component:<Multimeter />},
      {name: 'Injection Meter', slug: 'injection', component:<Injection />},
      {name: 'O-Scope', slug: 'oscope', component:<Oscope />},
      {name: 'Function Generator', slug: 'function', component:<FunctionG />},
      {name: 'Contact retention tool', slug: 'retention', component:<ContactRetention />},
      {name: 'HiPot', slug: 'hipot', component:<Placeholder />},
      {name: 'Printer', slug: 'printer', component:<Placeholder />},

    ]
    return (
      <div>
        <ul>
        <ButtonMaker buttons={items}/>
        </ul>
      </div>
    )
    
  }
export default Tools;
