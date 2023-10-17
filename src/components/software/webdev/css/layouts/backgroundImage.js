import React from "react";

const BackgroundImage = () => {
  const effects = [
    {
      effect: "Repeat",
      code: [
        "div{height: 400px;",
        "width:400px;",
        "background-size:50px;",
        "background-image: url('imageUrl');}",
      ],
      notes: ["Just keeps repeating line after line"],
      background: (
        <div
          style={{
            height: "400px",
            width: "400px",
            backgroundSize: "50px",
            backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/016/432/575/small/paintball-icon-design-free-vector.jpg)`,
          }}
        ></div>
      ),
    },
    {
      effect: "No-repeat",
      code: [
        "div{height: 400px;",
        "width:400px;",
        "background-repeat: no-repeat",
        "background-size:50px;",
        "background-image: url('imageUrl');}",
      ],
      notes: ["Doesn't repeat"],
      background: (
        <div
          style={{
            height: "400px",
            width: "400px",
            backgroundSize: "50px",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/016/432/575/small/paintball-icon-design-free-vector.jpg)`,
          }}
        ></div>
      ),
    },
    {
      effect: "Repeat X",
      code: [
        "div{height: 400px;",
        "width:400px;",
        "background-repeat: repeat-x;",
        "background-size:50px;",
        "background-image: url('imageUrl');}",
      ],
      notes: ["only repeats on x axis"],
      background: (
        <div
          style={{
            height: "400px",
            width: "400px",
            backgroundSize: "50px",
            backgroundRepeat: "repeat-x",
            backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/016/432/575/small/paintball-icon-design-free-vector.jpg)`,
          }}
        ></div>
      ),
    },
    {
      effect: "Repeat Y",
      code: [
        "div{height: 400px;",
        "width:400px;",
        "background-repeat: repeat-y;",
        "background-size:50px;",
        "background-image: url('imageUrl');}",
        "background-position: top right",
      ],
      notes: ["Repeats on Y axisnotice background-position is top right"],
      background: (
        <div
          style={{
            height: "400px",
            width: "400px",
            backgroundSize: "50px",
            backgroundRepeat: "repeat-y",
            backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/016/432/575/small/paintball-icon-design-free-vector.jpg)`,
            backgroundPosition: "top right",
          }}
        ></div>
      ),
    },
  ];
  const renderEffects = effects.map((item) => {
    return (
      <tr>
        <td>{item.effect}</td>
        <td>{item.code.join("\n")}</td>
        <td>{item.notes}</td>
        <td>{item.background}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Background Image</h1>
      <table>
        <tr>
          <td>Effect</td>
          <td>Code</td>
          <td>Notes</td>
          <td>Background</td>
        </tr>
        {renderEffects}
      </table>
    </div>
  );
};

export default BackgroundImage;

//style="background-image: url(https://static.vecteezy.com/system/resources/thumbnails/016/432/575/small/paintball-icon-design-free-vector.jpg)"
