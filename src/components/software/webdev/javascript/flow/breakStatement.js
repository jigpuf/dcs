import React from 'react';

class BreakStatement extends React.Component {
  render () {
    return (
      <div>
        <h2>Break Statements</h2>
          <p>In loops, any time break; is encountered, it will leave the loop. If
          continue; is found, it will iterate and start the loop over without
          finishing the loop.</p>
      </div>
    );
  }
}

export default BreakStatement;
