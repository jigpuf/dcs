import React from 'react';
import DcDistro from './power/dcDistro.js'
import Concepts from './power/concepts.js'
import Transformers from './power/transformers.js'


class Power extends React.Component {
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
      {name: 'DC Distribution', slug: 'dc', component:<DcDistro />},
      {name: 'Power concepts', slug: 'concepts', component:<Concepts />},
      {name: 'Transformers', slug: 'transformers', component:<Transformers /> },
      {name: 'Switches', slug: 'switches' },
      {name: 'Panels', slug: 'panels' },
      {name: 'Codes', slug: 'codes' },
      {name: 'ATS Function', slug: 'ats',},
      {name: 'Grounding Systems', slug: 'grounding',},
      {name: 'Shielding', slug: 'shielding',},
      {name: 'VFD', slug: 'vfd',},

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

export default Power;
