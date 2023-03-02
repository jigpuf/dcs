import React from 'react';
import Rfi from './warpdrive/rfi.js'
import Punchout from './warpdrive/punchout.js'
import Rfpo from './warpdrive/rfpo.js'
import Work from './warpdrive/work.js'
import Eprocs from './warpdrive/eprocs.js'
import Expense from './warpdrive/expense.js'
import Cartography from './warpdrive/cartography.js'
import Safety from './warpdrive/safety.js'
import Capx from './warpdrive/capx.js'

class Warpdrive extends React.Component {
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
      {name: 'Inventory Requests', slug: 'rfi', component:<Rfi />},
      {name: 'Punchout', slug: 'punchout', component:<Punchout />},
      {name: 'Request for PO', slug: 'rfpo', component:<Rfpo />},
      {name: 'Work Center Dispatch', slug: 'wcd', component:<Work />},
      {name: 'eProcs', slug: 'eprocs', component:<Eprocs />},
      {name: 'Expense Report', slug: 'er', component:<Expense />},
      {name: 'Cartography', slug: 'cartography', component:<Cartography />},
      {name: 'Safety Net', slug: 'safety', component:<Safety />},
      {name: 'Capital Expenditures', slug: 'capx', component:<Capx />},
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


export default Warpdrive;
