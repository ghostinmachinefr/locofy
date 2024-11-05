import PropTypes from "prop-types";

const GroupComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-[452px] !m-[0] absolute right-[0px] bottom-[0px] left-[0px] rounded-mini bg-white flex flex-col items-start justify-start pt-[35px] px-[23px] pb-[63px] box-border gap-[57.2px] max-w-full text-left text-sm-9 text-firebrick font-lexend mq750:gap-[29px] ${className}`}
    >
      <div className="w-[1106px] h-[452px] relative rounded-mini bg-white hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[18.5px] max-w-[103%]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[29.7px] max-w-full text-xl text-darkslateblue-100">
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq750:flex-wrap">
            <div className="relative font-light z-[1] mq450:text-base">
              Leave Requests
            </div>
            <div className="w-[317.6px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border text-base">
              <div className="self-stretch flex flex-row items-start justify-start gap-[10.6px] mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 shrink-0">
                  <img
                    className="w-[9.4px] h-[7.2px] relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/ellipse-235.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-mediumslateblue">
                  <div className="relative font-light inline-block min-w-[22.7px] z-[1]">
                    All
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                  <div className="w-[8.5px] h-[7.2px] relative rounded-[50%] border-darkslateblue-200 border-[0px] border-solid box-border z-[1]" />
                </div>
                <div className="flex-1 relative font-light text-darkslateblue-200 inline-block min-w-[62px] z-[1]">
                  Full Day
                </div>
                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                  <div className="w-[8.5px] h-[7.2px] relative rounded-[50%] border-darkslateblue-200 border-[0px] border-solid box-border z-[1]" />
                </div>
                <div className="flex-1 relative font-light inline-block min-w-[68.1px] z-[1]">
                  Half Day
                </div>
                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                  <div className="w-[8.5px] h-[7.2px] relative rounded-[50%] border-darkslateblue-200 border-[0px] border-solid box-border z-[1]" />
                </div>
                <div className="w-[59.6px] relative font-light inline-block shrink-0 z-[1]">
                  RH
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-[18px] box-border max-w-full text-sm-9 text-darkslateblue-300">
            <div className="h-[33.4px] flex-1 flex flex-col items-start justify-start gap-[18px] max-w-full mq450:h-auto">
              <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border z-[1]" />
              <div className="flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full">
                <div className="w-[761px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
                  <div className="relative font-medium inline-block min-w-[79px] z-[1]">
                    Request ID
                  </div>
                  <div className="relative font-medium inline-block min-w-[61px] z-[1]">
                    From-To
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1056px] h-[3px] relative border-gainsboro-200 border-t-[3px] border-solid box-border opacity-[0.5] max-w-full z-[1]" />
        <div className="w-[1083.6px] flex flex-row items-start justify-end py-0 px-[57px] box-border">
          <div className="rounded-md bg-lavenderblush flex flex-row items-start justify-start pt-[8.3px] px-[9px] pb-[7.8px] z-[1]">
            <div className="h-[25.1px] w-[64.6px] relative rounded-md bg-lavenderblush hidden" />
            <div className="relative font-extralight inline-block min-w-[46px] z-[1]">
              Delete
            </div>
          </div>
        </div>
        <div className="w-[1059px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-end justify-start gap-[14.7px] max-w-full">
            <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border opacity-[0.6] z-[1]" />
            <div className="flex flex-row items-start justify-end py-0 px-7">
              <div className="rounded-md bg-lavenderblush flex flex-row items-start justify-start pt-[8.3px] px-[9px] pb-0 z-[1]">
                <div className="h-[25.1px] w-[64.6px] relative rounded-md bg-lavenderblush hidden" />
                <div className="relative font-extralight inline-block min-w-[46px] z-[2]">
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1059px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
          <div className="h-[38.7px] flex-1 flex flex-col items-end justify-start gap-[13.6px] max-w-full">
            <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border opacity-[0.6] shrink-0 z-[1]" />
            <div className="flex flex-row items-start justify-end py-0 px-7">
              <div className="rounded-md bg-lavenderblush flex flex-row items-start justify-start pt-[8.3px] px-[9px] pb-[7.8px] shrink-0 z-[1]">
                <div className="h-[25.1px] w-[64.6px] relative rounded-md bg-lavenderblush hidden" />
                <div className="relative font-extralight inline-block min-w-[46px] z-[1]">
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1059px] h-px flex flex-row items-start justify-start py-0 pl-[3px] pr-0.5 box-border max-w-full">
          <div className="self-stretch flex-1 relative border-gainsboro-200 border-t-[1px] border-solid box-border opacity-[0.6] max-w-full z-[1]" />
        </div>
      </div>
      <div className="self-stretch h-[3px] relative border-gainsboro-200 border-t-[3px] border-solid box-border opacity-[0.5] z-[1]" />
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;
