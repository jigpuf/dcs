import React from 'react';
import ButtonMaker from '../../utilities/buttonMaker.js';
import Placeholder from '../../utilities/placeholder.js';

const Media = () =>{
   
    return(
        <div>
              <h2>Media:</h2>
              <li>Capture and build video</li>
              <li>Cspture and Buil Audio</li>
              <li>Capture screen shots</li>
              <li>Get pictures</li>
              <li>Setting audio options from internal/external</li>
              <li>Copying and building text</li>

          <h3>Tools:</h3>
            <ul>
            <li><strong>Quicktime</strong></li>
            --App Store, free
            <li><strong>Soundflower</strong></li>
            --interwebs, free, may need to do system prefs&rarr;security&rarr; unlock allow to be installed
            <li><strong>Audio Hijack</strong></li>
            --App Store, ~$100
            </ul>
          <h3>Setting up Tools</h3>
          Applications&rarr;utilities&rarr;Audio Midi&rarr;
          <ol>
          <li>+ create aggregate device</li>
          <li>Check built in mic and soundflower2ch</li>
          </ol>
          <ol>
          <li>+ create Multi-Output Device</li>
          <li>Name it "Screen Record with Audio"</li>
          <li>Built in Output and sounddlower 2ch</li>
          </ol>
          <h3>Settings by need</h3>

      <table>
        <tr><th>Video Source</th><th>Audio Sources</th><th>Sound In</th><th>Sound Out</th><th>Capture</th></tr>
        <tr><td>None</td><td>Comp</td><td>int mic</td><td></td><td>Hijack:System Audio&rarr;internal Speakers&rarr;Recorder</td></tr>
        <tr><td>None</td><td>Mic</td><td></td><td></td><td></td></tr>
        <tr><td>None</td><td>Mic and Comp</td><td></td><td></td><td></td></tr>
        <tr><td>Computer</td><td>None</td><td></td><td></td><td></td></tr>
        <tr><td>Computer</td><td>computer</td><td></td><td>screen record with audio</td><td>Quicktime:soundflower 2ch</td></tr>
        <tr><td>computer</td><td>Mic</td><td></td><td></td><td></td></tr>
        <tr><td>Computer</td><td>Mic and Comp</td><td></td><td></td><td></td></tr>
      </table>
      Simple Communicating:
      <table>
      <tr><th>Action</th><th>Audio Source</th><th>Sound In</th><th>Sound Out</th></tr>
      <tr><td>standard playing of Media</td><td>internal Mic</td><td>Internal Speakers</td><td></td></tr>
      <tr><td>Facebook screen share</td><td>internal Mic</td><td></td><td></td></tr>
      </table>
        </div>
    );
    }

export default Media;