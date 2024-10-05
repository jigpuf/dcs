import React from "react";
import ButtonMaker from "../../utilities/buttonMaker.js";
import Placeholder from "../../utilities/placeholder.js";

const Media = () => {
  const sounds = [
    {
      type: "Sound from an application only",
      systemAudioIN: "na",
      systemAudioOUT: "na",
      applicationName: "Audio Hijac",
      applicationAudioIn: "Application",
      applicationAudioOut: "anything",
      instructions: [
        <a href="https://www.youtube.com/watch?v=5aR3MywmcXI" target="_blank">
          Video
        </a>,
        "Open Audio Hijack",
        "Session->New Session",
        "Select Application Audio",
        "Set application block for the application or URL you will be recording",
        "Set recorder box and choose the quality you want",
        "For voice lectures:MP# 64 KBPS, variable bitrate, auto sample rate, channels mono",
        "For Music Highest quality uncompressed AIFF, min 16 bit, min 44100Hz, Stereo",
        "For basic Quality music, High Quality MP3, high bit rate stereo",
        "Set file name and location",
        "Application volume will affect recording volume but output device volume will not",
      ],
    },
    {
      type: "Sound from an application and external Mic",
      systemAudioIN: "",
      systemAudioOUT: "",
      applicationName: "",
      applicationAudioIn: "",
      applicationAudioOut: "",
      instructions: [""],
    },
    {
      type: "Sound from an application and internal Mic",
      systemAudioIN: "",
      systemAudioOUT: "",
      applicationName: "",
      applicationAudioIn: "",
      applicationAudioOut: "",
      instructions: [""],
    },
    {
      type: "Sound from external Mic Only",
      systemAudioIN: "",
      systemAudioOUT: "",
      applicationName: "",
      applicationAudioIn: "",
      applicationAudioOut: "",
      instructions: [""],
    },
  ];
  const renderSounds = sounds.map((item) => {
    const instructions = item.instructions.map((instruction) => {
      return <li>{instruction}</li>;
    });
    return (
      <tr>
        <td>{item.type}</td>
        <td>{item.systemAudioIN}</td>
        <td>{item.systemAudioOUT}</td>
        <td>{item.applicationName}</td>
        <td>{item.applicationAudioIn}</td>
        <td>{item.applicationAudioOut}</td>
        <td>
          <details>
            <ol>{instructions}</ol>
          </details>
        </td>
      </tr>
    );
  });
  /////////////
  const mediaTypes = [
    {
      mediaName: "Screen Shot",
      video: "-",
      audioIn: "-",
      audioOut: "-",
      picture: "Screen",
      instructions: [
        "Whole Screen: shift + command + 3",
        "Section: shift + command + 4",
        "Window: shift + command + 4 + space",
      ],
    },
    {
      mediaName: "Video No Sound",
      video: "Screen",
      audioIn: "-",
      audioOut: "-",
      picture: "-",
      instructions: [
        "Open Quicktime",
        "Choose File-New Screen Recording",
        "options-microphone-none",
      ],
    },
    {
      mediaName: "Video with Internal Sound",
      video: "Screen",
      audioIn: "Computer",
      audioOut: "Speaker",
      picture: "-",
      instructions: [
        "Use Homebrew, open a new Terminal window and run: brew install --cask background-music",
        "After installed:",
        "Open Quicktime",
        "File-New Screen Recording",
        "Option-Microphone-Background Music or Background Music",
      ],
    },
    {
      mediaName: "Video with Sound and Mic",
      video: "Screen",
      audioIn: "Computer and Internal Mic",
      audioOut: "Speaker",
      picture: "-",
      instructions: ["", ""],
    },
    {
      mediaName: "Video with Sound and external Mic",
      video: "Screen",
      audioIn: "Computer and Internal Mic",
      audioOut: "Speaker",
      picture: "-",
      instructions: ["", ""],
    },
    {
      mediaName: "Video from external Camera and external Mic",
      video: "External Camera",
      audioIn: "External Mic",
      audioOut: "None",
      picture: "",
      instructions: ["", ""],
    },
  ];
  const renderMediaTypes = mediaTypes.map((item) => {
    const instructions = item.instructions.map((instruction) => {
      return <li>{instruction}</li>;
    });
    return (
      <tr>
        <td>{item.mediaName}</td>
        <td>{item.video}</td>
        <td>{item.audioIn}</td>
        <td>{item.audioOut}</td>
        <td>{item.picture}</td>
        <td>
          <ol>{instructions}</ol>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Media Capture</h1>
      <details>
        <summary>Capture Sound Only</summary>
        <table>
          <tr>
            <th rowSpan={2}>Type of Capture</th>
            <th colSpan={2}>System Sound Settings</th>
            <th colSpan={3}>Application Settings</th>
            <th rowSpan={2}>Instructions</th>
          </tr>
          <tr>
            <th>Audio in</th>
            <th>Audio Out</th>
            <th>Application Name</th>
            <th>Audio In</th>
            <th>Audio Out</th>
          </tr>
          {renderSounds}
        </table>
      </details>
      <table>
        <tr>
          <th>Media</th>
          <th>Video</th>
          <th>Audio In</th>
          <th>Audio Out</th>
          <th>Picture</th>
          <th>Instructions</th>
        </tr>
        {renderMediaTypes}
      </table>
      <li>Setting audio options from internal/external</li>
      <li>Copying and building text</li>
      <h3>Tools:</h3>
      <ul>
        <li>
          <strong>Quicktime</strong>
        </li>
        --App Store, free
        <li>
          <strong>Soundflower</strong>
        </li>
        --interwebs, free, may need to do system prefs&rarr;security&rarr;
        unlock allow to be installed
        <li>
          <strong>Audio Hijack</strong>
        </li>
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
        <tr>
          <th>Video Source</th>
          <th>Audio Sources</th>
          <th>Sound In</th>
          <th>Sound Out</th>
          <th>Capture</th>
        </tr>

        <tr>
          <td>Computer</td>
          <td>computer</td>
          <td></td>
          <td>screen record with audio</td>
          <td>Quicktime:soundflower 2ch</td>
        </tr>
      </table>
      Simple Communicating:
      <table>
        <tr>
          <th>Action</th>
          <th>Audio Source</th>
          <th>Sound In</th>
          <th>Sound Out</th>
        </tr>
        <tr>
          <td>standard playing of Media</td>
          <td>internal Mic</td>
          <td>Internal Speakers</td>
          <td></td>
        </tr>
        <tr>
          <td>Facebook screen share</td>
          <td>internal Mic</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Media;
