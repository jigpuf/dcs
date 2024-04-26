import React from "react";
import ButtonMaker from "../../utilities/buttonMaker.js";
import Placeholder from "../../utilities/placeholder.js";

const Media = () => {
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
    {
      mediaName: "Sound",
      video: "-",
      audioIn: "Computer",
      audioOut: "Speaker",
      picture: "-",
      instructions: ["Audio Hijack:System Audio→internal Speakers→Record", ""],
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
      <h2>Media:</h2>
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
