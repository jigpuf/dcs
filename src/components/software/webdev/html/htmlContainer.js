import React from "react";

const HtmlContainer = () => {
  const containers = [
    {
      name: "div",
      slug: "div",
      note: "Generic Block - Represents a generic container or a division in an HTML document.",
      type: "Block",
    },
    {
      name: "span",
      slug: "span",
      note: "Inline - Represents a generic inline container or a span of text in an HTML document.",
      type: "Inline",
    },
    {
      name: "nav",
      slug: "nav",
      note: "Block - Represents a section of navigation links in an HTML document.",
      type: "Block",
    },
    {
      name: "main",
      slug: "main",
      note: "Block - Represents the main content of an HTML document, excluding header, footer, and navigation.",
      type: "Block",
    },
    {
      name: "article",
      slug: "art",
      note: "Block - Represents an independent piece of content or a self-contained composition in an HTML document.",
      type: "Block",
    },
    {
      name: "paragraph",
      slug: "paragraph",
      note: "Block - Represents a paragraph of text in an HTML document.",
      type: "Block",
    },
    {
      name: "aside",
      slug: "aside",
      note: "Block - Represents a section of content that is tangentially related to the main content in an HTML document.",
      type: "Block",
    },
    {
      name: "footer",
      slug: "footer",
      note: "Block - Represents the footer of an HTML document or a section.",
      type: "Block",
    },
    {
      name: "header",
      slug: "header",
      note: "Block - Represents the header of an HTML document or a section.",
      type: "Block",
    },
    {
      name: "figure",
      slug: "figure",
      note: "Block - Represents self-contained content, such as images, diagrams, code snippets, etc., in an HTML document.",
      type: "Block",
    },
  ];
  const renderContainers = containers.map((item) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.type}</td>
        <td>{item.note}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>HTML Containers</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Use</th>
        </tr>
        {renderContainers}
      </table>
    </div>
  );
};

export default HtmlContainer;
