import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <header className={`vector-parent2 ${className}`}>
      <img
        className="frame-child65"
        loading="lazy"
        alt=""
        src="/line-601.svg"
      />
      <div className="frame-wrapper21">
        <div className="image-1584-parent2">
          <img
            className="image-1584-icon6"
            loading="lazy"
            alt=""
            src="/image-1584@2x.png"
          />
          <div className="user-userdomainin-wrapper3">
            <div className="user-userdomainin6">
              <p className="user6">User</p>
              <p className="user6">user@domain.in</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent30">
        <div className="frame-child66" />
        <img
          className="image-1589-icon5"
          loading="lazy"
          alt=""
          src="/image-1589@2x.png"
        />
      </div>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
