import React from 'react';

class PlcHardware extends React.Component {
  render () {
    return (
      <div>
      <h2>Hardware</h2>
        Questions for deciding on hardware:<br />
        <li>What is the I/O count?</li>
          <p>
            The I/O count dictates both the types and numbers of Modules.
          </p>
        <li>What Channel configuration/instrumentation is being used?</li>
          <p>
            There are several types of channel setups.  Depending on what version
            is used, we may need a different module.  Ex. If we use a limit that
            sends 2 types of voltages, we may need analog in modules.  If it just
            completes a circuit, we may need a soucing digital in etc.  Much of
            this will be based on the type of instrumentation being used.
          </p>
        <li>How much power draw will be used by the module count?</li>
          <p>
            This dictates the type of PSU being used.
          </p>
        <li>How far from the Switch will the PLC be?</li>
          <p>
            While ethernet is typically the best option, It is limited in its
            range.  Also the type of things it is communicating with may change
            its communications protocol.
          </p>
        <li>Will it be cheaper or more versital with signal conditioners?</li>
          <p>
            In some cases, it makes sense to use different signal conditioners
            in order to change module types as a means of saving money,
            improving readability or adding versatility to the system.  Prosense
            modules or formic blocks are a good example of that.
          </p>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <h3>PLC Standard hardware:</h3>
        <strong>Standard:</strong><br />
          <table>
            <tr><th>Part Type</th><th>Part Number</th><th>Note</th></tr>
            <tr><td>CPU</td><td>L33ER</td><td></td></tr>
            <tr><td>PSU</td><td>PB-4</td><td></td></tr>
            <tr><td>Digital In</td><td>1769-IQ32</td><td>32 Channels</td></tr>
            <tr><td>Digital Out</td><td>1769-OW16</td><td>16 Channels</td></tr>
            <tr><td>Analog In(I)</td><td></td><td></td></tr>
            <tr><td>Analog In(V)</td><td></td><td></td></tr>
            <tr><td>Analog Out(I)</td><td>1769-IQ32</td><td>32 Channels</td></tr>
            <tr><td>Analog Out(V)</td><td></td><td></td></tr>
            <tr><td>TC</td><td>1769-IT6</td><td>6 Channels</td></tr>
            <tr><td>RTD</td><td></td><td></td></tr>
            <tr><td>End Cap(Not Linking)</td><td>1769-ECR</td><td></td></tr>
            <tr><td>End Cap(Linking)</td><td></td><td></td></tr>
          </table>
          Notes:<br />
          <li>No more than 3 modules between PSU and controller</li>
          <li>Any bank with CPU can only handle 8 Modules</li>
          <li>End caps can add more modules without CPU not sure how many</li>
          <li>TCs need to be at least 3 spaces away from PSU</li>
          <li>Only one PSU can be used in one brick of modules.  They cannot auction</li>
          <strong>Smaller/cheaper:</strong><br />
          <table>
            <tr><th>Part Type</th><th>Part Number</th><th>Note</th></tr>
            <tr><td>CPU-Micro870 Processor</td><td>2080-LC70-24QBB</td><td>14DI,10DO included</td></tr>
            <tr><td>Plug IN, 4 Channel AI </td><td>2080-IF4</td><td></td></tr>
            <tr><td>Plug in, 8 Channel 4DI, 4DO</td><td>2080-IQ4OB4</td><td></td></tr>
            <tr><td>Expansion, 16 channel digital input module</td><td>2085-IQ16</td><td></td></tr>
            <tr><td>Expansion, 16 channel digital output module</td><td>2085-OB16</td><td></td></tr>
            <tr><td>Expansion, 4 channel Thermocouple/RTD module</td><td>2085-IRT4</td><td></td></tr>
            <tr><td>Expansion, 8 channel AI E/I module</td><td>2085-IF8</td><td></td></tr>
            <tr><td>Expansion, 4 channel AO E/I module</td><td>2085-OF4</td><td></td></tr>
            <tr><td>End Cap, used after expansion modules</td><td>2085-ECR</td><td></td></tr>
          </table>
          Notes:<br />
          Can be ordered from <a href='https://www.reynoldsonline.com/' target='_blank'
          >The Reynolds Company</a><br />
          Contact:ccarnes@reynco.com 254-776-7400
      </div>
    );
  }
}

export default PlcHardware;
