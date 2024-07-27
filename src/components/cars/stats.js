import React from "react";
const cars = [
  {
    make: "Toyota",
    model: "Tacoma Pre-runner",
    year: "2004",
    engine: "3.4L V6 DOHC EFI 24 Valve V6",
    drivetrain: "Rear Wheel Drive",
    horsepower: "190",
  },
  {
    make: "Toyota",
    model: "Tundra",
    year: "",
    engine: "",
    drivetrain: "Four WHeel Drive",
    horsepower: "",
  },
  {
    make: "Nisan",
    model: "Titan",
    year: "",
    engine: "",
    drivetrain: "Four Wheel Drive",
    horsepower: "",
  },
  {
    make: "Tesla",
    model: "Cybertruck",
    year: "2024",
    engine: "",
    drivetrain: "",
    horsepower: "",
  },
];
const size = [
  {
    model: "Tacoma",
    rims: "",
    wheelBase: "121.9 in.",
    fuelTank: "18.5 Gal",
    axleRatio: "3.91",
    gvwr: "5100 lb.",
  },
  {
    model: "Tundra",
    rims: "",
    wheelBase: "",
    fuelTank: "",
    axleRatio: "",
    gvwr: "",
  },
  {
    model: "Titan",
    rims: "",
    wheelBase: "",
    fuelTank: "",
    axleRatio: "",
    gvwr: "",
  },
  {
    model: "Tesla",
    rims: "",
    wheelBase: "",
    fuelTank: "",
    axleRatio: "",
    gvwr: "",
  },
];
const renderCars = cars.map((item) => {
  return (
    <tr>
      <td>{item.make}</td>
      <td>{item.model}</td>
      <td>{item.year}</td>
      <td>{item.engine}</td>
      <td>{item.drivetrain}</td>
      <td>{item.horsepower}</td>
    </tr>
  );
});
const renderSize = size.map((item) => {
  return (
    <tr>
      <td>{item.model}</td>
      <td>{item.rims}</td>
      <td>{item.wheelBase}</td>
      <td>{item.fuelTank}</td>
      <td>{item.axleRatio}</td>
      <td>{item.gvwr}</td>
    </tr>
  );
});
const Stats = () => {
  return (
    <div>
      <h2>Stats</h2>
      <h3>Mechanical</h3>
      <table>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Engine</th>
          <th>Transmision</th>
          <th>Horsepower</th>
        </tr>
        {renderCars}
      </table>
      <h3>Sizes</h3>
      <table>
        <tr>
          <th>Model</th>
          <th>Rims</th>
          <th>Wheel Base</th>
          <th>Fuel Tank</th>
          <th>Axle Ratio</th>
          <th>GVRW</th>
        </tr>
        {renderSize}
      </table>
      Toyota
      <li>Gas Milage</li>
      17 City/20 Hwy
      <li>Brakes</li>a wheel ABS Independent coil spring, Double wishbone w/ gas
      filled shock absorbers
      <li>Steering</li>
      Power rack and pinion
      <li>Rear Suspension</li>
      Leaf Spring w/ staggered gas filled shock absorbers
    </div>
  );
};

export default Stats;
