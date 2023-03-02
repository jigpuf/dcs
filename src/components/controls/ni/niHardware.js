import React from 'react';

class NiHardware extends React.Component {
  render () {
    return (
      <div>
        <h2>NI Hardware</h2>
          <h3>PXI/SCXI</h3>
            <table>
              <tr><th>Low Speed Channel Type</th><th>Module</th><th>Header</th><th>Instrument Types</th></tr>
              <tr><td>Valve Digital Out (K)</td><td>PXI-6512</td><td>SCB-100</td><td>Solenoids, Enables</td></tr>
              <tr><td>Valve Feedback (E)</td><td></td><td></td><td>Valve Feedback</td></tr>
              <tr><td>Limit (L)</td><td></td><td></td><td>Limit Heads</td></tr>
              <tr><td>Current Analog In (I)</td><td>PXIe-4302</td><td>TB-4302</td><td>V200 Position, Pressure Ducers, Dynamic Pressure</td></tr>
              <tr><td>Voltage Analog In (V)</td><td>PXIe-4302</td><td>TB-4302</td><td>LVDT, PSU Voltage Feedback, Pressure Ducers, Gas Sensors, Flow Meters</td></tr>
              <tr><td>Analog Out Voltage/Current (AO)</td><td>PXIe-4322</td><td>TB-4322</td><td>V200 Command, VFD Speed control</td></tr>
              <tr><td>Analog Out Feedback Voltage(AOFB)</td><td>PXIe-4302</td><td>TB-4302</td><td>Measures Analog out Channels</td></tr>
              <tr><td>Thermocouple (T)</td><td>PXIe-4353</td><td>TB-4353</td><td>K-type, E-type</td></tr>
              <tr><td>RTD (R)</td><td>PXIe-4357</td><td>TB-4357</td><td>RTDs</td></tr>
              <tr><td>Counter (C)</td><td>PXI-6624</td><td>SCB-100</td><td>Flow Meters, ZTS</td></tr>
              <tr><th>High Speed Channel Type</th><th>Module</th><th>Header</th><th>Instrument Types</th></tr>
              <tr><td>High Speed Dynamic Voltage (HS/D)</td><td>PXIe-4497</td><td>None</td><td>Dynamic Pressure Ducers, Accelerometers, Microphone</td></tr>
              <tr><td>High Speed Voltage (HSV)</td><td>PXIe-4300</td><td>TB-4300</td><td>Spark feedback, LVDT, ZTS</td></tr>
              <tr><td>High Speed Y Voltage (HSY)</td><td>PXIe-4303</td><td>TB-4302</td><td>Low Speed Current Channels</td></tr>
              <tr><td>High Speed Strain (HSS/S)</td><td>PXIe-4330</td><td>TB=4330</td><td>Strain Gauges, Load Cells</td></tr>
            </table>
            <h3>cDaq/cRio</h3>
            <table>
              <tr><th>Number</th><th>Name</th></tr>
              <tr><td>1</td><td>Porpois Orifice</td></tr>
            </table>
            <br /><br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}

export default NiHardware;
