import { useCallback } from "react";
import GroupComponent from "./GroupComponent";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./RequestContent.css";

const RequestContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`request-content ${className}`}>
      <div className="leave-card-parent-parent">
        <div className="leave-card-parent">
          <div className="card-container">
            <GroupComponent
              groupDivMargin="unset"
              groupDivPosition="unset"
              groupDivTop="unset"
              groupDivLeft="unset"
              groupDivWidth="unset"
              groupDivRight="unset"
              groupDivFlex="1"
              groupDivMinWidth="187px"
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
              groupDivMinWidth="187px"
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
              groupDivMinWidth="187px"
              halfDayLeave="RH leave"
              halfDayLeaveDisplay="unset"
              halfDayLeaveMinWidth="unset"
              groupDivFlex1="unset"
              halfDayInfoFlex="unset"
              halfDayStatusAlignSelf="unset"
            />
          </div>
          <div className="request-list-parent">
            <div className="request-list-content">
              <div className="request-list-header">
                <div className="header-content2">
                  <div className="leave-requests2">Leave Requests</div>
                  <div className="request-id-container">
                    <div className="request-id2">Request ID</div>
                  </div>
                </div>
              </div>
              <div className="request-items">
                <div className="request-item-container">
                  <div className="request-item-content">
                    <div className="item-header">
                      <div className="rectangle-parent31">
                        <div className="frame-child67" />
                        <div className="frame-child68" />
                      </div>
                      <div className="item-header-child" />
                      <img
                        className="item-header-item"
                        loading="lazy"
                        alt=""
                        src="/ellipse-235.svg"
                      />
                      <div className="item-header-inner" />
                      <div className="item-header-child1" />
                      <div className="item-header-child2" />
                    </div>
                    <div className="request-item-content-child" />
                    <div className="date-sent-parent">
                      <div className="date-sent4">Date Sent</div>
                      <div className="type7">Type</div>
                      <div className="frame-child69" />
                      <h2 className="are-you-sure">Are you sure?</h2>
                      <div className="confirmation-buttons">
                        <button
                          className="rectangle-parent32"
                          onClick={onGroupButtonClick}
                        >
                          <div className="frame-child70" />
                          <div className="cancel">Cancel</div>
                        </button>
                        <button className="rectangle-parent33">
                          <div className="frame-child71" />
                          <div className="delete6">Delete</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="user-name">
                    <div className="from-to2">From-To</div>
                  </div>
                  <div className="left-panel">
                    <div className="all2">All</div>
                  </div>
                </div>
                <div className="month-container">
                  <div className="july-202312">29 July 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="full-day-button">
          <div className="full-day2">Full Day</div>
        </div>
        <div className="request-form1">
          <div className="leave-card">
            <button className="rectangle-parent34">
              <div className="frame-child72" />
              <div className="request-for-leave7">{`Request for leave `}</div>
              <img className="group-icon5" alt="" src="/group.svg" />
            </button>
            <div className="leave-type-selector">
              <div className="leave-type-options">
                <div className="half-day2">Half Day</div>
                <div className="rh1">RH</div>
              </div>
              <div className="delete-request-button">
                <div className="rectangle-parent35">
                  <div className="frame-child73" />
                  <div className="delete7">Delete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="request-title1">
        <div className="request-title-child" />
      </div>
      <div className="month-list-content-wrapper">
        <div className="month-list-content">
          <div className="month-item-parent">
            <div className="date-range-filter">
              <div className="month-item-content">
                <div className="july-202312">29 July 2023</div>
                <div className="request-i-d-label">
                  <div className="delete8">Delete</div>
                </div>
              </div>
            </div>
            <div className="month-item-parent-child" />
          </div>
          <div className="month-filter">
            <div className="month-item-content">
              <div className="all-filter2">
                <div className="july-202314">29 July 2023</div>
              </div>
              <div className="rectangle-parent36">
                <div className="frame-child73" />
                <div className="delete7">Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="request-title1">
        <div className="request-title-child" />
      </div>
    </div>
  );
};

RequestContent.propTypes = {
  className: PropTypes.string,
};

export default RequestContent;
