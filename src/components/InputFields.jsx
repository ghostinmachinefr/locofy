import { useCallback } from "react";
import InputLabels from "./InputLabels";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./InputFields.css";

const InputFields = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSignInTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <form className={`input-fields2 ${className}`}>
      <div className="input-fields-child" />
      <a className="email1">Email</a>
      <div className="value-field-container">
        <InputLabels email="Email" />
        <InputLabels
          email="Password"
          emailTextDecoration="unset"
          emailMinWidth="76px"
        />
      </div>
      <div className="actions">
        <button className="sign-in-button">
          <div className="sign-in-button-child" />
          <a className="sign-in" onClick={onSignInTextClick}>
            Sign In
          </a>
        </button>
        <div className="forgot-password-button">
          <div className="forgot-password">Forgot password?</div>
        </div>
      </div>
    </form>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
};

export default InputFields;
