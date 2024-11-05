import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div
      className={`h-[142px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-left text-2xs text-mediumslateblue font-lexend ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[47px]">
        <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0">
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
        <img
          className="w-[68px] flex-1 relative max-h-full"
          loading="lazy"
          alt=""
          src="/group-427318846.svg"
        />
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
