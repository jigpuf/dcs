import React from 'react';

const Avi = () => {
    const steps = [
        {step:'Cut Cables and Labels', resources:'Drawing for Length and names of cables', choices:'Length, Names', testing:'None', parts:'Cable',tools:'Cutters, Measuring Tape', proof:'Picture with measuring device'},
        {step:'Bundle', resources:'Drawing/WO for taping', choices:'P213, Teflon Tape, Separation', testing:'None', parts:'Tape',tools:'Measuring Tape, Scissors', proof:'Picture of Bundling'},
        {step:'Overwrap', resources:'Drawing build Notes, cable layout', choices:'Firesleecve, Nomex, Insultherm, snakeskin', testing:'None', parts:'Overwrap, zipt ties, tape',tools:'Scisors', proof:'Picture of overwrap'},
        {step:'Stripping', resources:'Drawing for Connector, closeout and backshell type', choices:'Honeycomb, foam, standard', testing:'None', parts:'None',tools:'Knife, Cutters, scale', proof:'Pisture with scale showing strip length'},
        {step:'Crimping', resources:'Drawing for connector type, Pin docks for crimper, Pull test chart', choices:'Wire gauge, crimper, turret,contact type', testing:'Pull Tester', parts:'Contacts',tools:'stripper, crimper, Turret', proof:'Picture of crimped contacts with window showing'},
        {step:'Populating', resources:'Drawing, chart for retention tool, insertion tool chart', choices:'Closeout, unused wires, retention tool, insertion tool', testing:'Retention Test', parts:'Connector, Backshell, Braid, Boot, Sleeve, Blank Contacts',tools:'Insertion Tool, Extraction Tool. Retention Tool, Multimeter', proof:'Picture of face and back of populated connector'},
        {step:'Backshell', resources:'Drawing for clocking, Staking Requirements, Torquingn Requirements', choices:'Staking, Clocking', testing:'Reverse Torque if required', parts:'Backshell, Staking',tools:'Torque Tool', proof:'Picture of torque setting on wrench, picture of staking'},
        {step:'Waterproofing', resources:'Drawing for waterproofing requirements', choices:'1533, black stuff, none, expiration date', testing:'Durometer', parts:'waterproofing epoxy, nozzle, test cup, Tape',tools:'epoxy gun, durometer', proof:'Picture of durometer reading'},
        {step:'Closeout', resources:'pigtail, honeycomb closeout', choices:'closeout type', testing:'None', parts:'Braid sock, Band-it clamps, boot, tape',tools:'SCissors, cutters, Clamp tool, Gloves, Heat gun, Hot Melt', proof:'Picture of each step of closeout'},
        {step:'Labeling', resources:'Drrawing for label requirements', choices:'Connector, Part Number, Rev, WO #, Part Name', testing:'None', parts:'Label stock',tools:'Label Maker', proof:'Picture of each label'},
    ]
    const backshells = [
        {backshell:'A,9', boot:'211', torque:'56', revTorque:'',},
        {backshell:'B,11', boot:'', torque:'76', revTorque:'',},
        {backshell:'C,13', boot:'221', torque:'108', revTorque:'',},
        {backshell:'D,15', boot:'', torque:'116', revTorque:'',},
        {backshell:'E,17', boot:'', torque:'116', revTorque:'',},
        {backshell:'F,19', boot:'', torque:'116', revTorque:'',},
        {backshell:'G,21', boot:'', torque:'136', revTorque:'',},
        {backshell:'H,23', boot:'', torque:'136', revTorque:'',},
        {backshell:'J,25', boot:'253', torque:'136', revTorque:'',},
    ]
    const renderSteps = steps.map(item=>{
        return(
            <tr>
                <td>{item.step}</td>
                <td>{item.resources}</td>
                <td>{item.choices}</td>
                <td>{item.testing}</td>
                <td>{item.parts}</td>
                <td>{item.tools}</td>
                <td>{item.proof}</td>
            </tr>
        )
    })
    const renderBackshells = backshells.map(item=>{
        return(
            <tr>
                <td>{item.backshell}</td>
                <td>{item.boot}</td>
                <td>{item.torque}</td>
                <td>{item.revTorque}</td>
            </tr>
        )
    })
    return (
      <div>
        <h2>Avionics</h2>
        <h3>Steps</h3>
            <table>
                <tr>
                    <td>Step</td>
                    <td>Resources</td>
                    <td>Choices</td>
                    <td>Testing</td>
                    <td>Parts</td>
                    <td>Tools</td>
                    <td>Proof</td>
                </tr>
                {renderSteps}
            </table>
        <h3>Backshell, Boot, Torque</h3>
        <table>
                <tr>
                    <td>Backshell</td>
                    <td>Boot</td>
                    <td>Torque</td>
                    <td>Reverse Torque</td>
                </tr>
                {renderBackshells}
            </table>
      </div>
    );

}

export default Avi;
