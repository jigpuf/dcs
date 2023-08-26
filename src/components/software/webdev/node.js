import React from "react";
import ButtonMaker from "../../../utilities/buttonMaker.js";
import Placeholder from "../../../utilities/placeholder.js";

const Node = () => {
  const items = [
    {
      name: "Core Concepts",
      slug: "core-concepts",
      component: <Placeholder />,
    },
    {
      name: "Server-side Development",
      slug: "server-side-development",
      component: <Placeholder />,
    },
    {
      name: "Package Management",
      slug: "package-management",
      component: <Placeholder />,
    },
    {
      name: "Express.js",
      slug: "express-js",
      component: <Placeholder />,
    },
    {
      name: "Database Integration",
      slug: "database-integration",
      component: <Placeholder />,
    },
    {
      name: "Websockets and Real-time Communication",
      slug: "websockets",
      component: <Placeholder />,
    },
    {
      name: "Security and Performance",
      slug: "security-performance",
      component: <Placeholder />,
    },
    {
      name: "Testing and Debugging",
      slug: "testing-debugging",
      component: <Placeholder />,
    },
    {
      name: "Deployment and DevOps",
      slug: "deployment-devops",
      component: <Placeholder />,
    },
    {
      name: "Advanced Topics",
      slug: "advanced-topics",
      component: <Placeholder />,
    },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default Node;
