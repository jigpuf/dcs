import React from 'react';
const cars=[
  {make:'Toyota', model:'Tacoma Pre-runner', year:'2004', engine:'3.4L V6 DOHC EFI 24 Valve V6', drivetrain:'Rear Wheel Drive', horsepower:'190',},
  {make:'Toyota', model:'Tundra', year:'', engine:'', drivetrain:'Four WHeel Drive', horsepower:'',},
  {make:'Nisan', model:'Titan', year:'', engine:'', drivetrain:'Four Wheel Drive', horsepower:'',},
  {make:'Tesla', model:'Cybertruck', year:'2024', engine:'', drivetrain:'', horsepower:'',},

]
const fluids=[
  {model:'Tacoma', oil:'5-W30', steering:'Dexron II or III automatic transmission fluid', transmision:'', wiper:'', coolent:'Pink', differential:'', brake:'', ac:'' },
  {model:'Tundra', oil:'', steering:'', transmision:'', wiper:'', coolent:'', differential:'', brake:'', ac:'' },
  {model:'Titan', oil:'', steering:'', transmision:'', wiper:'', coolent:'', differential:'', brake:'', ac:'' },
  {model:'Tesla', oil:'None', steering:'', transmision:'none', wiper:'', coolent:'', differential:'', brake:'', ac:'' },

]
const size=[
  {model:'Tacoma', rims:'', wheelBase:'121.9 in.', fuelTank:'18.5 Gal', axleRatio:'3.91', gvwr:'5100 lb.' },
  {model:'Tundra', rims:'', wheelBase:'', fuelTank:'', axleRatio:'', gvwr:'' },
  {model:'Titan', rims:'', wheelBase:'', fuelTank:'', axleRatio:'', gvwr:'' },
  {model:'Tesla', rims:'', wheelBase:'', fuelTank:'', axleRatio:'', gvwr:'' },

]
const renderCars = cars.map(item => {
  return (
    <tr>
      <td >{item.make}</td>
      <td>{item.model}</td>
      <td>{item.year}</td>
      <td>{item.engine}</td>
      <td>{item.drivetrain}</td>
      <td>{item.horsepower}</td>
    </tr>
  )
})
const renderFluids = fluids.map(item => {
  return (
    <tr>
      <td >{item.model}</td>
      <td >{item.oil}</td>
      <td >{item.steering}</td>
      <td >{item.transmission}</td>
      <td >{item.wiper}</td>
      <td >{item.coolent}</td>
      <td >{item.differential}</td>
      <td >{item.brake}</td>
      <td >{item.ac}</td>

    </tr>
  )
})
const renderSize = size.map(item => {
  return(
    <tr>
      <td>{item.model}</td>
      <td>{item.rims}</td>
      <td>{item.wheelBase}</td>
      <td>{item.fuelTank}</td>
      <td>{item.axleRatio}</td>
      <td>{item.gvwr}</td>

    </tr>
)
})
const Stats = () =>{
    return (
      <div>
      <h2>Stats</h2>
        <h3>Mechanical</h3>
          <table>
            <tr><th>Make</th><th>Model</th><th>Year</th><th>Engine</th><th>Transmision</th><th>Horsepower</th></tr>
            {renderCars}
          </table>
      <h3>Fluids</h3>
        <table>
          <tr><th>Model</th><th>Oil</th><th>Steering</th><th>Transmission</th><th>Wiper</th><th>Coolent</th><th>Differential</th><th>Brake</th><th>A/C</th></tr>
          {renderFluids}
        </table>
      <h3>Sizes</h3>
        <table>
          <tr><th>Model</th><th>Rims</th><th>Wheel Base</th><th>Fuel Tank</th><th>Axle Ratio</th><th>GVRW</th></tr>
          {renderSize}
        </table>
        Toyota
            <li>Gas Milage</li>
            17 City/20 Hwy
            <li>Brakes</li>
            a wheel ABS

            Independent coil spring, Double wishbone w/ gas filled shock absorbers
            <li>Steering</li>
            Power rack and pinion
            <li>Rear Suspension</li>
            Leaf Spring w/ staggered gas filled shock absorbers

      </div>
    );
  }


export default Stats;
