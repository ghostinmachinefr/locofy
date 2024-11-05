import { useMemo } from "react";
import PropTypes from "prop-types";

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
    <div
      className={`flex-[0.78] rounded-mini bg-white flex flex-row items-start justify-start pt-[31px] pb-[30px] pl-[35px] pr-5 box-border min-w-[195px] max-w-[250px] text-left text-mid text-lightsteelblue font-lexend mq450:flex-1 ${className}`}
      style={groupDivStyle}
    >
      <div className="h-[134px] w-[250px] relative rounded-mini bg-white hidden" />
      <div
        className="flex-1 flex flex-row items-end justify-start gap-[18.5px] z-[1]"
        style={groupDiv1Style}
      >
        <div className="flex flex-row items-start justify-start py-[23px] pl-[9px] pr-1.5 relative">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/group-427318832.svg"
          />
          <div className="relative font-light z-[1]">
            <span>04</span>
            <span className="text-darkslateblue-100">/</span>
            <span className="text-mediumslateblue">07</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] text-base text-darkslateblue-100">
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[7px]"
            style={frameDiv1Style}
          >
            <div
              className="relative font-light inline-block min-w-[112px]"
              style={halfDayLeaveStyle}
            >
              {halfDayLeave}
            </div>
            <div className="flex flex-row items-start justify-start gap-1 text-xs text-darkslateblue-300">
              <div className="h-[43px] w-[9px] relative">
                <div className="absolute top-[0px] left-[1px] rounded-[50%] bg-lightsteelblue w-2 h-2" />
                <div className="absolute top-[18px] left-[0px] rounded-[50%] bg-mediumslateblue w-2 h-2" />
                <div className="absolute top-[35px] left-[0px] rounded-[50%] bg-darkslateblue-100 w-2 h-2" />
              </div>
              <div className="flex flex-col items-start justify-start gap-[9.5px]">
                <div className="flex flex-row items-start justify-start py-0 pl-px pr-0 text-2xs">
                  <div className="relative font-light">Remaining - 3</div>
                </div>
                <div className="h-2 relative font-light inline-block shrink-0">
                  Used - 4
                </div>
                <div className="h-2 relative font-light inline-block shrink-0">
                  Total - 7
                </div>
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
