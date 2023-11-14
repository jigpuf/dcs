import React from "react";

const LinksBuilder = (props) => {
  const renderLinks = props.array.map((link) => {
    return (
      <tr>
        <td>
          <a href={link.url} target="_blank">
            {link.title}
          </a>
        </td>
        <td>{link.description}</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <caption>Links</caption>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{renderLinks}</tbody>
      </table>
    </div>
  );
};

export default LinksBuilder;
/*

props format:

[
    {url:'', title:'', description:'',},
]

Component Call:

<LinksBuilder array={arrayName}/>
*/
