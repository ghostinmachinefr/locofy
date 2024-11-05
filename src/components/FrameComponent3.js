import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <header
      className={`absolute top-[27px] left-[105px] w-[1229px] flex flex-row items-end justify-end pt-[21px] px-[57px] pb-[22px] box-border gap-11 max-w-full text-left text-xs text-darkslateblue-100 font-lexend ${className}`}
    >
      <img
        className="h-10 w-0 relative object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/line-601.svg"
      />
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
        <div className="flex flex-row items-start justify-start gap-[5px]">
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
      </div>
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_8px_28px_rgba(72,_89,_102,_0.05)] rounded-mini bg-white" />
        <img
          className="absolute top-[16px] left-[20px] rounded-mini w-[139px] h-[51px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-1589@2x.png"
        />
      </div>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
