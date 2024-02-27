import React from "react";

const AboutFlex = () => {
  const properties = [
    {
      property: "display",
      description:
        "It is set on the flex container, enabling it to become a flex container and activate flexbox behavior.",
      options: [
        "flex- creates a container that works like a block element",
        "inline-flex- ocupies as much space as it needs but allows other things to be on the same line",
      ],
    },
    {
      property: "flex-direction",
      description:
        "It determines the direction in which flex items are placed within the container allowing for vertical or horizontal layouts.",
      options: ["row, row-reverse, column,column-reverse"],
    },
    {
      property: "flex-wrap",
      description:
        "It controls whether flex items should wrap to the next line if they exceed the width of the container influencing the flow of flex items.",
      options: ["nowrap, wrap, wrap-reverse"],
    },
    {
      property: "justify-content",
      description:
        "It defines how flex items are aligned along the main axis of the flex container allowing for various horizontal alignment options.",
      options: [
        "flex-start, flex-end, center, space-between, space-around, and space-evenly",
      ],
    },
    {
      property: "align-items",
      description:
        "It specifies how flex items arebaligned along the cross axis of the flex container. It provides enabling vertical alignment control.",
      options: ["flex-start, flex-end, center, baseline, and stretch"],
    },
    {
      property: "align-content",
      description:
        "It determines the alignment of multiple lines of flex items when there is extra space along the cross axis.",
      options: [
        "flex-start, flex-end, center, space-between, space-around, and stretch",
      ],
    },
  ];
  const itemProperties = [
    {
      property: "flex-grow",
      description:
        "It specifies how flex items grow to occupy available space along the main axis if there is extra space.",
      options: "",
    },
    {
      property: "flex-shrink",
      description:
        "It determines how flex items shrink when there is a lack of space along the main axis.",
      options: "",
    },
    {
      property: "flex-basis",
      description:
        "It defines the initial size of flex items before any remaining space is distributed.",
      options: "",
    },
    {
      property: "flex",
      description:
        "It is a shorthand property that combines flex-grow, flex-shrink, and flex-basis into a single declaration.",
      options: "",
    },
    {
      property: "align-self",
      description:
        "It allows you to override the align-items value for an individual flex item, providing custom alignment along the cross axis.",
      options: "",
    },
  ];
  const renderProperties = properties.map((item) => {
    const options = item.options.map((option) => {
      return <li>{option}</li>;
    });
    return (
      <tr>
        <td>{item.property}</td>
        <td>{item.description}</td>
        <td>
          <ol>{options}</ol>
        </td>
      </tr>
    );
  });
  const renderItemProperties = itemProperties.map((item) => {
    return (
      <tr>
        <td>{item.property}</td>
        <td>{item.description}</td>
        <td>{item.options}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>About the Flex Box Method</h1>

      <p>
        Flexbox is a layout method in CSS that provides a flexible way to
        distribute and align elements within a container. It allows you to
        create responsive and dynamic layouts, making it easier to build complex
        designs without relying heavily on floats or positioning.
      </p>

      <p>
        The Flexbox layout is based on two main components: the flex container
        and flex items. The flex container serves as the parent element that
        contains the flex items. By applying a specific set of properties to the
        container, you establish a flex context for its children.
      </p>
      <h2>Flex Container Properties</h2>
      <table>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Options</th>
        </tr>
        {renderProperties}
      </table>

      <p>
        Flex items, on the other hand, are the child elements of the flex
        container. They automatically adjust their size and position based on
        the flexbox rules.
      </p>
      <h2>Flex Item Properties</h2>
      <table>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Options</th>
        </tr>
        {renderItemProperties}
      </table>
    </div>
  );
};

export default AboutFlex;
