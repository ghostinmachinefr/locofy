import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import GroupComponent2 from "../components/GroupComponent2";
import "./Screen5UPF.css";

const Screen5UPF = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFigureIconClick = useCallback(() => {
    navigate("/screen-4-upf");
  }, [navigate]);

  return (
    <div className="screen-5-upf">
      <section className="frame-section">
        <div className="rectangle-parent1">
          <div className="frame-child3" />
          <img
            className="image-1589-icon"
            loading="lazy"
            alt=""
            src="/image-1589@2x.png"
          />
          <div className="frame-wrapper2">
            <div className="vector-parent">
              <img
                className="line-icon"
                loading="lazy"
                alt=""
                src="/line-601.svg"
              />
              <div className="frame-wrapper3">
                <div className="image-1584-parent">
                  <img
                    className="image-1584-icon"
                    loading="lazy"
                    alt=""
                    src="/image-1584@2x.png"
                  />
                  <div className="user-userdomainin-wrapper">
                    <div className="user-userdomainin">
                      <p className="user">User</p>
                      <p className="user">user@domain.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent2">
          <div className="frame-wrapper4">
            <div className="dashboard-content-parent">
              <div className="dashboard-content">
                <div className="path-content">
                  <a className="dashboard">Dashboard</a>
                  <img
                    className="path-2-icon"
                    loading="lazy"
                    alt=""
                    src="/path-2.svg"
                  />
                </div>
              </div>
              <img
                className="frame-child4"
                loading="lazy"
                alt=""
                src="/group-427318846.svg"
              />
            </div>
          </div>
          <div className="leave-content-parent">
            <div className="leave-content">
              <div className="leave-request-info">
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
                <div className="group-div">
                  <div className="rectangle-parent2">
                    <div className="frame-child5" />
                    <div className="remaining-31">Remaining - 3</div>
                    <div className="used-4-parent">
                      <div className="used-41">Used - 4</div>
                      <div className="total-71">Total - 7</div>
                    </div>
                    <div className="full-day-leave">Full Day leave</div>
                    <div className="frame-parent3">
                      <img
                        className="frame-child6"
                        alt=""
                        src="/group-427318832.svg"
                      />
                      <div className="div1">
                        <span>04</span>
                        <span className="span2">/</span>
                        <span className="span3">07</span>
                      </div>
                    </div>
                    <div className="frame-child7" />
                    <div className="frame-child8" />
                    <div className="frame-child9" />
                  </div>
                  <div className="july-2023">29 July 2023</div>
                  <div className="july-2023">29 July 2023</div>
                  <div className="july-2023">29 July 2023</div>
                  <div className="date-sent">Date Sent</div>
                  <div className="type">Type</div>
                  <div className="frame-child10" />
                  <div className="request-for-leave-parent">
                    <h2 className="request-for-leave1">Request for leave</h2>
                    <div className="backgroundborder-wrapper">
                      <img
                        className="backgroundborder-icon"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                        onClick={onGroupContainerClick}
                      />
                    </div>
                  </div>
                  <div className="form-content">
                    <div className="date-reason-content-wrapper">
                      <div className="date-reason-content">
                        <h2 className="type1">Type</h2>
                        <h2 className="start-date">Start Date</h2>
                        <h2 className="end-date">End date</h2>
                        <h2 className="reason">{`Reason `}</h2>
                      </div>
                    </div>
                    <div className="leave-type-content-parent">
                      <div className="leave-type-content">
                        <div className="frame-parent4">
                          <div className="rectangle-parent3">
                            <div className="frame-child11" />
                            <div className="dd-mm-yyyy">dd mm yyyy</div>
                          </div>
                          <img
                            className="vuesaxboldcalendar-icon"
                            alt=""
                            src="/vuesaxboldcalendar.svg"
                          />
                          <div className="frame-child12" />
                          <div className="type-selection-content">
                            <div className="select-leave-type-parent">
                              <div className="select-leave-type">
                                Select leave type
                              </div>
                              <div className="figure-wrapper">
                                <img
                                  className="figure-icon"
                                  alt=""
                                  src="/vector-1.svg"
                                  onClick={onFigureIconClick}
                                />
                              </div>
                            </div>
                            <img
                              className="type-selection-content-child"
                              alt=""
                              src="/line-68.svg"
                            />
                          </div>
                          <div className="half-day">Half Day</div>
                          <div className="half-day">Full Day</div>
                          <div className="half-day">Restricted Holiday</div>
                        </div>
                        <div className="rectangle-parent4">
                          <div className="frame-child13" />
                          <div className="half-day">Select leave type</div>
                          <div className="vuesaxboldcalendar-wrapper">
                            <img
                              className="vuesaxboldcalendar-icon1"
                              alt=""
                              src="/vuesaxboldcalendar.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <FrameComponent __PH1__={onGroupContainerClick} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <GroupComponent2 />
            <button className="rectangle-parent5">
              <div className="frame-child14" />
              <div className="group-wrapper">
                <img className="group-icon1" alt="" src="/group.svg" />
              </div>
              <div className="request-for-leave2">{`Request for leave `}</div>
            </button>
          </div>
        </div>
      </section>
      <img className="screen-5-upf-child" alt="" src="/rectangle-6450.svg" />
      <div className="screen-5-upf-inner">
        <div className="rectangle-parent6">
          <div className="frame-child14" />
          <div className="attendance-button-icon">
            <img
              className="attendance-button-icon-child"
              alt=""
              src="/group-8866.svg"
            />
          </div>
          <div className="view-attendence2">View Attendence</div>
        </div>
      </div>
    </div>
  );
};

export default Screen5UPF;
