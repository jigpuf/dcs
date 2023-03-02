import React from 'react';

class PlcFirmware extends React.Component {
  render () {
    return (
      <div>
        <h2>PLC Firmware</h2>
          <p>Studio5000 is used with firmware v21 and up.  RSLogix is used with
          firmware versions 20 and below</p>
          <h3>Check version of firmware</h3>
            <ol>
              <li>Connect computer through USB to PLC</li>
              <li>Open RSLinx Classic</li>
              <li>When USB pops up, you are connected</li>
              <li>Open RS Logix</li>
              <li>Go to I/O Configuration &rarr; Backplane &rarr; Device Name(doubleclick)</li>
              <li>Under General Tag, the version will be listed</li>
            </ol>
          <h3>Flash Firmware</h3>
      </div>
    );
  }
}

export default PlcFirmware;
