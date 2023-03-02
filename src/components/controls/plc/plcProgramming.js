import React from 'react';
import PlcLogic from './plcProgramming/plcLogic.js'
import PlcInstructions from './plcProgramming/plcInstructions.js'
import PlcProgramHandling from './plcProgramming/plcProgramHandling.js'


class PlcProgramming extends React.Component {
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
      {name: 'Instructions', slug: 'commands', component:<PlcInstructions />},
      {name: 'Logic Examples', slug: 'logic', component:<PlcLogic />},
      {name: 'Program Handling', slug: 'handling', component:<PlcProgramHandling />},
      {name: 'File Structure', slug: 'structure'},
      {name: 'Sequential Function', slug: 'sequential'},
      {name: 'Structured Text', slug: 'structured'},
      {name: 'Ladder Logic', slug: 'ladder'},
      {name: 'Function Block', slug: 'function'},
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

export default PlcProgramming;
