import React from 'react';

class PlcConfigure extends React.Component {
  render () {
    return (
      <div>
        <h2>Configuration</h2>
        <h3>Setup</h3>
          <ol>
            <li>Make sure PLC is On</li>
            <li>Connect computer to PLC via USB cord(USB 2.0 to USB B)</li>
            <li>Open RS Linx Classic</li>
            There should be a USB sign in the left pane to show you are hooked up
            <li>Right click controller, device properties, and check the revision</li>
            The revision will be used later in configuration so write it down
          </ol>
        <h3>Configure Hardware in Studio 5000</h3>
          <ol>
            <li>Open Studio 5000</li>
            <li>Select New project</li>
            If not new, browse other created projects
            <li>Select controller model eg. 1769-L33ER</li>
            <li>Select location where the program will be saved on your computer</li>
            <li>Hit Next</li>
            <li>Make sure revision matches what you recorded from RSLinx</li>
            If they don't match, you may need to flash firmware
            <li>Hit finish</li>
              If you recieve error "Failed to activate logix designer: no
              activations found" then Verify that you've activated Studio 5000
              and that if you're using an activation server you're connected to
              the network.
            <li>Manual Addition of Modules</li>
              <ol>
                <li>Right-Click main device under I/O Config</li>
                <li>[Add new Module][Catalog] Enter Module Part Number</li>
                <li>[Create]</li>
                <li>name= name of module, slot= where it lives</li>
              </ol>
            <li>Automatic Addition of modules</li>
              <ol>
                <li>[Comunications], [Whos Active], click on the processor</li>
                <li>????[Set Project Path]????</li>
                <li>[Download], warning screen, [download]</li>
                <li>Should come up in REM PROG, Go online if not</li>
                <li>In tree Pane, Right-Click controller or backplane</li>
                <li>[Discover Modules] all slots will be populated</li>
                <li>[Create] on each module [OK] warning[OK]</li>
                <li>Once all are added [Save]</li>
              </ol>
            <li>Motion modules have to be added manually offline</li>
          </ol>
        <h3>Comunications</h3>
          <h4>Ethernet Auto-Detection</h4>
            <li>[Configure Drivers],[Ethernet/IP Driver] name it</li>
            <li>[Add New][OK]</li>
            <li>[Windows Default], [AutoDetect]</li>
        <h3>AI Card Configuration</h3>
          ???Properties???
          <li>Set RPI for how often the card is scanned</li>
          <li>Inhibit if you don't want it working</li>
          <li>Set up range for card, usually whole range</li>
          <li>Set up Range for each Channel, usually the same as card</li>
          <li>Alarms are usually the same on all channels</li>
          <li>Alarms are set for certain levels that need to be noticed</li>
        <h3></h3>
        <h3></h3>
      </div>
    );
  }
}

export default PlcConfigure;
