import React from 'react';

class SwitchStatement extends React.Component {
  render () {
    return (
      <div>
        <h2>Switch Statement</h2>
          &#160;&#160;&#160;&#160;&#160;Const grade ==’B’;<br />
          &#160;&#160;&#160;&#160;&#160;Switch(grade)&#123;<br />

          &#160;&#160;&#160;&#160;&#160;&#160;Case ‘A’:<br />
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;Console.log(‘You got an A’);<br />
          &#160;&#160;&#160;&#160;&#160;&#160;Base ‘B’:<br />
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;Console.log(‘You got a B’);<br />
          &#160;&#160;&#160;&#160;&#160;&#160;Default:<br />
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;Console.log(‘You are stupid’);<br />
          &#125;<br />
          You got a B would be output<br />
          Switch Statements are strict Quality<br />
      </div>
    );
  }
}

export default SwitchStatement;
