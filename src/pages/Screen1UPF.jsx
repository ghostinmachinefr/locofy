import { useCallback } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import GroupComponent from "../components/GroupComponent";
import GroupComponent1 from "../components/GroupComponent1";
import "./Screen1UPF.css";

const Screen1UPF = () => {
  const onGroupButtonClick = useCallback(() => {
    // Please sync "Screen 4- UPF" to the project
  }, []);

  return (
    <div className="screen-1-upf">
      <section className="frame-parent">
        <FrameComponent4 />
        <div className="frame-group">
          <FrameComponent5 />
          <div className="frame-container">
            <div className="leave-type-selection-wrapper">
              <div className="leave-type-selection">
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
                <div className="frame-div">
                  <button className="group-button" onClick={onGroupButtonClick}>
                    <div className="rectangle-parent">
                      <div className="frame-child" />
                      <a className="request-for-leave">{`Request for leave `}</a>
                    </div>
                    <img className="group-icon" alt="" src="/group.svg" />
                  </button>
                  <div className="frame-wrapper">
                    <div className="rectangle-group">
                      <div className="frame-item" />
                      <div className="comp-off-title">
                        <img
                          className="comp-off-title-child"
                          loading="lazy"
                          alt=""
                          src="/group-427318832-3.svg"
                        />
                        <div className="div">
                          <span>04</span>
                          <span className="span">/</span>
                          <span className="span1">07</span>
                        </div>
                      </div>
                      <div className="comp-off-content">
                        <div className="comp-off-data">
                          <div className="comp-off">Comp Off</div>
                          <div className="comp-off-status">
                            <div className="ellipse-parent">
                              <div className="frame-inner" />
                              <div className="ellipse-div" />
                              <div className="frame-child1" />
                            </div>
                            <div className="frame-parent1">
                              <div className="remaining-3-wrapper">
                                <div className="remaining-3">Remaining - 3</div>
                              </div>
                              <div className="used-4">Used - 4</div>
                              <div className="used-4">Total - 7</div>
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
      <div className="screen-1-upf-inner">
        <div className="rectangle-container">
          <div className="frame-child" />
          <div className="frame-wrapper1">
            <img className="frame-child2" alt="" src="/group-8866.svg" />
          </div>
          <div className="view-attendence">View Attendence</div>
        </div>
      </div>
    </div>
  );
};

export default Screen1UPF;
