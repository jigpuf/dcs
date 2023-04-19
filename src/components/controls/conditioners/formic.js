import React from 'react';

const Formic = () => {

    return (
      <div>
        <table>
        <tr>
          <th>Type</th>
          <th>Pin 1</th>
          <th>Pin 2</th>
          <th>Pin 3</th>
          <th>Pin 4</th>
          <th>Pin 5</th>
        </tr>

        <tr>
          <td>AI Control</td>
          <td>AI+</td>
          <td>AI+</td>
          <td>AI-</td>
          <td>AI-</td>
          <td>Shield</td>
        </tr>
        <tr>
          <td>AI Current field</td>
          <td>Ex+</td>
          <td></td>
          <td></td>
          <td>Ex-</td>
          <td>Shield</td>
        </tr>
        <tr>
          <td>AI Voltage field</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </table>
        <ol>
          <li>There are 3 internal switches 2X toggles for field Current/Voltage and 1X shield Din/External</li>
          <li>Control side goes to a voltage channel but field can be voltage or current</li>
          <li>Pin 1/2 on control side are common. Pin 3/4 on control side are
          common. This allows Y-cabling for the channel </li>
          <li>Individual Modules can be hot swapped</li>
          <li>Top connector is lower channel?</li>
          <li>There is an internal fuse</li>
        </ol>
        <img src='/instrumentation/formic.svg'/>
      </div>
    );
  }


export default Formic;
