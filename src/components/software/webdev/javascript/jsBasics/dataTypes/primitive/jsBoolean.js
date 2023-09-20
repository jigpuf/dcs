import React from "react";

const JSBoolean = () => {
  return (
    <div>
      <h2>Boolean</h2>
      <table>
        <tr>
          <th>Operation</th>
          <th>Operator</th>
        </tr>
        <tr>
          <td>equal to</td>
          <td>==</td>
        </tr>
        <tr>
          <td>Strict Equal to</td>
          <td>===</td>
        </tr>
        <tr>
          <td>Not Equal to</td>
          <td>!=</td>
        </tr>
        <tr>
          <td>Greater Than</td>
          <td>&gt;</td>
        </tr>
        <tr>
          <td>Greater than or equal to</td>
          <td>&gt;=</td>
        </tr>
        <tr>
          <td>Less than</td>
          <td>&lt;</td>
        </tr>
        <tr>
          <td>Less than or equal to</td>
          <td>&lt;=</td>
        </tr>
        <tr>
          <td>And</td>
          <td>&&</td>
        </tr>
        <tr>
          <td>Or</td>
          <td>||</td>
        </tr>
      </table>
      Later Letters in alphebet are greater
      <br />
      Lower Case is greater than Upper Case
      <br />
      <h3>Loose Verses Strict</h3>
      let age = 25;
      <br />
      (age == 25) //true
      <br />
      (age == '25') //true
      <br />
      (age === '25') //false
      <br />
      (age === 25) //true
      <br />
      <h3>Truthy Falsy</h3>
      <table>
        <tr>
          <th>Truthy Values</th>
          <th>Falsy Values</th>
        </tr>
        <tr>
          <td>true</td>
          <td>false</td>
        </tr>
        <tr>
          <td>Non-zero numbers (e.g., 1, -1)</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Non-empty strings (e.g., 'hello')</td>
          <td>Empty string ('')</td>
        </tr>
        <tr>
          <td>Arrays with at least one element</td>
          <td>Empty array ([])</td>
        </tr>
        <tr>
          <td>Objects</td>
          <td>null</td>
        </tr>
        <tr>
          <td>Functions</td>
          <td>undefined</td>
        </tr>
      </table>
    </div>
  );
};

export default JSBoolean;
