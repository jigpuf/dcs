import React from 'react';

class PlcInstructions extends React.Component {
  render () {
    return (
      <div>
        <h2>PLC Instructions</h2>
          <h3>Instructions</h3>
        <table>
          <tr><th>Instruction</th><th>Symbol</th><th>Logic</th><th>Picture</th></tr>
          <tr><td>Examine if open</td><td>XIO</td><td>If Bit is False, Condition is true</td>
          <td><img src='https://adamwsonu.files.wordpress.com/2010/03/nc-contact.png' height='50px'></img></td></tr>
          <tr><td>Examine if closed</td><td>XIC</td><td>If Bit is True, Condition is True</td>
          <td><img src='https://adamwsonu.files.wordpress.com/2010/03/contact.png' height='50px'></img></td></tr>
          <tr><td>Output Energize</td><td>OTE</td><td>Make bit true</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Output Latch</td><td>OTL</td><td>Make bit true until unlatched</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Output Unlatch</td><td>OTU</td><td>Make bit false until latched</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>One Shot</td><td>ONS</td><td>Makes condition true for 1 scan on a false to true condition</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>One Shot Rising</td><td>OSR</td><td>Make bit true for one cycle on a false to true condition</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>One Shot Falling</td><td>OSF</td><td>Make bit true for one cycle on a true to false condition</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Timer On Delay</td><td>TON</td><td>Energized when condition is true. Set time base, Set time
          count(preset).When energized, EN Bit is energized. When acumulated
          time is equal to preset, DN bit comes true. Acumulator, EN and DN will
          remain true until the timer condition remains true.  The TT Bit only
          remains energized while Timer is energized, EN is True, but DN is
          False.</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Timer Off Delay</td><td>TOF</td><td>Only active when condition is false.  Otherwise works the
          same as TON</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Retentive Timer</td><td>RTO</td><td>Works like TON but accumulator doesn't reset with false
          condition. Requires a reset command</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Counter Up</td><td>CTU</td><td>When True, Accumulator Counts up on false to true conditions.
          When true, the CU is enabled for 1 cycle.  When Accum = preset, DN is
          enabled.  Requires reset command to start over.</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Counter Down</td><td>CTD</td><td>Same as CTU but counts down to 0</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Reset</td><td>RES</td><td>Reset timers or counters</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Greater Than</td><td>GRT</td><td>If a is greater than b, condition is true</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Less Than</td><td>LES</td><td>If a is less than b, condition is true</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Greater or equal to</td><td>GEQ</td><td>If a is equal or greater than b, condition is true</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Less or Equal</td><td>LEQ</td><td>If a is equal or Lesser than b, condition is true</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Equal</td><td>EQU</td><td>True if Source A == B</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Not Equal</td><td>NEQ</td><td>True if Souce A != B</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Limit</td><td>LIM</td><td>If Greater or Equal to Low Limit and Less or Equal than High
          limit, condition is true.  Also can be used in reverse if lower limit
          has higher than High Limit. everything outside of limit area
          inclusive.</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Addition</td><td>ADD</td><td>A + B. Can't use 2 constants.  Need at least one memmory block</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Subtraction</td><td>SUB</td><td>A - B. Can't use 2 constants.  Need at least one memmory block</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Multiply</td><td>MUL</td><td>A * B. Can't use 2 constants.  Need at least one memmory block</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Divide</td><td>DIV</td><td>A / B. Can't use 2 constants.  Need at least one memmory block</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Compute</td><td>CPT</td><td>Complex Math</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Scale With Parameters</td><td>SCP</td><td>Input  represents a value on the input scale and translates
          it to the corresponding value in the scaled value.  Ex. 2 on a 0-5
          scale will be equal to 20 on a 0-100 scale.  Sets output location to
          new scaled value</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Move</td><td>MOV</td><td>Really just copies one value to a new spot of memory.
          Leaves value in original location too.  Can be used to recast value
          from one data type to another like integer to float. Can be used to
          change values in timers and counters</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Jump</td><td>JMP</td><td>moves program scan to Label on whatever Ladder. 02:0 will go
          to ladder 2 label 02:0.  Only good in same ladder</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Label</td><td>LBL</td><td>A place to jump to.  Rung will not scan if this instruction
          is on it.  Has to be jumped to</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Jump to Subroutine</td><td>JSR</td><td>jumps to a different ladder.  You can get rid of all
          parameters for simple use. Name Routine name is ladder name</td>
          <td><img src='' height='50px'></img></td></tr>
          <tr><td>Proportion Integral derivative</td><td>PID</td><td>Uses PD data files.Tries to adjust control variable to make
          the process variable equal the setpoint.</td>
          <td><img src='' height='50px'></img></td></tr>
        </table>
          <h3>Data Types</h3>
        <table>
          <tr><th>Data Type</th><th>Use</th><th>Table Name</th></tr>
          <tr><td>Boolean</td><td></td><td></td></tr>
          <tr><td>Float</td><td></td><td></td></tr>
        </table><br /><br />
          <br /><br />
        <h3>Best Practices</h3>
          <li>OTE,OTL, OTU Bits should be energized from only 1 location in a
          program.  Give multiple conditions on the same rung if you want to
          energize/de-energize the bit multiple ways</li>
          <li>ONS,OSR, OSF Every One shot in the program should have its own
          address, do not share bits between different instructions</li>
          <li>Segregate I/O by setting I/o equal to bits</li>
          <br /><br /><br /><br />
      </div>
    );
  }
}

export default PlcInstructions;
