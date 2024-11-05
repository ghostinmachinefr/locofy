import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import GroupComponent2 from "../components/GroupComponent2";
import "./Screen4UPF.css";

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
    <div className="screen-4-upf">
      <section className="rectangle-parent17">
        <div className="frame-child35" />
        <img
          className="image-1589-icon2"
          loading="lazy"
          alt=""
          src="/image-1589@2x.png"
        />
        <div className="navigation-wrapper">
          <div className="navigation">
            <img
              className="navigation-child"
              loading="lazy"
              alt=""
              src="/line-601.svg"
            />
            <div className="menu">
              <div className="sub-menu">
                <img
                  className="image-1584-icon2"
                  loading="lazy"
                  alt=""
                  src="/image-1584@2x.png"
                />
                <div className="option-label">
                  <div className="user-userdomainin2">
                    <p className="user2">User</p>
                    <p className="user2">user@domain.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fast-secure-and-scalable-hosti" />
      <section className="main-content">
        <div className="dashboard-content1">
          <div className="dashboard-header">
            <div className="dashboard-title">
              <div className="title-container">
                <a className="dashboard3">Dashboard</a>
                <img
                  className="path-2-icon3"
                  loading="lazy"
                  alt=""
                  src="/path-2.svg"
                />
              </div>
            </div>
            <img
              className="dashboard-header-child"
              loading="lazy"
              alt=""
              src="/group-427318846.svg"
            />
          </div>
        </div>
        <div className="leave-container-parent">
          <div className="leave-container">
            <div className="leave-balance">
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
              <div className="frame-parent12">
                <div className="rectangle-parent18">
                  <div className="frame-child36" />
                  <div className="remaining-33">Remaining - 3</div>
                  <div className="used-4-container">
                    <div className="used-43">Used - 4</div>
                    <div className="total-73">Total - 7</div>
                  </div>
                  <div className="full-day-leave2">Full Day leave</div>
                  <div className="frame-parent13">
                    <img
                      className="frame-child37"
                      alt=""
                      src="/group-427318832.svg"
                    />
                    <div className="div3">
                      <span>04</span>
                      <span className="span6">/</span>
                      <span className="span7">07</span>
                    </div>
                  </div>
                  <div className="frame-child38" />
                  <div className="frame-child39" />
                  <div className="frame-child40" />
                </div>
                <div className="july-20236">29 July 2023</div>
                <div className="july-20236">29 July 2023</div>
                <div className="july-20236">29 July 2023</div>
                <div className="date-sent2">Date Sent</div>
                <div className="type4">Type</div>
                <div className="frame-child41" />
                <div className="request-title">
                  <h2 className="request-for-leave5">Request for leave</h2>
                  <div className="request-icon">
                    <img
                      className="reliability-redefined-experie"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                      onClick={onGroupContainerClick}
                    />
                  </div>
                </div>
                <div className="request-form">
                  <div className="form-fields">
                    <div className="field-labels">
                      <h2 className="type5">Type</h2>
                      <h2 className="start-date2">Start Date</h2>
                      <h2 className="end-date2">End date</h2>
                      <h2 className="reason2">{`Reason `}</h2>
                    </div>
                  </div>
                  <div className="input-fields1">
                    <div className="leave-type-input2">
                      <div
                        className="rectangle-parent19"
                        onClick={onGroupContainerClick1}
                      >
                        <div className="frame-child42" />
                        <div className="select-leave-type4">
                          Select leave type
                        </div>
                        <div className="calendar-icon1">
                          <img
                            className="asset-icon"
                            alt=""
                            src="/vector-11.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="leave-type-input3">
                      <div className="rectangle-parent20">
                        <div className="frame-child43" />
                        <input
                          className="dd-mm-yyyy1"
                          placeholder="dd mm yyyy"
                          type="text"
                        />
                        <div className="leave-request-form">
                          <img
                            className="vuesaxboldcalendar-icon4"
                            alt=""
                            src="/vuesaxboldcalendar.svg"
                            onClick={onVuesaxboldcalendarIconClick}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-parent21">
                      <div className="frame-child43" />
                      <div className="select-leave-type4">
                        Select leave type
                      </div>
                      <div className="reason-field">
                        <img
                          className="vuesaxboldcalendar-icon5"
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
          <button className="rectangle-parent22">
            <div className="frame-child45" />
            <div className="leave-request-form">
              <img className="group-icon4" alt="" src="/group.svg" />
            </div>
            <div className="request-for-leave6">{`Request for leave `}</div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Screen4UPF;
