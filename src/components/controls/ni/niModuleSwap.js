import React from 'react';

class NiModuleSwaps extends React.Component {
  render () {
    return (
      <div>
      <h2>Ni Module Swaps</h2>
        <ol>
          <li>Get New Module from Calibration Cabinet</li>
          <li>Tell engineering to bring down server</li>
          <li>Shut Down PXI Top to Bottom</li>
          <li>Shut down SCXI Top to Bottom</li>
          <li>Remove expiring module and scan to self</li>
            <ul>
              <li>Warpdrive &rarr; Warehouse Execution &rarr; 3 Line Menu &rarr;
              Move Anything</li>
              <li>Scan Module Bar Code</li>
              <li>Scan Badge Bar Code</li>
            </ul>
          <li>Get New Module and scan to slot</li>
            <ul>
              <li>Warpdrive &rarr; Warehouse Execution &rarr; 3 Line Menu &rarr;
              Move Anything</li>
              <li>Scan Module Bar Code</li>
              <li>Scan Badge Slot Code</li>
            </ul>
          <li>Turn on PXIs Top to Bottom</li>
          <li>Turn on SCXIs Top to Bottom</li>
          <li>Turn on Server</li>
          <li>Tell Engineering it is comming on, make sure they are happy</li>
          <li>Take old module to metrology</li>
        </ol>

      </div>
    );
  }
}

export default NiModuleSwaps;
