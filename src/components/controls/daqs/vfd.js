import React from "react";

const Vfd = () => {
  return (
    <div>
      <h1>VFD</h1>
      <h2>VFD Setup</h2>
      <h3>Motor plate info: Current Limit~150% of motor rating - 200%</h3>
      <h3>Terminals</h3>
      <ol>
        <li>Fault Reset</li>
        <li>Run</li>
        <li>Enable</li>
        <li>Speed</li>
        <li>Torque limits</li>
        <li>Direction</li>
        <li>Current Feedback</li>
      </ol>
      <h2>Testing for IGBT Short</h2>
      <h3>Symptom: Trips Breaker</h3>
      <h3>Parts</h3>
      <h4>DC Bus</h4>
      <ul>
        <li>B1,B2</li>
        <li>+/-</li>
      </ul>
      <h4>AC Bus</h4>
      <ul>
        <li>L1,L2,L3</li>
        <li>T1,T2,T3</li>
      </ul>
      <h3>Steps</h3>
      <ol>
        <li>Put meter in diode mode</li>
        <li>Measure forward and reverse bias from each a/c bus</li>
      </ol>
      <h3>Reading results</h3>
      <table>
        <tr>
          <th>Terminal</th>
          <th>Forward</th>
          <th>Reverse</th>
          <th>Diagnosis</th>
        </tr>
        <tr>
          <td>L1-</td>
          <td>.45</td>
          <td>OL</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>L2-</td>
          <td>.45</td>
          <td>OL</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>L3-</td>
          <td>.45</td>
          <td>OL</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>L1+</td>
          <td>.45</td>
          <td>OL</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>L2+</td>
          <td>.45</td>
          <td>OL</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>L3+</td>
          <td>.45</td>
          <td>OL</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>T1-</td>
          <td>0</td>
          <td>0</td>
          <td>Short both directions</td>
        </tr>
        <tr>
          <td>T2-</td>
          <td>0</td>
          <td>0</td>
          <td>Short Both Directions</td>
        </tr>
        <tr>
          <td>T3-</td>
          <td>OL</td>
          <td>OL</td>
          <td>Open Both Directions</td>
        </tr>
        <tr>
          <td>T1+</td>
          <td>.8</td>
          <td>OL</td>
          <td>.8 Too High</td>
        </tr>
        <tr>
          <td>T2+</td>
          <td>.8</td>
          <td>OL</td>
          <td>.8 Too High</td>
        </tr>
        <tr>
          <td>T3+</td>
          <td>OL</td>
          <td>OL</td>
          <td>Open Both Sides</td>
        </tr>
      </table>
      <h3>Diagnosis</h3>
      Bad IGBT out T1,T2,T3
    </div>
  );
};

export default Vfd;
