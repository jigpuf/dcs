import React from 'react';

class Taps extends React.Component {
  render () {
    return (
      <div>
        <h2>Taps</h2>
          <table>
            <tr><th>Tap</th><th>Pilot #</th><th>Pilot Size frac</th><th>Pilot Size dec</th></tr>
            <tr><td>6-32</td><td>35</td><td>7/64</td><td>.1094</td></tr>
            <tr><td>8-32</td><td>29</td><td></td><td>.1360</td></tr>
            <tr><td>10-32</td><td>21</td><td>5/32</td><td>.1590</td></tr>
            <tr><td>1/4-20</td><td>7</td><td>13/64</td><td>.2031</td></tr>
          </table>
          <a src='https://www.boltdepot.com/fastener-information/us-tap-drill-size.aspx' target='_blank'
          >Bolt Depot Chart</a><br />

      </div>
    );
  }
}

export default Taps;
