import React from 'react';

class Drager8000 extends React.Component {
  render () {
    return (
      <div>
        <h2>Drager8000</h2>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQu6f1aYTJsdkPUPYBrQYv1c2vN5gABHUbezaPY9rxpAUyPKGW2&usqp=CAU' width=''/><br />
        <h3>Information</h3>
        <table>
          <tr><th>Part</th><th>Supplier</th><th>Part Number</th><th>Aprox Cost</th></tr>
          <tr><td>Unit and Sensor</td><td>Norse Technologies</td><td>8344440</td><td>$1460</td></tr>
          <tr><td>Splash Gaurd</td><td>Norse Technologies</td><td>6812510</td><td>$50</td></tr>
          <tr><td>Replacement Sensor</td><td>Norse Technologies</td><td>6814150</td><td>$500</td></tr>
        </table><br /><br /><br />
        <table>
          <tr><th>Part</th><th>Description</th></tr>
          <tr><td>Unit and Sensor</td><td>Dreger, Polytron 8200 DD, 0 to 100% LEL s A, 4-20 mA Output with HART, 3 output relays(2Alarm, 1 fault relay) SPDT (option 5 A @ 230 VAC, 5A@30VDC, resistive load, 10 to 30V DC, 3-wire Supply Voltage, NEMA 4X & 7 , IP 65/66/67 Enclosure Rating, Aluminum body, size 7.0" L x 5.8" W x 5,1" H.)</td></tr>
          <tr><td>Splash Gaurd</td><td>Covers sensor section</td></tr>
          <tr><td>Replacement Sensor</td><td>DragerCensor CAT Ex DQ with NPT thread Sensor range 0-100% LEL.</td></tr>
        </table>
        <table>
          <tr><th>Videos</th></tr>
          <tr><td><a href='' target='_blank>'></a></td></tr>
          <tr><td></td></tr>
          <tr><td></td></tr>
          <tr><td></td></tr>
          <tr><td></td></tr>
          </table>
          <a href='https://www.draeger.com/en-us_us/Applications/Products/Fixed-Gas-Detection/Flammable-Gas-Detectors/Catalytic-Bead-Sensor-Principle/Polytron-8200' target='_blank'
          >Manufacturer Website</a><br />
          <h3>Manual</h3>
          <a href='https://www.draeger.com/Products/Content/polytron-8000-series-ifu-9033828-deen.pdf' target='_blank'
          >Manual</a><br />
          <table>
            <tr><th>Pages</th><th>Subject</th></tr>
            <tr><td>12-13</td><td>Pinouts</td></tr>
            <tr><td>17-18</td><td>Accessing menus and password</td></tr>
            <tr><td>18-21</td><td>Calibration</td></tr>
            <tr><td>21-22</td><td>Faults</td></tr>
            <tr><td>24-30</td><td>Setup</td></tr>
            <tr><td>34</td><td>Cable specs</td></tr>
          </table>
          <hr />
        <h3>Device setup</h3>
          <table>
            <tr><th>Device Setup</th><th>Parts</th></tr>
            <tr><td>Physical Build</td><td>Wires to sensor, element Installation, Mounting</td></tr>
            <tr><td>Configuration</td><td>Gas Type, Set up Alarms, Set up Relays</td></tr>
            <tr><td>Calibration</td><td>Set Zero and Span</td></tr>
            <tr><td>Adding to software</td><td>MWL,,,,</td></tr>
          </table>
          <hr />
        <h3>Physical Build</h3>

          <h4>Device Pinout</h4>
            <table>
              <tr><th>Signal</th><th>Terminal</th><th>Note</th></tr>
              <tr><td>Excitation</td><td>PRW +/-</td><td>10-30 VDC</td></tr>
              <tr><td>Low Relay</td><td>A1 Com/N.O.</td><td>Limit for Low LEL</td></tr>
              <tr><td>High Relay</td><td>A2 Com/N.O.</td><td>Limit for High LEL</td></tr>
              <tr><td>Fault Relay</td><td>FLT Com/N.C.</td><td>Loss of Power or Device Fault</td></tr>
              <tr><td>Analog Out</td><td>4-20mA/PWR-</td><td><strong>Needs to be read through 250 ohm resister</strong> into a voltage AI Channel,  If there is not a load on this channel, sensor will not work for function or setup</td></tr>
            </table>
            <br /><br /><br />
            <h4>Channel use</h4>
            <table>
              <tr><th>Signal</th><th>Channel</th></tr>
              <tr><td>Low LEL</td><td>Limit</td></tr>
              <tr><td>High LEL</td><td>Limit</td></tr>
              <tr><td>Fault</td><td>Limit</td></tr>
              <tr><td>4-20</td><td>AI Voltage w/ 250 ohm Resister</td></tr>
            </table>
          <h4>Sensor Element Installation</h4>
          <p>The sensor comes as an NPT at the bottom of the housing.  It has a
          connector that connects to the bottom of the board.  When a new Drager
          8200 is ordered, the sensor will usually come preinstalled.  The
          splash gaurd will screw on directly to the sensor</p>

          <h4>Sensor mounting</h4>
          The holes are 3.5 inches left to right and 3.5 inches top to bottom
          <hr />
        <h3>System Configuration</h3>
        To Enter Setup:
        <ol>
          <li>Put wand over down arrow for 3 sec.</li>
          <li>Select Enter Password</li>
          <li>Password is _ _ _ 2</li>
          <li>Go to settings</li><br /><br />
        </ol>
        <table>
          <tr><th>Parameter</th><th>Path</th><th>Note</th></tr>
          <tr><td>Alarm on/off</td><td>Password &rarr; Settings &rarr; Instrument Alarms/Relays &rarr; Alarm on/off</td><td>Enable</td></tr>
          <tr><td>Relay A1</td><td>Password &rarr; Settings &rarr; Instrument &rarr; Alarms/Relays &rarr; Relay A1</td><td>Normally Energ.</td></tr>
          <tr><td>Relay A2</td><td>Password &rarr; Settings &rarr; Instrument &rarr; Alarms/Relays &rarr; Relay A2</td><td>Normally Energ.</td></tr>
          <tr><td>Alarm A1</td><td>Password &rarr; Settings &rarr; Instrument &rarr; Alarms/Relays &rarr; Alarm A1</td><td>10.0 LEL, Rising, Non Latching, PreAcknow,Hyst=3.0, <strong>Confirm at bottom of screen</strong></td></tr>
          <tr><td>Alarm A2</td><td>Password &rarr; Settings &rarr; Instrument &rarr; Alarms/Relays &rarr; Alarm A2</td><td>25.0 LEL, Rising, Non Latching, PreAcknow,Hyst=5.0, <strong>Confirm at bottom of screen</strong></td></tr>
          <tr><td>Fault Warmup</td><td>Password &rarr; Settings &rarr;  Alarms/Relays &rarr; Fault Warmup</td><td>Dynamic</td></tr>
          <tr><td>Sensor Type</td><td>Password &rarr; Settings &rarr; Sensor &rarr; Sensor Type</td><td>DQ Sensor</td></tr>
          <tr><td>Gas Setting</td><td>Password &rarr; Settings &rarr; Sensor &rarr; Gas Settings</td><td>Percent LEL</td></tr>
        </table>
        <hr />
        <h3>Calibration</h3>
          <p>The calibration side deals with the actual gasses</p>
          To Enter Calibration:
          <ol>
            <li>Put wand over down arrow for 3 sec.</li>
            <li>Select Enter Password</li>
            <li>Password is _ _ _ 2</li>
            <li>Go to Calibration</li><br /><br />
          </ol>
          ***Need more info here
          <ol>
            <li>Password &rarr Calibration &rarr Zero Calibration</li>
            <li>Password &rarr Calibration &rarr Span Calibration</li>
          </ol>

          <hr />
        <h3>Troubleshooting</h3>
          Simulate Instrument:<br />
          Instrument Checkout:<br />
          <hr />
        <h3>Adding to software</h3>
        <h3>Operation</h3>
          Gas sensor:
          <table>
            <tr><th>Signal</th><th>Description</th><th>Operation</th></tr>
            <tr><td>Analog Out</td><td>% of LEL</td><td>Scaled 4-20mA based on Level of LEL</td></tr>
            <tr><td>Relay</td><td>High/Red</td><td>Indication(closed limit) on Alarm</td></tr>
            <tr><td>Relay</td><td>Low/Yellow</td><td>Indication(closed Limit) on Alarm</td></tr>
            <tr><td>Relay</td><td>Blue/Fault</td><td>Indication(closed Limit) <strong>Not</strong> on Alarm</td></tr>
          </table>
          <p>Reasoning: This shows actual info and makes each signal independent
          of the other.  The state only show if they are real.  Fault will use a
          non-indicator since this will be the case if power is lost completely</p>
        <h3>Logic</h3>
          <table>
            <tr><th>Signal</th><th>&darr;</th><th>&darr;</th><th>&darr;</th><th>&darr;</th><th>&darr;</th><th>&darr;</th><th>&darr;</th><th>&darr;</th></tr>
            <tr><td>A1(Low)</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
            <tr><td>A2(High)</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
            <tr><td>Fault</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
            <tr><th>Output</th><th>&darr;</th><th>&darr;</th><th>&darr;</th><th>&darr;</th><th>&darr;</th><th>&darr;</th><th>&darr;</th><th>&darr;</th></tr>
            <tr><td>Green Light</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>Yellow Light</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
            <tr><td>Red Light</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
            <tr><td>Blue Light</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
            <tr><td>Alarm/state</td><td>Fault</td><td>Safe</td><td>High</td><td>High</td><td>Low</td><td>Low</td><td>High</td><td>High</td></tr>

          </table>
          <p>Reasoning: Red cancels out Yellow Signal since yellow doesn't
          matter anymore. This will avoid confusion.  Fault can show with either
          state of High or low. Fault shows on negative sigal from fault so that
          it shows with a sensor loss of power. Blue cancels green state. Green
          only shows if no other state is present.</p>
          <ul>
            <li>Green State &rarr; No Alarms</li>
            <li>Yellow State &rarr; Low alarm but not High Alarm</li>
            <li>Red State &rarr; High Alarm no matter what else</li>
            <li>Blue State &rarr; Anytime Fault alarm active</li>
          </ul><br /><br /><br /><br />
      </div>
    );
  }
}

export default Drager8000;
