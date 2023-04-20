import React from 'react';

class Loops extends React.Component {
  render () {
    return (
      <div>
        <h2>Loops</h2>
      <table>
        <tr><th>Type</th><th>code</th><th>meaning</th></tr>
        <tr><td>For</td><td>for (let i = 0; i&#60;5; i++)&#123; CodeHere;&#125;</td><td>Initial state, boolean, at end of loop</td></tr>
        <tr><td>While</td><td>while (i&#60;5)&#123; CodeHere; &#125;</td><td>Checks Boolean, does code each time</td></tr>
        <tr><td>Do While</td><td>do&#123;CodeHere;&#125; while(i&#60;5)</td><td>Does once then compares against boolean</td></tr>     
        <tr><td>For Each</td><td>--&#123;CodeHere;&#125;--</td><td>--</td></tr>     

      </table>

      </div>
    );
  }
}

export default Loops;
