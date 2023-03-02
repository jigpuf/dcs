import React from 'react';

class Pressure extends React.Component {
  render () {
    return (
      <div>
        <h3>Part selection</h3>
          <h4>Description</h4>
            <li>Standard</li>
            Measures pressure at a single point
            <li>Dynamic</li>
            Measures the change in pressure from one point to the next
            <li>Differential(DP)</li>
            Measures pressure at 2 points and gives the difference
          <h4>Part Numbers</h4>
            <table>
              <tr><th>Model#</th><th>Description</th><th>Model#</th></tr>
              <tr><td></td><td></td><td></td></tr>
            </table>
          <h4>Resources</h4>
            Website:<br />
            Videos:<br />
            Manual:<br />
        <h3>Physical Setup</h3>
          <h4>Instrument</h4>
            <table>
              <tr><th>Brand</th><th>model</th><th>Type</th><th>Pin 1</th><th>Pin 2</th><th>Pin 3</th><th>Pin 4</th><th>Pin 5</th><th>Pin 6</th><th>Connector</th></tr>
              <tr><td>GP-50</td><td></td><td>Standard</td><td>4 to 20mA(+)</td><td></td><td></td><td>4 to 20mA(-)</td><td></td><td></td><td></td></tr>
              <tr><td>GP-50</td><td></td><td>Dynamic</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td>GP-50</td><td></td><td>Differential</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            </table>
          <h4>DAQ Setup</h4>
            <table>
              <tr><th>Type</th><th>System</th><th>Module</th><th>Header</th><th>Channel Type</th><th>Conditioner</th></tr>
              <tr><td>Standard</td><td>NI LS</td><td>PXIe-4302</td><td>TB-4302</td><td>Current Analog In(I)</td><td>None</td></tr>
              <tr><td>Standard</td><td>NI HS</td><td>PXIe-4303</td><td>TB-4302</td><td>High Speed Y Voltage(HSY)</td><td>None</td></tr>
              <tr><td>Dynamic</td><td>NI LS</td><td>PXIe-4302</td><td>TB-4302</td><td>Current Analog In(I)</td><td>None</td></tr>
              <tr><td>Dynamic</td><td>NI HS</td><td>PXIe-4497</td><td>Patch Panel</td><td>High Speed Dynamic Voltage(HS/D)</td><td>None</td></tr>
              <tr><td>Differential</td><td></td><td></td><td></td><td></td><td>None</td></tr>
              <tr><td></td><td>NI RTX</td><td></td><td></td><td></td><td>None</td></tr>
              <tr><td></td><td>PLC</td><td></td><td></td><td></td><td>None</td></tr>
            </table>
          <h4>Circuit Diagram</h4>
          <h4>Mounting</h4>
        <h3>Configuration</h3>
          None
        <h3>Calibration</h3>
          Ambiatization Process:
        <h3>Activation</h3>
          <li>MWL</li>
          <li>Scaling Config</li>
            Gives an equation<br />
            Instrument Name | Calculation | Offset(ambietize) | Serial # | Max<br />
            Instrument Name: Is recieved from the MWL<br />
            Calculatio: (((Raw * Slope) + Offset) * Conversion)+Ambiatize<br />
            Raw: From Card Edge<br />
            Slope: Either from spec sheet or Generic PSI/Amp<br />
            PSI/Amp = Max PSI/.016A<br />
            Offset: Comes from spec Sheet<br />
            Conversion: This changes calc from PSI to Bar, PSI/Bar or .068947<br />
            Ambiatize: this is what is required to get output of ((Raw * Slope) +
            Offset) * Conversion, to equal 1 bar<br />
            Serial Number and Max: These are just reference<br />
            <h3>Example:</h3>
            Instrument; [raw],slope, offset, conversion, 0; ambietiaze, serial, max<br />
            NPD-5604; [NPD-5604],937500,-3400,.068947,0 ; -.4 ; #23453; 1033<br />
            For 10mA: (((.01 A*(937500 PSI/AMP))-3400 PSI)*(.068947 Bar/PSI)-.4 Bar<br />
            Answer = 411 bar<br />
          <li>RTX</li>
          <li>PLC</li>
        <h3>Troubleshooting</h3>
          Channel Checkout:<br />
          Instrument Checkout:<br />
          Software Checkouts:<br />
      </div>
    );
  }
}

export default Pressure;
