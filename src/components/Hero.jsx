import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}
    >
      {/* 20% discount card */}
      <div className="flex py-[6px] ss:px-4 px-2 items-center self-center ss:self-auto bg-discount-gradient rounded-lg gap-3 mb-2 cursor-pointer hover:scale-105">
        <img src={discount} className="w-[32px] h-[32px]" />
        <p className="font-poppins text-gray-500 ss:text-[18px] text-[13px] font-normal">
          <span className="text-white">20%</span> DISCOUNT FOR 
          <span className="text-white"> 1 MONTH</span> ACCOUNT
        </p>
      </div>
      {/* text div */}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins text-white font-semibold ss:text-[72px] text-[52px] ss:text-left text-center">
          The Next <br className="sm:block hidden" />
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="flex-1 font-poppins text-white font-semibold ss:text-[72px] text-[52px] ss:text-left text-center">
        Payment Method.
      </h1>
      <p className="font-poppins text-[18px] text-[#FFFFFFB2] font-normal ss:text-left text-center">
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    {/* img part */}
    <div className={`mt-5 md:mt-0 relative`}>
      <img src={robot} className={`w-full h-full  z-10`}>
      </img>
      <div className="absolute top-0 w-[40%] h-[35%] z-0 pink__gradient"/>
      <div className="absolute bottom-40 w-[80%] h-[80%] z-0 white__gradient rounded-full"/>
      <div className="absolute right-20 bottom-20 w-[50%] h-[50%] z-0 blue__gradient"/>
    </div>
    {/* getStarted for mobile section */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>
  </section>
);

export default Hero;
