import { useMemo } from "react";
import PropTypes from "prop-types";
import "./InputLabels.css";

const InputLabels = ({
  className = "",
  email,
  emailTextDecoration,
  emailMinWidth,
}) => {
  const emailStyle = useMemo(() => {
    return {
      textDecoration: emailTextDecoration,
      minWidth: emailMinWidth,
    };
  }, [emailTextDecoration, emailMinWidth]);

  return (
    <div className={`input-labels ${className}`}>
      <a className="email" style={emailStyle}>
        {email}
      </a>
      <div className="value-wrapper">
        <div className="value-wrapper-child" />
        <input className="value" placeholder="Value" type="text" />
      </div>
    </div>
  );
};

InputLabels.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,

  /** Style props */
  emailTextDecoration: PropTypes.string,
  emailMinWidth: PropTypes.string,
};

export default InputLabels;
