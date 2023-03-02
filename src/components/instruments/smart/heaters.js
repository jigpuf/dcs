import React from 'react';

class Heaters extends React.Component {
  render () {
    return (
      <div>
      <p>Heaters are used for heating gases and liquids.  The circuits typically
      run off of 208 or 480 circuits.Circuits for heater typically go.  Power
      through fuse holders(Circuit Protection), Contactors/Relays(permisive
      control), Watlow Controlers(PID Control), to the heaters.  The Watlows
      recieve feedback from downstream temperatures to make adjustments.  The
      contactors in this circuit have to be used because of the codes that
      dictate that a physical disconnect, not just solid state disconnect in the
      Watlow controllers is sed for control.  The watlows can adjust based on
      temperature downstream.  The Watlows have two parts.  The power controllers
      and the temperature controller.</p>
      <li><a href='https://www.watlow.com/en/products/controllers/power-switching-devices' target='_blank'
      >Power Controllers (B and C most common)</a></li>
      <img src='instrumentation/watlowPowerController.png' height='200'></img>
      <li><a href='https://www.watlow.com/en/products/controllers/temperature-and-process-controllers' target='_blank'
      >Temperature Controllers (RM Rail Mount controller most common)</a></li>
      <img src='instrumentation/watlowTempController.png' height='200'></img>
      <li><a href='https://www.watlow.com/en/products/controllers/software/ez-zone-configurator-software' target='_blank'
      >EZ-Zone configurator software(Controller config Software)</a></li>
      <img src='instrumentation/ezzoneConfigSoftware.png' height='200'></img>
      <li><a href='https://www.schneider-electric.com/en/product-range/664-tesys-d/?parent-category-id=1500&parent-subcategory-id=1510' target='_blank'
      >Schneider Contactors (LC1D32P7 common)</a></li>
      <img src='instrumentation/schneiderContactor.png' height='200'></img>
      <li><a href='' target='_blank'
      ></a></li>
      <li><a href='' target='_blank'
      ></a></li>
      <li><a href='' target='_blank'
      ></a></li>
      <li><a href='' target='_blank'
      ></a></li>
      <img src='instrumentation/heaterBoxTop.jpg' height='200'></img>
      <br /><br /><br />
      Small temp controller for heater:<br />
      Pt. Number:PM6C3KK-ALEJAAA<br />
      <img src='instrumentation/babyWatlow.svg' height='400'></img><br />



      <h3>Information</h3>
        Model:<br />
        Part Number:<br />
        Manufacturer website<br />
        Videos:<br />
        Manual:<br />
      <h3>Physical Setup</h3>
        Circuit Diagram:<br />
        <img src='instrumentation/heaterCircuit.svg'></img><br />
        Pinouts:<br />
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

export default Heaters;
