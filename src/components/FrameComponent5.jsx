import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={`frame-wrapper13 ${className}`}>
      <div className="frame-parent14">
        <div className="frame-wrapper14">
          <div className="dashboard-group">
            <a className="dashboard4">Dashboard</a>
            <img
              className="path-2-icon4"
              loading="lazy"
              alt=""
              src="/path-2.svg"
            />
          </div>
        </div>
        <img
          className="frame-child48"
          loading="lazy"
          alt=""
          src="/group-427318846.svg"
        />
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
