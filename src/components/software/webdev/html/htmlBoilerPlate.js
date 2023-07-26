import React from "react";
import TableMaker from "../../../../utilities/tableMaker.js";

const HtmlBoilerPlate = () => {
  const htmlBoilerHead = ["HTML Boiler Plate"];
  const htmlBoiler = [
    "<!DOCTYPE html/>",
    '<html lang="en-US"/>',
    "<head>",
    "<!-- all my comments here -->",
    "<title/>Pictures</title>",
    '<meta charset="UTF-8">',
    "<meta name='viewport' content='width=devcie-width, initial-scale=1.0'>",
    "<meta name='author' content='Kman'>",
    "<meta name='description' content='Cool Website'>",
    '<link rel="stylesheet" type="text/css" href="index.css">',
    '<script type="text/javascript" src="index.js"></script>',
    "</head>",
    "<body>",
    "<!-- all my comments here -->",
    '<header id="mainHeader"></header>',
    '<nav id="mainNav"></nav>',
    '<aside id="rightAside"></aside>',
    '<aside id="leftAside"></aside>',
    '<article id="mainArticle">',
    "<h1>Big Heading</h1>",
    '<footer id="mainFooter"></footer>',
    "</article>",
    "</body>",
    "</html>",
  ];
  return (
    <div>
      <h2>Boiler Plate</h2>
      <TableMaker
        head={htmlBoilerHead}
        array={htmlBoiler}
        tableType="simpleCode"
      />
    </div>
  );
};

export default HtmlBoilerPlate;
