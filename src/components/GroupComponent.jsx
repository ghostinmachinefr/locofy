import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({
  className = "",
  groupDivMargin,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
  groupDivWidth,
  groupDivRight,
  groupDivFlex,
  groupDivMinWidth,
  frameDivFlex,
  frameDivAlignSelf,
  halfDayLeave,
  halfDayLeaveDisplay,
  halfDayLeaveMinWidth,
  groupDivFlex1,
  halfDayInfoFlex,
  halfDayStatusAlignSelf,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      margin: groupDivMargin,
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
      width: groupDivWidth,
      right: groupDivRight,
      flex: groupDivFlex,
      minWidth: groupDivMinWidth,
    };
  }, [
    groupDivMargin,
    groupDivPosition,
    groupDivTop,
    groupDivLeft,
    groupDivWidth,
    groupDivRight,
    groupDivFlex,
    groupDivMinWidth,
  ]);

  const halfDayLeaveStyle = useMemo(() => {
    return {
      display: halfDayLeaveDisplay,
      minWidth: halfDayLeaveMinWidth,
    };
  }, [halfDayLeaveDisplay, halfDayLeaveMinWidth]);

  const groupDiv1Style = useMemo(() => {
    return {
      flex: groupDivFlex1,
    };
  }, [groupDivFlex1]);

  const frameDivStyle = useMemo(() => {
    return {
      flex: halfDayInfoFlex,
    };
  }, [halfDayInfoFlex]);

  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: halfDayStatusAlignSelf,
    };
  }, [halfDayStatusAlignSelf]);

  return (
    <div className={`rectangle-parent23 ${className}`} style={groupDivStyle}>
      <div className="frame-child49" />
      <div className="frame-parent15" style={groupDiv1Style}>
        <div className="frame-parent16">
          <img
            className="frame-child50"
            loading="lazy"
            alt=""
            src="/group-427318832.svg"
          />
          <div className="empty-leave-elements-container">
            <span>04</span>
            <span className="span8">/</span>
            <span className="span9">07</span>
          </div>
        </div>
        <div className="frame-wrapper15">
          <div className="half-day-leave-parent" style={frameDiv1Style}>
            <div className="half-day-leave" style={halfDayLeaveStyle}>
              {halfDayLeave}
            </div>
            <div className="frame-parent17">
              <div className="ellipse-group">
                <div className="frame-child51" />
                <div className="frame-child52" />
                <div className="templates" />
              </div>
              <div className="frame-parent18">
                <div className="remaining-3-container">
                  <div className="remaining-34">Remaining - 3</div>
                </div>
                <div className="used-44">Used - 4</div>
                <div className="used-44">Total - 7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  halfDayLeave: PropTypes.string,

  /** Style props */
  groupDivMargin: PropTypes.string,
  groupDivPosition: PropTypes.string,
  groupDivTop: PropTypes.string,
  groupDivLeft: PropTypes.string,
  groupDivWidth: PropTypes.string,
  groupDivRight: PropTypes.string,
  groupDivFlex: PropTypes.string,
  groupDivMinWidth: PropTypes.string,
  frameDivFlex: PropTypes.string,
  frameDivAlignSelf: PropTypes.string,
  halfDayLeaveDisplay: PropTypes.string,
  halfDayLeaveMinWidth: PropTypes.string,
  groupDivFlex1: PropTypes.string,
  halfDayInfoFlex: PropTypes.string,
  halfDayStatusAlignSelf: PropTypes.string,
};

export default GroupComponent;
