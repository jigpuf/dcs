import React from "react";
const JSXLifeCycle = () => {
  const lifeCycle = [
    {
      phase: "Mounting Phase",
      about:
        "This phase occurs when a component is being created and inserted into the DOM.",
      methods: [
        "constructor()",
        "static getDerivedStateFromProps()",
        "render()",
        "componentDidMount()",
      ],
      descriptions: [
        "The constructor is called when the component is initialized. It's used for initializing state and binding event handlers.",
        "This method is called before rendering and allows the component to update its state based on changes in props.",
        "The render method is responsible for returning the JSX that represents the component's structure.",
        "This method is called after the component is mounted to the DOM. It's commonly used for side effects like fetching data from an API or subscribing to events.",
      ],
    },
    {
      phase: "Updating Phase",
      about:
        "This phase occurs when a component is re-rendered due to changes in its props or state.",
      methods: [
        "static getDerivedStateFromProps()",
        "shouldComponentUpdate()",
        "render()",
        "componentDidUpdate()",
      ],
      descriptions: [
        "This method is also called during the update phase, allowing the component to update its state based on changes in props.",
        "This method determines whether the component should re-render or not. It can be used for performance optimization by preventing unnecessary re-renders.",
        "The render method is called again to update the component's JSX.",
        "This method is called after the component's update is reflected in the DOM. It's commonly used for performing additional side effects or interacting with the updated DOM.",
      ],
    },
    {
      phase: "Unmounting Phase",
      about:
        "This phase occurs when a component is being removed from the DOM.",
      methods: ["componentWillUnmount()"],
      descriptions: [
        "This method is called just before the component is unmounted from the DOM. It's used for cleaning up resources like event listeners or timers.",
      ],
    },
  ];
  const renderLifeCycle = lifeCycle.map((item) => {
    const methods = item.methods.map((method) => {
      return <li>{method}</li>;
    });
    const descriptions = item.descriptions.map((description) => {
      return <li>{description}</li>;
    });
    return (
      <tr>
        <td>{item.phase}</td>
        <td>{item.about}</td>
        <td>
          <ol>{methods}</ol>
        </td>
        <td>
          <ol>{descriptions}</ol>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>JSX Life Cycle</h1>
      <table>
        <tr>
          <th>Phase</th>
          <th>About</th>
          <th>Methods</th>
          <th>Description</th>
        </tr>
        {renderLifeCycle}
      </table>
    </div>
  );
};
export default JSXLifeCycle;
