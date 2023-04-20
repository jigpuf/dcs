import React from 'react';

const Size = () => {
    return (
      <div>
        <h2>Size</h2>
        <table>
          <tr><th>Unit</th><th>Syntax</th><th>Type</th><th>Used In</th></tr>
          <tr><td>Pixels</td><td>width:75px;</td><td>Absolute</td><td>font-size, width, height</td></tr>
          <tr><td>Percent</td><td>width:50%;</td><td>Relative to parent</td><td></td></tr>
          <tr><td>EM</td><td>width:2em;</td><td>Relative to parent(multiplier)</td><td></td></tr>
          <tr><td>REM</td><td>width:2rem;</td><td>Relative based on root</td><td></td></tr>
          <tr><td>vh, vw</td><td>width:</td><td>Relative to window</td><td></td></tr>

        </table>
      </div>
    )
  }

export default Size;
