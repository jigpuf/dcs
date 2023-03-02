import React from 'react';

class Er5k extends React.Component {
  render () {
    return (
      <div>
      <h3>Information</h3>
        Model:ER5000 Series<br />
        <table>
          <tr><th>Hazardous</th><th>Analog Signal Type</th><th>Part Number</th></tr>
          <tr><td>Yes</td><td>Current</td><td>ER5050SI-1</td></tr>
          <tr><td>Yes</td><td>Voltage</td><td>ER5050SV-1</td></tr>
          <tr><td>No</td><td>Current</td><td>ER5000SI-1</td></tr>
          <tr><td>No</td><td>Voltage</td><td>ER5000SV-1</td></tr>
        </table>
        Manufacturer website:<br />
        Videos:<br />
        Manual:<br />
        <a href='https://www.manualslib.com/manual/1959985/Emerson-Tescom-Er5k.html?page=22#manual' target='_blank'
        >ER5K Manual</a><br />
        <table>
          <tr><th>Subject</th><th>Page</th></tr>
          <tr><td>Physical Dimensions/ Parameters</td><td>15-24</td></tr>
          <tr><td>Wiring</td><td>95-102</td></tr>
          <tr><td>Software</td><td>71, 72, 114-186 </td></tr>
          <tr><td>Troubleshooting</td><td>202-220</td></tr>
        </table>
        <br />
        Wiring Setups:<br />
        <table>
          <tr><th>Feedback</th><th>Monitored</th><th>Ducer</th><th>Card</th><th>Reference</th><th>Page</th></tr>
          <tr><td>Internal</td><td>No</td><td>None</td><td>None</td><td>None</td><td></td></tr>
          <tr><td>External</td><td>No</td><td>Current</td><td>None</td><td>None</td><td>95</td></tr>
          <tr><td>External</td><td>No</td><td>Voltage</td><td>None</td><td>None</td><td>97</td></tr>
          <tr><td>External</td><td>Yes</td><td>Current</td><td>Current</td><td>Floating</td><td>98</td></tr>
          <tr><td>External</td><td>Yes</td><td>Current</td><td>Current</td><td>Ground</td><td>99</td></tr>
          <tr><td>External</td><td>Yes</td><td>Current</td><td>Voltage</td><td>N/A</td><td>100</td></tr>
          <tr><td>External</td><td>Yes</td><td>Voltage</td><td>Voltage</td><td>N/A</td><td>102</td></tr>
        </table>
        <br />
        <hr />
      <h3>Physical Setup</h3>
        Circuit Diagrams:<br />
        Mounting:P.15-24<br />
        Pinouts:<br />
          <table>
            <tr><th>J3 Pin</th><th>Wire Color</th><th>Function</th><th>10MS Connector Pin</th></tr>
            <tr><th>1</th><td>Brown</td><td>(+) Setpoint Input</td><th>C</th></tr>
            <tr><th>2</th><td>Red</td><td>(-) Setpoint Input</td><th>D</th></tr>
            <tr><th>3</th><td>Orange</td><td>(+) Feedback input</td><th>G</th></tr>
            <tr><th>4</th><td>Yellow</td><td>(-) Feedback Input</td><th>H</th></tr>
            <tr><th>5</th><td>Green</td><td>(-) RS485 network</td><th>F</th></tr>
            <tr><th>6</th><td>Blue</td><td>(+) RS485 network</td><th>E</th></tr>
            <tr><th>7</th><td>Violet</td><td>(+) 24v DC Power</td><th>A</th></tr>
            <tr><th>8</th><td>Gray</td><td>(-) 24v DC Return</td><th>B</th></tr>
            <tr><th>9</th><td>White</td><td>(+)5v output (5mA max)</td><th>N/A</th></tr>
            <tr><th>10</th><td>Black</td><td>analog Signal/ Board Ground</td><th>N/A</th></tr>
            <tr><th>11</th><td>Pink</td><td>Analog Signal Output</td><th>N/A</th></tr>
            <tr><th>12</th><td>Tan</td><td>Analog Signal/Board Ground</td><th>N/A</th></tr>
          </table>
        Connectors:<br />
        <hr />
      <h3>Instrument Setup</h3>
        Programming cable: USB-A to USB Mini-B.  Plugs into mini B port on Board P.71<br />
        Software: ER Tune P.72, 114-186<br />
        Needed information:<br />
        <ol>
          <li>ER5K:</li>
          Model Number
          <li>Regulator(Pancake):</li>
          Series Number, Part Number, Serial Number
          <li>External feedback Transducer:</li>
          Range<br />
          <li>Paramaters:</li>
          Feedback internal/external, Diaphram protection
           and limits disabled<br />
           </ol>
           <hr />
      <h3>Calibration</h3>
      <hr />
      <h3>Troubleshooting</h3>
      p.202-220
        <table>
          <tr><th>Parameter</th><th>Expected</th><th>Measurment</th><th>Page Found</th></tr>
          <tr><td>LED 1</td><td>On, 24-28V supply</td><td>Power supply on</td><td>67,81</td></tr>
          <tr><td>LED 2(grn) and 3(red)</td><td>On when RS485 communicates(not USB)</td><td>RS485 active</td><td>67,81</td></tr>
          <tr><td>LED 4</td><td>On</td><td>program active</td><td>67,81</td></tr>
          <tr><td>Setpoint Current</td><td>Jumper 5 in, 4-20ma output from Daq</td><td>Setpoint working and matching jumper</td><td>80</td></tr>
          <tr><td>Setpoint Voltage</td><td>Jumper 5 out, 1-5V from DAQ</td><td>Setpoint working and matching jumper</td><td>80</td></tr>
          <tr><td>External FB Current</td><td>Jumper 6 In,4-20mA from ducer</td><td>FB working and matching jumper</td><td>68,80</td></tr>
          <tr><td>External FB Voltage</td><td>Jumper 6 out,1-5V from ducer</td><td>FB working and matching jumper</td><td>68,80</td></tr>
          <tr><td>Jumper 1</td><td>Not in unless very High noise</td><td>Check if we want this</td><td>80</td></tr>
          <tr><td>ER Tune Pramameters</td><td>ER5K model, pancake series part and serial, external FB range match</td><td>if parameters match reality</td><td></td></tr>
          <tr><td>Wiring</td><td>matches setup according to wire charts above</td><td>if wired correctly</td><td>95-102</td></tr>
        </table>
        <hr />
      <h3>Adding to software</h3>
      <hr />
      </div>
    );
  }
}

export default Er5k;
