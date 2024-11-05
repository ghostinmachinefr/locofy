import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent1 from "../components/GroupComponent1";

const Screen2UPF = () => {
  return (
    <div className="w-full h-[850px] relative bg-whitesmoke overflow-hidden flex flex-col items-end justify-start pt-[27px] pb-[53px] pl-[105px] pr-[106px] box-border gap-[124px] leading-[normal] tracking-[normal] text-left text-sm text-white font-lexend mq450:gap-[31px] mq450:pl-5 mq450:pr-5 mq450:box-border mq975:gap-[62px] mq975:pl-[52px] mq975:pr-[53px] mq975:box-border mq700:h-auto">
      <section className="self-stretch flex flex-col items-start justify-start gap-[7px] shrink-0 max-w-full">
        <FrameComponent2 />
        <div className="self-stretch flex flex-col items-end justify-start gap-[26px] max-w-full">
          <FrameComponent1 />
          <div className="flex flex-row items-start justify-end py-0 px-1.5 box-border max-w-full">
            <GroupComponent1
              leaveRequestsMargin="0"
              frameDivAlignSelf="unset"
              frameDivWidth1="817px"
              calendarHeaderWidth="unset"
              calendarFooterAlignSelf="unset"
              calendarFooterWidth="1083.6px"
            />
          </div>
        </div>
      </section>
      <img
        className="w-[11px] h-[12.9px] relative hidden"
        alt=""
        src="/group.svg"
      />
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

export default Screen2UPF;
