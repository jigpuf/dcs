import React from "react";

const TerminalBlocks = () => {
  const none = "./dang.png";
  const terminals = [
    {
      part: "301186",
      description: "ST 1,5-QUATTRO - Feed-through terminal block",
      image:
        "https://caas.phoenixcontact.com/caas/v1/stable/media/199316/full/b408?format=jpg",
      jumper: "-4",
      awg: "16",
      endCap: "3030815",
      endCapPic:
        "https://www.mouser.com/images/phoenixcontact/images/ITP_651-3030815_t.jpg",
      accessories: [{ pn: "none", image: "./dang.png" }],
    },
    {
      part: "3038600",
      description: "ST 1,5-QUATTRO-U - Feed-through terminal block",
      image:
        "https://caas.phoenixcontact.com/caas/v1/stable/media/120858/full/b408?format=jpg",
      jumper: "-4",
      awg: "16",
      endCap: "3030815",
      endCapPic:
        "https://www.mouser.com/images/phoenixcontact/images/ITP_651-3030815_t.jpg",
      accessories: [{ pn: "none", image: "./dang.png" }],
    },
    {
      part: "3031209",
      description: "DIN Rail Terminal Blocks ST 1.5 QUATTRO-PE",
      image:
        "https://www.mouser.com/images/phoenixcontact/images/3031209_SPL.jpg",
      jumper: "-4",
      awg: "16",
      endCap: "3030815",
      endCapPic:
        "https://www.mouser.com/images/phoenixcontact/images/ITP_651-3030815_t.jpg",
      accessories: [{ pn: "none", image: "./dang.png" }],
    },
    {
      part: "3031306",
      description: "DIN Rail Terminal Blocks ST 2.5 QUATTRO",
      image:
        "https://www.mouser.com/images/phoenixcontact/images/3037410_SPL.jpg",
      jumper: "-5",
      awg: "12",
      endCap: "3030514",
      endCapPic:
        "https://www.mouser.com/images/phoenixcontact/images/ITP_651-3030514_t.jpg",
      accessories: [{ pn: "", image: "./dang.png" }],
    },
    {
      part: "3031636",
      description: "DIN Rail Terminal Blocks ST 2.5 QUATTRO-U",
      image:
        "https://www.mouser.com/images/phoenixcontact/images/3031636_SPL.jpg",
      jumper: "-5",
      awg: "12",
      endCap: "3030514",
      endCapPic:
        "https://www.mouser.com/images/phoenixcontact/images/ITP_651-3030514_t.jpg",
      accessories: [{ pn: "", image: "./dang.png" }],
    },
    {
      part: "3031322",
      description: "DIN Rail Terminal Blocks ST 2.5 QUATTRO PE",
      image:
        "https://www.mouser.com/images/phoenixcontact/images/3031322_SPL.jpg",
      jumper: "-5",
      awg: "12",
      endCap: "3030514",
      endCapPic:
        "https://www.mouser.com/images/phoenixcontact/images/ITP_651-3030514_t.jpg",
      accessories: [{ pn: "", image: "./dang.png" }],
    },
    {
      part: "",
      description: "",
      image: "./dang.png",
      jumper: "-5",
      awg: "12",
      endCap: "3030514",
      endCapPic:
        "https://www.mouser.com/images/phoenixcontact/images/ITP_651-3030514_t.jpg",
      accessories: [{ pn: "", image: "./dang.png" }],
    },
    {
      part: "",
      description: "",
      image: "./dang.png",
      jumper: "-5",
      awg: "12",
      endCap: "3030514",
      endCapPic:
        "https://www.mouser.com/images/phoenixcontact/images/ITP_651-3030514_t.jpg",
      accessories: [{ pn: "", image: "./dang.png" }],
    },
    {
      part: "3210547",
      description: "DIN Rail Terminal Blocks PTB 2 5-PE/L/L",
      image:
        "https://www.mouser.com/images/phoenixcontact/images/52209_1000_int_04_SPL.jpg",
      jumper: "-5",
      awg: "12",
      endCap: "3210553, 32100552",
      endCapPic:
        "https://www.mouser.com/images/phoenixcontact/images/3210553_SPL.jpg",
      accessories: [{ pn: "", image: "./dang.png" }],
    },
    {
      part: "3210539",
      description: "DIN Rail Terminal Blocks PTB 2 5-PE/L/TG",
      image:
        "https://www.mouser.com/images/phoenixcontact/images/3210539_SPL.jpg",
      jumper: "-5",
      awg: "12",
      endCap: "3210553, 32100552",
      endCapPic:
        "https://www.mouser.com/images/phoenixcontact/images/3210553_SPL.jpg",
      accessories: [{ pn: "", image: "./dang.png" }],
    },
    {
      part: "",
      description: "",
      image: "./dang.png",
      jumper: "",
      awg: "",
      endCap: "",
      endCapPic: "./dang.png",
      accessories: [{ pn: "", image: "./dang.png" }],
    },
  ];
  const renderTerminals = terminals.map((item) => {
    const accessories = item.accessories.map((accessory) => {
      return (
        <li>
          {accessory.pn}||
          <a href={accessory.image} target="_blank">
            <img src={accessory.image} width="80px"></img>
          </a>
          <hr></hr>
        </li>
      );
    });

    return (
      <tr>
        <td>{item.part}</td>
        <td>{item.description}</td>
        <td>
          <a href={item.image} target="_blank">
            <img src={item.image} width="80px"></img>
          </a>
        </td>
        <td>{item.jumper}</td>
        <td>{item.awg}</td>
        <td>{item.endCap}</td>
        <td>
          <a href={item.endCapPic} target="_blank">
            <img src={item.endCapPic} width="80px"></img>
          </a>
        </td>
        <td>
          <ul>{accessories}</ul>
        </td>
      </tr>
    );
  });
  const jumpers = [
    {
      size: "-4",
      use: ["1,5"],
      count: ["2:3030116", "3:", "4:", "5:", "10:", "20:", "50:"],
    },
    {
      size: "-5",
      use: ["2,5"],
      count: ["2:3030161"],
    },
    {
      size: "-6",
      use: [""],
      count: ["2:3030336"],
    },
    {
      size: "-8",
      use: [""],
      count: [""],
    },
    {
      size: "",
      use: [""],
      count: [""],
    },
  ];
  const renderJumpers = jumpers.map((item) => {
    const uses = item.use.map((use) => {
      return <li>{use}</li>;
    });
    const counts = item.count.map((count) => {
      return <li>{count}</li>;
    });
    return (
      <tr>
        <td>{item.size}</td>

        <td>
          <ul>{uses}</ul>
        </td>
        <td>
          <ul>{counts}</ul>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Terminal Blocks</h1>

      <table>
        <tr>
          <th>Part ./dang.png</th>
          <th>Description</th>
          <th>Image</th>
          <th>Jumper Size</th>
          <th>Max AWG</th>
          <th>EndCap P./dang.png</th>
          <th>EndCap Image</th>
          <th>Accessories</th>
        </tr>
        {renderTerminals}
      </table>
      <table>
        <tr>
          <th>Size</th>
          <th>Use</th>
          <th>Count</th>
        </tr>
        {renderJumpers}
      </table>
    </div>
  );
};
export default TerminalBlocks;
