import React from 'react';

class Setup extends React.Component {
  render () {
    return (
      <div>
        <h2>Setup</h2>
          <h3>Dependencies</h3>
            <table>
              <tr><th>Program</th><th>Function</th><th>Source</th></tr>
              <tr><td>Node</td><td>App to build full stack applications</td><td><a href='https://node.org/' target='_blank'>Node</a></td></tr>
              <tr><td>React</td><td>Library for writing JSX</td><td>Installs with create react app command</td></tr>
              <tr><td>Atom</td><td>Programming environment</td><td><a href='https://atom.io/' target='_blank'>Atom</a> </td></tr>
              <tr><td>iTerm</td><td>Better Command Line tool</td><td><a href='https://www.iterm2.com/' target='_blank'>iterm2</a></td></tr>
              <tr><td>Github Desktop</td><td>GUI for git repository</td><td><a href='https://desktop.github.com/' target='_blank'>Github</a></td></tr>
            </table>
          <h3>Checking versions</h3>
            <table>
              <tr><th>Program</th><th>Comandline</th></tr>
              <tr><td>Node</td><td>node -v</td></tr>
              <tr><td>React</td><td>npm review react version</td></tr>
              <tr><td>Atom</td><td>Updates automatically on mac</td></tr>
              <tr><td>iTerm</td><td></td></tr>
            </table>
          <h3>Creating new app</h3>
            In command line type the following:<br />
            npx create-react-app 	&lt; AppName	&gt;<br />
          <h3>Connecting app to Github repository</h3>
            Github offers version control and wide usability among many hosting sites<br />
            File-New Repository<br />
            Name it, add description, choose path to parent folder of app,
          <h3>Connecting Github to hosting sites</h3>
          <h3>Running the website locally</h3>
          In folder where app lives:<br />
          npm start<br />


      </div>
    );
  }
}

export default Setup;
