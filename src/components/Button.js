import React from "react";
import cx from "classnames";

const Button = ({ loading, children, onClick, isLarge = false }) => {
  return (
    <button
      type="submit"
      className={cx("button is-primary", {
        "is-loading": loading,
        "is-large": isLarge,
      })}
      onClick={onClick && onClick}
    >
      {children}
    </button>
  );
};

export default Button;
