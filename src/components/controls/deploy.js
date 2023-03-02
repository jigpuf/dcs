import React from 'react';

class Deploy extends React.Component {
  render () {
    return (
      <div>
        <h2>Deploy System</h2>
        <h3>Order of tasks</h3>
          <ol>
            <li>Get IO Count and type</li>
            <li>Decide how much growth to allow for</li>
            <li>Figure out Control System to be used PLC, NI, Siemens</li>
            <li>Decide on Modules and Headers Needed</li>
            <li>Design Channels with J-boxes</li>
            <li>Figure out Power Distribution</li>
            <li>Safety and location restrictions</li>
            <li>Decide on J-box locations</li>
            <li>Figure out raceway paths</li>
            <li>Decide on communication Protocol</li>
            <li>Design Logic and set up files for future system</li>
            <li>Check plans with GSE</li>
            <li>Get Capx together for order aproval</li>
              <ul>
                <li>Cable</li>
                <li>J-boxes</li>
                <li>Conduit</li>
                <li>Cable Tray</li>
                <li>Daq Hardware</li>
                <li>J-box components</li>
                <li>Power Distribution</li>
              </ul>
            <li>Powerpoint, Review, Review, Review</li>
            <li>Once aproved order stuff</li>
            <li>Get all involved parties instructions for what we need from them</li>
              <ul>
                <li>Electrical</li>
                <li>Facilities</li>
                <li>Software</li>
                <li>Engineering</li>
                <li>Support from other groups</li>
              </ul>
            <li>Build system Hardware and power up</li>
            <li>Install programming where needed (PLC etc.)</li>
            <li>Design and fill MWL</li>
            <li>Checkouts of Channels</li>
            <li>Checkouts of Instruments</li>
          </ol>
          <br /><br /><br /><br /><br />
      </div>
    );
  }
}

export default Deploy;
