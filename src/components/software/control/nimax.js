import React from 'react';

class Nimax extends React.Component {
  render () {
    return (
      <div>
        <p>1) In order to access NIMAX, you have to remote into the server</p>
        <p>2) Remote into Bastion server <code>MC-VM-RDPB-T1</code> using own credentials</p>
        <p>3) Log into enigma <code>https://enigma</code> with personal credentials and MFA</p>
        <p>4) in enigma search for the server name.  It will come up with the UN and PW</p>
        <p>5) The downfacing arrows will copy to the clip board to copy for the remote server</p>
        <p>6) From the bastion server, remote into target server, password from enigma and UN = <code>.\txtest</code></p>
        <p>7) That should give access to the server</p>
        <p>8)  East Bay may work on a different system</p>
      </div>
    );
  }
}

export default Nimax;
