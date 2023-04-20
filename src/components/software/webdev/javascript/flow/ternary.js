import React from 'react';

class Ternary extends React.Component {
  render () {
    return (
      <div>
        <h2>Ternary</h2>
          ~functionName(~parameter)&#123;<br />
          ~code;<br />
          return(<br />
            ~parameter ? ~trueOutput :~falseOutput<br />
          );&#125;<br />
          <p>It looks at the parameter.  If the parameter is true, it returns the
          true output.  If it is false, it returns false output.</p>
      </div>
    );
  }
}

export default Ternary;
