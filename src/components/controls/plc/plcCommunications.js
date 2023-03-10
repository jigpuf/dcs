import React from 'react';

const PlcCommunications = () => {
    return (
      <div>
        <table>
          <tr><th>Protocol</th><th>Cabling</th></tr>
          <tr><td>Df1</td><td>RS232/RS422</td></tr>
          <tr><td>Ethernet/IP</td><td></td></tr>
          <tr><td>Modbus</td><td></td></tr>
          <tr><td>ASCII</td><td></td></tr>
          <tr><td>DH+</td><td></td></tr>
          <tr><td>DH485</td><td></td></tr>
        </table>
        <a href='https://www.promotic.eu/en/pmdoc/Subsystems/Comm/PLC/AllenBradley.htm' target = 'blank'
        >Types of communication</a><br />

      </div>
    );
  
}

export default PlcCommunications;
