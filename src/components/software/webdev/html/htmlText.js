import React from "react";

const HtmlText = () => {
  const items = [
    {
      slug: "Heading 1",
      syntax: "<h1>Heading 1</h1>",
      output: <h1>Heading 1</h1>,
      type: "Block",
    },
    {
      slug: "Heading 2",
      syntax: "<h2>Heading 2</h2>",
      output: <h2>Heading 2</h2>,
      type: "Block",
    },
    {
      slug: "Heading 3",
      syntax: "<h3>Heading 3</h3>",
      output: <h3>Heading 3</h3>,
      type: "Block",
    },
    {
      slug: "Heading 4",
      syntax: "<h4>Heading 4</h4>",
      output: <h4>Heading 4</h4>,
      type: "Block",
    },
    {
      slug: "Heading 5",
      syntax: "<h5>Heading 5</h5>",
      output: <h5>Heading 5</h5>,
      type: "Block",
    },
    {
      slug: "Heading 6",
      syntax: "<h6>Heading 6</h6>",
      output: <h6>Heading 6</h6>,
      type: "Block",
    },
    {
      slug: "Emphasis",
      syntax: "<em>Emphasis Text</em>",
      output: <em>Ephasis Text</em>,
      type: "In-Line",
    },
    {
      slug: "Strong",
      syntax: "<strong>Strong Text</strong>",
      output: <strong>Strong Text</strong>,
      type: "In-Line",
    },
    {
      slug: "Bold",
      syntax: "<b>Bold Text</b>",
      output: <b>Bold Text</b>,
      type: "In-Line",
    },
    {
      slug: "Subscript",
      syntax: "H<sub>2</sub>O",
      output: (
        <span>
          H<sub>2</sub>O
        </span>
      ),
      type: "In-Line",
    },
    {
      slug: "Superscript",
      syntax: "e=mc<sup>2</sup>",
      output: (
        <span>
          e=mc<sup>2</sup>
        </span>
      ),
      type: "In-Line",
    },
    {
      slug: "Small",
      syntax: "<small>Small Text</small>",
      output: <small>Small Text</small>,
      type: "In-Line",
    },
    {
      slug: "Mark",
      syntax: "<mark> Marked Text</mark>",
      output: <mark>Marked Text</mark>,
      type: "In-Line",
    },
    {
      slug: "Delete",
      syntax: "<del>Deleted Text</del>",
      output: <del>Deleted Text</del>,
      type: "In-Line",
    },
    {
      slug: "Inserted",
      syntax: "<ins>Inserted Text</ins>",
      output: <ins>Inserted Text</ins>,
      type: "In-Line",
    },
    {
      slug: "Quote",
      syntax: "<q>Quote Text</q>",
      output: <q>Quote Text</q>,
      type: "In-Line",
    },
    {
      slug: "Block Quote",
      syntax: "<blockquote>Block Quote Text</blockquote>",
      output: <blockquote>Blockquote Text</blockquote>,
      type: "Block",
    },
    {
      slug: "Cite",
      syntax: "<cite>Cited Text</cite>",
      output: <cite>Cited Text</cite>,
      type: "In-Line",
    },
    {
      slug: "Sample",
      syntax: "<samp>Coding Sample</samp>",
      output: <samp>Code Sample Text</samp>,
      type: "In-Line",
    },
  ];

  const characters = [
    { character: "<", syntax: "&lt;", decimal: "&#60;" },
    { character: ">", syntax: "&gt;", decimal: "&#62;" },
    { character: "Ω", syntax: "&Omega;", decimal: "&#937;" },
    { character: "`", syntax: "", decimal: "&#768;" },
    { character: "!", syntax: "", decimal: "&#33;" },
    { character: "$", syntax: "", decimal: "&#36;" },
    { character: "&", syntax: "&amp;", decimal: "&#38;" },
    { character: "(", syntax: "", decimal: "&#40;" },
    { character: ")", syntax: "", decimal: "&#41;" },
    { character: "{", syntax: "", decimal: "&#123;" },
    { character: "}", syntax: "", decimal: "&#125;" },
    { character: "|", syntax: "", decimal: "&#124;" },
    { character: "#", syntax: "", decimal: "&#35;" },
    { character: "%", syntax: "", decimal: "&#37;" },
    { character: "*", syntax: "", decimal: "&#42;" },
    { character: "+", syntax: "", decimal: "&#43;" },
    { character: ",", syntax: "", decimal: "&#44;" },
    { character: "/", syntax: "", decimal: "&#47;" },
    { character: ":", syntax: "", decimal: "&#58;" },
    { character: ";", syntax: "", decimal: "&#59;" },
    { character: "=", syntax: "", decimal: "&#61;" },
    { character: "á", syntax: "&aacute;", decimal: "&#225;" },
    { character: "é", syntax: "&eacute;", decimal: "&#233;" },
    { character: "í", syntax: "&iacute;", decimal: "&#237;" },
    { character: "ó", syntax: "&oacute;", decimal: "&#243;" },
    { character: "ú", syntax: "&uacute;	", decimal: "&#250;" },
    { character: "ñ", syntax: "&ntilde;", decimal: "&#241;" },
    { character: "ü", syntax: "&uuml;", decimal: "&#252;" },
    { character: "µ", syntax: "&micro;", decimal: "&#181;" },
    { character: "→", syntax: "&rarr;", decimal: "&#8594;" },
    { character: "Blank Space", syntax: "&nbsp;", decimal: "&#160;" },
  ];

  const renderItems = items.map((item) => {
    return (
      <tr key={item.slug}>
        <td>{item.slug}</td>
        <td>{item.syntax}</td>
        <td>{item.output}</td>
        <td>{item.type}</td>
      </tr>
    );
  });
  const renderCharacters = characters.map((item) => {
    return (
      <tr key={item.character}>
        <td>
          <p>{item.character}</p>
        </td>
        <td>
          <p>{item.syntax}</p>
        </td>
        <td>
          <p>{item.decimal}</p>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Text</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Syntax</th>
          <th>Output</th>
          <th>Type</th>
        </tr>
        {renderItems}
      </table>
      <br />
      <table>
        <tr>
          <th>Character</th>
          <th>Syntax</th>
          <th>Decimal</th>
        </tr>
        {renderCharacters}
      </table>
      <h3>Commenting in html</h3>
      &lt;&#33;-- all my comments here --&gt;
    </div>
  );
};

export default HtmlText;
