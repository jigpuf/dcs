import React from 'react';

const Valves = () => {
    return (
      <div>
        <h3>Valves</h3>
        <li>NI 9476 DO Valve Command 32 Channels.  Dsubs are 37 red 20 AWG to valve driver board</li>
        <li>NI 9205 AI Valve Command Feedback 32 channels. DSUBs are 37 White 20 AWG to valve driver board</li>
        <li>DSUB from Valve driver board to channels.  There are 2 of these with 16 channels each. 16 red 20 AWG, 16 black 20 AWG</li>
        NI side of harnesses DSUB are socket
      </div>
      
    );
}

export default Valves;
