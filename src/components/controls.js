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
import Formic from './controls/formic.js';
import ButtonMaker from '../utilities/buttonMaker.js';

const Controls = () => {


    const items = [
      {name: 'Formic', slug: 'formic', component:<Formic /> },
      {name: 'PLC', slug: 'plc', component:<Plc /> },
      {name: 'National Instruments', slug: 'ni', component:<Ni />},
      {name: 'VFD', slug: 'vfd', component:<Vfd />},
      {name: 'Watlow Controller', slug: 'watlow', component:<Watlow />},
      {name: 'PID Theory', slug:'pid', component:<Pid />},
      {name: 'AWS', slug: 'aws', component:<Aws />},
      {name: 'Sea Level', slug: 'seaLevel', component:<SeaLevel />},
      {name: 'Stat Lines', slug: 'stat', component:<Stat />},
      {name: 'Deploying Systems', slug: 'deploy', component:<Deploy />},
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
