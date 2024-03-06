import React from "react";
import Pid from "./controls/pid.js";
import Aws from "./controls/aws.js";
import Deploy from "./controls/deploy.js";
import Channels from "./controls/channels.js";
import Conditioners from "./controls/conditioners.js";
import Arduino from "./controls/arduino.js";
import Placeholder from "../utilities/placeholder.js";

import ButtonMaker from "../utilities/buttonMaker.js";
import ArduinoSoftware from "./software/arduinoSoftware.js";
import ESP32 from "./controls/esp32.js";
import Panels from "./controls/panels.js";
import Daqs from "./controls/daqs.js";
import Controllers from "./controls/controllers.js";

const Controls = () => {
  const items = [
    { name: "Daqs", slug: "daqs", component: <Daqs /> },
    {
      name: "Small Controllers",
      slug: "controllers",
      component: <Controllers />,
    },
    { name: "PID Theory", slug: "pid", component: <Pid /> },
    { name: "AWS", slug: "aws", component: <Aws /> },
    { name: "Deploying Systems", slug: "deploy", component: <Deploy /> },
    { name: "Channel Types", slug: "channels", component: <Channels /> },
    {
      name: "Signal Conditioners",
      slug: "conditioners",
      component: <Conditioners />,
    },
    { name: "Arduino", slug: "arduino", component: <Arduino /> },
    {
      name: "ESP32",
      slug: "ESP32",
      component: <ESP32 />,
    },

    { name: "Panels", slug: "Panels", component: <Panels /> },
  ];
  const courses = [
    {
      course: "From Wire to PLC, A Bootcamp in Industrial Automation",
      author: "Mouhammmed Hamsho",
      finished: "30",
      total: "187",
    },
    {
      course: "Studio 5000 PLC Ladder Logic Training",
      author: "Jeff Sharman",
      finished: "3",
      total: "32",
    },
    {
      course: "Arduino Step By Step Getting Started",
      author: "Peter Dalmaris",
      finished: "1",
      total: "143",
    },
    {
      course: "Arduino Step By Step Getting Serious",
      author: "Peter Dalmaris",
      finished: "1",
      total: "290",
    },
    {
      course: "ESP32 for Arduino Makers",
      author: "Peter Dalmaris",
      finished: "8",
      total: "58",
    },
    { course: "", author: "", finished: "", total: "" },
    { course: "", author: "", finished: "", total: "" },
  ];
  const renderCourses = courses.map((course) => {
    return (
      <tr>
        <td>{course.course}</td>
        <td>{course.author}</td>
        <td>{course.finished}</td>
        <td>{course.total}</td>
      </tr>
    );
  });
  return (
    <div>
      <ul>
        <ButtonMaker buttons={items} />
      </ul>
      <table>
        <tr>
          <th>Course</th>
          <th>Author</th>
          <th>Done</th>
          <th>Total</th>
        </tr>
        {renderCourses}
      </table>
    </div>
  );
};

export default Controls;
