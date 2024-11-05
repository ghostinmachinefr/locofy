import { useCallback } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import GroupComponent from "../components/GroupComponent";
import GroupComponent1 from "../components/GroupComponent1";

const Screen1UPF = () => {
  const onGroupButtonClick = useCallback(() => {
    // Please sync "Screen 4- UPF" to the project
  }, []);

  return (
    <div className="w-full h-[850px] relative bg-whitesmoke overflow-hidden flex flex-col items-end justify-start pt-[27px] pb-[53px] pl-[105px] pr-[106px] box-border gap-[124px] leading-[normal] tracking-[normal] text-left text-sm text-white font-lexend lg:h-auto mq450:gap-[31px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[62px] mq750:pl-[52px] mq750:pr-[53px] mq750:box-border">
      <section className="self-stretch flex flex-col items-start justify-start gap-[19px] shrink-0 max-w-full text-left text-mid text-lightsteelblue font-lexend">
        <FrameComponent4 />
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[46px] max-w-full mq750:gap-[23px]">
          <FrameComponent5 />
          <div className="flex-1 flex flex-col items-start justify-start gap-[26px] min-w-[723px] max-w-full mq1050:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-0 box-border max-w-full">
              <div className="flex-1 flex flex-row items-end justify-center gap-[34px] max-w-full lg:flex-wrap mq750:gap-[17px]">
                <GroupComponent halfDayLeave="Half Day leave" />
                <GroupComponent
                  groupDivMargin="unset"
                  groupDivPosition="unset"
                  groupDivTop="unset"
                  groupDivLeft="unset"
                  groupDivWidth="unset"
                  groupDivRight="unset"
                  groupDivFlex="0.756"
                  groupDivMinWidth="195px"
                  halfDayLeave="Full Day leave"
                  halfDayLeaveDisplay="unset"
                  halfDayLeaveMinWidth="unset"
                  groupDivFlex1="1"
                />
                <GroupComponent
                  groupDivMargin="unset"
                  groupDivPosition="unset"
                  groupDivTop="unset"
                  groupDivLeft="unset"
                  groupDivWidth="unset"
                  groupDivRight="unset"
                  groupDivFlex="0.72"
                  groupDivMinWidth="195px"
                  halfDayLeave="RH leave"
                  halfDayLeaveDisplay="unset"
                  halfDayLeaveMinWidth="unset"
                  groupDivFlex1="unset"
                />
                <div className="flex-1 flex flex-col items-end justify-start gap-[15px] min-w-[235px] max-w-[255px]">
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] w-[178px] h-[41px] relative"
                    onClick={onGroupButtonClick}
                  >
                    <div className="absolute top-[0px] left-[0px] rounded-3xs bg-mediumslateblue flex flex-row items-start justify-start pt-[11px] pb-2.5 pl-[34px] pr-2 box-border whitespace-nowrap w-full h-full">
                      <div className="h-[41px] w-[178px] relative rounded-3xs bg-mediumslateblue hidden" />
                      <a className="[text-decoration:none] relative text-base font-lexend text-white text-left z-[1]">{`Request for leave `}</a>
                    </div>
                    <img
                      className="absolute h-[31.46%] w-[6.18%] top-[34.15%] right-[85.96%] bottom-[34.39%] left-[7.87%] max-w-full overflow-hidden max-h-full z-[2]"
                      alt=""
                      src="/group.svg"
                    />
                  </button>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[5px]">
                    <div className="flex-1 rounded-mini bg-white flex flex-row items-end justify-start pt-[31px] px-[35px] pb-[30px] gap-[18.5px]">
                      <div className="h-[134px] w-[250px] relative rounded-mini bg-white hidden" />
                      <div className="flex flex-row items-start justify-start py-[23px] pl-[9px] pr-1.5 relative">
                        <img
                          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                          loading="lazy"
                          alt=""
                          src="/group-427318832-3.svg"
                        />
                        <div className="relative font-light z-[2]">
                          <span>04</span>
                          <span className="text-darkslateblue-100">/</span>
                          <span className="text-mediumslateblue">07</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px] text-base text-darkslateblue-100">
                        <div className="flex flex-col items-start justify-start gap-[7px]">
                          <div className="relative font-light inline-block min-w-[76px] z-[1]">
                            Comp Off
                          </div>
                          <div className="flex flex-row items-start justify-start gap-1 text-xs text-darkslateblue-300">
                            <div className="h-[43px] w-[9px] relative">
                              <div className="absolute top-[0px] left-[1px] rounded-[50%] bg-lightsteelblue w-2 h-2 z-[1]" />
                              <div className="absolute top-[18px] left-[0px] rounded-[50%] bg-mediumslateblue w-2 h-2 z-[1]" />
                              <div className="absolute top-[35px] left-[0px] rounded-[50%] bg-darkslateblue-100 w-2 h-2 z-[1]" />
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[9.5px]">
                              <div className="flex flex-row items-start justify-start py-0 pl-px pr-0 text-2xs">
                                <div className="relative font-light z-[1]">
                                  Remaining - 3
                                </div>
                              </div>
                              <div className="h-2 relative font-light inline-block shrink-0 z-[1]">
                                Used - 4
                              </div>
                              <div className="h-2 relative font-light inline-block shrink-0 z-[1]">
                                Total - 7
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <GroupComponent1 />
          </div>
        </div>
      </section>
      <div className="flex flex-row items-start justify-end py-0 px-[17px]">
        <div className="rounded-3xs bg-mediumslateblue flex flex-row items-start justify-start pt-3 pb-[11px] pl-[19px] pr-[17px] gap-[14.1px] shrink-0">
          <div className="h-[41px] w-[178px] relative rounded-3xs bg-mediumslateblue hidden" />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-[14.9px] h-[15.9px] relative z-[1]"
              alt=""
              src="/group-8866.svg"
            />
          </div>
          <div className="relative font-light inline-block min-w-[113px] z-[1]">
            View Attendence
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen1UPF;
