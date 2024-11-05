import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";

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
    <div
      className={`self-stretch rounded-mini bg-white flex flex-col items-start justify-start pt-[35px] pb-[63px] pl-[23px] pr-[17px] box-border gap-[57.2px] max-w-full text-left text-xl text-darkslateblue-100 font-lexend mq450:pt-[23px] mq450:pb-[41px] mq450:box-border mq750:gap-[29px] ${className}`}
    >
      <div className="w-[1106px] h-[452px] relative rounded-mini bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[43.4px] max-w-full mq750:gap-[22px]">
        <h2
          className="m-0 relative text-inherit font-light font-[inherit] z-[1] mq450:text-base"
          style={leaveRequestsStyle}
        >
          Leave Requests
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[18.7px] max-w-full text-sm-9 text-darkslateblue-300">
          <div className="self-stretch flex flex-col items-end justify-start gap-[16.5px] max-w-full">
            <div className="w-[1054px] h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border max-w-full z-[1]" />
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[13px] box-border max-w-full">
              <div className="h-[37.1px] w-[1053px] flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border gap-[18.7px] max-w-full mq450:h-auto">
                <div className="flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                  <div className="w-[761px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
                    <div className="relative font-medium inline-block min-w-[79px] z-[1]">
                      Request ID
                    </div>
                    <div className="relative font-medium z-[1]">Date Sent</div>
                    <div className="relative font-medium inline-block min-w-[37px] z-[1]">
                      Type
                    </div>
                    <div className="relative font-medium inline-block min-w-[61px] z-[1]">
                      From-To
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[3px] relative border-gainsboro-200 border-t-[3px] border-solid box-border opacity-[0.5] z-[1]" />
              </div>
            </div>
            <div className="w-[838px] flex flex-row items-start justify-end py-0 px-[39px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <div className="relative inline-block min-w-[84px] z-[1]">
                    29 July 2023
                  </div>
                </div>
                <div
                  className="rounded-md bg-lavenderblush flex flex-row items-start justify-start pt-[8.3px] px-[9px] pb-[7.8px] cursor-pointer z-[1] text-firebrick"
                  onClick={onGroupContainerClick}
                >
                  <div className="h-[25.1px] w-[64.6px] relative rounded-md bg-lavenderblush hidden" />
                  <div className="relative font-extralight inline-block min-w-[46px] z-[1]">
                    Delete
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-2.5 box-border max-w-full">
            <div className="h-[39.8px] flex-1 flex flex-col items-end justify-start gap-[14.7px] max-w-full mq450:h-auto">
              <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border opacity-[0.6] z-[1]" />
              <div className="w-[817px] flex flex-row items-start justify-end py-0 px-7 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <div className="relative inline-block min-w-[84px] z-[1]">
                      29 July 2023
                    </div>
                  </div>
                  <div className="rounded-md bg-lavenderblush flex flex-row items-start justify-start pt-[8.3px] px-[9px] pb-[7.8px] z-[1] text-firebrick">
                    <div className="h-[25.1px] w-[64.6px] relative rounded-md bg-lavenderblush hidden" />
                    <div className="relative font-extralight inline-block min-w-[46px] z-[2]">
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-2.5 box-border max-w-full">
            <div className="h-[38.7px] flex-1 flex flex-col items-end justify-start gap-[13.6px] max-w-full mq450:h-auto">
              <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border opacity-[0.6] z-[1]" />
              <div className="w-[817px] flex flex-row items-start justify-end py-0 px-7 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <div className="relative inline-block min-w-[84px] z-[1]">
                      29 July 2023
                    </div>
                  </div>
                  <div className="rounded-md bg-lavenderblush flex flex-row items-start justify-start pt-[8.3px] px-[9px] pb-[7.8px] z-[1] text-firebrick">
                    <div className="h-[25.1px] w-[64.6px] relative rounded-md bg-lavenderblush hidden" />
                    <div className="relative font-extralight inline-block min-w-[46px] z-[1]">
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-px flex flex-row items-start justify-start py-0 pl-[3px] pr-[9px] box-border max-w-full">
            <div className="self-stretch flex-1 relative border-gainsboro-200 border-t-[1px] border-solid box-border opacity-[0.6] max-w-full z-[1]" />
          </div>
        </div>
      </div>
      <div className="self-stretch h-[3px] relative border-gainsboro-200 border-t-[3px] border-solid box-border opacity-[0.5] z-[1]" />
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
