import React from 'react';

class Operators extends React.Component {
  render () {
    return (
      <div>
        <h2>Logical Operators</h2>
          <table>
            <tr><th>Name</th><th>Symbol</th><th>Meaning</th></tr>
            <tr><td>Or</td><td>||</td><td>Only one has to be true</td></tr>
            <tr><td>And</td><td>&&</td><td>All have to be true</td></tr>
            <tr><td>Not</td><td>!</td><td>Is not true</td></tr>
            <tr><td>Loose Equality</td><td>==</td><td>Same Value</td></tr>
            <tr><td>Strict Equality</td><td>===</td><td>Same Value and Type</td></tr>
            <tr><td>Does not Equal</td><td>!=</td><td>2 Values not the same</td></tr>
            <tr><td>Does not strictly Equal</td><td>!==</td><td>2 values are not the same value and Type</td></tr>      
          </table>
      </div>
    );
  }
}

export default Operators;
