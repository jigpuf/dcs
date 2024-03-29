import React, { useState } from "react";

const ButtonMaker = (props) => {
  const [buttonState, setButtonState] = useState(undefined);

  const buttons = props.buttons.map((item) => {
    return (
      <button
        key={item.slug}
        onClick={() => setButtonState(item.slug)}
        className={buttonState === item.slug ? "tier1 active" : "teir1"}
      >
        {item.name}
      </button>
    );
  });
  const activeButton = props.buttons.filter((item) => {
    return buttonState === item.slug;
  });
  const renderActiveButton = activeButton[0] && activeButton[0].component;
  return (
    <div>
      <ul class="buttons">{buttons}</ul>
      <hr />

      {renderActiveButton}
    </div>
  );
};

export default ButtonMaker;
