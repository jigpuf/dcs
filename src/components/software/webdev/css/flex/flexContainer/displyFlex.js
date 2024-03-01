import React from "react";

const DisplayFlex = () => {
  const htmlCode = [
    "<div class='container'>",
    "<div class='one'><p>...</p></div>",
    "<div class='two'><p>...</p></div>",
    "<div class='three'><p>...</p></div>",
    "</div>",
  ];
  const cssCode = [".container {", "display:flex;", "gap:10px;", "}"];
  const renderHtmlCode = htmlCode.map((item) => {
    return <li>{item}</li>;
  });
  const renderCssCode = cssCode.map((item) => {
    return <li>{item}</li>;
  });
  return (
    <div>
      <h1>Display:Flex, Gap</h1>
      <h2>Syntax</h2>
      <h3>HTML</h3>
      <ul>{renderHtmlCode}</ul>
      <h3>CSS</h3>
      <ul>{renderCssCode}</ul>
      <h2>Behavior</h2>
      <p>
        When the "display: flex" property is applied to a container, any
        positioning rules that typically apply to its contents, such as "block",
        "inline", and "inline-block," are overridden by the flexbox rules. By
        default, without any additional controls, the elements inside the
        container will behave as inline elements and wrap to the next line when
        they reach the end of the container. The container itself will behave as
        a block-level element. If you want the elements inside the container to
        appear next to each other horizontally, you can use the "display:
        inline-flex" value instead.
      </p>
      <p>
        The gap property will put a gap between all the elements in the
        container.
      </p>
    </div>
  );
};

export default DisplayFlex;
