import PropTypes from "prop-types";

import styles from "./Button.module.css";

const Button = ({
  size,
  type,
  color,
  shadow,
  startIcon,
  endIcon,
  children,
}) => {
  const classname = `${styles.base} ${styles[size]} ${styles[type]} ${
    styles[color]
  } ${styles[shadow ? "shadow" : ""]}`;
  return (
    <button className={classname}>
      {startIcon && <span className="material-icons"> {startIcon} </span>}
      <div>{children}</div>
      {endIcon && <span className="material-icons"> {endIcon} </span>}
    </button>
  );
};

export default Button;
Button.defaultProps = {
  size: "medium",
  type: "default",
  color: "primary",
  shadow: true,
};
Button.prototype = {
  type: PropTypes.oneOf(["text", "default", "outline"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "warning",
    "success",
    "info",
  ]),
  shadow: PropTypes.bool,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
};
