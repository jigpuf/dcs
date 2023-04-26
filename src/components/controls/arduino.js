import React from 'react';
import TableMaker from '../../utilities/tableMaker.js';

const Arduino = () => {
    const unoHead=['Interface','Signal Type','Notes']
    const uno=[
        {pin:'Power', signals:'7-20VDC Input', notes:'12VDC is Ideal, 2.1 mm center positive jack'},
        {pin:'Vin', signals:'+7-20VDC Input', notes:'bare wire input, otherwise same as Power'},
        {pin:'Ground', signals:'0V', notes:'If power is provided from Vin, gthen Ground is landed here, board ground is found here also'},
        {pin:'Reset Button', signals:'Push to reset Arduino', notes:'This is how you restart program.  It is built for this'},
        {pin:'reset', signals:'Voltage to reset remotely', notes:'same as button but voltage controlled'},
        {pin:'5V', signals:'5VDC Output', notes:'If you need to power a 5v rail'},
        {pin:'3.3V', signals:'3.3V Output', notes:'If you need to power a 3.3V rail'},
        {pin:'0', signals:'RX', notes:'Serial communications to recieve'},
        {pin:'1', signals:'TX', notes:'Serial Communications to talk'},
        {pin:'2', signals:'Digital In/Out', notes:''},
        {pin:'3', signals:'Digital In/Out, PWM', notes:''},
        {pin:'4', signals:'Digital In/Out', notes:''},
        {pin:'5', signals:'Digital In/Out, PWM', notes:''},
        {pin:'6', signals:'Digital In/Out, PWM', notes:''},
        {pin:'7', signals:'Digital In/Out', notes:''},
        {pin:'8', signals:'Digital In/Out', notes:''},
        {pin:'9', signals:'Digital In/Out, PWM', notes:''},
        {pin:'10', signals:'Digital In/Out, PWM', notes:''},
        {pin:'11', signals:'Digital In/Out, PWM', notes:''},
        {pin:'12', signals:'Digital In/Out', notes:''},
        {pin:'13', signals:'Digital In/Out', notes:'This has an LED next to it for bemnch testing signale wiothout connections'},
        {pin:'A0', signals:'Analog In', notes:''},
        {pin:'A1', signals:'Analog In', notes:''},        
        {pin:'A2', signals:'Analog In', notes:''},
        {pin:'A3', signals:'Analog In', notes:''},
        {pin:'A4', signals:'Analog In', notes:''},
        {pin:'A5', signals:'Analog In', notes:''},
        {pin:'IOREF', signals:'', notes:'Not sure, but dont need initially'},
        {pin:'AREF', signals:'', notes:'Not sure, but dont need initially'},
    ]
    return (
      <div>
        <h2>Arduino</h2>
        <table>
            <tr>
                <th>Requirements</th>
                <th>Resource</th>
                <th>Desription</th>
            </tr>
            <tr>
                <td>Software</td>
                <td><a href='https://www.arduino.cc/en/software' target='_blank'>Arduino IDE</a></td>
                <td>Arduino development environment</td>
            </tr>
            <tr>
                <td>hardware</td>
                <td><a href='https://www.arduino.cc/en/hardware#boards-1' target='_blank'>Boards and Shields</a></td>
                <td>Arduino boards and shields are the hardware that will be programed as a controller</td>
            </tr>
        </table>
        <details>
            <summary>Arduino Uno</summary>
        <img src='https://www.arduino.cc/wiki/static/47b1410b6a28539f9175c4258f053bfc/4b190/uno.jpg'></img>
        <TableMaker head={unoHead} array={uno} tableType='simpleColumn' />
        </details>
        <h3>Programming</h3>
        <p>Arduino programs are called sketches. Once you open the arduino IDE, you can select the location you 
            want the sketches to be saved to. Arduino--Preferences  from here you can browse to the folder where 
            it will be saved and you can set the IDE font.</p>
            <p>To begin programming</p>
      </div>
    );
}

export default Arduino;