import React from "react";
import Placeholder from "../../../../utilities/placeholder";
import ButtonMaker from "../../../../utilities/buttonMaker";
import UseEffectHook from "./jsxHooks/useEffect";
const JSXHooks = () => {
  const items = [
    { name: "UseEffect", slug: "effect", component: <UseEffectHook /> },
    { name: "UseState", slug: "state", component: <Placeholder /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};
export default JSXHooks;
