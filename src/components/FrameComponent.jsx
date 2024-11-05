import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", __PH1__ }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`frame-parent20 ${className}`}>
      <textarea
        className="frame-textarea"
        placeholder="Enter your reason"
        rows={6}
        cols={15}
      />
      <div className="frame-wrapper17">
        <div className="rectangle-parent27" onClick={__PH1__}>
          <div className="frame-child59" />
          <h3 className="done">Done</h3>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Action props */
  __PH1__: PropTypes.func,
};

export default FrameComponent;
