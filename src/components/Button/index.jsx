import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,

  ...restProps
}) => {
  return (
    <button className={`${className}`} {...restProps}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = { className: "" };
export { Button };
