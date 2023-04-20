import React from 'react';

class Text extends React.Component {
  render () {
    return (
      <div>
        <h2>Text properties</h2>
          <table>
            <tr><th>Text property</th><th>Example</th><th>Effect</th></tr>
            <tr><td>font-family</td><td>font-family: "Helvetica", sans-serif</td><td>Chooses font</td></tr>
            <tr><td>font-size</td><td></td><td></td></tr>
            <tr><td>font-weight</td><td></td><td></td></tr>
            <tr><td>font-style</td><td></td><td></td></tr>
            <tr><td>text-decoration</td><td></td><td></td></tr>
            <tr><td>line-height</td><td></td><td></td></tr>
            <tr><td>text-align</td><td></td><td></td></tr>
            <tr><td>color</td><td>color: black,</td><td>Choose color of font</td></tr>
            <tr><td>letter spacing</td><td></td><td></td></tr>
            <tr><td>text-align</td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
          </table>
      </div>
    );
  }
}

export default Text;
