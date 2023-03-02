import React from 'react';

class Remote extends React.Component {
  render () {
    return (
      <div>
        <h2>Remote In</h2>
          <li>1) Remote into Bastion Server from home computer</li>
            Personal Credentials, MC-VM-RDPB-T1
          <li>2) Log into enigma from home computer</li>
            Enigma/ in Chrome, Personal Credentials,multi-factor authentication,
          <li>3) Find target server in enigma</li>
          <li>4) Remote into target server from Bastion Server</li>
            .\txtest, enigma password
          <table>
            <tr><th>Step</th><th>From</th><th>To</th><th>Server Name</th><th>User</th><th>Password</th></tr>
            <tr><td>1</td><td>Home Computer</td><td>Bastion Server</td><td>MC-VM-RDPB-T1</td><td>Self</td><td>Self</td></tr>
            <tr><td>2</td><td>Home Computer</td><td>Enigma Server</td><td>enigma/</td><td>Self, MFA</td><td>Self</td></tr>
            <tr><td>3</td><td>Bastion Server</td><td>Target Server</td><td>ex. MC1-RS-COM</td><td>.\txtest</td><td>Enigma</td></tr>
          </table>
      




      </div>
    );
  }
}

export default Remote;
