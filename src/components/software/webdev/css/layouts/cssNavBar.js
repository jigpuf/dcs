import React from "react";
import TableMaker from "../../../../../utilities/tableMaker";

const CSSNavBar = () => {
  const navHead = ["Step", "Explanation", "Code"];
  const nav = [
    {
      step: "HTML",
      points: [
        "Open Nav",
        "Open unordered List",
        "Link as List Item",
        "Link as List Item",
        "Link as List Item",
        "Link as List Item",
        "Link as List Item",
        "Link as List Item",
        "Link as List Item with class of right-side",
        "Link as List Item with class of right-side",
        "Close unordered List",
        "Close Nav",
      ],
      code: [
        "<nav>",
        "<ul>",
        "<li><a href='#'></a>Home</li>",
        "<li><a href='#'></a>Links</li>",
        "<li><a href='#'></a>Resources</li>",
        "<li><a href='#'></a>About</li>",
        "<li><a href='#'></a>Videos</li>",
        "<li><a href='#'></a>Friends</li>",
        "<li><a href='#' class='right-side'></a>Sign Up</li>",
        "<li><a href='#' class='right-side'></a>Sign In</li>",
        "</ul>",
        "</nav>",
      ],
    },
    {
      step: "Style Nav",
      points: [
        "selector for nav element, open rule",
        "Set display attribute to block",
        "Width will fill horizontal container space",
        "Nav bar will go to the edge of the container with no space",
        "close nav rule",
      ],
      code: ["nav{", "display: block;", "width: 100%;", "margin: 0;", "}"],
    },
    {
      step: "Style List",
      points: [
        "Selector for unordered list that is a decendant of a nav element",
        "Set background cover to light gray",
        "If screen is too small, there won't be a scroll bar",
        "All of list goes to the edge of the container",
        "makes list have no buffer around the content",
        "close ul rule",
      ],
      code: [
        "nav ul{",
        "background-color:#eee;",
        "overflow: hidden;",
        "margin:0;",
        "padding:0;",
        "}",
      ],
    },
    {
      step: "Style List Items",
      points: [
        "Selector for list item that is a decendant of a ul that is decendant of a nav element",
        "Takes away the bullet points that would be on each list itwm",
        "moves all nav items to the left",
        "close rule",
      ],
      code: ["nav ul li{", "list-style:none;", "float:left;", "}"],
    },
    {
      step: "Styling for items that go right",
      points: [
        "Selector for list item, with class of right-side that is a decendant of a ul that is decendant of a nav element",
        "Causes these items to float right",
        "Close rule",
      ],
      code: ["nav ul li.right-side{", "float:right;", "}"],
    },
    {
      step: "Styling of the links",
      points: [
        "Selector for anchor tags that are a descendant of a li that is a decendant of a ul that is decendant of a nav element",
        "",
        "Takes away the line under the link",
        "Links will be min of 16 px tall no matter the device",
        "Makes text of link center in its space",
        "gives some space between link name and border",
        "Makes all text uppercase",
        "Changes text color",
        "Close Rule",
      ],
      code: [
        "nav ul li a{",
        "display:block;",
        "text-decoration:none;",
        "min-height: 16px;",
        "text-align:center;",
        "padding: 14px;",
        "text-transform: uppercase;",
        "color:#666;",
        "}",
      ],
    },
    {
      step: "Styling hover",
      points: [
        "Selector for anchor tags pseudo class of hover that are a descendant of a li that is a decendant of a ul that is decendant of a nav element",
        "Gives a blue color for background of link being hovered over",
        "changes text-color for contrast",
        "Close Rule",
      ],
      code: [
        "nav ul li a:hover{",
        "backgroung-color:#0060ff;",
        "color:fff;",
        "}",
      ],
    },
  ];

  return (
    <div>
      <h1>CSS Nav Bar</h1>
      <TableMaker tableType="coding" array={nav} head={navHead} />
    </div>
  );
};

export default CSSNavBar;
