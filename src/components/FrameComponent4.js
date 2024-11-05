import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/screen-2-upf");
  }, [navigate]);

  return (
    <header
      className={`self-stretch shadow-[0px_8px_28px_rgba(72,_89,_102,_0.05)] rounded-mini bg-white flex flex-row items-start justify-between py-4 pl-5 pr-[57px] box-border top-[0] z-[99] sticky max-w-full gap-5 text-left text-xs text-darkslateblue-100 font-lexend lg:pr-7 lg:box-border ${className}`}
    >
      <div className="h-[83px] w-[1229px] relative shadow-[0px_8px_28px_rgba(72,_89,_102,_0.05)] rounded-mini bg-white hidden max-w-full" />
      <img
        className="h-[51px] w-[139px] relative rounded-mini object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/image-1589@2x.png"
      />
      <div className="w-44 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-end justify-between gap-5">
          <img
            className="h-10 w-0 relative object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/line-60.svg"
          />
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
            <div
              className="flex flex-row items-start justify-start gap-[5px] cursor-pointer z-[1]"
              onClick={onGroupContainerClick}
            >
              <img
                className="h-[35px] w-[35px] relative rounded-81xl object-cover"
                loading="lazy"
                alt=""
                src="/image-1584@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="relative font-light">
                  <p className="m-0">User</p>
                  <p className="m-0">user@domain.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
