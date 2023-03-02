import React from 'react';
import PlcProgramming from './plc/plcProgramming.js'
import PlcSoftware from './plc/plcSoftware.js'
import PlcHardware from './plc/plcHardware.js'
import PlcFirmware from './plc/plcFirmware.js'
import PlcCommunications from './plc/plcCommunications.js'
import PlcConfigure from './plc/plcConfigure.js'
import PlcProject from './plc/plcProject.js'

class PLC extends React.Component {
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
      {name: 'Hardware', slug: 'hardware', component:<PlcHardware /> },
      {name: 'Firmware', slug: 'firmware', component:<PlcFirmware />},
      {name: 'Software', slug: 'software', component:<PlcSoftware /> },
      {name: 'Configure', slug: 'configure', component:<PlcConfigure /> },
      {name: 'Programming', slug: 'programming', component:<PlcProgramming />},
      {name: 'Communications', slug: 'communications', component:<PlcCommunications />},
      {name: 'Project', slug: 'project', component:<PlcProject />},
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

export default PLC;
