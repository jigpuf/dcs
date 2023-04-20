import React from 'react';

const JSBoolean = () => {

    return (
      <div>
        <h2>Boolean</h2>
          <table>
            <tr><th>Operation</th><th>Operator</th></tr>
            <tr><td>equal to</td><td>==</td></tr>
            <tr><td>Strict Equal to</td><td>===</td></tr>
            <tr><td>Not Equal to</td><td>!=</td></tr>
            <tr><td>Greater Than</td><td>&gt;</td></tr>
            <tr><td>Greater than or equal to</td><td>&gt;=</td></tr>
            <tr><td>Less than</td><td>&lt;</td></tr>
            <tr><td>Less than or equal to</td><td>&lt;=</td></tr>
            <tr><td>And</td><td>&&</td></tr>
            <tr><td>Or</td><td>||</td></tr>
          </table>
          Later Letters in alphebet are greater<br />
          Lower Case is greater than Upper Case<br />
        <h3>Loose verses Strict operators</h3>
          == Loose Equals Value<br />
          === Strict Equal Value and Type<br />
          != Loose Not Equal to value<br />
          !== Strict not Equal value and type<br />
          <br />
        <h3>Loose Verses Strict</h3>
          let age = 25;<br />
          (age == 25) //true<br />
          (age == '25') //true<br />
          (age === '25') //false<br />
          (age === 25) //true<br />
      </div>
    );
}

export default JSBoolean;
