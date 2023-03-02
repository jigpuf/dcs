import React from 'react';
import RSLinks from './plcSoftware/rsLinks.js';
import Studio5000 from './plcSoftware/studio5000.js';
import CCW from './plcSoftware/ccw.js';

class PlcSoftware extends React.Component {
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
      {name: 'RSLinks', slug: 'links', component:<RSLinks /> },
      {name: 'Studio5000', slug: 'studio', component:<Studio5000 />},
      {name: 'CCW', slug: 'ccw', component:<CCW />},
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

export default PlcSoftware;
