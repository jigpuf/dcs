import React from "react";
import LinksBuilder from "../../../../../../utilities/resourceBuilder";

const Micro850 = () => {
  const links = [
    {
      url: "https://literature.rockwellautomation.com/idc/groups/literature/documents/um/2080-um002_-en-e.pdf",
      title: "850 Manual",
      description: "Covers 830, 850, 970 controllers, Downloadable",
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2021/1/UK/UF/QI/12422778/micro850-controller-systems.jpg",
      title: "Picture",
      description: "Shows all inputs clearly",
    },
  ];

  return (
    <div>
      <h1>Micro 850</h1>
      <img
        width="150px"
        src="https://5.imimg.com/data5/SELLER/Default/2021/1/UK/UF/QI/12422778/micro850-controller-systems.jpg"
      ></img>
      <LinksBuilder array={links} />
      <h2>Wiring</h2>
      <img src="/850Wiring.png"></img>
    </div>
  );
};
export default Micro850;
