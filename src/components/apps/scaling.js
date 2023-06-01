import React, {useState} from 'react';

const Scaling = () =>{
  const [zero, setZero] = useState(0)
  const [span, setSpan] = useState(100)
  const [input, setInput] = useState(4)
  const [unit, setUnit] = useState('PSI')


  return(
    <div>
     <h1>Scaling</h1>
     <table>
      <tr>
        <th>Unit</th>
        <td><input type="text" value={unit} onChange={(e) =>setUnit(e.target.value)}/></td>
      </tr>
      <tr>
        <th>Min scale</th>
        <td><input type="number" value={zero} onChange={(e) =>setZero(e.target.value)}/></td>
      </tr>
      <tr>
        <th>Max scale</th>
        <td><input type="number" value={span} onChange={(e) =>setSpan(e.target.value)}/></td>
      </tr>
      <tr>
        <th>Input mA</th>
        <td><input type="number" value={input} onChange = {(e) =>setInput(e.target.value)}/></td>
      </tr>
     </table>
<hr/>
        <table>
        <tr>
            <th>Level</th>
            <th>Value</th>
            <th>Current</th>
            <th>Voltage</th>
          </tr>
          <tr>
            <th>Input</th>
            <td>{(span-zero)*((input-4)/16)+(zero*1)} {unit}</td>
            <td>{input}mA</td>
            <td>{input*.001*250}v</td>
          </tr>
        </table>
        <hr></hr>
        <table>
          <tr>
            <th>Level</th>
            <th>Value</th>
            <th>Current</th>
            <th>Voltage</th>
          </tr>
  
          <tr>
            <th>Dead</th>
            <td>0 {unit}</td>
            <td>0mA</td>
            <td>0v</td>
          </tr>
          <tr>
            <th>Zero</th>
            <td>{zero} {unit}</td>
            <td>4mA</td>
            <td>1v</td>
          </tr>
          <tr>
            <th>25%</th>
            <td>{((span-zero)*(.25)+(zero*1))} {unit}</td>
            <td>8mA</td>
            <td>2v</td>
          </tr>
          <tr>
            <th>50%</th>
            <td>{((span-zero)*(.5)+(zero*1))} {unit}</td>
            <td>12mA</td>
            <td>3v</td>
          </tr>
          <tr>
            <th>75%</th>
            <td>{((span-zero)*(.75)+(zero*1))} {unit}</td>
            <td>16mA</td>
            <td>4v</td>
          </tr>
          <tr>
            <th>Span</th>
            <td>{span} {unit}</td>
            <td>20mA</td>
            <td>5v</td>
          </tr>
        </table>
    </div>
  )
}

export default Scaling;
