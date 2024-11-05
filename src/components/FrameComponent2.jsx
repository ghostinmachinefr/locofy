import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`rectangle-parent28 ${className}`}>
      <div className="frame-child60" />
      <img
        className="image-1589-icon4"
        loading="lazy"
        alt=""
        src="/image-1589@2x.png"
      />
      <div className="frame-wrapper18">
        <div className="vector-parent1">
          <img
            className="frame-child61"
            loading="lazy"
            alt=""
            src="/line-601.svg"
          />
          <div className="frame-wrapper19">
            <div className="frame-parent21">
              <div className="image-1584-parent1">
                <img
                  className="image-1584-icon4"
                  loading="lazy"
                  alt=""
                  src="/image-1584@2x.png"
                />
                <div className="user-userdomainin-wrapper1">
                  <div className="user-userdomainin4">
                    <p className="user4">User</p>
                    <p className="user4">user@domain.in</p>
                  </div>
                </div>
              </div>
              <div className="vector-frame">
                <img
                  className="vector-icon1"
                  loading="lazy"
                  alt=""
                  src="/vector1.svg"
                  onClick={onVectorIconClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
