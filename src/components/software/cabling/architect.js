import React from 'react';

class Architect extends React.Component {
  render () {
    return (
      <div>
        <h3>Architect is everything to build and troubleshoot a cable</h3>
        <li>First get Work order cable is attached to</li>
        <li>Work order will also give some of the non-standard parts</li>
        <li>Work order will show architect document as well as codes</li>
        <li>Under Architect Summary: gives important guidlines, Major Parts</li>
        <li>Cables: gives lengths, labels, connectors</li>
        <li>Connectors: give more in depth pinout and compatablity stuff</li>
        <li>Bulkheads: shows names for locations where bulhead Connectors are found</li>
        <li>Bulkhead Connectors:Shows connectors used on internal and external bulkhead locations</li>
        <li>Channel: is good for troubleshooting showing channel beginning to end</li>
        <h4>Accessing Info</h4>
        <li>Architect: https://architect.spacex.corp/parts</li>
        <li>Pick project, avionics, hopper, etc.</li>
        <li>Pick Tab</li>
        <h3>Questions</h3>
      </div>
    );
  }
}

export default Architect;
