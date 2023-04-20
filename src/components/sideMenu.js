import React from 'react';


const SideMenu = (props) => {
    const items = [
      { name: 'Controls', slug: 'controls' },
      { name: 'Instruments', slug: 'instruments' },
      { name: 'Cables', slug: 'cables' },
      { name: 'Tools', slug: 'tools' },
      { name: 'Raceways', slug: 'raceways' },
      { name: 'Electronics', slug: 'electronics' },
      { name: 'Power', slug: 'power' },
      { name: 'Networking', slug: 'networking' },
      { name: 'Software', slug: 'software' },
      { name: 'Panels', slug: 'panels' },
      { name: 'Inventory', slug: 'inventory' },
      { name: 'Project Manage', slug: 'manage'},
      { name: 'Apps', slug: 'apps' },
      { name: 'Build', slug: 'build' },
      { name: 'Cars', slug: 'cars' },

    ];
    const renderItems = items.map(item => {
      return(
          <li key={item.slug}>

              <button
                  className={props.activeTab === item.slug ? 'active' : ''}//ternary
                  onClick={props.openTab(item.slug)}
                  >{item.name}
              </button>
          </li>
      )
  }
  )
  return(
      <aside className='side' id='side' >
          <ul>
            DCS
              {renderItems}
          </ul>
      </aside>
  );
}

export default SideMenu;
