import React from 'react';
import TroubleshootingToolbox from './tools/troubleshootingToolbox.js'
import Taps from './tools/taps.js'
import Crimpers from './tools/crimpers.js'
import Hole from './tools/hole.js'
import Label from './tools/label.js'
import Swage from './tools/swage.js'
import Multimeter from './tools/multimeter.js'
import Injection from './tools/injection.js'
import Oscope from './tools/oscope.js'
import FunctionG from './tools/functionG.js'
import SafetyWire from './tools/safetyWire.js'
import Scissor from './tools/scissor.js'
import Man from './tools/man.js'
import Sky from './tools/sky.js'
import ContactRetention from './tools/contactRetention.js'

class Tools extends React.Component {
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
      {name: 'Troubleshooting', slug: 'troubleshooting', component:<TroubleshootingToolbox />},
      {name: 'Taps', slug: 'taps', component:<Taps />},
      {name: 'Crimpers', slug: 'crimpers', component:<Crimpers />},
      {name: 'Hole Punch', slug: 'hole', component:<Hole />},
      {name: 'Label Maker', slug: 'label', component:<Label />},
      {name: 'Swagelock', slug: 'swage', component:<Swage />},
      {name: 'Multimeter', slug: 'multimeter', component:<Multimeter />},
      {name: 'Injection Meter', slug: 'injection', component:<Injection />},
      {name: 'O-Scope', slug: 'oscope', component:<Oscope />},
      {name: 'Function Generator', slug: 'function', component:<FunctionG />},
      {name: 'Safety Wire', slug: 'safetyWire', component:<SafetyWire />},
      {name: 'Scissor Lift', slug: 'scissor', component:<Scissor />},
      {name: 'Man Lift', slug: 'man', component:<Man />},
      {name: 'Skytrac', slug: 'sky', component:<Sky />},
      {name: 'Contact retention tool', slug: 'retention', component:<ContactRetention />},
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
export default Tools;
