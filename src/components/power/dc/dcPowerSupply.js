import React from "react";

const DcPowerSupply = () => {
  return (
    <div>
      <h1>DC Power Supply</h1>
      <h2>Ratings</h2>
      <table>
        <tr>
          <th>Rating</th>
          <th>Purpose</th>
          <th>Notes</th>
        </tr>
        <tr>
          <td>Current</td>
          <td>
            The max curreent that the power supply can deliver on the output
          </td>
          <td>
            Add all the DC device currents and multiply by 1.25 to give margin.
            It is okay to get one that does more than required current
          </td>
        </tr>
        <tr>
          <td>Voltage</td>
          <td>
            The voltage rating is the voltage the Power Supply will deliver
          </td>
          <td>
            The voltage must be within the operating voltage of all the devices
            being powered
          </td>
        </tr>
      </table>
    </div>
  );
};

export default DcPowerSupply;
