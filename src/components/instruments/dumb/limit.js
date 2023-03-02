import React from 'react';

class Limit extends React.Component {
  render () {
    return (
      <div>
        <h3>Information</h3>
          <table>
            <tr><th>Model</th><th>Part Number</th><th>Website</th><th>Video</th><th>Manual</th></tr>
            <tr><td>Soldo</td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
          </table>
          <br />
        <h3>Physical Setup</h3>
          Control Hardware:<br />
            <table>
              <tr><th>Channel type</th><th>DAQ</th><th>Module</th><th>Header</th></tr>
              <tr><td>Current Dividers</td><td>SCXI-1101</td><td>SCXI-1102B</td><td>SCXI-1308</td></tr>
              <tr><td>Sourcing</td><td>cDAQ-9189</td><td>NI 9426</td><td>Dsub 37</td></tr>
              <tr><td>2-Voltages</td><td></td><td></td><td></td></tr>
            </table>
            <br />
          Circuit Diagram:<br />
          <li>Current Divider: 28v + Fuse + 1100&Omega; + [(5230&Omega;)(3300&Omega; + Closed Switch)(1100&Omega; + Open Switch)] + Module sensor + Ground</li>
          <li>Sourcing: 28v in Module + [(fuse + Open Switch )(fuse + Closed Switch)] + Ground</li>
          <li>2 Voltage: [(5v + Open Switch)(2.5v + Closed Switch)] + ...</li><br />
          Mounting:<br /><br />
          Pinouts:<br /><br />
          <table>
            <tr><th>Position</th><th>Cam</th><th>Wire Color</th><th>Signal</th></tr>
            <tr><td>Open</td><td>Bottom</td><td>Red</td><td>Open+</td></tr>
            <tr><td>Open</td><td>Bottom</td><td>Black</td><td>Open-</td></tr>
            <tr><td>Closed</td><td>Top</td><td>White</td><td>Closed+</td></tr>
            <tr><td>Closed</td><td>Top</td><td>Green</td><td>Closed-</td></tr>
          </table><br />
          Connectors: None<br /><br />
        <h3>Setup</h3>
          Software:None<br />
          Paramaters:None<br />
        <h3>Calibration</h3>
          Physical:Turn Cams so Top cam hit microswitch on closed position and
          Bottom cam makes contact on the open position.
        <h3>Troubleshooting</h3>
          Simulate Instrument: Switches<br />
          Instrument Checkout: Multimeter looking for continuity<br />
        <h3>Adding to software</h3>
      </div>
    );
  }
}

export default Limit;
