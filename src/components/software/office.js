import React from 'react';
import Word from './office/word.js'
import Excel from './office/excel.js'
import Pp from './office/pp.js'
import Skype from './office/skype.js'
import Outlook from './office/outlook.js'

class Office extends React.Component {
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
      {name: 'Word', slug: 'word', component:<Word />},
      {name: 'Excel', slug: 'excel', component:<Excel />},
      {name: 'Power Point', slug: 'pp', component:<Pp />},
      {name: 'Skype', slug: 'skype', component:<Skype />},
      {name: 'Outlook', slug: 'outlook', component:<Outlook />},
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

export default Office;
