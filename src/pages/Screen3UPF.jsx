import FrameComponent3 from "../components/FrameComponent3";
import RequestContent from "../components/RequestContent";
import "./Screen3UPF.css";

const Screen3UPF = () => {
  return (
    <div className="screen-3-upf">
      <img className="path-2-icon2" loading="lazy" alt="" src="/path-2.svg" />
      <a className="dashboard2">Dashboard</a>
      <img
        className="screen-3-upf-child"
        loading="lazy"
        alt=""
        src="/group-427318846.svg"
      />
      <FrameComponent3 />
      <img className="screen-3-upf-item" alt="" src="/rectangle-64501.svg" />
      <section className="request-content-parent">
        <RequestContent />
        <div className="full-day-filter1">
          <div className="full-day-filter-item" />
        </div>
      </section>
    </div>
  );
};

export default Screen3UPF;
