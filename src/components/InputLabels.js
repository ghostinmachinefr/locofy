import { useMemo } from "react";
import PropTypes from "prop-types";

const InputLabels = ({
  className = "",
  email,
  emailTextDecoration,
  emailMinWidth,
}) => {
  const emailStyle = useMemo(() => {
    return {
      textDecoration: emailTextDecoration,
      minWidth: emailMinWidth,
    };
  }, [emailTextDecoration, emailMinWidth]);

  return (
    <div
      className={`self-stretch flex-1 flex flex-col items-start justify-start gap-[9px] text-left text-base text-darkslateblue-100 font-lexend ${className}`}
    >
      <a
        className="[text-decoration:none] relative text-[inherit] inline-block min-w-[45px] z-[1]"
        style={emailStyle}
      >
        {email}
      </a>
      <div className="self-stretch flex-1 rounded-3xs bg-white border-gainsboro-100 border-[2px] border-solid flex flex-row items-start justify-start pt-1 px-4 pb-[5px] z-[1]">
        <div className="h-[35px] w-[249px] relative rounded-3xs bg-white border-gainsboro-100 border-[2px] border-solid box-border hidden" />
        <input
          className="w-[45px] [border:none] [outline:none] font-lexend text-base bg-[transparent] relative text-darkgray text-left inline-block p-0 z-[2]"
          placeholder="Value"
          type="text"
        />
      </div>
    </div>
  );
};

InputLabels.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,

  /** Style props */
  emailTextDecoration: PropTypes.string,
  emailMinWidth: PropTypes.string,
};

export default InputLabels;
