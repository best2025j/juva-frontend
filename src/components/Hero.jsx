import styles from "../style";
import Button from "./Button";

import main from "../assets/main.png";
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col py-3`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 md:px-10 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full text-wrap">
          <h1 className="flex-1 font-inter font-bold md:text-7xl text-5xl text-black md:leading-[80px] leading-[65px] text-wrap py-2  ">
            Improving Health Access.
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[370px] mt-5 font-light`}>
          Remote Medical Consultation for Everyone.
        </p>
        <Button styles={`mt-4`} />
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={main}
          alt="billing"
          className="w-full h-full relative z-[10]"
        />
      </div>
    </section>
  );
};

export default Hero;
