import React from "react";
import TableMaker from "../../../../utilities/tableMaker.js";

const HtmlStructuredData = () => {
  const codeHead = ["Step", "Explain", "Code"];
  const tags = [
    {
      step: "Details",
      points: [
        "Open Details",
        "The summary is what shows as a heading for the detail",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      code: [
        "<details>",
        "<summary>Dog breeds</summary>",
        "<ol>",
        "<li>Pit Bull</li>",
        "<li>Pug</li>",
        "<li>Poodle</li>",
        "</ol>",
        "</details>",
      ],
      visual: (
        <details>
          <summary>Dog Breeds</summary>
          <ol>
            <li>Pit Bull</li>
            <li>Pug</li>
            <li>Poodle</li>
          </ol>
        </details>
      ),
    },
    {
      step: "Tables",
      points: ["", "", "", "", "", "", "", "", "", "", "", "", ""],
      code: [
        "<table>",
        "<tr>",
        "<th rowspan='2'>Race</th>",
        "<th colspan='2'>Top Competitor</th>",
        "</tr>",
        "<tr>",
        "<th>Man</th> <th>Woman</th>",
        "</tr>",
        "<td>5K</td>",
        "<td>Kman</td>",
        "<td>Kwoman</td>",
        "</tr>",
        "</table>",
      ],
      visual: (
        <table>
          <tr>
            <th rowspan="2 ">Race</th>
            <th colspan="2">Top Competitor</th>
          </tr>
          <tr>
            <th>Man</th> <th>Woman</th>
          </tr>
          <tr>
            <td>5K</td>
            <td>Kman</td>
            <td>Kwoman</td>
          </tr>
        </table>
      ),
    },
    {
      step: "Lists",
      points: ["", "", "", "", "", "", "", "", "", ""],
      code: [
        "<ul>",
        "<li>dog</li>",
        "<li>cat</li>",
        "<ol>",
        "<li>cheshire</li>",
        "<li>tabby</li>",
        "<li>hairless</li>",
        "</ol>",
        "<li>turtle</li>",
        "</ul>",
      ],
      visual: (
        <ul>
          <li>dog</li>
          <li>cat</li>
          <ol>
            <li>cheshire</li>
            <li>tabby</li>
            <li>hairless</li>
          </ol>
          <li>turtle</li>
        </ul>
      ),
    },
    {
      step: "Definitions",
      points: ["", "", ""],
      code: [
        "<p>",
        "<dfn>Insanity</dfn>Keep giving the same definition of insanity",
        "</p>",
      ],
      visual: (
        <p>
          <dfn>Insanity</dfn>Keep giving the same definition of insanity
        </p>
      ),
    },
    {
      step: "Description list",
      points: ["", "", ""],
      code: ["", "", ""],
      visual: (
        <dl>
          <dt>Beast of Bodmin</dt>
          <dd>A large feline inhabiting Bodmin Moor.</dd>

          <dt>Morgawr</dt>
          <dd>A sea serpent.</dd>

          <dt>Owlman</dt>
          <dd>A giant owl-like creature.</dd>
        </dl>
      ),
    },
    {
      step: "Break",
      points: ["", "", ""],
      code: ["<p>", "Roses are red<br />Violets are Blue", "</p>"],
      visual: (
        <p>
          Roses are red
          <br /> Violets are Blue
        </p>
      ),
    },
    {
      step: "Horizontal Rule",
      points: ["", "", ""],
      code: ["<p>first subject</p>", "<hr />", "<p>Next subject</p>"],
      visual: (
        <div>
          <p>first subject</p>
          <hr />
          <p>Next subject</p>
        </div>
      ),
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
      <h2>Structured Content</h2>
      <table>
        <tr>
          <th>Tag</th>
          <th>Notes</th>
          <th>Code</th>
          <th>Example</th>
        </tr>
        {renderTags}
      </table>
      <hr />
      <h2>Div</h2>
      Divs are just block level generic containers. There are a number of
      semantic containers that do the same thing as div but make it easier for
      webscrapers and accessibilty &lt;div&gt;&lt;/div&gt;
      <li>nav- For holding links</li>
      <li>main- primary content of page</li>
      <li>
        article- easy to distribute parts of page, content that could stand
        alone
      </li>
      <li>p- paragragh level content</li>
      <li>aside- things that are off to the side of the main content</li>
      <li>footer- footer type information</li>
      <li>header- start of major sections</li>
      <li>time- anything to do with time</li>
      <li>figure- things like diagrams</li>
    </div>
  );
};

export default HtmlStructuredData;
