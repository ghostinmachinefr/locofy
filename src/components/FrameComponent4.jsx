import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/screen-2-upf");
  }, [navigate]);

  return (
    <header className={`frame-header ${className}`}>
      <div className="frame-child46" />
      <img
        className="image-1589-icon3"
        loading="lazy"
        alt=""
        src="/image-1589@2x.png"
      />
      <div className="frame-wrapper11">
        <div className="vector-container">
          <img
            className="frame-child47"
            loading="lazy"
            alt=""
            src="/line-60.svg"
          />
          <div className="frame-wrapper12">
            <div
              className="image-1584-container"
              onClick={onGroupContainerClick}
            >
              <img
                className="image-1584-icon3"
                loading="lazy"
                alt=""
                src="/image-1584@2x.png"
              />
              <div className="user-userdomainin-frame">
                <div className="user-userdomainin3">
                  <p className="user3">User</p>
                  <p className="user3">user@domain.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
