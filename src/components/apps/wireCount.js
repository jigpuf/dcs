import React, { useState } from "react";
import modules from "../../data/modules";

const WireCount = () => {
  const rows = modules.map((item) => {
    //Second Column
    const uses = item.uses.map((use) => {
      return (
        <div>
          <li>
            <td>
              {use.use} <br />
              Channels: {use.channelCount}
            </td>
            <td>
              <summary>
                <strong>Wire Count</strong>
              </summary>
              <ul>
                <li>
                  {use.wires.count.red ? `Red:${use.wires.count.red}` : null}
                </li>
                <li>
                  {use.wires.count.white
                    ? `White:${use.wires.count.white}`
                    : null}
                </li>
                <li>
                  {use.wires.count.green
                    ? `Green:${use.wires.count.green}`
                    : null}
                </li>
                <li>
                  {use.wires.count.black
                    ? `Black:${use.wires.count.black}`
                    : null}
                </li>
                <li>
                  {use.wires.count.purple
                    ? `Purple:${use.wires.count.purple}`
                    : null}
                </li>
                <li>
                  {use.wires.count.brown
                    ? `Brown:${use.wires.count.brown}`
                    : null}
                </li>
                <li>
                  {use.wires.count.orange
                    ? `Orange:${use.wires.count.orange}`
                    : null}
                </li>
                <li>
                  {use.wires.count.blue ? `Blue:${use.wires.count.blue}` : null}
                </li>
              </ul>
            </td>
            <td>
              <summary>
                <strong>Wire Position</strong>
              </summary>
              <ul>
                <li>
                  {use.wires.pins.red ? `Red:${use.wires.pins.red}` : null}
                </li>
                <li>
                  {use.wires.pins.white
                    ? `White:${use.wires.pins.white}`
                    : null}
                </li>
                <li>
                  {use.wires.pins.green
                    ? `Green:${use.wires.pins.green}`
                    : null}
                </li>
                <li>
                  {use.wires.pins.black
                    ? `Black:${use.wires.pins.black}`
                    : null}
                </li>
                <li>
                  {use.wires.pins.purple
                    ? `Purple:${use.wires.pins.purple}`
                    : null}
                </li>
                <li>
                  {use.wires.pins.brown
                    ? `Brown:${use.wires.pins.brown}`
                    : null}
                </li>
                <li>
                  {use.wires.pins.orange
                    ? `Orange:${use.wires.pins.orange}`
                    : null}
                </li>
                <li>
                  {use.wires.pins.blue ? `Blue:${use.wires.pins.blue}` : null}
                </li>
                <li>
                  {use.wires.pins.empty
                    ? `Empty:${use.wires.pins.empty}`
                    : null}
                </li>
              </ul>
            </td>
          </li>
          <hr></hr>
        </div>
      );
    });

    //Whole Row
    return (
      <tr>
        <td>
          {item.module} | {item.channelType}
          <hr />
          {item.header}
        </td>
        <td>
          <ul>{uses}</ul>
        </td>
      </tr>
    );
  });
  const moduleChooser = modules.map((item) => {
    const uses = item.uses.map((use) => {
      return (
        <li>
          <div style={{ width: "500px" }}>
            <span>
              {item.module}-{use.use}
            </span>
            <input
              typeof="number"
              style={{ float: "right", width: "30px" }}
            ></input>
            <hr />
          </div>
        </li>
      );
    });
    return (
      <tr>
        <td>{item.module}</td>
        <td>
          <ul>{uses}</ul>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Wire Counter</h1>
      <details>
        <summary>Modules</summary>
        <table>
          <tr>
            <th>Device</th>
            <th>Use</th>
          </tr>
          {rows}
        </table>
      </details>
      <h2>Wire Calculation</h2>
      <table>
        <tr>
          <th>Module</th>
          <th>QTY</th>
        </tr>
        {moduleChooser}
      </table>
    </div>
  );
};

export default WireCount;
