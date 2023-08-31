import React from "react";
import TableMaker from "../utilities/tableMaker";

const Links = () => {
  const linksHead = ["site", "purpose"];
  const linkTable = [
    {
      name: "Pexels",
      purpose: "Free pictures",
      url: "https://www.pexels.com/",
    },
    {
      name: "Pixabay",
      purpose: "Free pictures",
      url: "https://pixabay.com/",
    },
    {
      name: "Unsplash",
      purpose: "Free pictures",
      url: "https://unsplash.com/",
    },
    {
      name: "Gratisography",
      purpose: "Free pictures",
      url: "https://gratisography.com/",
    },

    {
      name: "Clean PNG",
      purpose: "Pictures without backgrounds",
      url: "https://www.cleanpng.com/",
    },
    {
      name: "Tiny PNG",
      purpose: "Make small pictures",
      url: "https://tinypng.com/",
    },
    {
      name: "----------",
      purpose: "----------",
      //      url: "#-----------",
    },
    {
      name: "Flourish",
      purpose: "Make charts",
      url: "https://flourish.studio/",
    },
    {
      name: "----------",
      purpose: "----------",
      //  url: "-----------",
    },
    { name: "Coverr", purpose: "Free videos", url: "https://coverr.co/" },
    { name: "Lumen 5", purpose: "Create Videos", url: "https://lumen5.com/" },
    {
      name: "----------",
      purpose: "----------",
      //  url: "-----------",
    },
    {
      name: "Github:BC Books",
      purpose: "LDS JSON FIles",
      url: "https://github.com/bcbooks/scriptures-json/find/master",
    },
    {
      name: "----------",
      purpose: "----------",
      //   url: "-----------",
    },
    {
      name: "Typing.com",
      purpose: "Typing Practice",
      url: "https://www.typing.com/",
    },
    {
      name: "Keybr",
      purpose: "Typing practice",
      url: "https://www.keybr.com/",
    },
    {
      name: "----------",
      purpose: "----------",
      //  url: "-----------",
    },
    { name: "Draw SVG", purpose: "Make SVGs", url: "https://drawsvg.org/" },
    {
      name: "----------",
      purpose: "----------",
      //  url: "-----------",
    },
    {
      name: "Lorem Ipsom",
      purpose: "Dummy Text",
      url: "https://loremipsum.io/",
    },
    {
      name: "Picsum",
      purpose: "Dummy Photos",
      url: "https://picsum.photos/",
    },
    {
      name: "----------",
      purpose: "----------",
      //  url: "-----------",
    },
    {
      name: "Dif check",
      purpose: "Check differences between code",
      url: "https://www.diffchecker.com/",
    },

    {
      name: "MDN Docs",
      purpose: "docs on programming",
      url: "https://developer.mozilla.org/en-US/",
    },
    {
      name: "----------",
      purpose: "----------",
      //  url: "-----------",
    },
    {
      name: "Color Hunt",
      purpose: "Color Selector",
      url: "https://colorhunt.co/",
    },

    {
      name: "Coolors",
      purpose: "Color Selector",
      url: "https://coolors.co/",
    },
    {
      name: "Contrast Ratio",
      purpose: "Contrast checker",
      url: "https://www.siegemedia.com/contrast-ratio",
    },
    {
      name: "----------",
      purpose: "----------",
      //  url: "-----------",
    },
    {
      name: "Solo Learn",
      purpose: "Self taught coding",
      url: "https://www.sololearn.com/",
    },
    {
      name: "W3 Schools",
      purpose: "Web Dev Tutorials",
      url: "https://www.w3schools.com/",
    },
    {
      name: "Khan Academy",
      purpose: "Programming Tutorials",
      url: "https://www.khanacademy.org/",
    },
    {
      name: "Udemy",
      purpose: "Learning classes",
      url: "https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.US&utm_term=_._ag_78616515599_._ad_530955630840_._de_c_._dm__._pl__._ti_kwd-310556426868_._li_200862_._pd__._&utm_term=_._pd__._kw_udemy_._&matchtype=e&gclid=EAIaIQobChMImbLu4Mbf9AIVWojVCh0XTQ2OEAAYASAAEgL_hPD_BwE",
    },
    {
      name: "----------",
      purpose: "----------",
      // url: "#-----------",
    },
    { name: "Github", purpose: "Git repository", url: "https://github.com/" },
    {
      name: "Google Drive",
      purpose: "Keep files available",
      url: "https://accounts.google.com/v3/signin/identifier?dsh=S-519503861%3A1689909022130874&continue=https%3A%2F%2Fdrive.google.com%2F&emr=1&followup=https%3A%2F%2Fdrive.google.com%2F&ifkv=AeDOFXijbTkozKTk02eEyMr8lKEVOpCI6dwgGVe95ndqm8m8Fbm4nAFmtNIzG5XCRTwoyijFjDPK&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
    },
    {
      name: "Amazon Web Storage",
      purpose: "keep files available",
      url: "https://aws.amazon.com/free/storage/",
    },
    {
      name: "Photobucket",
      purpose: "Store photos for access from pages",
      url: "https://photobucket.com/",
    },
  ];

  return (
    <div>
      <h1>Links</h1>
      <TableMaker head={linksHead} array={linkTable} tableType="links" />
    </div>
  );
};

export default Links;
