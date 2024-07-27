import React from "react";
import carStats from "../../data/carStats";

const Fluids = () => {
  return (
    <div>
      <h1>Fluids</h1>
      <table>
        <tr>
          <th>Fluid</th>
          <th>{carStats[0].model}</th>
          <th>{carStats[1].model}</th>
        </tr>
        <tr>
          <td>Oil</td>
          <td>
            {carStats[0].fluids.oil.type}
            <br />
            {carStats[0].fluids.oil.capacity}
          </td>

          <td>
            {carStats[1].fluids.oil.type}
            <br />
            {carStats[1].fluids.oil.capacity}
          </td>
        </tr>
        <tr>
          <td>Transmission</td>
          <td>
            {carStats[0].fluids.transmission.type}
            <br />
            {carStats[0].fluids.transmission.capacity}
          </td>

          <td>
            {carStats[1].fluids.transmission.type}
            <br />
            {carStats[1].fluids.transmission.capacity}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Fluids;
