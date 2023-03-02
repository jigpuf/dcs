import React from 'react';

class AudioPlayer extends React.Component {
  render () {
    return (
      <div>
        <h2>Audio Player</h2>

      <h3>Information</h3>
        Model: DN - F400<br />
        Part Number:<br />
        Manufacturer website<br />
        Videos:<br />
        Manual:<br />
      <h3>Physical Setup</h3>
        Circuit Diagram:<br />
        Mounting:<br />
        Pinouts:<br />
        Connectors<br />
      <h3>Setup</h3>
        Software<br />
        Paramaters:<br />
        Audio plays for each state change<br />
        <table>
          <tr><th>State</th><th>Action</th></tr>
          <tr><td>Fault</td><td>Alert every 15 seconds</td></tr>
          <tr><td>Low(Yellow)</td><td>Alert every 15 Seconds</td></tr>
          <tr><td>Red(High)</td><td>Alert followed by alarm</td></tr>
        </table>
      <h3>Calibration</h3>
      <h3>Troubleshooting</h3>
        Simulate Instrument:<br />
        Instrument Checkout:<br />
      <h3>Adding to software</h3>
      </div>
    );
  }
}

export default AudioPlayer;
