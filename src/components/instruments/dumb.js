import React from 'react';
import Accelerometers from './dumb/accels.js';
import Anemometer from './dumb/anemometer.js';
import Flame from './dumb/flame.js';
import Flow from './dumb/flowMeter.js';
import Hyv from './dumb/hyv.js';
import Limit from './dumb/limit.js';
import LoadCell from './dumb/loadCell.js';
import LoadPin from './dumb/loadPin.js';
import LVDT from './dumb/lvdt.js';
import Mics from './dumb/mics.js';
import Strain from './dumb/strain.js';
import Potentiometer from './dumb/pot.js';
import Pressure from './dumb/pressure.js';
import Prox from './dumb/prox.js';
import Temperature from './dumb/temperature.js';
import V200 from './dumb/v200.js';
import Valves from './dumb/valves.js';
import Philtec from './dumb/philtec.js'


class Dumb extends React.Component {
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
      {name: 'Accelerometers', slug: 'accels', component:<Accelerometers /> },
      {name: 'Anemometer', slug: 'anemometer', component:<Anemometer /> },
      {name: 'Flame Detectors', slug: 'flame', component:<Flame /> },
      {name: 'Flow Meter', slug: 'flow', component:<Flow /> },
      {name: 'Hydraulic Valves', slug: 'hyv', component:<Hyv /> },
      {name: 'Limits', slug: 'limits', component:<Limit />},
      {name: 'Load Cell', slug: 'lc', component:<LoadCell />},
      {name: 'Load Pin', slug: 'lp', component:<LoadPin />},
      {name: 'LVDT', slug: 'lvdt', component:<LVDT />},
      {name: 'Microphones', slug: 'microphones', component:<Mics /> },
      {name: 'Strain Gauge', slug: 'sg', component:<Strain />},
      {name: 'Potentiometer', slug: 'pot', component:<Potentiometer />},
      {name: 'Pressure', slug: 'pressure', component:<Pressure /> },
      {name: 'Proximity', slug: 'prox', component:<Prox /> },
      {name: 'Temperature', slug: 'tempFeedback', component:<Temperature /> },
      {name: 'V200', slug: 'v200', component:<V200 /> },
      {name: 'Valves', slug: 'valves', component:<Valves /> },
      {name: 'Philtec', slug: 'philtec', component:<Philtec /> },

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
export default Dumb;
