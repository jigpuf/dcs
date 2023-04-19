import React from 'react';
import Plc from './controls/plc.js';
import Ni from './controls/ni.js';
import Vfd from './controls/vfd.js';
import Watlow from './controls/watlow.js';
import Pid from './controls/pid.js'
import Aws from './controls/aws.js';
import SeaLevel from './controls/seaLevel.js';
import Stat from './controls/stat.js';
import Deploy from './controls/deploy.js';
import Channels from './controls/channels.js';
import Conditioners from './controls/conditioners.js';
import Placeholder from '../utilities/placeholder.js';

import ButtonMaker from '../utilities/buttonMaker.js';

const Controls = () => {


    const items = [
      {name: 'PLC', slug: 'plc', component:<Plc /> },
      {name: 'National Instruments', slug: 'ni', component:<Ni />},
      {name: 'VFD', slug: 'vfd', component:<Vfd />},
      {name: 'Watlow Controller', slug: 'watlow', component:<Watlow />},
      {name: 'PID Theory', slug:'pid', component:<Pid />},
      {name: 'AWS', slug: 'aws', component:<Aws />},
      {name: 'Sea Level', slug: 'seaLevel', component:<SeaLevel />},
      {name: 'Stat Lines', slug: 'stat', component:<Stat />},
      {name: 'Deploying Systems', slug: 'deploy', component:<Deploy />},
      {name: 'Channel Types', slug: 'channels', component:<Channels />},
      {name: 'Signal Conditioners', slug: 'conditioners', component:<Conditioners />},
      {name: 'Arduino', slug: 'arduino', component:<Placeholder />},
      {name: 'Motor drivers', slug: 'motor', component:<Placeholder />},
    ]
    return (
      <div>
      <ul>
        <ButtonMaker buttons={items}/>
      </ul>
      </div>

    )
}

export default Controls;
