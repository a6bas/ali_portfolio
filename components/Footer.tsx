import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pb-10 mb-[100px] md:mb-5" id="contact">      
      <div className="relative flex flex-col items-center z-10">
        <h1 className="heading max-w-full">
          Elevate Your Digital Presence!
        </h1>
        <h2 className="heading lg:max-w-[45vw] mt-20">
          Ready to transform <span className="text-purple">your ideas into reality?</span> 
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contact me today to explore how my full-stack expertise can drive your success!
        </p>
        <a href="mailto:aliabbas7213@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-14 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Syed Ali Abbas
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
