import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import GroupComponent2 from "../components/GroupComponent2";

const Screen4UPF = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/screen-5-upf");
  }, [navigate]);

  const onVuesaxboldcalendarIconClick = useCallback(() => {
    navigate("/screen-6-upf");
  }, [navigate]);

  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[27px] px-[105px] pb-[53px] box-border gap-0.5 leading-[normal] tracking-[normal] mq750:pl-[52px] mq750:pr-[52px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
      <section className="self-stretch shadow-[0px_8px_28px_rgba(72,_89,_102,_0.05)] rounded-mini bg-white flex flex-row items-start justify-between py-4 pl-5 pr-[57px] box-border max-w-full gap-5 text-left text-xs text-darkslateblue-100 font-lexend lg:pr-7 lg:box-border mq750:flex-wrap">
        <div className="h-[83px] w-[1229px] relative shadow-[0px_8px_28px_rgba(72,_89,_102,_0.05)] rounded-mini bg-white hidden max-w-full" />
        <img
          className="h-[51px] w-[139px] relative rounded-mini object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-1589@2x.png"
        />
        <div className="w-44 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-end justify-between gap-5">
            <img
              className="h-10 w-0 relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/line-601.svg"
            />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
              <div className="flex flex-row items-start justify-start gap-[5px]">
                <img
                  className="h-[35px] w-[35px] relative rounded-81xl object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-1584@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <div className="relative font-light z-[1]">
                    <p className="m-0">User</p>
                    <p className="m-0">user@domain.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-lavender z-[3]" />
      <section className="self-stretch h-[685px] flex flex-row items-start justify-start gap-[46px] max-w-full text-left text-2xs text-mediumslateblue font-lexend mq750:gap-[23px]">
        <div className="h-[159px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[47px]">
            <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0">
              <div className="flex flex-row items-start justify-start gap-0.5">
                <a className="[text-decoration:none] relative leading-[15px] font-light text-[inherit]">
                  Dashboard
                </a>
                <img
                  className="h-2 w-2 relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/path-2.svg"
                />
              </div>
            </div>
            <img
              className="w-[68px] flex-1 relative max-h-full"
              loading="lazy"
              alt=""
              src="/group-427318846.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-end justify-start pt-0 px-0 pb-[60px] box-border relative max-w-full text-sm-9 text-darkslateblue-300 mq1050:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[131px] box-border max-w-full mq750:pr-[65px] mq750:box-border mq450:pr-5 mq450:box-border">
            <div className="w-[495px] flex flex-row items-start justify-start relative max-w-full">
              <GroupComponent
                groupDivMargin="0 !important"
                groupDivPosition="absolute"
                groupDivTop="73px"
                groupDivLeft="-247px"
                groupDivWidth="250px"
                groupDivRight="unset"
                groupDivFlex="unset"
                groupDivMinWidth="unset"
                halfDayLeave="Half Day leave"
                halfDayLeaveDisplay="inline-block"
                halfDayLeaveMinWidth="112px"
                groupDivFlex1="1"
                halfDayInfoFlex="1"
                halfDayStatusAlignSelf="stretch"
              />
              <GroupComponent
                groupDivMargin="0 !important"
                groupDivPosition="absolute"
                groupDivTop="73px"
                groupDivLeft="unset"
                groupDivWidth="250px"
                groupDivRight="-96px"
                groupDivFlex="unset"
                groupDivMinWidth="unset"
                halfDayLeave="RH leave"
                halfDayLeaveDisplay="unset"
                halfDayLeaveMinWidth="unset"
                groupDivFlex1="unset"
                halfDayInfoFlex="unset"
                halfDayStatusAlignSelf="unset"
              />
              <div className="flex-1 shadow-[5px_4px_50px_5px_rgba(51,_84,_244,_0.3)] rounded-6xl bg-white flex flex-col items-start justify-start pt-[30px] px-[21px] pb-[34px] box-border gap-[29px] max-w-full z-[4] mq750:pt-5 mq750:pb-[22px] mq750:box-border">
                <div className="w-[250px] h-[134px] relative hidden text-2xs">
                  <div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-full h-full" />
                  <div className="absolute top-[58px] left-[133px] font-light inline-block min-w-[72px]">
                    Remaining - 3
                  </div>
                  <div className="absolute top-[76px] left-[132px] w-12 h-[25px] text-xs">
                    <div className="absolute top-[0px] left-[0px] font-light inline-block min-w-[48px]">
                      Used - 4
                    </div>
                    <div className="absolute top-[17px] left-[0px] font-light inline-block min-w-[45px]">
                      Total - 7
                    </div>
                  </div>
                  <div className="absolute top-[31px] left-[119px] text-base font-light text-darkslateblue-100 inline-block min-w-[105px]">
                    Full Day leave
                  </div>
                  <div className="absolute top-[37px] left-[35px] w-[65.5px] h-[67px] text-mid text-lightsteelblue">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full"
                      alt=""
                      src="/group-427318832.svg"
                    />
                    <div className="absolute top-[23px] left-[9px] font-light inline-block min-w-[49px]">
                      <span>04</span>
                      <span className="text-darkslateblue-100">/</span>
                      <span className="text-mediumslateblue">07</span>
                    </div>
                  </div>
                  <div className="absolute top-[58px] left-[120px] rounded-[50%] bg-lightsteelblue w-2 h-2" />
                  <div className="absolute top-[76px] left-[119px] rounded-[50%] bg-mediumslateblue w-2 h-2" />
                  <div className="absolute top-[93px] left-[119px] rounded-[50%] bg-darkslateblue-100 w-2 h-2" />
                </div>
                <div className="relative hidden min-w-[83px]">29 July 2023</div>
                <div className="relative hidden min-w-[83px]">29 July 2023</div>
                <div className="relative hidden min-w-[83px]">29 July 2023</div>
                <div className="relative font-medium hidden min-w-[68px]">
                  Date Sent
                </div>
                <div className="relative font-medium hidden min-w-[36px]">
                  Type
                </div>
                <div className="w-[495px] h-[625px] relative shadow-[5px_4px_50px_5px_rgba(51,_84,_244,_0.3)] rounded-6xl bg-white hidden max-w-full" />
                <div className="w-[443px] flex flex-row items-start justify-between gap-5 max-w-full text-11xl text-darkslateblue-100">
                  <h2 className="m-0 relative text-inherit font-normal font-[inherit] z-[1] mq1050:text-5xl mq450:text-lg">
                    Request for leave
                  </h2>
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <img
                      className="w-[25px] h-[25px] relative cursor-pointer z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                      onClick={onGroupContainerClick}
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[18px] text-7xl text-dimgray mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 mq750:flex-1">
                    <div className="flex flex-col items-start justify-start gap-16">
                      <h2 className="m-0 relative text-inherit font-normal font-[inherit] inline-block min-w-[62px] z-[1] mq450:text-2xl">
                        Type
                      </h2>
                      <h2 className="m-0 relative text-inherit font-normal font-[inherit] z-[1] mq450:text-2xl">
                        Start Date
                      </h2>
                      <h2 className="m-0 relative text-inherit font-normal font-[inherit] inline-block min-w-[115px] z-[1] mq450:text-2xl">
                        End date
                      </h2>
                      <h2 className="m-0 relative text-inherit font-normal font-[inherit] inline-block min-w-[95px] z-[1] mq450:text-2xl">{`Reason `}</h2>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[42px] text-lg mq450:gap-[21px]">
                    <div className="self-stretch h-[57px] flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border">
                      <div
                        className="self-stretch flex-1 rounded-3xs bg-white border-mediumslateblue border-[1.5px] border-solid flex flex-row items-start justify-between py-[11px] px-3.5 gap-5 cursor-pointer z-[1]"
                        onClick={onGroupContainerClick1}
                      >
                        <div className="h-[49px] w-[303px] relative rounded-3xs bg-white border-mediumslateblue border-[1.5px] border-solid box-border hidden" />
                        <div className="relative font-extralight z-[1]">
                          Select leave type
                        </div>
                        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                          <img
                            className="w-[19.6px] h-[11px] relative z-[1]"
                            alt=""
                            src="/vector-11.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-14 flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border">
                      <div className="self-stretch flex-1 rounded-3xs bg-white border-gainsboro-100 border-[2px] border-solid flex flex-row items-start justify-between pt-2.5 pb-[9px] pl-3.5 pr-3 gap-5 z-[1]">
                        <div className="h-[49px] w-[303px] relative rounded-3xs bg-white border-gainsboro-100 border-[2px] border-solid box-border hidden" />
                        <input
                          className="w-[103px] [border:none] [outline:none] font-extralight font-lexend text-lg bg-[transparent] relative text-dimgray text-left inline-block p-0 z-[1]"
                          placeholder="dd mm yyyy"
                          type="text"
                        />
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                          <img
                            className="w-[21px] h-[21px] relative cursor-pointer z-[2]"
                            alt=""
                            src="/vuesaxboldcalendar.svg"
                            onClick={onVuesaxboldcalendarIconClick}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[49px] rounded-3xs bg-white border-gainsboro-100 border-[2px] border-solid box-border flex flex-row items-start justify-between pt-[11px] pb-[9px] pl-3.5 pr-3 gap-5 z-[1]">
                      <div className="h-[49px] w-[303px] relative rounded-3xs bg-white border-gainsboro-100 border-[2px] border-solid box-border hidden" />
                      <div className="relative font-extralight z-[1]">
                        Select leave type
                      </div>
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <img
                          className="w-[21px] h-[21px] relative z-[2]"
                          alt=""
                          src="/vuesaxboldcalendar.svg"
                        />
                      </div>
                    </div>
                    <FrameComponent __PH1__={onGroupContainerClick} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GroupComponent2 />
          <button className="cursor-pointer [border:none] pt-[11px] pb-2.5 pl-3.5 pr-[7px] bg-mediumslateblue rounded-3xs flex flex-row items-start justify-start gap-[9px] mt-[-533px]">
            <div className="h-[41px] w-[178px] relative rounded-3xs bg-mediumslateblue hidden" />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="w-[11px] h-[12.9px] relative z-[2]"
                alt=""
                src="/group.svg"
              />
            </div>
            <div className="relative text-base font-lexend text-white text-left z-[1]">{`Request for leave `}</div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Screen4UPF;
