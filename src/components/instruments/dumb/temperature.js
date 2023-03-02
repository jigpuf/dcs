import React from 'react';

class Temperature extends React.Component {
  render () {
    return (
      <div>
      <h2>Temperature</h2>
        <h3>TC Pinout</h3>
          <table>
          <tr><th>TC Type</th><th>+ Color</th><th>- Color</th><th>Material</th></tr>
          <tr><td>K</td><td>Yellow</td><td>Red</td><td>Nickel-Chromium/Nickel-Alumel</td></tr>
          <tr><td>E</td><td>Purple</td><td>Red</td><td>Nickel-Chromium/Constantan</td></tr>
          </table>
          <br /><br />

          TC Temp Tables:
          <a href='https://www.thermocoupleinfo.com/type-e-thermocouple.htm' target='_blank'
          >(E-Type)</a>
          <a href='https://www.thermocoupleinfo.com/type-k-thermocouple.htm' target='_blank'
          >(K-Type)</a>
        <h3>TC  Channel Checkout</h3>
          <img src='/instrumentation/tcInstrument.svg' />
        <h3>TC Instrument Checkout</h3>
          <img src='/instrumentation/tcChannel.svg'/>
          <hr />
        <h2>RTD</h2>
          <h3>RTD Pinout</h3>
          <tr><th>Pin</th><th>Signal</th></tr>
          <tr><td>1</td><td>Red/Excite +</td></tr>
          <tr><td>2</td><td>White/Feedback +</td></tr>
          <tr><td>3</td><td>Green/Feedback -</td></tr>
          <tr><td>4</td><td>Black/Excite -</td></tr>
          <h4>Connectors:</h4>
            <tr><th>Side</th><th>Connector Type</th><th>Connector Part#</th></tr>
            <tr><td>Instrument</td><td>MS Pin</td><td>?</td></tr>
            <tr><td>Channel</td><td>MS Socket</td><td>?</td></tr>
            <tr><td>Instrument</td><td>M8 Pin</td><td>?</td></tr>
            <tr><td>Channel</td><td>M8 Socket</td><td>?</td></tr>
          <h3>RTD Checkout</h3>
          Meter Setting: measure RTD PT100 4 Wire<br />
          <table>
            <tr><th>Meter Setting</th><th>Button</th></tr>
            <tr><td>Measure</td><td>Measure/Source</td></tr>
            <tr><td>RTD PT100</td><td>RTD</td></tr>
            <tr><td>4 Wire</td><td>Up</td></tr>
          </table>
          Cable connections<br />
          <table>
            <tr><th>Meter Spot</th><th>Signal</th></tr>
            <tr><td>V on source side</td><td>Feedback +</td></tr>
            <tr><td>3 Wire on Source Side</td><td>Excite -</td></tr>
            <tr><td>Com on Source side</td><td>Feedback -</td></tr>
            <tr><td>4 Wire on source side</td><td>Excite +</td></tr>
          </table>
          <h3>Checkout RTD</h3>
          <img src='/instrumentation/fluke725RTD.svg' /><br />
          <h3>Checkout RTD Channel</h3>
          <img src='/instrumentation/rtdChannel.svg'/><br />


          <h3>Information</h3>
            Model:<br />
            Part Number:<br />
            Manufacturer website<br />
            Videos:<br />
            Manual:<br />
          <h3>Physical Setup</h3>
            Circuit Diagram:<br />
            Mounting:<br />
            Pinouts:<br />
            Connectors<br />
          <h3>Setup</h3>
            Software<br />
            Paramaters<br />
          <h3>Calibration</h3>
          <h3>Troubleshooting</h3>
            Simulate Instrument:<br />
            Instrument Checkout:<br />
          <h3>Adding to software</h3>
      </div>
    );
  }
}

export default Temperature;
