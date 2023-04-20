import React from 'react';

class DigitalIO extends React.Component {
  render () {
    return (
      <div>Digital IO
        <table>
          <tr><th>Rung</th><th>Condition</th><th>action</th></tr>
          <tr><td>1</td><td>XIC:Digital input</td><td>OTE:Bit 1</td></tr>
          <tr><td>2</td><td>XIC:Bit 2</td><td>OTE:Digital output</td></tr>
        </table>
        <p>Bit and Input/output shoulr be named the same.  This segregation causes
        to use bits to drive the program.  This way, if the channels ever have to
        change, we only have to change the instrument in 1 location. IO should not
        be in the logic</p>
      </div>
    );
  }
}

export default DigitalIO;
