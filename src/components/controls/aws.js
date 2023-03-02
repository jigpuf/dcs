import React from 'react';

class Aws extends React.Component {
  render () {
    return (
      <div>
        <h2>AWS</h2>
        Sensor needs:<br />
        <table>
          <tr><th>Sensor Type</th><th>Model</th><th>Part Number</th><th>Notes</th></tr>
          <tr><td>CH4 Sensor</td><td>Draeger Polytron 8200 0-100LEL DD</td><td></td><td>Cheaper than Sensalert</td></tr>
          <tr><td>CH4 Sensor</td><td>Sensalert</td><td></td><td></td></tr>
          <tr><td>O2 Sensor</td><td>Draeger 8344403 Drager Polytron 8100EC</td><td></td><td></td></tr>
          <tr><td>Fire Detection</td><td>Spectrex Sharpeye 40/40UFL Ultra Fast UV/IR</td><td></td><td>20ms response time</td></tr>
          <tr><td>Open Path</td><td>Spectrex Quasar 902</td><td></td><td>Buy according to range</td></tr>
          <tr><td>Solid state Audio Player</td><td>DN-F400</td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td><td></td></tr>
        </table>
        <p>On some systems, the Calc file uses the analog input and threshhold
        setpoints in virtual commands from GSE to apply logic that sets the
        value of the calc variables.  It is important for test engineers to
        ensure the virtual channels from RSGSE are correct in the AWS system.
        Enable values are sent to RTX using the values in the fake AWS that
        lives with the other MWLs</p>
      </div>
    );
  }
}

export default Aws;
