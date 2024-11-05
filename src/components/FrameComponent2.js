import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`self-stretch shadow-[0px_8px_28px_rgba(72,_89,_102,_0.05)] rounded-mini bg-white flex flex-row items-start justify-between py-4 pl-5 pr-[15px] box-border max-w-full gap-5 text-left text-xs text-darkslateblue-100 font-lexend mq700:flex-wrap ${className}`}
    >
      <div className="h-[83px] w-[1229px] relative shadow-[0px_8px_28px_rgba(72,_89,_102,_0.05)] rounded-mini bg-white hidden max-w-full" />
      <img
        className="h-[51px] w-[139px] relative rounded-mini object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/image-1589@2x.png"
      />
      <div className="w-[217.6px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-end justify-between gap-5">
          <img
            className="h-10 w-0 relative object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/line-601.svg"
          />
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
            <div className="flex flex-row items-start justify-start gap-[22px]">
              <div className="flex flex-row items-start justify-start gap-[5px] shrink-0">
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
              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                <img
                  className="w-[19.6px] h-[11.3px] relative shrink-0 cursor-pointer z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vector1.svg"
                  onClick={onVectorIconClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
