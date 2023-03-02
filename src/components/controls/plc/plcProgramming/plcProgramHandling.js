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
          <ol>
            <li>Open Studio5000</li>
            <li>Create New Project </li>
            <li>Logic &rarr; Select Processer</li>
            <li>Put in program name</li>
            <li>Choose Firmware version</li>
            <li>Hit Finish</li>
          </ol>
        <h3>Remove program from PLC</h3>
      </div>
    );
  }
}

export default PlcLoadProgram;
