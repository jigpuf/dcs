import React from 'react';

class Gui extends React.Component {
  render () {
    return (
      <div>
        <h2>GUIs</h2>
        <h3>Gui List</h3>
        <table>
          <tr><th>GUI</th><th>Path</th></tr>
          <tr><td>Tripod</td><td>TXSW Launcher &rarr; Tripod_Access_GUI</td></tr>
          <tr><td></td><td></td></tr>
          <tr><td></td><td></td></tr>
          <tr><td></td><td></td></tr>
          <tr><td></td><td></td></tr>
          <tr><td></td><td></td></tr>
          <tr><td></td><td></td></tr>
        </table>
        <h3>Tripod GUI</h3>
        <p>If you want to see something like the texas Data Viewer for Tripod</p>
        <ol>
          <li>click on the plots tab at the bottom of the GUI</li>
          <li>In the plot settings tab, type in the sensor name to see the plot for up to the last 40 min.</li>
        </ol>
        <p>Get info on any instrument by right clicking on it.</p>
      </div>
    );
  }
}

export default Gui;
