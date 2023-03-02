import React from 'react';

class CCW extends React.Component {
  render () {
    return (
      <div>
      <h2>Connected Components Workbench</h2>
      <a href='https://literature.rockwellautomation.com/idc/groups/literature/documents/um/2080-um002_-en-e.pdf' target='_blank'
      >Micro870 Handbook</a><br />
      <table>
        <tr><th>Subject</th><th>Page</th></tr>
        <tr><td>Other documentation</td><td>iii-v</td></tr>
        <tr><td>Controller Features</td><td>1-7</td></tr>
        <tr><td>CCW Download Link</td><td>11</td></tr>
        <tr><td>Conroller physical installation</td><td>33-40</td></tr>
        <tr><td>grounding guidlines link</td><td>45</td></tr>
        <tr><td>Analog grounding</td><td>52-53</td></tr>
        <tr><td>Configure Ethernet Settings</td><td>70-72</td></tr>
        <tr><td>Upgrade firmware</td><td>247-253</td></tr>
        <tr><td>USB Communication</td><td>254-260</td></tr>
        <tr><td>Forcing I/Os</td><td>277-278</td></tr>
        <tr><td>Troubleshooting</td><td>303-315</td></tr>
      </table>
      <h3>Download instructions</h3>
        <ol>
          <li>May requiree an account setup</li>
          <li>Go to rockwell Automation Website</li>
          <li>Click Menu and choose Compaibility and downloads</li>
          <li>find Downloads- search connected components </li>
          <li>Download version 12 and choose all options under downloads</li>
          <li>Hit download button. choose between direct and other download.  Direct is easy</li>
          <li>Will Download EXE and RAR files.  2 parts</li>
        </ol>
      <h3>Software Dependencies</h3>
        Windows 10 requires microsoft.net 3.5 Software Package 1<br />
        To find out if this is installed:<br />
        <ol>
          <li>Windows key(or Start) type <code>regedit</code> and open it</li>
          <li>Navigate to HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v3.5</li>
          <li>The subkey SP should show a 1</li>
          <li>If not, get the package</li>
        </ol>
      <h3>Incapatability</h3>
      Certain Software updates make the CCW not be able to open a new project<br />
        <a href='https://www.cbtcompany.com/product-notice-2019-01-002-microsoft-windows-security-update-causes-inability-to-open-projects-with-ccw-aadvance-isagraf-and-vmonitor-programming-environments' target='_blank'
        >List of bad security updates</a><br />
        To check your updates:
        <ol>
          <li>control panel &rarr; programs &rarr; programs and features &rarr; installed updates</li>
          <li>Search for the offending KB updates</li>
          <li>If they are there, get the patch to fix or download newest SSU</li>
        </ol>
      <h3>Hardware</h3>
      This works with the 800 series controllers
      <h3>Setup</h3>
      To make it look like logix 5000, set the theme to "logix"
      </div>
    );
  }
}

export default CCW;
