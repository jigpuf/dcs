import React from 'react';

class Mine extends React.Component {
  render () {
    return (
      <div>
        <h2>Notes from Book</h2>
          <h3>Chapter 1:Welcome to React</h3>
            <li>React is a Library</li>
            <li>Node.Js allows creation of full stack Apps</li>
            <p>
              Find out if Node is Installed by entering terminal and entering:<br />
              $ node -v<br />
              If it outputs a version, you have it.  If it says 'Comand not
              Found', then it is not there.
            <li>Download Node.js from <a href='http://nodejs.org' target='_blank'>
            nodejs.org</a></li>
            </p>
            <li>Yarn is an alternative to the npm(node package Manager)</li>
            <p>
              Install Yarn in terminal by:<br />
              npm install -g yarn<br />
              To install packages with yarn in terminal:<br />
              yarn add [package-name]<br />
              To remove packages:<br />
              yarn remove [package-name]<br />
            </p>
          <h3>Chapter 2</h3>
            <table>
            <tr><th>Variable Type</th><th>Syntax</th><th>Use</th></tr>
            <tr><td>const</td><td>const number = 5;</td><td>Declare variables that can't be changed</td></tr>
            <tr><td>let</td><td>let number = 5;</td><td>Variables that can be changed</td></tr>
            <tr><td>var</td><td>var number = 5;</td><td>Variables that can be changed</td></tr>
            </table>
            <p>
            scope in React is contained within its set of curly brackets,
            however, if/then statement blocks do not block scope.  If deciding
            between var and let, scope is the question. Let will not be assigned
            a value outside of the if/then brackets. Let sets a value only
            within brackets and leaves global variables alone.
            </p>
            p.11
      </div>
    );
  }
}

export default Mine;
