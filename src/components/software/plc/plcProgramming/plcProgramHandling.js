import React from 'react';

class PlcLoadProgram extends React.Component {
  render () {
    return (
      <div>
        <h2>Program Handling</h2>
        <h3>Load Program onto PLC</h3>
          <ol>
            <li>Turn on rsLinx</li>
            <li>Plug in USB</li>
            <li>Open Program in 5000</li>
            <li>Comunications	&rarr; Pick processor	&rarr; <button>Download</button></li>
          </ol>
        <h3>New Program</h3>
        <h3>Remove program from PLC</h3>
      </div>
    );
  }
}

export default PlcLoadProgram;
