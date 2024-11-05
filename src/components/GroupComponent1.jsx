import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import "./GroupComponent1.css";

const GroupComponent1 = ({
  className = "",
  frameDivWidth,
  leaveRequestsMargin,
  frameDivAlignSelf,
  frameDivWidth1,
  calendarHeaderWidth,
  calendarFooterAlignSelf,
  calendarFooterWidth,
}) => {
  const leaveRequestsStyle = useMemo(() => {
    return {
      margin: leaveRequestsMargin,
    };
  }, [leaveRequestsMargin]);

  const rectangleDivStyle = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      width: frameDivWidth1,
    };
  }, [frameDivAlignSelf, frameDivWidth1]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: calendarHeaderWidth,
    };
  }, [calendarHeaderWidth]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      alignSelf: calendarFooterAlignSelf,
      width: calendarFooterWidth,
    };
  }, [calendarFooterAlignSelf, calendarFooterWidth]);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Screen 3- UPF" to the project
  }, []);

  return (
    <div className={`rectangle-parent24 ${className}`}>
      <div className="frame-child53" />
      <div className="leave-requests-parent">
        <h2 className="leave-requests1" style={leaveRequestsStyle}>
          Leave Requests
        </h2>
        <div className="request-list">
          <div className="list-content">
            <div className="list-content-child" />
            <div className="request-details">
              <div className="request-data">
                <div className="request-headers">
                  <div className="request-header-labels">
                    <div className="request-id1">Request ID</div>
                    <div className="date-sent3">Date Sent</div>
                    <div className="type6">Type</div>
                    <div className="from-to1">From-To</div>
                  </div>
                </div>
                <div className="request-data-child" />
              </div>
            </div>
            <div className="july-request">
              <div className="july-data">
                <div className="july-2023-wrapper">
                  <div className="july-20239">29 July 2023</div>
                </div>
                <div
                  className="rectangle-parent25"
                  onClick={onGroupContainerClick}
                >
                  <div className="delete-buttons-item" />
                  <div className="delete3">Delete</div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-headers">
            <div className="header-content1">
              <div className="header-content-child" />
              <div className="header-titles">
                <div className="july-data">
                  <div className="july-headers">
                    <div className="july-20239">29 July 2023</div>
                  </div>
                  <div className="delete-buttons1">
                    <div className="delete-buttons-item" />
                    <div className="delete4">Delete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-headers">
            <div className="line-parent">
              <div className="header-content-child" />
              <div className="header-titles">
                <div className="july-data">
                  <div className="july-2023-container">
                    <div className="july-20239">29 July 2023</div>
                  </div>
                  <div className="delete-buttons1">
                    <div className="delete-buttons-item" />
                    <div className="delete3">Delete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="request-list-inner">
            <div className="frame-child57" />
          </div>
        </div>
      </div>
      <div className="request-data-child" />
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivWidth: PropTypes.string,
  leaveRequestsMargin: PropTypes.string,
  frameDivAlignSelf: PropTypes.string,
  frameDivWidth1: PropTypes.string,
  calendarHeaderWidth: PropTypes.string,
  calendarFooterAlignSelf: PropTypes.string,
  calendarFooterWidth: PropTypes.string,
};

export default GroupComponent1;
