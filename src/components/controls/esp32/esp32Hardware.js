import React from "react";
import TableMaker from "../../../utilities/tableMaker.js";

const ESP32Hardware = () => {
  const stats = [
    { parameter: "Processor", value: "ESP32-C3 SoC" },
    {
      parameter: "Processor",
      value:
        "RISC-V single-core 32-bit chip processor with a four-stage pipeline that operates at up to 160 MHz",
    },
    { parameter: "Wireless", value: "Complete 2.4GHz WiFi subsystem" },
    { parameter: "Wireless", value: "BLE: Bluetooth 5.0, Bluetooth mesh" },
    { parameter: "On-Chip Memory", value: "400KB SRAM & 4MB Flash" },
    {
      parameter: "Interface",
      value: "1x UART, 1x IIC, 1x SPI,11x GPIO(PWM), 4x ADC",
    },
    { parameter: "Interface", value: "1x Reset button, 1x Boot button" },
    { parameter: "Dimensions", value: "21 x 17.5mm" },
    { parameter: "Power", value: "Input voltage (Type-C): 5V" },
    { parameter: "Power", value: "Input voltage (BAT): 4.2V" },
    {
      parameter: "Power",
      value: "Circuit operating Voltage (ready to operate):- USB:5V@9mA",
    },
    {
      parameter: "Power",
      value: "Circuit operating Voltage (ready to operate):- BAT:3.8V@9mA",
    },
    { parameter: "Power", value: "Charging battery current: 350mA" },
    {
      parameter: "Low Power Consumption Model",
      value: "Modem-sleep Model: ~ 24 mA",
    },
    {
      parameter: "Low Power Consumption Model",
      value: "Light-sleep Model: ~ 3 mA",
    },
    {
      parameter: "Low Power Consumption Model",
      value: "Deep Sleep Model: ~ 44 μA",
    },
    {
      parameter: "Wi-Fi enabled Power Consumption",
      value: "Active Model: <75 mA",
    },
    {
      parameter: "BLE Enabled Power Consumption",
      value: "Modem-sleep Model: <27 mA",
    },
    { parameter: "Working Temperature ", value: "-40°C ~ 85°C" },
  ];
  const renderStats = stats.map((stat) => {
    return (
      <tr>
        <td>{stat.parameter}</td>
        <td>{stat.value}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>ESP32 Hardware</h1>
      <h2>Required Software</h2>
      <ol>
        <li>Arduino IDE</li>
        <li>ESP32 Arduino Core Extension</li>
        <li>VSC</li>
        <li>Terminal emulator tool:SerialTools (MacOS)</li>
        <li>Web Browser</li>
      </ol>
      <h2>Model</h2>
      <h3>XIAO-ESP32-S3</h3>
      <a
        href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"
        target="_blank"
      >
        Manual
      </a>
      <br />
      <img src="https://cdn.cnx-software.com/wp-content/uploads/2023/03/XIAO-ESP32-S3-pinout-diagram.png?lossy=0&strip=none&ssl=1"></img>
      <img src="https://media-cdn.seeedstudio.com/media/wysiwyg/esp32s3.png"></img>
      <table>
        <tr>
          <th>Parameter</th>
          <th>Value</th>
        </tr>
        {renderStats}
      </table>
    </div>
  );
};

export default ESP32Hardware;
