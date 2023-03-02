import React from 'react';

class Flame extends React.Component {
  render () {
    return (
      <div>
      <h2>Flame Detector</h2>

      <h3>Information</h3>
        Model:Spectrex Sharpeye 40/40UFL Ultra Fast UV/IR<br />
        Part Number:<br />
        Manufacturer website<br />
        Videos:<br />
        Manual:<br />
      <h3>Physical Setup</h3>
        Circuit Diagram:<br />
        Mounting:<br />
        Pinouts:<br />
        <table>
        <tr><th>Terminals</th><th>Signal</th><th>Note</th></tr>
        <tr><td>Level</td><td>4-20mA</td><td></td></tr>
        <tr><td>Fault</td><td>Normally Closed Relay</td><td></td></tr>
        <tr><td>High(red)</td>Normally Open Relay<td></td><td></td></tr>
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

export default Flame;
