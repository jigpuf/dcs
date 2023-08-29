import React from "react";

const Text = () => {
  const textProperties = [
    {
      property: "font-family",
      syntax: "font-family: <family-name>;",
      options: "Arial, Helvetica, Times New Roman, Verdana",
      example: "font-family: Arial, sans-serif;",
    },
    {
      property: "font-size",
      syntax: "font-size: <size>;",
      options: "12px, 16px, 20px, 24px",
      example: "font-size: 16px;",
    },
    {
      property: "font-weight",
      syntax: "font-weight: <weight>;",
      options: "normal, bold, bolder, lighter",
      example: "font-weight: bold;",
    },
    {
      property: "font-style",
      syntax: "font-style: <style>;",
      options: "normal, italic, oblique",
      example: "font-style: italic;",
    },
    {
      property: "color",
      syntax: "color: <color>;",
      options: "#333333, rgb(255, 0, 0), rgba(0, 0, 255, 0.5)",
      example: "color: #333333;",
    },
    {
      property: "text-align",
      syntax: "text-align: <alignment>;",
      options: "left, center, right, justify",
      example: "text-align: center;",
    },
    {
      property: "text-decoration",
      syntax: "text-decoration: <decoration>;",
      options: "none, underline, overline, line-through",
      example: "text-decoration: underline;",
    },
    {
      property: "text-transform",
      syntax: "text-transform: <transform>;",
      options: "none, capitalize, uppercase, lowercase",
      example: "text-transform: uppercase;",
    },
    {
      property: "line-height",
      syntax: "line-height: <height>;",
      options: "normal, 1, 1.5, 2",
      example: "line-height: 1.5;",
    },
    {
      property: "letter-spacing",
      syntax: "letter-spacing: <spacing>;",
      options: "normal, 1px, 2px, 0.5em",
      example: "letter-spacing: 2px;",
    },
  ];
  const renderTextProperties = textProperties.map((item) => {
    return (
      <tr>
        <td>{item.property}</td>
        <td>{item.syntax}</td>
        <td>{item.example}</td>
        <td>{item.options}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Text properties</h2>
      <table>
        <tr>
          <th>Text property</th>
          <th>Syntax</th>
          <th>Example</th>
          <th>Options</th>
        </tr>
        {renderTextProperties}
      </table>
      <h3>Getting fonts from google fonts</h3>
      <ol>
        <li>
          Open your web browser and go to the Google Fonts website
          (fonts.google.com).
        </li>
        <li>
          Browse or search for the font you want to use. You can explore the
          various categories, filter by language or properties, or simply enter
          the font name in the search bar.
        </li>
        <li>
          Once you find a font you like, click on it to view more details.
          You'll see an overview of the font, including sample text and
          different styles available (e.g., regular, bold, italic).
        </li>
        <li>
          Customize the font settings if desired. Google Fonts provides options
          to adjust the font size, preview your own custom text, and even toggle
          between different character sets like Latin, Cyrillic, or Devanagari.
        </li>
        <li>
          Select the font styles you want to use by clicking on the "+" icon
          next to each style. You can choose multiple styles for a font family
          if available.
        </li>
        <li>
          Once you've made your selection, you'll notice a black bar at the
          bottom of the screen. Click on it to expand the bar and reveal the
          font selection options.
        </li>
        <li>
          In the expanded bar, you'll find a "Customize" tab where you can
          fine-tune additional settings like font weight, italic style, and
          subsets. Adjust these settings according to your preferences.
        </li>
        <li>
          After customizing the font to your liking, click on the "Embed" tab.
          You'll see several embedding options.
        </li>
        <li>
          The default option is "@import," which provides you with a CSS code
          snippet to add to your website's stylesheet. Copy the provided code by
          clicking on the copy button.
        </li>
        <li>
          Paste the copied code into your HTML file's &lt;head&gt; section,
          typically between the &lt;style&gt; tags or within an external CSS
          file linked to your HTML.
        </li>
        <li>
          Save your HTML file, and the font will be imported and applied to the
          specified elements on your website.
        </li>
      </ol>
    </div>
  );
};

export default Text;
