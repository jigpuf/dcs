import React from "react";

const CSSPurpose = () => {
  const purposes = [
    {
      purpose: "Formatting and Styling",
      description:
        "CSS enables web developers to define how HTML elements should be displayed on a webpage. It provides a wide range of tools for controlling the layout, colors, fonts, sizes, and other visual aspects of the elements. By using CSS, developers can create visually appealing and consistent designs across multiple web pages.",
    },
    {
      purpose: "Consistency and Reusability",
      description:
        "CSS allows developers to define styles once and apply them to multiple elements throughout a website. By using classes, IDs, and selectors, CSS provides a way to create reusable styles and apply them to different elements. This promotes consistency in design and makes it easier to maintain and update the appearance of a website.",
    },
    {
      purpose: "Separation of Concerns",
      description:
        "CSS promotes the separation of content and presentation. With CSS, the content of a web page is defined in HTML, while the styling and layout information are stored in a separate CSS file or embedded within the HTML document. This separation makes it easier to manage and update the design without affecting the underlying content.",
    },
    {
      purpose: "Responsive Design",
      description:
        "CSS plays a crucial role in creating responsive web designs. With CSS media queries, developers can apply different styles and layouts based on the characteristics of the device or viewport size. This allows websites to adapt and provide an optimal viewing experience on various devices, such as desktops, tablets, and mobile phones.",
    },
    {
      purpose: "Accessibility",
      description:
        "CSS can be used to enhance the accessibility of web content. By applying appropriate styles and using semantic markup, developers can ensure that websites are more usable and accessible to users with disabilities. CSS provides features like text resizing, color contrast control, and layout adjustments that contribute to a more inclusive web experience.",
    },
  ];
  const renderPurposes = purposes.map((item) => {
    return (
      <tr>
        <td>{item.purpose}</td>
        <td>{item.description}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>CSS Purpose</h1>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{renderPurposes}</tbody>
      </table>
    </div>
  );
};

export default CSSPurpose;
