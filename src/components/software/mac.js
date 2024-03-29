import React from "react";
import ButtonMaker from "../../utilities/buttonMaker.js";
import Placeholder from "../../utilities/placeholder.js";

const Mac = () => {
  return (
    <div>
      <h2>Skills</h2>
      Screen Shot:
      <br />
      Windows:
      <br />
      <table>
        <tr>
          <th>Area</th>
          <th>Command</th>
        </tr>
        <tr>
          <td>Screen</td>
          <td>
            <button>prtScn</button>
          </td>
        </tr>
        <tr>
          <td>Active Window</td>
          <td>
            <button>alt</button>+<button>prtScn</button>
          </td>
        </tr>
        <tr>
          <td>Selected area</td>
          <td>
            <button>windows</button>+<button>shift</button>+<button>s</button>
            &rarr; then use mouse
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Mac;
