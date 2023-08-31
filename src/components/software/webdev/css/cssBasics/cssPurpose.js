import React from "react";

const CSSPurpose = () => {
  return (
    <div>
      <h1>CSS Purpose</h1>
      <ul>
        <li>
          Formatting and Styling: CSS enables web developers to define how HTML
          elements should be displayed on a webpage. It provides a wide range of
          tools for controlling the layout, colors, fonts, sizes, and other
          visual aspects of the elements. By using CSS, developers can create
          visually appealing and consistent designs across multiple web pages.
        </li>
        <li>
          Consistency and Reusability: CSS allows developers to define styles
          once and apply them to multiple elements throughout a website. By
          using classes, IDs, and selectors, CSS provides a way to create
          reusable styles and apply them to different elements. This promotes
          consistency in design and makes it easier to maintain and update the
          appearance of a website.
        </li>
        <li>
          Separation of Concerns: CSS promotes the separation of content and
          presentation. With CSS, the content of a web page is defined in HTML,
          while the styling and layout information are stored in a separate CSS
          file or embedded within the HTML document. This separation makes it
          easier to manage and update the design without affecting the
          underlying content.
        </li>
        <li>
          Responsive Design: CSS plays a crucial role in creating responsive web
          designs. With CSS media queries, developers can apply different styles
          and layouts based on the characteristics of the device or viewport
          size. This allows websites to adapt and provide an optimal viewing
          experience on various devices, such as desktops, tablets, and mobile
          phones.
        </li>
        <li>
          Accessibility: CSS can be used to enhance the accessibility of web
          content. By applying appropriate styles and using semantic markup,
          developers can ensure that websites are more usable and accessible to
          users with disabilities. CSS provides features like text resizing,
          color contrast control, and layout adjustments that contribute to a
          more inclusive web experience.
        </li>
      </ul>
    </div>
  );
};

export default CSSPurpose;
