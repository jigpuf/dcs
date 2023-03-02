import React from 'react';

class Rlc extends React.Component {
  render () {
    return (
      <div>
      <h3>RLC Circuits</h3>
      <h4>Units</h4>
        <table>
          <tr><th>Concept</th><th>Unit</th></tr>
          <tr><td>Power(P)</td><td>Watts(W)</td></tr>
          <tr><td>Impedence(Z)</td><td>Ohms(Ω)</td></tr>
          <tr><td>Resitance(R)</td><td>Ohms(Ω)</td></tr>
          <tr><td>Current(I)</td><td>Amps(A)</td></tr>
          <tr><td>Voltage(E)</td><td>Volts(V)</td></tr>
          <tr><td>Capacitance(C)</td><td>Farads(F)</td></tr>
          <tr><td>Inductance(L)</td><td>Henries(H)</td></tr>
          <tr><td>Frequency(f)</td><td>Hertz(hz)</td></tr>
          <tr><td>Reactance(Xo)</td><td>Ohms(Ω)</td></tr>
          <tr><td>Capacitive Reactance(XC)</td><td>Ohms(Ω)</td></tr>
          <tr><td>Inductive Reactance(XL)</td><td>Ohms(Ω)</td></tr>
        </table>
      <h4>Math</h4>
      <table>
        <tr><th>Concept</th><th>Equals</th></tr>
        <tr><td>Consumption</td><td>P * Time</td></tr>
        <tr><td>Power(P)</td><td>I * E</td></tr>
        <tr><td>Current(I)</td><td>E / Z</td></tr>
        <tr><td>Impedence(Z)</td><td> √(R<sup>2</sup> + ((XL - XC))<sup>2</sup>)</td></tr>
        <tr><td>Capacitive Reactance(XC)</td><td>2πfC<sup>-1</sup></td></tr>
        <tr><td>Inductive Reactance(XL)</td><td>2πfL</td></tr>
        <tr><td>Parrallel Resistance R||R</td><td>(R1<sup>-1</sup> + R2<sup>-1</sup>... )<sup>-1</sup></td></tr>
        <tr><td>Parrallel Capacitance C||C</td><td>C1 + C2...</td></tr>
        <tr><td>Parrallel Inductance L||L</td><td>(L1<sup>-1</sup> + L2<sup>-1</sup>... )<sup>-1</sup></td></tr>
        <tr><td>Series Resistance R~R</td><td>R1 + R2...</td></tr>
        <tr><td>Series Capacitance C~C</td><td>(C1<sup>-1</sup> + C2<sup>-1</sup>... )<sup>-1</sup></td></tr>
        <tr><td>Series Inductance L~L</td><td>L1 + L2...</td></tr>
        <tr><td>Series Voltage</td><td>V1 + V2...</td></tr>
        <tr><td>Series Current</td><td>Same through Leg</td></tr>
        <tr><td>Series Power</td><td>P1 + P2...</td></tr>
        <tr><td>Parrallel Voltage</td><td>All legs the same</td></tr>
        <tr><td>Parrallel Current</td><td>I1 + I2...</td></tr>
        <tr><td>Parrallel Power</td><td>P1 + P2...</td></tr>
      </table>
      Super Equation:<br />
      Consumption = Time * Power<br />
      Consumption = Time * Voltage * Current <br />
      Consumption = Time * Voltage * (Voltage / Impedence)<br />
      Simplify:<br />
      Consumption = Time * Voltage<sup>2</sup> / Impedence<br />
      Consumption = Time * Voltage<sup>2</sup> / √(Resistance<sup>2</sup> + (XL - XC)<sup>2</sup>)<br />
      Consumption = (Time * Voltage<sup>2</sup>) / √(Resistance<sup>2</sup> + ((2π * Frequency * Inductance) - (2π*Frequency*Capacitance)<sup>-1</sup>)<sup>2</sup>)<br />
      With Abreviations:<br />
      Consumption = (t * E<sup>2</sup>) / √(R<sup>2</sup> + ((2πfL) - (2πfC)<sup>-1</sup>)<sup>2</sup>)<br /><br /><br /><br />

      Consumption =<br />
      t * E<sup>2</sup><br />
      -----------------------------<br />
      √(R<sup>2</sup> + ((2πfL) - (2πfC)<sup>-1</sup>)<sup>2</sup>)<br /><br /><br /><br />

      Power =<br />
      E<sup>2</sup><br />
      -----------------------------<br />
      √(R<sup>2</sup> + ((2πfL) - (2πfC)<sup>-1</sup>)<sup>2</sup>)<br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}

export default Rlc;
