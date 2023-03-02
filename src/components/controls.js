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

class Controls extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1 = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }

  render () {

    const Items = [
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
        <hr />
        {renderTier2Component}
      </ul>
      </div>

    )
  }
}

export default Controls;
