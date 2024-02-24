import React, { useState } from "react";

const Motors = () => {
  const [motorCurrent, setMotorCurrent] = useState(0);
  const [motorVoltage, setMotorVoltage] = useState(480);
  const [motorPower, setMotorPower] = useState(1500);

  return (
    <div>
      <h1>Motors</h1>
      <ol>
        <li>
          Motors are chosen based on torque primarily, but electrically we are
          concerned with consumption rates
        </li>
        <li>
          Motors sizes will vary from a few hundred watts to several hundred
          thousand watts
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
      <h2>Motor types</h2>
      <li>
        3 phase is used for industrial opperations. It is more eficient on power
        usage and runs smoother. Easy rotation direction change
      </li>
      <li>
        Single Phase- Usually in homes, less efficient, cheaper, doesn't require
        industrial power
      </li>
      <li>DC</li>
      <li>
        Servo- these are used to push something to a specific place rather than
        using constant motion. Can know number of rotations
      </li>
      <h2>Inrush Current</h2>
      <li>
        When power is first applied to a motor, you will get inrush current that
        can be 6X operating current. This is information needed for choosing
        circuit protection
      </li>
      <h2>Current consumption calculation of a 3 Phase motor</h2>
      (Power of Motor in Watts) * Operating Voltage for 3 phase * Current *
      Cos(Q) * 1.73
      <br />
      cos(Q) will be .2-.4 on an unloaded motor, but .7-.9 on a loaded motor. It
      is also refered to as the power factor
      <h2>3 Phase Power Consumption Tool</h2>
      <h3>Motor Voltage</h3>
      <input
        type="number"
        value={motorVoltage}
        onChange={(e) => setMotorVoltage(e.target.value)}
      />
      <h3>Motor Power</h3>
      HorsePower to Watts = HP*745.7
      <br />
      <input
        type="number"
        value={motorPower}
        onChange={(e) => setMotorPower(e.target.value)}
      />
      <h3>Unloaded Current</h3>
      {(motorPower / (motorVoltage * 1.73 * 0.4)).toFixed(2)}-
      {(motorPower / (motorVoltage * 1.73 * 0.2)).toFixed(2)} Amps
      <h3>Loaded current</h3>
      {(motorPower / (motorVoltage * 1.73 * 0.9)).toFixed(2)}-
      {(motorPower / (motorVoltage * 1.73 * 0.6)).toFixed(2)} Amps
      <h3>Aproximate inrush current</h3>
      {((motorPower / (motorVoltage * 1.73 * 0.6)) * 6).toFixed(2)} Amps
    </div>
  );
};

export default Motors;
