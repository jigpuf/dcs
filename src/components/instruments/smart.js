import React from 'react';
import ClearPath from './smart/clearPath.js';
import Coriolis from './smart/coriolis.js';
import Er5k from './smart/er5k.js';
import Gas from './smart/gas.js';
import Heaters from './smart/heaters.js';
import Nd9 from './smart/nd9.js';
import Tugger from './smart/tugger.js';
import Level from './smart/level.js';
import AudioPlayer from './smart/audioPlayer.js';


class Smart extends React.Component {
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
      {name: 'Open Path', slug: 'clearPath', component:<ClearPath /> },
      {name: 'Coriolis', slug: 'coriolis', component:<Coriolis /> },
      {name: 'ER5K', slug: 'er5k', component:<Er5k /> },
      {name: 'Gas Sensors', slug: 'gas', component:<Gas />},
      {name: 'Heaters', slug: 'heaters', component:<Heaters /> },
      {name: 'ND9', slug: 'nd9', component:<Nd9 /> },
      {name: 'Tugger', slug: 'tugger', component:<Tugger /> },
      {name: 'Level Transmitters', slug: 'level', component:<Level /> },
      {name: 'Audio Player', slug: 'audio', component:<AudioPlayer /> },
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
        Information:Model, Part Number, Manufacturer Website, Videos, Manuals<br />
        Physical Setup:Control Hardware, Circuit Diagram, Installation, Pinout, Connectors<br />
        Setup:Software, Parameters, Calibration, Software Assets<br />
        System Setup:Calculation, adding to software<br />
        Troubleshooting:Simulate Instrument, Simulate Channel<br />
        Tools: For instalation, troubleshooting<br />
        <hr />
        {renderTier2Component}
      </div>
    )
    }
  }
export default Smart;
