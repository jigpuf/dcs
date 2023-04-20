import React from 'react';
import TableMaker from '../../utilities/tableMaker.js'

const HVAC = () => {
  const symptomsHead = ['symptom', 'Possible Problem', 'Check the Problem', 'Fix the Problem']
  const symptoms = [
    {symptom:'Thermostat Off', problem:'Dead Batteries', check:'Check voltage on batteries', fix:'Replace Batteries'},
    {symptom:'No 24vAC Control Voltage at thermostat', problem:'Transformer on AC control board is burned up', check:'Remove High ang low sides to check resistance', fix:'Replace Transformer'},
    {symptom:'120vAC not getting to the AC control Board', problem:'Cover Door safety switch is bad', check:'Press switch to see if power gets to the board', fix:'Replac Switch'},
    {symptom:'120vAC not getting to the AC control Board', problem:'Water safety switch is triggered', check:'See if there is water in the pan, check switch for continuity', fix:'Drain the pan, clean the drain pipes, replace switch if not working'},
    {symptom:'120vAC not getting to the AC control Board', problem:'No 120VAC ariving to unit', check:'Check voltage at unit, check breaker', fix:'reset breaker, find short/open'},
    {symptom:'Air handling unit wont turn on', problem:'Bad Capacitor', check:'Check capacitor against rating', fix:'Replace capacitor'},
    {symptom:'Air handling unit wont turn on', problem:'Bad Fan Motor', check:'Check winding with meter', fix:'Replace the motor'},
    {symptom:'Compressor Fan and motor wont turn on', problem:'Power not ariving because of breaker or shutoff', check:'Make sure safety shutoff is allowing flow, check breaker', fix:'Reset Breaker, set shutoff, check for damaged wiring'},
    {symptom:'Comressor fan wont turn on, doesnt even try', problem:'Fan relay', check:'Trigger to see if it is switching when command applied', fix:'Replace relay'},
    {symptom:'Compressor fan comes on but is slow and noisy', problem:'Fan capacitor bad', check:'Check capacitor against ratig', fix:'Replace capacitor'},
    {symptom:'Compressor fan comes on but is slow and noisy', problem:'Fan motor going bad', check:'Check to make sure relay and capacitor are good.  If both good, check motor windings, this may be bad but not obvious', fix:'Replace motor'},
    {symptom:'Air Blowing but not cold', problem:'Coolent Level', check:'', fix:''},
    {symptom:'Air Blowing but not cold', problem:'Compressor Capacitor', check:'', fix:''},
    {symptom:'Air Blowing but not cold', problem:'Compressor motor', check:'', fix:''},
    {symptom:'Pilot light went out', problem:'', check:'', fix:''},
    {symptom:'Pilot light on but furnace wont light', problem:'thermocouple bad', check:'', fix:''},
    {symptom:'Air blowing but not hot', problem:'', check:'', fix:''},


  ]
    return (
      <div>
        <a href='https://www.youtube.com/watch?v=R_g4nT4a28U' target='_blank'
        >Revolutionary Air Conditioner!</a><br />
        <a href='https://www.youtube.com/watch?v=fwjBkor-D3c' target='_blank'
        >AC Fan Outside Not Working - How To Check It</a><br />
        <a href='https://www.youtube.com/watch?v=HOdttzgEKYk' target='_blank'
        >HOW TO TEST CONDENSER FAN MOTOR</a><br />
         <a href='https://www.youtube.com/watch?v=OMRExEe2aM8' target='_blank'
        >How I Troubleshoot an Air Conditioner Condenser Fan Motor</a><br />
         <a href='' target='_blank'
        ></a><br />
        <TableMaker head={symptomsHead} array={symptoms} tableType='simpleColumn'/>

        <h3>Control</h3>
          <li>240VAC goes outside to safety shutoff for compressor</li>
          <li>120VAC goes to control in the attic</li>
          <li>There is a safety switch on the door/cover where 120 goes to the control board</li>
          <li>If the door safety switch is down, 120 goes to the board</li>
          <li>The 120 is used to power the blower fan</li>
          <li>There is a transformer attached to the board where the 120 is dropped to 24VAC for control voltage</li>
          <li>The 24VAC goes down to the thermostat which acts like a relay based on settings and temp sensor</li>
          <li>When the signal from the thermostat is enabled by the thermostat, this tells the board to open a relay to the fan, furnace, compressor</li>
          <li>Power is output to the specific components of the system</li>
          <li>Capacitors have to be good for the blower, compressor, compressor fan</li>
          <li>All the components have a contactor, relay</li>
          <li>There is a water sensor on the AC that will block flow to the board if there is water in the water catch tray.</li>
          <li></li>

      </div>
    );
  }

export default HVAC;
