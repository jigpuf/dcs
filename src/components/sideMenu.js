import React from "react";

const SideMenu = (props) => {
  /*
  *  The props is brought in from the parent component App.js in the form of
            <SideMenu openTab={openTab} activeTab={activeTab} />
            These are the function {openTab}, and the value {activeTab}
            This allows the SideMenu Component to use the function to set the activeTab value so that when a button is made, its onclick
            will trigger the openTab function and set the value of activeTab to the slug value.  This way when the button is rendered on 
            the App component, it will have the onclick action that will set the active tab on the App component for use there
  * The props brought in here are used in the button to set the className of the button as active or nothing

  **  This allows the button to be styled with css.
  .side button {
  width: 100%;
  background-color: lightgray;
}

.side .active {
  background-color: lightblue;
}
so the button will be blue if its slug property is equal to the prop.active tab
*/
  const items = [
    { name: "Apps", slug: "apps" },

    { name: "Controls", slug: "controls" },
    { name: "Instruments", slug: "instruments" },
    { name: "Panels", slug: "panels" },
    { name: "Cables", slug: "cables" },
    { name: "Tools", slug: "tools" },
    { name: "Raceways", slug: "raceways" },
    { name: "Electronics", slug: "electronics" },
    { name: "Power", slug: "power" },
    { name: "Inventory", slug: "inventory" },
    { name: "Project Manager", slug: "manage" },
    { name: "Networking", slug: "networking" },
    { name: "Software", slug: "software" },
    { name: "Build", slug: "build" },
    { name: "Cars", slug: "cars" },
    { name: "Links", slug: "links" },
  ];
  const renderItems = items.map((item) => {
    return (
      <li key={item.slug}>
        <button
          className={props.activeTab === item.slug ? "active" : ""} //ternary
          onClick={props.openTab(item.slug)}
        >
          {item.name}
        </button>
      </li>
    );
  });
  /*
   *  The key attribute is set to item.slug to provide a unique identifier for each list item.
   *  Within the <li> element, a <button> element is created. The className attribute is set conditionally using a ternary operator. It checks if the props.activeTab is equal to the current item's slug. If they match, the "active" class is added; otherwise, an empty string is assigned.
   *  The onClick attribute is assigned a function props.openTab(item.slug). It is called when the button is clicked and passes the item's slug as an argument.
   */
  return (
    <aside className="side" id="side">
      <ul>
        DCS
        {renderItems}
      </ul>
    </aside>
  );
};

export default SideMenu;
