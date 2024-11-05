import { useCallback } from "react";
import GroupComponent from "../components/GroupComponent";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import "./Screen6UPF.css";

const Screen6UPF = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onVuesaxboldcalendarIconClick = useCallback(() => {
    navigate("/screen-4-upf");
  }, [navigate]);

  return (
    <div className="screen-6-upf">
      <section className="rectangle-parent8">
        <div className="frame-child18" />
        <img
          className="image-1589-icon1"
          loading="lazy"
          alt=""
          src="/image-1589@2x.png"
        />
        <div className="frame-wrapper6">
          <div className="vector-group">
            <img
              className="frame-child19"
              loading="lazy"
              alt=""
              src="/line-601.svg"
            />
            <div className="frame-wrapper7">
              <div className="image-1584-group">
                <img
                  className="image-1584-icon1"
                  loading="lazy"
                  alt=""
                  src="/image-1584@2x.png"
                />
                <div className="user-userdomainin-container">
                  <div className="user-userdomainin1">
                    <p className="user1">User</p>
                    <p className="user1">user@domain.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img className="screen-6-upf-child" alt="" src="/rectangle-6450.svg" />
      <section className="frame-parent6">
        <div className="frame-wrapper8">
          <div className="frame-parent7">
            <div className="frame-wrapper9">
              <div className="dashboard-parent">
                <a className="dashboard1">Dashboard</a>
                <img
                  className="path-2-icon1"
                  loading="lazy"
                  alt=""
                  src="/path-2.svg"
                />
              </div>
            </div>
            <img
              className="frame-child20"
              loading="lazy"
              alt=""
              src="/group-427318846.svg"
            />
          </div>
        </div>
        <div className="user-container-parent">
          <div className="user-container">
            <div className="frame-parent8">
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
              <div className="frame-parent9">
                <div className="rectangle-parent9">
                  <div className="frame-child21" />
                  <div className="remaining-32">Remaining - 3</div>
                  <div className="used-4-group">
                    <div className="used-42">Used - 4</div>
                    <div className="total-72">Total - 7</div>
                  </div>
                  <div className="full-day-leave1">Full Day leave</div>
                  <div className="frame-parent10">
                    <img
                      className="frame-child22"
                      alt=""
                      src="/group-427318832.svg"
                    />
                    <div className="div2">
                      <span>04</span>
                      <span className="span4">/</span>
                      <span className="span5">07</span>
                    </div>
                  </div>
                  <div className="frame-child23" />
                  <div className="frame-child24" />
                  <div className="frame-child25" />
                </div>
                <div className="july-20233">29 July 2023</div>
                <div className="july-20233">29 July 2023</div>
                <div className="july-20233">29 July 2023</div>
                <div className="date-sent1">Date Sent</div>
                <div className="frame-child26" />
                <div className="request-for-leave-group">
                  <h2 className="request-for-leave3">Request for leave</h2>
                  <div className="vector-wrapper">
                    <img
                      className="vector-icon"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                      onClick={onVectorIconClick}
                    />
                  </div>
                </div>
                <div className="frame-parent11">
                  <div className="frame-wrapper10">
                    <div className="type-parent">
                      <h2 className="type2">Type</h2>
                      <h2 className="start-date1">Start Date</h2>
                      <h2 className="end-date1">End date</h2>
                      <h2 className="reason1">{`Reason `}</h2>
                    </div>
                  </div>
                  <div className="input-fields">
                    <div className="leave-type-input">
                      <div className="rectangle-parent10">
                        <div className="frame-child27" />
                        <div className="select-leave-type2">
                          Select leave type
                        </div>
                        <div className="dropdown-calendar">
                          <img
                            className="calendar-icon"
                            alt=""
                            src="/vector-11.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="leave-type-input1">
                      <div className="rectangle-parent11">
                        <div className="frame-child28" />
                        <div className="ddmmyyyy">dd/mm/yyyy</div>
                        <div className="vuesaxboldcalendar-container">
                          <img
                            className="vuesaxboldcalendar-icon2"
                            alt=""
                            src="/vuesaxboldcalendar.svg"
                            onClick={onVuesaxboldcalendarIconClick}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-parent12">
                      <div className="frame-child29" />
                      <div className="select-leave-type2">
                        Select leave type
                      </div>
                      <div className="vuesaxboldcalendar-frame">
                        <img
                          className="vuesaxboldcalendar-icon3"
                          alt=""
                          src="/vuesaxboldcalendar.svg"
                        />
                      </div>
                    </div>
                    <FrameComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent13">
            <div className="frame-child30" />
            <div className="header-content-wrapper">
              <div className="header-content">
                <div className="leave-requests">Leave Requests</div>
                <div className="request-id-header">
                  <div className="request-id">Request ID</div>
                </div>
              </div>
            </div>
            <div className="request-table-header">
              <div className="request-table-header-child" />
              <div className="type3">Type</div>
              <div className="request-table-header-item" />
              <div className="request-table-header-inner" />
              <div className="line-div" />
              <div className="request-table-header-child1" />
              <div className="request-table-header-child2" />
              <img
                className="date-and-time-inline-expan"
                alt=""
                src="/date-and-time--inline--expanded-1@2x.png"
              />
            </div>
            <div className="request-row">
              <div className="from-to-parent">
                <div className="from-to">From-To</div>
                <div className="filter-buttons">
                  <div className="full-day-filter">
                    <img
                      className="full-day-filter-child"
                      loading="lazy"
                      alt=""
                      src="/ellipse-235.svg"
                    />
                  </div>
                  <div className="all">
                    <div className="all1">All</div>
                  </div>
                  <div className="full-day-filter">
                    <div className="all-filter-child" />
                  </div>
                  <div className="full-day1">Full Day</div>
                  <div className="full-day-filter">
                    <div className="all-filter-child" />
                  </div>
                  <div className="half-day-row">
                    <div className="half-day-label">
                      <div className="half-day1">Half Day</div>
                      <div className="full-day-filter">
                        <div className="all-filter-child" />
                      </div>
                      <div className="rh">RH</div>
                    </div>
                    <div className="delete-row-wrapper">
                      <div className="delete-row">
                        <div className="delete-row-inner">
                          <div className="rectangle-parent14">
                            <div className="delete-buttons-child" />
                            <div className="delete">Delete</div>
                          </div>
                        </div>
                        <div className="delete-buttons">
                          <div className="delete-buttons-child" />
                          <div className="delete1">Delete</div>
                        </div>
                        <div className="rectangle-parent14">
                          <div className="delete-buttons-child" />
                          <div className="delete">Delete</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="rectangle-parent16">
            <div className="frame-child34" />
            <div className="vuesaxboldcalendar-container">
              <img className="group-icon3" alt="" src="/group.svg" />
            </div>
            <div className="request-for-leave4">{`Request for leave `}</div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Screen6UPF;
