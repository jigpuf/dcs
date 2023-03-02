import React from 'react';

class ClearPath extends React.Component {
  render () {
    return (
      <div>
        <h2>Open Path</h2>




      <h3>Information</h3>
        Model: Spectrex Quasar 902<br />
        Part Number:<br />
        Manufacturer website<br />
        Videos:<br />
        Manual:<br />
      <h3>Physical Setup</h3>
        Circuit Diagram:<br />
        Mounting:<br />
        Pinouts:<br />
        <table>
          <tr><th>Channel</th><th>Signal</th><th></th></tr>
          <tr><td>Level</td><td>4-20mA HART</td><td></td></tr>
          <tr><td>Fault</td><td>Normally Closed contact</td><td></td></tr>
          <tr><td>Alarm</td><td>Normally Open Contact</td><td></td></tr>
          <tr><td>Communications</td><td>RS 485</td><td></td></tr>
        </table>
        Connectors<br />
      <h3>Setup</h3>
        Software<br />
        Paramaters<br />
      <h3>Calibration</h3>
      <h3>Troubleshooting</h3>
        Simulate Instrument:<br />
        Instrument Checkout:<br />
      <h3>Adding to software</h3></div>
    );
  }
}

export default ClearPath;
