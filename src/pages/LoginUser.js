import InputFields from "../components/InputFields";

const LoginUser = () => {
  return (
    <div className="w-full h-[850px] relative bg-whitesmoke overflow-hidden flex flex-col items-end justify-start py-[266px] px-[123px] box-border gap-[337px] leading-[normal] tracking-[normal] text-left text-sm text-white font-lexend mq450:gap-[84px] mq450:pl-5 mq450:pr-5 mq450:box-border mq525:gap-[168px] mq525:pl-[61px] mq525:pr-[61px] mq525:box-border">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-1591@2x.png"
      />
      <div className="h-[318px] flex flex-row items-start justify-end py-0 px-1 box-border shrink-0">
        <InputFields />
      </div>
      <div className="w-[178px] rounded-3xs bg-mediumslateblue flex flex-row items-start justify-start pt-[13px] px-[19px] pb-[12.1px] box-border relative">
        <img
          className="h-[15.9px] w-[14.9px] relative"
          alt=""
          src="/group-8866.svg"
        />
        <div className="absolute !m-[0] right-[-1121px] bottom-[11px] font-light inline-block min-w-[112px]">
          View Attendence
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
