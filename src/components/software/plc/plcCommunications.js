import React from 'react';

class PlcCommunications extends React.Component {
  render () {
    return (
      <div>
        <table>
          <tr><th>Protocol</th><th>Cabling</th></tr>
          <tr><td>Df1</td><td>RS232/RS422</td></tr>
          <tr><td>Ethernet/IP</td><td>Cat6</td></tr>
          <tr><td>Modbus</td><td></td></tr>
          <tr><td>ASCII</td><td></td></tr>
          <tr><td>DH+</td><td></td></tr>
          <tr><td>DH485</td><td></td></tr>
        </table>
        <a href='https://www.promotic.eu/en/pmdoc/Subsystems/Comm/PLC/AllenBradley.htm' target = 'blank'
        >Types of communication</a><br />
        <h3>Bits to transfer data to control software</h3>
        <ul>
          <li>rScaled Data</li>
          <li>rRaw Data</li>
          <li>iDigital Input</li>
          <li>iDigital Output</li>
          <li>rSlope</li>
          <li>rOffset</li>
          <li>iSetpoints</li>
          <li>rSetpoints</li>
        </ul>

      </div>
    );
  }
}

export default PlcCommunications;
