import React from "react";

const HtmlMedia = () => {
  const codeHead = ["Step", "Explain", "Code"];
  const tags = [
    {
      step: "iframes",
      points: ["", "", "", "", "", "", "", ""],
      code: ["", "", "", "", "", ""],
      visual: (
        <iframe
          src="https://www.gutenberg.org/"
          title="Gutenberg Projects"
        ></iframe>
      ),
    },
    {
      step: "Paths/ Links",
      points: [
        "This is an anchor tag with a reference to a file in the local folder(sibling) './'",
        "This is an anchor tag with a reference to a file in the a parent folder folder '../' and then in a sibling folder named files",
        "This is a dummy link that is a placeholder until the real address is entered",
        "External Link that opens in a new tab",
        "External Link that opens in this tab",
        "Internal link to a specific location on this page.  The hashtag means it goes to the place that has the id attribute that matches",
      ],
      code: [
        "<a href='#'>Run</a>",
        "<a href='../files/walk.js'>Walk</a>",
        "<a href='#'>Dummy Link</a>",
        "<a href='https://www.instructables.com/' target='_blank'>Instructables</a>",
        "<a href='https://www.gutenberg.org/'>Project Gutenberg</a>",
        `<a href="#canvas">Canvas Section</a>`,
      ],
      visual: (
        <div>
          <a href="#">Run</a>
          <br />
          <a href="#">Walk</a>
          <br />
          <a href="#">Dummy Link</a>
          <br />
          <a href="https://www.instructables.com/" target="_blank">
            Instructables
          </a>
          <br />
          <a href="https://www.gutenberg.org/">Project Gutenberg</a>
          <br />
          <a href="#canvas">Canvas Section</a>
        </div>
      ),
    },
    {
      step: "Images",
      points: [
        "",
        "",
        "",
        "",
        "",
        "Images can be cropped down and resized using adobe preview Tools→Adjust Size",
        "JPEG- Photos and complex Graphics",
        "PNG- still simple images",
        "GIF- moving images",
        "SVG- Vector",
      ],
      code: [
        "<img",
        "src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-ae4RMvZhVHnnKCyAiDQqm2OWPj5bepgLQ&usqp=CAU'",
        "alt='cute dog'",
        "width='300px'",
        "></img>",
      ],
      visual: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-ae4RMvZhVHnnKCyAiDQqm2OWPj5bepgLQ&usqp=CAU"
          alt="cute dog"
          width="300px"
        ></img>
      ),
    },
    {
      step: "Video",
      points: ["", "", "", "", "", "", "", ""],
      code: [
        "<video",
        "controls",
        "autoplay",
        "source",
        "src='path'",
        "id='idName'",
        "type='video/mp4'",
        "></video>",
      ],
      visual: (
        <video
          controls
          autoplay
          source
          src=""
          id="idName"
          type="video/mp4"
        ></video>
      ),
    },
    {
      step: "Audio",
      points: ["", "", "", "", "", "", "", ""],
      code: ["", "", "", "", "", "", "", ""],
      visual: <audio controls src="horse.mp3" type="audio/mpeg"></audio>,
    },
    {
      step: "PDF",
      points: ["", "", "", "", "", "", "", ""],
      code: ["", "", "", "", "", "", "", ""],
      visual: (
        <a href="Yoga.pdf" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTsGFbbiTF71SKFC_qfyV0xlBZnac17njOvw&usqp=CAU"></img>
        </a>
      ),
    },
    {
      step: "API",
      points: ["", "", "", "", "", "", "", ""],
      code: ["", "", "", "", "", "", "", ""],
      visual: <div></div>,
    },
    {
      step: "Meter",
      points: ["", "", "", "", "", "", "", ""],
      code: ["", "", "", "", "", "", "", ""],
      visual: <div></div>,
    },
    {
      step: "Progress",
      points: ["", "", "", "", "", "", "", ""],
      code: ["", "", "", "", "", "", "", ""],
      visual: <div></div>,
    },
    {
      step: "Canvas",
      points: ["", "", "", "", "", "", "", ""],
      code: ["", "", "", "", "", "", "", ""],
      visual: <div></div>,
    },
  ];
  const renderTags = tags.map((item) => {
    const renderPoints = item.points.map((point) => {
      return <li>{point}</li>;
    });
    const renderCode = item.code.map((codelet) => {
      return <li>{codelet}</li>;
    });
    return (
      <tr>
        <td>{item.step}</td>
        <td>
          <details>
            <summary>Notes</summary>
            <ol>{renderPoints}</ol>
          </details>
        </td>
        <td>
          <details>
            <summary>Code</summary>
            <ol>{renderCode}</ol>
          </details>
        </td>
        <td>{item.visual}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Media</h2>
      <table>
        <tr>
          <th>Tag</th>
          <th>Notes</th>
          <th>Code</th>
          <th>Example</th>
        </tr>
        {renderTags}
      </table>
      <h3>API</h3>
      <li>Set up account with API provider</li>
      <li>Look at documentation to find out if you need a key</li>
      <li>
        App name you are using as well as local host
        name(http://localhost:3000/)
      </li>
      <li>Create App using npx create-react-app appName</li>
      <li>Get fetch comands from documentation</li>
      <li>
        There will be a baseurl, possibly an api key, and some different
        perameters
      </li>
      <li>
        It will look something like
        fetch(`givenbaseURL?apikey=givenapiKey&perameter1=given
        parameter1&parameter2=givenparameter2`)
      </li>
      <li>
        ? is the querry for the apikey and the amperasands are different
        perameters
      </li>
      <li>Manipulate data</li>
      <h3 id="canvas">Canvas</h3>
    </div>
  );
};

export default HtmlMedia;
