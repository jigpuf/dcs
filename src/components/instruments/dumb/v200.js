import React from 'react';

class V200 extends React.Component {
  render () {
    return (
      <div>
        <h3>Video</h3>
        <li><a href='https://www.youtube.com/watch?v=WVQtuR1r8Zs' target='_blank'
        >V200 Positioner FullVideo Final</a></li>
        <h3>Calibration</h3>
        <h4>Mechanical Calibration</h4>
        <li>If feedback module is installed, remove pot drive gear during mechanical cal</li>
        <li>With no pneumatics applied, adjust cam until the black line is
        pointing at the screw and the point of the cam is not touching the screw.
        Lock it down with the set screw</li>
        <li>If there are 30 PSI gauges available, install them in the C+ and C- ports </li>
        <li>If there are no gauges, crack the c+ port to calibrate by feel</li>
        <li>Inject 4mA in the control loop terminals</li>
        <li>Adjust the Mechanical Zero(Inner screw) Clockwise until it registers above 0 PSI
        on the c+ gauge or until air is felt through the cracked c+ fitting</li>
        <li>Turn mechanical Zero Counter-Clockwise slowly until c+ gauge goes to 0 PSI
        or the flow stops at the cracked c+ fitting</li>
        <li>Inject 20mA at the control loop</li>
        <li>adjust the mechanical Span(outer ring) Clockwise until the c- gauges
        goes above 0 PSI or until flow is felt at the cracked c- fitting</li>
        <li>Turn mechanical Span Counter-Clockwise slowly until c- gauge goes to 0 PSI
        or the flow stops at the cracked c- fitting</li>
        <li>Inject 4mA to make sure the calibration holds. Repeat if necessary</li>
        <h4>Feedback Calibration</h4>
        <li>Do Mechanical Calibration Before Feedback Calibration</li>
        If it is already installed, remove drive gear for pot while doing
        mechanical calibration<br />
        <li>Remove indicator post</li>
        <li>Install potentiometer spring loaded</li>
        <li>Install drive gear over cam nut</li>
        <li>Install transmitter module</li>
        <li>Plug in potentiometer into transmitter module CCW sticking up</li>
        <li>Use injection meter for control circuit and multimeter for feedback.
        Injection meter set up for current sourcing.  Multimeter set up for DC
        current reading</li>
        <li>inject 4 mA.  Adjust pot screw until feedback reads just under 4mA</li>
        <li>Use zero screw to fine tune to 4 mA feedback</li>
        <li>Inject 20mA</li>
        <li>Adjust span screw to 20mA</li>
        <li>Inject 4mA to see if it maintains calibration.  Repeat if necesary</li>
        <h3>Problems</h3>
        <li>The drive valve body can be sticky causing inacuracies and lag</li>
        Turn off pneumatics. Remove the body by taking out the screw.  Clean
        with electrical contact cleaner fluid. put back dry with no lubricant.
        The rod should move freely<br />
        <li>I to P converter goes bad</li>
        Replace<br />
        <h3>Troubleshooting tools</h3>
        <li>Big flathead</li>
        to remove top<br />
        <li>Large tweeker</li>
        Makes all calibration adjustments<br />
        <li>2X 30 PSI Gauges</li>
        Makes calibrating simpler and faster<br />
        <li>Injection meter</li>
        Control positioner and see feedback, test control signal, inject feedback
        to test Analog in channel<br />
        <li>Small crescent</li>
        Install gauges and crack fittings
        <li>Philips screwdriver</li>
        Instalation of feedback module<br />






        <h3>Information</h3>
          Model:<br />
          Part Number:<br />
          Manufacturer website<br />
          Videos:<br />
          Manual:<br />
        <h3>Physical Setup</h3>
          Circuit Diagram:<br />
          Mounting:<br />
          Pinouts:<br />
          Connectors<br />
        <h3>Setup</h3>
          Software<br />
          Paramaters<br />
        <h3>Calibration</h3>
        <h3>Troubleshooting</h3>
          Simulate Instrument:<br />
          Instrument Checkout:<br />
        <h3>Adding to software</h3>
      </div>
    );
  }
}

export default V200;
