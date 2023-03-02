import React from 'react';

class Selection extends React.Component {
  render () {
    return (
      <div>
      <p>
      All circuits should be protected with fuses with the exception of TC
      circuits and RTD circuits since they have very low voltage in the case of
      TC's and a controlled current in the case of RTD's
      </p>
      Parameters for selection:
      <li>Size/Shape</li>
      Automotive, PTC, Micro Fuses(1/16A), Cartridge
      <li>Amperage Rating</li>
      1/16, 2A,
      <li>Opening Rate</li>
      Fast, Very Fast, Slow, Medium, Transient Tolerant
      <li>Voltage Rating</li>
      DC, AC, Voltage level
      <li>Mounting Method</li>
      Video Sources:<br/>
      <a href='https://www.youtube.com/watch?v=X19wMRJ3MoQ'
      >Understanding Fuse Ratings</a><br />
      <a href='https://www.youtube.com/watch?v=3HQG3W6PolU'
      >Type of Fuse </a><br />
      <a href='https://www.youtube.com/watch?v=4BoR80Aw_sc'
      >BASIC ELECTRICAL 101 #04 ~ Fuses and Breaker Panels</a><br />
      <a href=''
      ></a><br />
      </div>
    );
  }
}

export default Selection;
