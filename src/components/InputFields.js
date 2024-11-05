import { useCallback } from "react";
import InputLabels from "./InputLabels";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const InputFields = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSignInTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <form
      className={`m-0 self-stretch flex-1 rounded-mini bg-white flex flex-col items-start justify-start pt-[26px] px-6 pb-8 relative gap-[42px] z-[1] mq450:gap-[21px] ${className}`}
    >
      <div className="w-[297px] h-[318px] relative rounded-mini bg-white hidden z-[0]" />
      <a className="[text-decoration:none] absolute !m-[0] top-[26px] right-[-791px] text-base font-lexend text-darkslateblue-100 text-left inline-block min-w-[44px]">
        Email
      </a>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px]">
        <InputLabels email="Email" />
        <InputLabels
          email="Password"
          emailTextDecoration="unset"
          emailMinWidth="76px"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-5">
        <button className="cursor-pointer [border:none] pt-[7px] pb-2 pl-[97px] pr-[95px] bg-mediumslateblue self-stretch rounded-3xs flex flex-row items-start justify-center z-[1] hover:bg-royalblue mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[35px] w-[249px] relative rounded-3xs bg-mediumslateblue hidden" />
          <a
            className="[text-decoration:none] relative text-base font-lexend text-white text-left cursor-pointer z-[2]"
            onClick={onSignInTextClick}
          >
            Sign In
          </a>
        </button>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[59px] pr-[50px]">
          <div className="relative text-base [text-decoration:underline] font-lexend text-darkslateblue-100 text-left z-[1]">
            Forgot password?
          </div>
        </div>
      </div>
    </form>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
};

export default InputFields;
