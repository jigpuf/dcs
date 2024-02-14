import React from "react";
import Placeholder from "../../../../../../utilities/placeholder";
import ButtonMaker from "../../../../../../utilities/buttonMaker";

const LVDatanames = () => {
  const items = [
    {
      name: "Numeric types",
      slug: "numeric-types",
      component: <Placeholder />,
    },
    {
      name: "String",
      slug: "string",
      component: <Placeholder />,
    },
    {
      name: "Array",
      slug: "array",
      component: <Placeholder />,
    },
    {
      name: "Cluster",
      slug: "cluster",
      component: <Placeholder />,
    },
    {
      name: "Enumerated Type",
      slug: "enumerated-Type",
      component: <Placeholder />,
    },
    {
      name: "Path",
      slug: "path",
      component: <Placeholder />,
    },
    {
      name: "Variant",
      slug: "variant",
      component: <Placeholder />,
    },
    {
      name: "Waveform",
      slug: "waveform",
      component: <Placeholder />,
    },
    {
      name: "Refnum",
      slug: "refnum",
      component: <Placeholder />,
    },
    {
      name: "Control and Indicator types",
      slug: "control-indicator-types",
      component: <Placeholder />,
    },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};

export default LVDatanames;
