import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  faCircleQuestion,
  faCircleXmark,
  faKeyboard,
} from "@fortawesome/free-regular-svg-icons";
import "./float-button.scss";
import { faHeadset, faTablet } from "@fortawesome/free-solid-svg-icons";
const FloatButton = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div class="button">
      <div
        class="button__main"
        onMouseMove={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? (
          <FontAwesomeIcon icon={faCircleXmark} size={"sm"} />
        ) : (
          <FontAwesomeIcon icon={faCircleQuestion} size={"sm"} />
        )}
        <div
          class={`button__main-list fade ${
            isHover ? "fade--active" : "fade--out"
          }`}
        >
          <div class="list__item">
            <FontAwesomeIcon icon={faTablet} size={"xs"} />
          </div>
          <div class="list__item">
            <FontAwesomeIcon icon={faHeadset} size={"xs"} />
          </div>
          <div class="list__item">
            {" "}
            <FontAwesomeIcon icon={faKeyboard} size={"xs"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatButton;
