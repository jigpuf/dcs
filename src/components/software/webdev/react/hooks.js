import React from "react";
import Placeholder from "../../../../utilities/placeholder";
import ButtonMaker from "../../../../utilities/buttonMaker";
import UseEffectHook from "./jsxHooks/useEffect";
import UseStateHook from "./jsxHooks/useState";
import Monster from "./jsxHooks/monster";
const JSXHooks = () => {
  const items = [
    { name: "UseEffect", slug: "effect", component: <UseEffectHook /> },
    { name: "UseState", slug: "state", component: <UseStateHook /> },
    { name: "Monster", slug: "monster", component: <Monster /> },
  ];
  return (
    <div>
      <ButtonMaker buttons={items} />
    </div>
  );
};
export default JSXHooks;
