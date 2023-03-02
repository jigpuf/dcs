import React from 'react';
import NiModuleSwap from './ni/niModuleSwap.js'
import NiHardware from './ni/niHardware.js'
import NiCommunications from './ni/niCommunications.js'
import Scb100 from './ni/scb100.js'

class Ni extends React.Component {
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
      {name: 'Module Swap', slug: 'niModuleSwap', component:<NiModuleSwap /> },
      {name: 'Hardware', slug: 'niHardware', component:<NiHardware /> },
      {name: 'Communications', slug: 'niCommunications', component:<NiCommunications /> },
      {name: 'SCB100', slug: 'scb', component:<Scb100 /> },
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


export default Ni;
