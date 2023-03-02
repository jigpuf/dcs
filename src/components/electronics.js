import React from 'react';
import Rlc from './electronics/rlc.js';
import Wheatstone from './electronics/wheatstone.js';
import Components from './electronics/components.js';
import Protection from './electronics/protection.js';
import Logic from './electronics/logic.js';
import Ground from './electronics/ground.js';
import Pcb from './electronics/pcb.js';

class Electronics extends React.Component {
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
      {name: 'RLC Circuits/Power', slug: 'rlc', component:<Rlc />},
      {name: 'Wheatstone', slug: 'wheatstone', component:<Wheatstone /> },
      {name: 'Components', slug: 'components', component:<Components /> },
      {name: 'Circuit Protection', slug: 'protection', component:<Protection /> },
      {name: 'Digital/logic gates', slug: 'digital', component:<Logic /> },
      {name: 'Grounding', slug: 'isolation', component:<Ground /> },
      {name: 'PCBs', slug: 'pcb', component:<Pcb /> },
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
        <hr />
        {renderTier2Component}
      </div>
    )
    }
  }

export default Electronics;
