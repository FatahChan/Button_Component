import PropTypes from "prop-types";

import styles from "./Button.module.css";

const Button = ({
  size,
  type,
  color,
  shadow,
  startIcon,
  endIcon,
  autofocus,
  disabled,
  form,
  formaction,
  formenctype,
  formmethod,
  formnovalidate,
  formtarget,
  name,
  value,
  children,
}) => {
  const classname = `
  ${styles.base} 
  ${styles[size]} 
  ${styles[type]} 
  ${styles[color]} 
  ${styles[shadow ? "shadow" : ""]}
  ${disabled ? styles.disabled : ""}
  `;
  return (
    //pass button attributes
    <button
      className={classname}
      autoFocus={autofocus}
      disabled={disabled}
      form={form}
      formAction={formaction}
      formEncType={formenctype}
      formMethod={formmethod}
      formNoValidate={formnovalidate}
      formTarget={formtarget}
      name={name}
      value={value}
    >
      {startIcon && <span className="material-icons"> {startIcon} </span>}
      <div>{children}</div>
      {endIcon && <span className="material-icons">{endIcon}</span>}
    </button>
  );
};

export default Button;
Button.defaultProps = {
  size: "medium",
  type: "default",
  color: "primary",
  shadow: true,
  autofocus: false,
  disabled: false,
  form: "",
  formaction: "",
  formenctype: "",
  formmethod: "",
  formnovalidate: false,
  formtarget: "",
  name: "",
  value: "",
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
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  formaction: PropTypes.string,
  formenctype: PropTypes.string,
  formmethod: PropTypes.string,
  formnovalidate: PropTypes.bool,
  formtarget: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};
