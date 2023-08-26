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
        "Ordered List",
        "List item",
        "List item",
        "List Item",
        "Close ordered list",
        "Close details",
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
      points: [
        "Open Table",
        "Open a table row",
        "Table header that spans accross 2 rows",
        "Table Header that spans accross 2 columns",
        "Close first table row",
        "Second table row open",
        "2 Table Header",
        "Close second table row",
        "Open third table row",
        "Table datum",
        "Table datum",
        "Table datum",
        "Close third row",
        "Close Table",
      ],
      code: [
        "<table>",
        "<tr>",
        "<th rowspan='2'>Race</th>",
        "<th colspan='2'>Top Competitor</th>",
        "</tr>",
        "<tr>",
        "<th>Man</th> <th>Woman</th>",
        "</tr>",
        "<tr>",
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
      points: [
        "Open unordered list",
        "two list items",
        "Ordered list nesten under a list item",
        "3 list items in the nested list",
        "Close nested ordered list",
        "List item from top level list",
        "Close unordered list",
      ],
      code: [
        "<ul>",
        "<li>dog</li> <li>cat</li>",
        "<ol>",
        "<li>cheshire</li> <li>tabby</li> <li>hairless</li>",
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
      step: "Break",
      points: ["This would apea a single line without the break"],
      code: ["Roses are red<br />Violets are Blue"],
      visual: (
        <p>
          Roses are red
          <br /> Violets are Blue
        </p>
      ),
    },
    {
      step: "Horizontal Rule",
      points: [
        "Something above the line",
        "Makes a line",
        "Stuff after horizontal rule",
      ],
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
      <li>nav- For holding links- Block</li>
      <li>main- primary content of page-block</li>
      <li>
        article- easy to distribute parts of page, content that could stand
        alone-block
      </li>
      <li>p- paragragh level content-block</li>
      <li>aside- things that are off to the side of the main content-block</li>
      <li>footer- footer type information-block</li>
      <li>header- start of major sections-vlock</li>
      <li>figure- things like diagrams-block</li>
    </div>
  );
};

export default HtmlStructuredData;
