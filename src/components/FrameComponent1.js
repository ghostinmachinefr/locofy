import { useCallback } from "react";
import GroupComponent from "./GroupComponent";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogInIconClick = useCallback(() => {
    navigate("/login-user");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[13px] max-w-full text-left text-2xs text-mediumslateblue font-lexend ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[623px] max-w-full mq975:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[47px] mq700:gap-[23px]">
          <div className="h-2 flex flex-row items-start justify-start py-0 px-[3px] box-border">
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
          <div className="self-stretch flex flex-row items-start justify-start gap-11 mq975:flex-wrap mq700:gap-[22px]">
            <div className="h-[86px] w-[76px] flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/group-427318846.svg"
              />
            </div>
            <GroupComponent
              groupDivMargin="unset"
              groupDivPosition="unset"
              groupDivTop="unset"
              groupDivLeft="unset"
              groupDivWidth="unset"
              groupDivRight="unset"
              groupDivFlex="1"
              groupDivMinWidth="162px"
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
              groupDivMinWidth="162px"
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
              groupDivMinWidth="162px"
              halfDayLeave="RH leave"
              halfDayLeaveDisplay="unset"
              halfDayLeaveMinWidth="unset"
              groupDivFlex1="unset"
              halfDayInfoFlex="unset"
              halfDayStatusAlignSelf="unset"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-start text-xs text-darkslateblue-100">
        <div className="self-stretch shadow-[0px_8px_28px_rgba(125,_125,_125,_0.25)] rounded-mini bg-white flex flex-col items-start justify-start pt-3 px-3.5 pb-[25px] gap-[17px] z-[3]">
          <div className="w-[258px] h-[126px] relative shadow-[0px_8px_28px_rgba(125,_125,_125,_0.25)] rounded-mini bg-white hidden" />
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <div className="flex flex-row items-start justify-start gap-1.5">
              <img
                className="h-[35px] w-[35px] relative rounded-81xl object-cover z-[4]"
                loading="lazy"
                alt=""
                src="/image-1584@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="relative font-light z-[4]">
                  <p className="m-0">User</p>
                  <p className="m-0">user@domain.in</p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch h-0.5 relative max-w-full overflow-hidden shrink-0 z-[4]"
            loading="lazy"
            alt=""
            src="/line-67.svg"
          />
          <div className="flex flex-row items-start justify-start py-0 px-[9px]">
            <div className="flex flex-row items-start justify-start gap-3.5">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 cursor-pointer z-[4]"
                loading="lazy"
                alt=""
                src="/log-in.svg"
                onClick={onLogInIconClick}
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div
                  className="relative font-light inline-block min-w-[51px] cursor-pointer z-[4]"
                  onClick={onLogInIconClick}
                >
                  Sign Out
                </div>
              </div>
            </div>
          </div>
        </div>
        <input
          className="w-[190px] [border:none] [outline:none] bg-mediumslateblue rounded-3xs flex flex-row items-start justify-end pt-[11px] px-10 pb-2.5 box-border font-lexend text-base text-white mt-[-39px]"
          placeholder="Request for leave "
          type="text"
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
