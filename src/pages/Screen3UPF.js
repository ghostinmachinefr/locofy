import FrameComponent3 from "../components/FrameComponent3";
import RequestContent from "../components/RequestContent";

const Screen3UPF = () => {
  return (
    <div className="w-full h-[850px] relative bg-whitesmoke overflow-hidden leading-[normal] tracking-[normal] text-left text-2xs text-mediumslateblue font-lexend mq900:h-auto mq900:min-h-[850]">
      <img
        className="absolute top-[130px] left-[168px] w-2 h-2 object-contain"
        loading="lazy"
        alt=""
        src="/path-2.svg"
      />
      <a className="[text-decoration:none] absolute top-[130px] left-[108px] leading-[15px] font-light text-[inherit] inline-block w-[59px] h-2 min-w-[59px]">
        Dashboard
      </a>
      <img
        className="absolute bottom-[579px] left-[105px] w-[68px] h-[86px]"
        loading="lazy"
        alt=""
        src="/group-427318846.svg"
      />
      <FrameComponent3 />
      <img
        className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
        alt=""
        src="/rectangle-64501.svg"
      />
      <section className="absolute top-[48px] left-[222px] w-[1106.6px] flex flex-col items-start justify-start pt-[137px] pb-[63px] pl-[3px] pr-0 box-border gap-[57.2px] max-w-full">
        <RequestContent />
        <div className="w-[1093px] h-[3px] flex flex-row items-start justify-start py-0 pl-5 pr-[17px] box-border max-w-full">
          <div className="self-stretch flex-1 relative border-gainsboro-200 border-t-[3px] border-solid box-border opacity-[0.5] max-w-full z-[1]" />
        </div>
      </section>
    </div>
  );
};

export default Screen3UPF;
