import React from "react";

class Studio5000 extends React.Component {
  render() {
    return (
      <div>
        <h1>Studio5000</h1>
        <h2>Platforms</h2>
        <table>
          <tr>
            <th>Platforms</th>
            <th>Details</th>
            <th>Pictures</th>
          </tr>
          <tr>
            <td>Contrologix</td>
            <td>
              Most powerful, modules chasis-mounted, power supply attached to
              backplan
            </td>
            <td></td>
          </tr>
          <tr>
            <td>***Compactlogix</td>
            <td>Same as Controllpgix but on a smaller scale</td>
            <td></td>
          </tr>
          <tr>
            <td>Softlogix</td>
            <td>Mainly used for training, controller on your computer</td>
            <td></td>
          </tr>
          <tr>
            <td>DriveLogix</td>
            <td>Drive with embeded PLC</td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Studio5000;
