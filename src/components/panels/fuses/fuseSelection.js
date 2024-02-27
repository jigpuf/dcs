import React, { useState } from "react";

const FuseSelection = () => {
  const [amps, setAmps] = useState(0);

  return (
    <div>
      <p>
        All circuits should be protected with fuses with the exception of TC
        circuits and RTD circuits since they have very low voltage in the case
        of TC's and a controlled current in the case of RTD's
      </p>
      Video Sources:
      <br />
      <a href="https://www.youtube.com/watch?v=X19wMRJ3MoQ">
        Understanding Fuse Ratings
      </a>
      <br />
      <a href="https://www.youtube.com/watch?v=3HQG3W6PolU">Type of Fuse </a>
      <br />
      <a href="https://www.youtube.com/watch?v=4BoR80Aw_sc">
        BASIC ELECTRICAL 101 #04 ~ Fuses and Breaker Panels
      </a>
      <br />
      <a href=""></a>
      <br />
      <table>
        <tr>
          <th>Rating</th>
          <th>About</th>
          <th>Notes</th>
        </tr>
        <tr>
          <td>Current</td>
          <td>The amount of current that will blow the fuse</td>
          <td>
            Take the current rating of a device*1.33 to get fuse rating, round
            down to the nearest amp that is available
          </td>
        </tr>
        <tr>
          <td>Blow Speed</td>
          <td></td>
          <td>Fast, Very Fast, Slow, Medium, Transient Tolerant</td>
        </tr>
        <tr>
          <td>Size/Shape</td>
          <td></td>
          <td>Automotive, PTC, Micro Fuses(1/16A), Cartridge</td>
        </tr>
        <tr>
          <td>Voltage</td>
          <td>
            Voltage should match the voltage of the device it is protecting
          </td>
          <td>DC, AC, Voltage level</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <h2>Amp finder</h2>
      Power Requirement
      <input
        typeof="number"
        value={amps}
        onChange={(e) => setAmps(e.target.value)}
      />
      <br />
      {amps * 1.33} Amps
    </div>
  );
};

export default FuseSelection;
