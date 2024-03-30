import React from "react";
import manIcon from "../../assets/manLogo.png";
import twoman from "../../assets/pavan 3643.png";
import MobileAbout from "../../components/MobileAbout";
import ashiq from "../../assets/team/ashiq.jpg";
import mou from "../../assets/team/Mou.jpg";
import afifa from "../../assets/team/afifa.jpg";
import hasan from "../../assets/team/hasan.jpg";
import noman from "../../assets/team/Noman.jpg";
import Samiul from "../../assets/team/samiul.jpg";
import pantha from "../../assets/team/prantho.jpg";
import sabrina from "../../assets/team/sibrina.jpg";
import afrahim from "../../assets/team/Afrahim.jpg";
import mushfiq from "../../assets/team/mushfiq.jpg";

const About = () => {
  return (
    <>
      <MobileAbout />
      <div className="container mx-auto hidden lg:block">
        <div className="aboutbg  bg-cover h-full w-full">
          <div className="">
            <h1 className="text-4xl text-white text-center py-10 font-bold">
              Meet To Our <span className="text-[#E547FF]">Founders</span>
            </h1>
          </div>
          <div className="lg:relative flex flex-col lg:flex-row my-5 h-96 items-center">
            <div className="lg:absolute mb-5 h-72 w-56 lg:left-32 items-center border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl h-auto flex-grow"
                src={twoman}
                alt=""
              />
            </div>
            <div className="lg:ml-32 lg:absolute w-2/3 lg:right-0 h-full grid items-center p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="lg:ml-24">
                <span className="text-red-700 font-bold">Virex BD</span> was
                born from the passion and vision of a group of dedicated
                individuals who shared a common dream. Their journey began with
                a spark of innovation and a commitment to creating something
                meaningful. With warmth and determination, they steered Virex BD
                towards success, shaping it into a hub of technology and
                creativity. The founders' camaraderie and shared aspirations
                continue to be the driving force behind the company's growth,
                creating a vibrant and inspiring workplace for all.
              </p>
            </div>
          </div>
        </div>
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="left flex-1 items-center justify-center grid gap-5 p-5 bg-[#0C1740] ">
            <h1 className="text-center text-[#FF7171] font-semibold text-2xl">
              Founder
            </h1>
            <img className="rounded-full" src={manIcon} alt="" />
            <button className=" btn text-sm font-medium rounded-lg  p-5 bg-[#92E8FB]">
              MD. Khan
            </button>
          </div>
          <div className="right flex-1">
            <h1 className="text-5xl font-semibold text-center">
              Some information about the founder
            </h1>
          </div>
        </div>
        <div className="container lg:flex flex-col lg:flex-row items-center gap-9 hidden ">
          <div className="right flex-1">
            <h1 className="text-5xl font-semibold text-center">
              Some information about the founder
            </h1>
          </div>
          <div className="right flex-1 items-center justify-center grid gap-5 p-5 bg-[#0C1740] ">
            <h1 className="text-center text-[#FF7171] font-semibold text-2xl">
              Co-Founder
            </h1>
            <img className="rounded-full" src={manIcon} alt="" />
            <button className=" btn text-sm font-medium rounded-lg  p-5 bg-[#92E8FB]">
              MD. Khan
            </button>
          </div>
        </div>
        <div className="m-14 ">
          <h1 className="text-4xl m-4 text-center font-bold text-white">
            Meet To Our awesome<span className="text-[#E547FF]">Teams</span>
          </h1>
          <div className="lg:relative flex flex-col lg:flex-row my-5 h-96 items-center">
            <div className="lg:absolute h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl h-auto flex-grow"
                src={ashiq}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Md. Ashiqur Rahman
              </h1>
            </div>
            <div className="ml-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="ml-24">
                <h1 className=" font-bold text-2xl my-2">
                  Front-end Developer
                </h1>
                At Virex BD, our Frontend Developers are the architects of
                engaging and seamless user experiences. Armed with a deep
                understanding of web technologies, HTML5, CSS3, and JavaScript,
                they craft visually stunning and responsive interfaces that
                captivate users. Our team excels in leveraging popular frontend
                frameworks such as React, ensuring dynamic and efficient web
                applications. From translating design concepts into code to
                optimizing website performance, our Frontend Developers play a
                crucial role in bringing creativity and functionality together.
                With a keen eye for detail and a passion for staying current
                with industry trends, they transform ideas into visually
                compelling and user-friendly digital solutions, contributing
                significantly to the overall success of our projects.
              </p>
            </div>
          </div>

          <div className="lg:relative flex flex-col lg:flex-row my-5 h-96 items-center">
            <div className="mr-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="mr-24">
                <h1 className="font-bold text-2xl my-2">UX UI Designer</h1>I am
                a passionate UI/UX Designer with a keen eye for detail and a
                dedication to creating intuitive and visually appealing user
                experiences. With a solid foundation in design principles and a
                flair for creativity, I excel in translating complex concepts
                into user-friendly interfaces. I leverage expertise in user
                research, wireframing, and prototyping to consistently deliver
                innovative solutions that exceed client expectations and enhance
                overall user satisfaction.
              </p>
            </div>
            <div className="lg:absolute right-0 h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl h-full w-full flex-grow"
                src={mou}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Hadia Razin Mou
              </h1>
            </div>
          </div>
          <div className="lg:relative flex flex-col lg:flex-row my-5 h-96 items-center">
            <div className="lg:absolute h-72 w-56 items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl h-auto flex-grow"
                src={afifa}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Ayesha Afifa
              </h1>
            </div>
            <div className="ml-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="ml-24">
                <h1 className=" font-bold text-2xl my-2">Web Designer</h1>
                As a web designer, I wield Figma like a digital paintbrush,
                transforming concepts into captivating online experiences. With
                its versatile toolkit and collaborative features, I sculpt
                wireframes and mockups that breathe life into web projects.
                Figma isn't just a tool—it's my creative sanctuary, where every
                pixel tells a story and every design detail is meticulously
                crafted.
              </p>
            </div>
          </div>
          <div className="relative flex my-5 h-96 items-center">
            <div className="mr-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="mr-24">
                <h1 className="font-bold text-2xl my-2">Android Developer</h1>I
                am a skilled software developer proficient in a variety of
                technologies including API, databases (MySQL, SQLite, Room
                Database, Firebase), programming languages (Java, Kotlin, C,
                C++, JavaScript), architectural patterns (MVVM, MVM), design
                tools (Figma, Adobe XD), and web technologies (HTML, CSS,
                Bootstrap, PHP). I am committed to contributing to a dynamic
                team in a software farm, eager to learn and grow professionally
                while adapting to new challenges.
              </p>
            </div>
            <div className="lg:absolute right-0 top-1 h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl h-auto flex-grow"
                src={mushfiq}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                MD Moshfiqur Rahman
              </h1>
            </div>
          </div>
          <div className="lg:relative flex my-5 h-96 items-center">
            <div className="absolute h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl h-auto flex-grow"
                src={afrahim}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Afrahim Chowdhury Fashol
              </h1>
            </div>
            <div className="ml-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="ml-24">
                <h1 className=" font-bold text-2xl my-2">Digital Marketer</h1>
                Experienced digital marketer proficient in crafting and
                executing comprehensive online strategies to drive brand
                awareness, engagement, and conversions. Skilled in SEO, social
                media marketing, content creation, email campaigns, and PPC
                advertising. Passionate about leveraging data-driven insights to
                optimize campaigns and deliver measurable results. Excited to
                collaborate with brands to achieve their marketing objectives in
                the dynamic digital ecosystem.
              </p>
            </div>
          </div>

          <div className="lg:relative flex flex-col lg:flex-row my-5 h-96 items-center">
            <div className="mr-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="mr-24">
                <h1 className="font-bold text-2xl my-2">Data Analyst</h1>At
                Virex BD, our Data Analysts are the architects of actionable
                insights and informed decision-making. Proficient in data
                extraction, cleaning, and analysis, they turn raw data into
                valuable information that drives strategic business outcomes.
                Armed with a mastery of statistical tools, programming languages
                such as Python or R, and data visualization platforms like
                Tableau, our Data Analysts uncover patterns, trends, and
                correlations within complex datasets. They work closely with
                cross-functional teams, providing valuable insights that inform
                business strategies, optimize processes, and contribute to
                organizational growth. Rigorous attention to detail, critical
                thinking, and a commitment to data integrity define the approach
                of our Data Analysts. At Virex BD, we believe in the
                transformative power of data, and our Data Analysts play a
                pivotal role in unlocking its potential for our clients.
              </p>
            </div>
            <div className="lg:absolute right-0   h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl h-auto flex-grow"
                src={manIcon}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                MD Khan
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
