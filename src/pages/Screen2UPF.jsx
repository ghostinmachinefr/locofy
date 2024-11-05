import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent1 from "../components/GroupComponent1";
import "./Screen2UPF.css";

const Screen2UPF = () => {
  return (
    <div className="screen-2-upf">
      <section className="frame-parent5">
        <FrameComponent2 />
        <div className="left-sidebar">
          <FrameComponent1 />
          <div className="left-sidebar-inner">
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
      <img className="group-icon2" alt="" src="/group.svg" />
      <div className="screen-2-upf-inner">
        <div className="rectangle-parent7">
          <div className="frame-child16" />
          <div className="frame-wrapper5">
            <img className="frame-child17" alt="" src="/group-8866.svg" />
          </div>
          <div className="view-attendence3">View Attendence</div>
        </div>
      </div>
    </div>
  );
};

export default Screen2UPF;
