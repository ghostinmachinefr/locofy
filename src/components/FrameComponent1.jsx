import { useCallback } from "react";
import GroupComponent from "./GroupComponent";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogInIconClick = useCallback(() => {
    navigate("/login-user");
  }, [navigate]);

  return (
    <div className={`frame-parent22 ${className}`}>
      <div className="double-nested-dashboard-wrapper">
        <div className="double-nested-dashboard">
          <div className="dashboard-elements-wrapper">
            <div className="dashboard-elements">
              <a className="dashboard5">Dashboard</a>
              <img
                className="path-2-icon5"
                loading="lazy"
                alt=""
                src="/path-2.svg"
              />
            </div>
          </div>
          <div className="frame-parent23">
            <div className="frame-wrapper20">
              <img
                className="frame-child62"
                loading="lazy"
                alt=""
                src="/group-427318846.svg"
              />
            </div>
            <GroupComponent
              groupDivMargin="unset"
              groupDivPosition="unset"
              groupDivTop="unset"
              groupDivLeft="unset"
              groupDivWidth="unset"
              groupDivRight="unset"
              groupDivFlex="1"
              groupDivMinWidth="162px"
              halfDayLeave="Half Day leave"
              halfDayLeaveDisplay="inline-block"
              halfDayLeaveMinWidth="112px"
              groupDivFlex1="1"
              halfDayInfoFlex="1"
              halfDayStatusAlignSelf="stretch"
            />
            <GroupComponent
              groupDivMargin="unset"
              groupDivPosition="unset"
              groupDivTop="unset"
              groupDivLeft="unset"
              groupDivWidth="unset"
              groupDivRight="unset"
              groupDivFlex="0.9692"
              groupDivMinWidth="162px"
              halfDayLeave="Full Day leave"
              halfDayLeaveDisplay="unset"
              halfDayLeaveMinWidth="unset"
              groupDivFlex1="1"
              halfDayInfoFlex="1"
              halfDayStatusAlignSelf="stretch"
            />
            <GroupComponent
              groupDivMargin="unset"
              groupDivPosition="unset"
              groupDivTop="unset"
              groupDivLeft="unset"
              groupDivWidth="unset"
              groupDivRight="unset"
              groupDivFlex="0.9231"
              groupDivMinWidth="162px"
              halfDayLeave="RH leave"
              halfDayLeaveDisplay="unset"
              halfDayLeaveMinWidth="unset"
              groupDivFlex1="unset"
              halfDayInfoFlex="unset"
              halfDayStatusAlignSelf="unset"
            />
          </div>
        </div>
      </div>
      <div className="right-sidebar">
        <div className="rectangle-parent29">
          <div className="frame-child63" />
          <div className="profile-content-wrapper">
            <div className="profile-content">
              <img
                className="image-1584-icon5"
                loading="lazy"
                alt=""
                src="/image-1584@2x.png"
              />
              <div className="user-userdomainin-wrapper2">
                <div className="user-userdomainin5">
                  <p className="user5">User</p>
                  <p className="user5">user@domain.in</p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="frame-child64"
            loading="lazy"
            alt=""
            src="/line-67.svg"
          />
          <div className="login-content-wrapper">
            <div className="login-content">
              <img
                className="log-in-icon"
                loading="lazy"
                alt=""
                src="/log-in.svg"
                onClick={onLogInIconClick}
              />
              <div className="sign-out-wrapper">
                <div className="sign-out" onClick={onLogInIconClick}>
                  Sign Out
                </div>
              </div>
            </div>
          </div>
        </div>
        <input
          className="right-sidebar-child"
          placeholder="Request for leave "
          type="text"
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
