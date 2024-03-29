import React, {useState} from 'react';

const Scaling = () =>{
  const [zero, setZero] = useState(0)
  const [span, setSpan] = useState(100)
  const [input, setInput] = useState(4)
  const [unit, setUnit] = useState('PSI')
  const [minAmp, setMinAmp] = useState(4)
  const [maxAmp, setMaxAmp] = useState(20)
  const resistor = .25

  return(
    <div>
     <h1>Scaling</h1>
      <p>For 4-20mA device going through a 1-5v signal conditioner or 250 ohm resistor</p>
     <table>
     <hr />
      Instrument
      <hr />
      <tr>
        <th>Unit</th>
        <td><input type="text" value={unit} onChange={(e) =>setUnit(e.target.value)}/></td>
      </tr>
      <tr>
        <th>Min {unit}</th>
        <td><input type="number" value={zero} onChange={(e) =>setZero(e.target.value)}/></td>
      </tr>
      <tr>
        <th>Max {unit}</th>
        <td><input type="number" value={span} onChange={(e) =>setSpan(e.target.value)}/></td>
      </tr>
      <hr />
      Signal
      <hr />
      <tr>
        <th>Min mA</th>
        <th><input type="number" value={minAmp} onChange={(e) =>setMinAmp(e.target.value)}/></th>
      </tr>
      <tr>
        <th>Max mA</th>
        <th><input type="number" value={maxAmp} onChange={(e) =>setMaxAmp(e.target.value)}/></th>
      </tr>
      <tr>
        <th>Active mA</th>
        <td><input type="number" value={input} onChange = {(e) =>setInput(e.target.value)}/></td>
      </tr>
     </table>
      <hr />


    <h2>Slope | Offset</h2>
        <table>
        <tr>
          <th>Measurement</th>
          <th>Slope</th>
          <th>Offset</th>
          <th>Active Unscaled</th>
          <th>Active {unit}</th>
        </tr>
        <tr>
          <td>Current</td>
          <td>{(span-zero)/(maxAmp-minAmp)}</td>
          <td>{0-(((span-zero)/(maxAmp-minAmp)*4))}</td>
          <td>{input}mA</td>
          <td>{input*((span-zero)/(maxAmp-minAmp))+(0-(((span-zero)/(maxAmp-minAmp)*4)))}</td>
        </tr>
        <tr>
          <td>Voltage</td>
          <td>{(span-zero)/((maxAmp-minAmp)*.25)}</td>
          <td>{0-((span-zero)/((maxAmp-minAmp)*.25))}</td>
          <td>{input*resistor}v</td>
          <td>{(input*resistor)*((span-zero)/((maxAmp-minAmp)*.25))+(0-((span-zero)/((maxAmp-minAmp)*.25)))}</td>
        </tr>
      </table>
      For 4 to 20mA signals
       <li>CurrentSlope = MaxRange-MinRange/16, eg.  (30psi-0psi)/16</li>
       <li>CurrentOffset = 0-(CurrentSlope*4)</li>
      <li>VoltageSlope = MaxRange-MinRange/4, eg. (30psi-0psi)/4</li>
      <li>VoltageOffset = 0-(VoltageSlope*1)</li>
      On current calculations 16 equals the mA scale 20mA-4mA, 4 is the bottom of the mA scale<br/>
      On voltage calculations 4 equals 5v-1v, 1 is the bottom of the voltage scale
    <h2>Injection Meter</h2>
        <table>
          <tr>
            <th>Level</th>
            <th>Value</th>
            <th>Current</th>
            <th>Voltage across 250 ohm resistor</th>
          </tr>
  
          <tr>
            <th>Dead</th>
            <td>{0*((span-zero)/(maxAmp-minAmp))+(0-(((span-zero)/(maxAmp-minAmp)*4)))} {unit}</td>
            <td>0mA</td>
            <td>0v</td>
          </tr>
          <tr>
            <th>Zero</th>
            <td>{zero} {unit}</td>
            <td>{minAmp}mA</td>
            <td>{minAmp*.001*250}v</td>
          </tr>
          <tr>
            <th>25%</th>
            <td>{((span-zero)*(.25)+(zero*1))} {unit}</td>
            <td>{((maxAmp-minAmp)*(.25))+(minAmp*1)}mA</td>
            <td>{(((maxAmp-minAmp)*(.25))+(minAmp*1))*resistor}v</td>
          </tr>
          <tr>
            <th>50%</th>
            <td>{((span-zero)*(.5)+(zero*1))} {unit}</td>
            <td>{((maxAmp-minAmp)*(.5))+(minAmp*1)}mA</td>
            <td>{(((maxAmp-minAmp)*(.5))+(minAmp*1))*resistor}v</td>
          </tr>
          <tr>
            <th>75%</th>
            <td>{((span-zero)*(.75)+(zero*1))} {unit}</td>
            <td>{((maxAmp-minAmp)*(.75))+(minAmp*1)}mA</td>
            <td>{(((maxAmp-minAmp)*(.75))+(minAmp*1))*resistor}v</td>
          </tr>
          <tr>
            <th>Span</th>
            <td>{span} {unit}</td>
            <td>{((maxAmp-minAmp)*(1))+(minAmp*1)}mA</td>
            <td>{(((maxAmp-minAmp)*(1))+(minAmp*1))*resistor}v</td>
          </tr>
        </table>
    </div>
  )
}

export default Scaling;
