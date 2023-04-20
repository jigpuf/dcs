import React from 'react';

class Position extends React.Component {
  render () {
    return (
      <div>
        <h2>Positioning</h2>
        <table>
          <tr><th>Positioning Method</th><th>Starting Point</th></tr>
          <tr><td>Static</td><td>This is standard</td></tr>
          <tr><td>Relative</td><td>Offset from static position</td></tr>
          <tr><td>Absolute</td><td>Offset from top left corner</td></tr>
          <tr><td>Z-index</td><td>Sets order images are shown Bottom to top starting with 1</td></tr>
          <tr><td>Fixed</td><td>Sets in one place and ignores window movement</td></tr>
          <tr><td>Float</td><td>Decide what side to float something to.  Everything else will line
          up next to it.</td></tr>
        </table>
          <table>
            <tr><th>Positioning Method</th><th>Syntax</th></tr>
            <tr>
              <td>
                Relative
              </td>
              <td>
                position: relative;<br />
                top: 20px<br />
                left: 50px;<br />
              </td>
            </tr>
            <tr>
              <td>
                Absolute
              </td>
              <td>
                position: absolute;<br />
                top: 20px;<br />
                left: 60px;<br />
              </td>
            </tr>
            <tr>
              <td>
                Z-index
              </td>
              <td>
                z-index: 1;
              </td>
            </tr>
            <tr>
              <td>
                Fixed
              </td>
              <td>
                position: fixed;<br />
                top: 20px;<br />
                left: 60px;<br />
              </td>
            </tr>
            <tr>
              <td>
                Float
              </td>
              <td>
                float: left;<br />
                width: 30%;<br />
                margin-right: 30px;<br />
              </td>
            </tr>
          </table>
            
            <p>Typically if you float 1 direction, it looks better putting a
            margin to the opposite direction to keep things wrapping around it
            at a better distance.  If you have a block element wrapping around
            something, it may carry its style into the thing that is floating.
            By using the clear: both; command on the block element, it willdrop
            outside of the thing being floated</p>

      </div>
    );
  }
}

export default Position;
