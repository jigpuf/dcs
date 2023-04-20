import React from 'react';

class PlcProject extends React.Component {
  render () {
    return (
      <div>
       <h2>Plc Project</h2>
        <h3>Hardware</h3>
          <table>
            <tr><th>Module</th><th>Part Number</th><th>Signal</th></tr>
            <tr><td>Controller</td><td></td><td></td></tr>
            <tr><td>(1)TC</td><td></td><td></td></tr>
            <tr><td>(2)DI</td><td></td><td></td></tr>
            <tr><td>(3)AO(I)</td><td></td><td></td></tr>
            <tr><td>PSU</td><td></td><td></td></tr>
            <tr><td>(4)Relay</td><td></td><td></td></tr>
            <tr><td>(5)RTD</td><td></td><td></td></tr>
            <tr><td>(6)AI/AO(V/I)</td><td></td><td></td></tr>
          </table>
        <h3>Instruments</h3>
          <table>
            <tr><th>Instrument</th><th>Type</th><th>Signals</th></tr>
            <tr><td>TC (2)</td><td>Input</td><td>1X TC, 1X AI(V)</td></tr>
            <tr><td>RTD (1)</td><td>Input</td><td>1X RTD</td></tr>
            <tr><td>HOA Switch (1)</td><td>Input</td><td>3 DI</td></tr>
            <tr><td>Prosense (1)</td><td>Input</td><td>None</td></tr>
            <tr><td>Light Post (1)</td><td>Output</td><td>5X DO</td></tr>
            <tr><td>Heat Gun (1)</td><td>Output</td><td>1X DO</td></tr>
            <tr><td>Fan (1)</td><td>Output</td><td>1X DO</td></tr>
            <tr><td>E-Stop (1)</td><td>None</td><td>None</td></tr>
            <tr><td>Analog readout (1)</td><td>Output</td><td>1X AO</td></tr>
            <tr><td>24V Relay(2)</td><td>Output</td><td>2X DO</td></tr>
            <tr><td>110V Relay(2)</td><td>Output</td><td>2X DO</td></tr>
            <tr><td>Readout</td><td>Output</td><td>1X AO</td></tr>
          </table><br /><br />
          Channel Count:
          <table>
            <tr><th>Type</th><th>Amount</th></tr>
            <tr><td>TC</td><td>1</td></tr>
            <tr><td>RTD</td><td>1</td></tr>
            <tr><td>AI(V)</td><td>1</td></tr>
            <tr><td>DI(L)</td><td>3</td></tr>
            <tr><td>DO</td><td>7</td></tr>
            <tr><td>AO(V)</td><td>1</td></tr>
          </table>
        <h3>Logic</h3>
          <ol>
            <li>Maintain a temperature between 85 and 90 degrees</li>
            <li>There are three temps to be monitored. 1 TC, 1 TC through a prosense, and 1 RTD</li>
            <li>Happy state - green light on</li>
            <li>When all three below 85 degrees(Low State) - Light is blue and heat gun starts</li>
            <li>When 2 above 85 degrees (High State)- yellow Light</li>
            <li>All three above 90 (High High)- Fan on, red light, siron one second out of 10</li>
            <li>E-stop should break power to Heat and fan Relays</li>
            <li>Auto should begin process </li>
            <li>On turns on fan</li>
            <li>Red and Siron should be held Open until needed</li>
            <li>Temp average should be on a readout</li>
          </ol>
          <br /><br /><br />
          <table>
            <tr><th>Temps/Out Bits</th><th>HOA</th><th>State</th><th>Red</th><th>Yellow</th><th>Green</th><th>Blue</th><th>Siron</th><th>Heat</th><th>Fan</th></tr>
            <tr><td>3 above 90</td><td>Auto</td><td>1/High High</td><td>1</td><td>0</td><td>0</td><td>0</td><td>On 1s/10s</td><td>0</td><td>1</td></tr>
            <tr><td>2 above 90</td><td>Auto</td><td>2/High</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td></td><td>Auto</td><td>3/Happy</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>3 under 85</td><td>Auto</td><td>4/Cold</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
            <tr><td></td><td>On</td><td>5/On</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>
            <tr><td></td><td>Off</td><td>6/Off</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          </table>
        <h3>Tasks</h3>
          <ol>
            <li>Get software on computer including USB driver</li>
            <li>Add modules to Program</li>
            <li>Build all ladders for standard Operations</li>
            Inputs, Initialization, Startup, Run, Shutdown, States, Outputs, Write outputs, Notifications/alarms
            <li>On Main put jump to routines</li>
            <li>Map all discriminated I/O and give tag names</li>
            <li>Build Logic Ladders</li>
            <li>Physical Hookup</li>
            <li>Write up system checks with truth table</li>
            <li>Check Function</li>
          </ol>
          <br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}

export default PlcProject;
