import React from "react";
import twoman from "../assets/pavan 3643.png";
import manIcon from "../assets/manLogo.png";
import shovo from "../assets/team/sadman.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import SwiperAbout from "./SwiperAbout";

const MobileAbout = () => {
  return (
    <div className="container mx-auto lg:hidden">
      <div className="aboutbg  bg-cover h-full w-full">
        <div className="pt-20">
          <h1 className="text-4xl text-white text-center py-10 font-bold">
            Meet Our <span className="text-[#E547FF]">Founders</span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row my-5 h-auto lg:h-96 items-center">
          <div className="mb-5 lg:mb-0 h-72 lg:h-auto w-56 lg:w-96 items-center border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <img
              className="rounded-t-xl h-auto lg:h-full w-full object-cover"
              src={twoman}
              alt=""
            />
          </div>
          <div className="m-5 h-auto lg:h-full grid items-center p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
            <p>
              <span className="text-red-700 font-bold">Virex BD</span> was born
              from the passion and vision of a group of dedicated individuals
              who shared a common dream. Their journey began with a spark of
              innovation and a commitment to creating something meaningful. With
              warmth and determination, they steered Virex BD towards success,
              shaping it into a hub of technology and creativity. The founders'
              camaraderie and shared aspirations continue to be the driving
              force behind the company's growth, creating a vibrant and
              inspiring workplace for all.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 mb-10">
        <div className="left flex-1 items-center justify-center grid gap-5 p-5 w-full  h-full bg-[#0C1740] ">
          <h1 className="text-center text-[#FF7171] font-semibold text-2xl">
            Founder
          </h1>
          <div className="flex justify-center">
            <img className="rounded-full w-28 lg:w-auto" src={manIcon} alt="" />
          </div>
          {/* <img
            className="rounded-full w-28 lg:w-auto"
            src={manIcon}
            alt=""
            /> */}
          <button className="btn text-sm font-medium rounded-lg p-5 bg-[#92E8FB]">
            Atiqur Rahman Polash
          </button>
        </div>
        <div className="right flex-1 bg-slate-800 m-2 rounded-lg">
          <h1 className="text-base text-white m-5 font-semibold text-center">
            Having experience with government projects indicates that Atiqur
            Rahman Polash has worked on software development projects
            commissioned or funded by government agencies or departments. These
            projects typically have specific requirements, regulations, and
            security considerations that differ from those in the private
            sector. Experience in government projects suggests that Atiqur
            Rahman Polash has navigated bureaucratic processes, adhered to
            governmental standards and guidelines, and possibly collaborated
            with various stakeholders within the government. This experience can
            be valuable in understanding how to work effectively within the
            parameters of government contracts and regulations.
          </h1>
        </div>
      </div>

      {/* Repeat similar structure for Co-Founder section */}

      <div className="flex flex-col lg:flex-row items-center gap-12 mb-10">
        <div className="left flex-1 items-center justify-center grid gap-5 p-5 w-full  h-full bg-[#0C1740] ">
          <h1 className="text-center text-[#FF7171] font-semibold text-2xl">
            CEO
          </h1>
          <div className="flex justify-center ">
            <img className="rounded-full w-28 lg:w-auto" src={shovo} alt="" />
          </div>
          <button className="btn text-sm font-medium rounded-lg p-5 bg-[#92E8FB]">
            Md. Abu Hena Chowdhury
          </button>
        </div>
        <div className="right flex-1  bg-slate-800 m-2 rounded-lg">
          <h1 className="text-base text-white m-5 font-semibold text-center">
            Md. Abu Hena Chowdhury is a dynamic professional with diverse
            expertise. As CEO and Managing Director of VirexBD Ltd. and CEO of
            Kohinoor Enterprise, he leads strategic initiatives and operational
            management. Additionally, he founded Shuvo Motors, demonstrating
            entrepreneurial acumen. With a background in English (B.A. Honors),
            he brings unique perspectives to his roles. Beyond business, he
            serves as a Financial Associate at MetLife and as a Pharmacist and
            CEO of Tahim Medical Hall, showcasing versatility across industries.
          </h1>
        </div>
      </div>

      <div className="m-5">
        <h1 className="text-4xl m-4 text-center font-bold text-white">
          Meet Our awesome <span className="text-[#E547FF]">Teams</span>
        </h1>

        <SwiperAbout />
      </div>
    </div>
  );
};

export default MobileAbout;
