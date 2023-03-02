import React from 'react';

class Sensalert extends React.Component {
  render () {
    return (
      <div>
        <h2>Sensalert</h2>
        <h3>Information</h3>
          Model Name=SENSALERT ASI RELAY<br />
          Part#=S2X-3RTH-AA<br />
          <img src='https://www.sensidynegasdetection.com/assets/images/sensalert-asi-fixed-point-gas-detector.jpg' width='400px'/><br />
          <a href='https://www.sensidynegasdetection.com/products/industrial-point-gas-detection-products/sensalert-asi-point-gas-detector-sil-2-certified/' target='_blank'
          >Manufacturer Website</a><br />
          <a href='https://www.youtube.com/watch?v=SR3cXpViN5M' target='_blank'
          >Intro Video</a><br />
          <a href='https://www.sensidynegasdetection.com/Support%20Library/gas-detection/SensAlert%20ASI/SensAlert%20ASI%20transmitter%20manual.pdf' target='_blank'
          >Manual</a><br />
          <table>
            <tr><th>Pages</th><th>Subject</th></tr>
            <tr><td>10-</td><td>Part Number info</td></tr>
            <tr><td>17-</td><td>Parts of LCD Screen</td></tr>
            <tr><td>29-33</td><td>Wiring instrument</td></tr>
            <tr><td>36-96</td><td>Menu maps</td></tr>
            <tr><td>106-107</td><td>Troubleshooting guide</td></tr>
            <tr><td>114-115</td><td>Mounting Measurements</td></tr>
          </table>
        <h3>Device setup</h3>
          <table>
            <tr><th>Device Setup</th><th>Parts</th></tr>
            <tr><td>Physical Build</td><td>Wires to sensor, element Installation, Mounting</td></tr>
            <tr><td>System Configuration</td><td>Gas Type, Set up Alarms, Set up Relays</td></tr>
            <tr><td>Calibration</td><td>Set Zero and Span</td></tr>
            <tr><td>Adding to software</td><td>MWL,,,,</td></tr>
          </table>
        <h3>Physical Build</h3>
          <h4>Device Pinout</h4>
            <table>
              <tr><th>Board</th><th>Terminal</th><th>Signal</th><th>Note</th></tr>
              <tr><td>Bottom</td><td>4-20</td><td>4-20 Signal</td><td>Shares Same ground as Power</td></tr>
              <tr><td>Bottom</td><td>Power</td><td>Power</td><td>Shares Same ground as 4-20</td></tr>
              <tr><td>Bottom</td><td>Relay 1</td><td>Fault(Blue Alarm)</td><td>Use A(N/C) terminal</td></tr>
              <tr><td>Top</td><td>Relay 2</td><td>Low Alarm(Yellow)</td><td>Top Relay-Use A(N/C) terminal</td></tr>
              <tr><td>Top</td><td>Relay 3</td><td>High Alarm(Red)</td><td>Middle Relay-Use A(N/C) terminal</td></tr>
            </table>
          <h4>AWS Box Connectors Pinout</h4>
            <table>
              <tr><th>Connector Location</th><th>Connector</th><th>Contacts</th><th>Crimper</th></tr>
              <tr><td>AWS Intenal Bulkhead Connector</td><td>D38999/2_WD97PC</td><td>4X#16Pin(),8X#20Pin()</td><td></td></tr>
              <tr><td>AWS External Barrel Connector</td><td>D38999/26_WD97SC</td><td>4X#16Socket(),8X#20Socket()</td><td></td></tr>
            </table>
            <br /><br /><br />
            <table>
              <tr><th>Bulkhead Pin</th><th>Signal Type</th><th>Avionics cable color</th><th>Detector Terminal</th></tr>
              <tr><td>A</td><td>4-20+</td><td>Violet</td><td>4-20</td></tr>
              <tr><td>B</td><td>4-20-</td><td>Gray</td><td>RTN</td></tr>
              <tr><td>C</td><td>Not Connected</td><td></td><td></td></tr>
              <tr><td>D</td><td>Red Alarm +</td><td>Red</td><td>A on relay 3 N.C.</td></tr>
              <tr><td>E</td><td>Red Alarm -</td><td>Brown</td><td>Com on relay 3</td></tr>
              <tr><td>F</td><td>Fault +</td><td>Yellow</td><td>A on relay 1 N.C.</td></tr>
              <tr><td>G</td><td>Not Connected</td><td></td><td></td></tr>
              <tr><td>H</td><td>Fault -</td><td>Orange</td><td>Com on relay 1</td></tr>
              <tr><td>J</td><td>Yellow Alarm +</td><td>Blue</td><td>A on relay 2 N.C.</td></tr>
              <tr><td>K</td><td>Wellow Alarm -</td><td>Green</td><td>Com on relay 2</td></tr>
              <tr><td>L</td><td>Power +</td><td>White</td><td>V +</td></tr>
              <tr><td>M</td><td>Power RTN</td><td>Black</td><td>RTN</td></tr>
            </table>
          <h5>DAQ Pinout</h5>
          <h5>Sensor Element Installation</h5>
          <h5>Sensor mounting</h5>
        <h3>System Configuration</h3>
          <h4>Sensor Adjustment</h4>
            main menu>system configuration>sensor adjustment>select cal gas<br />
            <strong>Methane</strong><br />
            main menu>system configuration>sensor adjustment>select k factor<br />
            <strong>None</strong><br />
          <h4>Alarm Settings</h4>
            <p>
            This is setting the function of the alarms used by the sensor. When
            it shows relays asigned, just make sure the number relay is showing
            and not the other relays.  For example, if we want to assign relay
            2, and it says 1346, then we want to delete relays 1 and 3, and add
            relay 2.  Don't worry about the high numbers.  The result would be
            2,4,6.
            </p>
            main menu> system configuration> alarm settings> alarm functions> alarm1<br />
            <strong>relay 2, enabled,Setpoint = 12%LEL, Release = 7%LEL</strong><br />
            main menu> system configuration> alarm settings> alarm functions>alarm2<br />
            <strong>relay 3, enabled,Setpoint = 25%LEL, Release = 13%LEL</strong><br />
            main menu> system configuration> alarm settings> alarm functions>alarm3<br />
            <strong>disabled</strong><br />
            main menu> system configuration> alarm settings> alarm functions> twa alarm<br />
            <strong>disabled</strong><br />
            alarms:<br />
            <li>Alarm 1 = Yellow(25%LEL)-Warning</li>
            <li>Alarm 2 = Red(50%LEL)-Alarm</li>
          <h4>Relay Settings</h4>
            <p>This sets up the actual function of the relays</p>
            main> system configuration> alarm settings> relay one-fail<br />
            <strong>Non Latching, Norm Energized, Time Delay = 5s</strong><br />
            main> system configuration> alarm settings> relay two<br />
            <strong>Non Latching, Norm Energized, Time Delay = 1s</strong><br />
            main> system configuration> alarm settings> relay three<br />
            <strong>Non Latching, Norm Energized, Time Delay = 1s</strong><br />
        <h3>Calibration</h3>
          <p>The calibration side deals with the actual gasses</p>
            main> calibration mode> zero transmitter><br />
            Once aknowledged it will be expecting zero gas to be flowing into it<br />
            main> calibration mode> cal gas conc><br />
            Set this to the concentration of the cal gas that will be used<br />
            main> calibration mode> calibrate><br />
            Flow cal gas into sensor while doing this<br />

        <h3>Troubleshooting</h3>
          Simulate Instrument:<br />
          Instrument Checkout:<br />
        <h3>Adding to software</h3>
        <h3>Tripod AWS</h3>
          Gas sensor:
          <table>
            <tr><th>Signal</th><th>Description</th><th>Operation</th></tr>
            <tr><td>Analog Out</td><td>% of LEL</td><td>Scaled 4-20mA based on Level of LEL</td></tr>
            <tr><td>Relay</td><td>High/Red</td><td>Open when Device on, Closes with High Level or loss of device power</td></tr>
            <tr><td>Relay</td><td>Low/Yellow</td><td>Open when Device on, Closes with Low Level or loss of device power</td></tr>
            <tr><td>Relay</td><td>Blue/Fault</td><td>Open when Device on, Closes with Fault or loss of device power</td></tr>
          </table>
        <h3>Tripod Logic</h3>
        Gas Sensor
          <table>
            <tr><th>Signal</th><th>Description</th><th>Operation</th></tr>
            <tr><td>Digital Out</td><td>Red/High</td><td>N.C. contact powered on. Releases open state when high Level or power loss. Controls red and alarm</td></tr>
            <tr><td>Digital Out</td><td>Yellow/Low</td><td>N.O. contact. Powered Closed state when Low Level and High level not true. Controls Yellow.</td></tr>
            <tr><td>Digital Out</td><td>Blue/Fault</td><td>N.O. contact. Powered Closed state when Fault. Controls Blue.</td></tr>
            <tr><td>Digital Out</td><td>Green/Safe</td><td>N.O. contact. Powered Closed state when Yellow and Red not Active. Controls Green.</td></tr>
          </table>
      </div>
    );
  }
}

export default Sensalert;
