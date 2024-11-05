import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "", __PH1__ }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-7 text-left text-3xl text-white font-lexend ${className}`}
    >
      <textarea
        className="border-gainsboro-100 border-[2px] border-solid bg-white h-[127px] w-auto [outline:none] self-stretch rounded-3xs box-border flex flex-row items-start justify-start p-3.5 font-lexend font-extralight text-lg text-dimgray z-[1]"
        placeholder="Enter your reason"
        rows={6}
        cols={15}
      />
      <div className="flex flex-row items-start justify-end py-0 px-0.5">
        <div
          className="rounded-3xs bg-mediumslateblue flex flex-row items-start justify-start pt-[10.7px] pb-[15.4px] pl-[38px] pr-[34px] cursor-pointer z-[1]"
          onClick={__PH1__}
        >
          <div className="h-[51px] w-[135px] relative rounded-3xs bg-mediumslateblue hidden" />
          <h3 className="m-0 relative text-inherit leading-[24.9px] font-normal font-[inherit] inline-block min-w-[63.8px] z-[1] mq450:text-lg mq450:leading-[20px]">
            Done
          </h3>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Action props */
  __PH1__: PropTypes.func,
};

export default FrameComponent;
