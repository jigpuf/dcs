import React from 'react';

const Color = () => {
  return (
    <div>
      <h2>Color</h2>
        <h3>Color syntax</h3>
          <table>
            <tr><th>Type</th><th>Syntax</th><th>Example</th></tr>
            <tr><td>RGB</td><td>rgb(red 0-255,Green 0-255,Blue 0-255)</td><td>color:rgb(255,99,71);</td></tr>
            <tr><td>Hex</td><td>#rrggbb</td><td>color:#ff6347;</td></tr>
            <tr><td>HSL</td><td>hsl(hue 0-360, Saturation%, Lightness%)</td><td>color:hsl(240,20%,30%);</td></tr>
            <tr><td>RGBA</td><td>rgb(red 0-255,Green 0-255,Blue 0-255, alpha 0-1)</td><td>color:rgb(255,99,71,.8);</td></tr>
            <tr><td>HSLA</td><td>hsl(hue 0-360, Saturation%, Lightness%, alpha 0-1)</td><td>color:hsl(240,20%,30%,.8);</td></tr>
            <tr><td>Name</td><td>colorName</td><td>color: tomato;</td></tr>
          </table>
        <h3>Sources</h3>
        <a href='https://coolors.co/generate' target='_blank'>Coolors</a>
    </div>
  )
}

export default Color;
