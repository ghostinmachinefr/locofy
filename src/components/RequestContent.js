import { useCallback } from "react";
import GroupComponent from "./GroupComponent";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const RequestContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[19.2px] max-w-full text-left text-base text-darkslateblue-100 font-lexend ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[7px] max-w-full mq900:flex-wrap">
        <div className="flex-1 flex flex-col items-end justify-start py-0 pl-0 pr-3 box-border gap-[15px] min-w-[552px] max-w-full text-xl mq675:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-11 mq675:flex-wrap">
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
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-5 pr-[11px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[79px] max-w-full mq900:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[46px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[59.1px]">
                  <div className="relative font-light z-[1] mq450:text-base">
                    Leave Requests
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pl-6 pr-[23px] text-sm-9 text-darkslateblue-300">
                    <div className="relative font-medium inline-block min-w-[79px] z-[1]">
                      Request ID
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-2.5 min-w-[377px] max-w-full text-sm-9 text-darkslateblue-300 mq450:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[1.5px] max-w-full mq675:flex-wrap">
                  <div className="flex-1 flex flex-row items-start justify-start relative min-w-[322px] max-w-full">
                    <div className="h-[452px] w-[1106px] absolute !m-[0] right-[-361px] bottom-[-287px]">
                      <div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-full h-full">
                        <div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-full h-full hidden" />
                        <div className="absolute top-[101px] right-[16px] border-gainsboro-200 border-t-[1px] border-solid box-border w-[1054px] h-px z-[1]" />
                      </div>
                      <div className="absolute top-[229px] left-[986px] rounded-md bg-lavenderblush w-[64.6px] h-[25.1px] z-[1]" />
                      <img
                        className="absolute top-[62px] left-[789px] w-[9.4px] h-[7.2px] z-[1]"
                        loading="lazy"
                        alt=""
                        src="/ellipse-235.svg"
                      />
                      <div className="absolute top-[62px] left-[932px] rounded-[50%] border-darkslateblue-200 border-[0px] border-solid box-border w-[8.5px] h-[7.2px] z-[1]" />
                      <div className="absolute top-[62px] left-[841px] rounded-[50%] border-darkslateblue-200 border-[0px] border-solid box-border w-[8.5px] h-[7.2px] z-[1]" />
                      <div className="absolute top-[62px] left-[1029px] rounded-[50%] border-darkslateblue-200 border-[0px] border-solid box-border w-[8.5px] h-[7.2px] z-[1]" />
                    </div>
                    <div className="h-[3px] w-[1056px] absolute !m-[0] right-[-334px] bottom-[8.9px] border-gainsboro-200 border-t-[3px] border-solid box-border opacity-[0.5] z-[1]" />
                    <div className="flex-1 shadow-[5px_4px_50px_5px_rgba(51,_84,_244,_0.3)] rounded-6xl bg-white flex flex-col items-start justify-start pt-[30px] px-[21px] pb-[31px] box-border gap-[26px] max-w-full z-[4]">
                      <div className="relative font-medium hidden min-w-[68px]">
                        Date Sent
                      </div>
                      <div className="relative font-medium hidden min-w-[36px]">
                        Type
                      </div>
                      <div className="w-[495px] h-44 relative shadow-[5px_4px_50px_5px_rgba(51,_84,_244,_0.3)] rounded-6xl bg-white hidden max-w-full" />
                      <h2 className="m-0 relative text-11xl font-normal font-[inherit] text-darkslateblue-100 z-[1] mq450:text-lg mq900:text-5xl">
                        Are you sure?
                      </h2>
                      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                        <button
                          className="cursor-pointer border-darkslateblue-100 border-[1px] border-solid pt-[9px] pb-3.5 pl-[49px] pr-11 bg-[transparent] h-[51px] w-[175.4px] rounded-3xs box-border flex flex-row items-start justify-start z-[1] hover:bg-steelblue-200 hover:border-steelblue-100 hover:border-[1px] hover:border-solid hover:box-border"
                          onClick={onGroupButtonClick}
                        >
                          <div className="h-[51px] w-[175.4px] relative rounded-3xs border-darkslateblue-100 border-[1px] border-solid box-border hidden" />
                          <div className="flex-1 relative text-3xl leading-[24.9px] font-lexend text-darkslateblue-100 text-left z-[1] mq450:text-lg mq450:leading-[20px]">
                            Cancel
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] pt-[10.7px] pb-[15.4px] pl-[49px] pr-11 bg-mediumslateblue w-[175.4px] rounded-3xs flex flex-row items-start justify-start box-border z-[1] hover:bg-royalblue">
                          <div className="h-[51px] w-[175.4px] relative rounded-3xs bg-mediumslateblue hidden" />
                          <div className="flex-1 relative text-3xl leading-[24.9px] font-lexend text-white text-left z-[1] mq450:text-lg mq450:leading-[20px]">
                            Delete
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[130px] px-0 pb-0">
                    <div className="relative font-medium inline-block min-w-[61px] z-[1]">
                      From-To
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[67px] px-0 pb-0 text-base text-mediumslateblue">
                    <div className="relative font-light inline-block min-w-[22.7px] z-[1]">
                      All
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pl-10 pr-[39px]">
                  <div className="relative inline-block min-w-[84px] z-[1]">
                    29 July 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[215px] px-0 pb-0 text-darkslateblue-200">
          <div className="relative font-light z-[1]">Full Day</div>
        </div>
        <div className="w-[178.6px] flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-col items-end justify-start gap-[155px]">
            <button className="cursor-pointer [border:none] pt-[11px] pb-2.5 pl-[34px] pr-2 bg-mediumslateblue rounded-3xs flex flex-row items-start justify-start relative hover:bg-royalblue">
              <div className="h-[41px] w-[178px] relative rounded-3xs bg-mediumslateblue hidden z-[0]" />
              <div className="relative text-base font-lexend text-white text-left z-[1]">{`Request for leave `}</div>
              <img
                className="h-[12.9px] w-[11px] absolute !m-[0] top-[14px] left-[14px] z-[2]"
                alt=""
                src="/group.svg"
              />
            </button>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-[23px] pr-0 gap-[100.7px]">
              <div className="self-stretch h-[15.3px] flex flex-row items-start justify-start gap-[29.9px]">
                <div className="relative font-light inline-block min-w-[68.1px] shrink-0 z-[1]">
                  Half Day
                </div>
                <div className="w-[59.6px] relative font-light inline-block shrink-0 z-[1]">
                  RH
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[34px] text-sm-9 text-firebrick">
                <div className="rounded-md bg-lavenderblush flex flex-row items-start justify-start pt-[8.3px] px-[9px] pb-[7.8px] z-[1]">
                  <div className="h-[25.1px] w-[64.6px] relative rounded-md bg-lavenderblush hidden" />
                  <div className="relative font-extralight inline-block min-w-[46px] z-[1]">
                    Delete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-px flex flex-row items-start justify-start py-0 pl-[23px] pr-[27px] box-border max-w-full">
        <div className="self-stretch flex-1 relative border-gainsboro-200 border-t-[1px] border-solid box-border opacity-[0.6] max-w-full z-[1]" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[23px] pr-7 box-border max-w-full text-sm-9 text-darkslateblue-300">
        <div className="flex-1 flex flex-col items-end justify-start gap-[12.6px] max-w-full">
          <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-px box-border gap-[19.1px] max-w-full mq450:h-auto">
            <div className="w-[827px] flex flex-row items-start justify-end py-0 px-[38px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                <div className="relative inline-block min-w-[84px] z-[1]">
                  29 July 2023
                </div>
                <div className="flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0 text-firebrick">
                  <div className="relative font-extralight inline-block min-w-[46px] z-[2]">
                    Delete
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border opacity-[0.6] z-[1]" />
          </div>
          <div className="w-[817px] flex flex-row items-start justify-end py-0 px-7 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div className="relative inline-block min-w-[84px] shrink-0 z-[1]">
                  29 July 2023
                </div>
              </div>
              <div className="rounded-md bg-lavenderblush flex flex-row items-start justify-start pt-[8.3px] px-[9px] pb-[7.8px] shrink-0 z-[1] text-firebrick">
                <div className="h-[25.1px] w-[64.6px] relative rounded-md bg-lavenderblush hidden" />
                <div className="relative font-extralight inline-block min-w-[46px] z-[1]">
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-px flex flex-row items-start justify-start py-0 pl-[23px] pr-[27px] box-border max-w-full">
        <div className="self-stretch flex-1 relative border-gainsboro-200 border-t-[1px] border-solid box-border opacity-[0.6] max-w-full z-[1]" />
      </div>
    </div>
  );
};

RequestContent.propTypes = {
  className: PropTypes.string,
};

export default RequestContent;
