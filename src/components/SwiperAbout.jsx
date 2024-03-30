import React from "react";
import twoman from "../assets/pavan 3643.png";
import manIcon from "../assets/manLogo.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ashiq from "../assets/team/ashiq.jpg";
import mou from "../assets/team/Mou.jpg";
import afifa from "../assets/team/afifa.jpg";
import hasan from "../assets/team/hasan.jpg";
import noman from "../assets/team/Noman.jpg";
import Samiul from "../assets/team/samiul.jpg";
import pantha from "../assets/team/prantho.jpg";
import sabrina from "../assets/team/sibrina.jpg";
import afrahim from "../assets/team/Afrahim.jpg";
import mushfiq from "../assets/team/mushfiq.jpg";
import munna from "../assets/team/munna.jpg";
import sayem from "../assets/team/sayem.jpg";

import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const SwiperAbout = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className=" flex flex-col lg:flex-row items-center">
            <div className="h-72 w-56 mb-5  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl aspect-square flex-grow object-cover"
                src={ashiq}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Md. Ashiqur Rahman
              </h1>
            </div>
            <div className=" h-full bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="">
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
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex flex-col lg:flex-row items-center">
            <div className="h-72 w-56 mb-5  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl aspect-square flex-grow object-cover"
                src={mou}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Hadia Razin Mou
              </h1>
            </div>
            <div className=" h-full bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="">
                <h1 className=" font-bold text-2xl my-2">UX UI Designer</h1>I am
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
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex flex-col lg:flex-row items-center">
            <div className="h-72 w-56 mb-5  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl  flex-grow aspect-square object-cover"
                src={afifa}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Aysha Afifa
              </h1>
            </div>
            <div className=" h-full bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="">
                <h1 className=" font-bold text-2xl my-2">Web Designer</h1>As a
                web designer, I wield Figma like a digital paintbrush,
                transforming concepts into captivating online experiences. With
                its versatile toolkit and collaborative features, I sculpt
                wireframes and mockups that breathe life into web projects.
                Figma isn't just a tool—it's my creative sanctuary, where every
                pixel tells a story and every design detail is meticulously
                crafted.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex flex-col lg:flex-row items-center">
            <div className="h-72 w-56 mb-5  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl  flex-grow aspect-square object-cover"
                src={mushfiq}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                MD Moshfiqur Rahman
              </h1>
            </div>
            <div className=" h-full bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="">
                <h1 className=" font-bold text-2xl my-2">Android Developer</h1>I
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
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex flex-col lg:flex-row items-center">
            <div className="h-72 w-56 mb-5  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl  flex-grow aspect-square object-cover"
                src={afrahim}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Afrahim Chowdhury Fashol
              </h1>
            </div>
            <div className=" h-full bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="">
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
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex flex-col lg:flex-row items-center">
            <div className="h-72 w-56 mb-5  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl  flex-grow aspect-square object-cover"
                src={munna}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Md. Nahedul Islam Munna
              </h1>
            </div>
            <div className=" h-full bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="">
                <h1 className=" font-bold text-2xl my-2">Data analyst </h1>
                Results-oriented data analyst with 02 years of experience in
                leveraging data to drive strategic decision-making. Proven
                ability to manage all aspects of the data analysis lifecycle,
                from data collection and cleaning to analysis, reporting, and
                presentation. Skilled in SQL, Python, and data visualization
                tools to extract meaningful insights from complex datasets.
                Strong communicator with a knack for translating technical
                findings into clear and concise reports for stakeholders across
                all levels.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex flex-col lg:flex-row items-center">
            <div className="h-72 w-56 mb-5  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl  flex-grow aspect-square object-cover"
                src={sabrina}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Sabrina Akter Sabina
              </h1>
            </div>
            <div className=" h-full bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="">
                <h1 className=" font-bold text-2xl my-2">Data Scientist </h1>
                As a skilled Data Scientist, I'm ecstatic to be a member of this
                incredible team. My journey has been an exciting adventure
                filled with challenges and successes in the realm of Machine
                Learning, Deep Learning, and Natural Language Processing. The
                strong foundation in statistics and computer science has proven
                invaluable when it comes to tackling complex problems head-on.
                In terms of technical prowess, I'm proficient in Python, R, SQL,
                NumPy, Pandas, Scikit-Learn, TensorFlow, and Keras. This diverse
                skill set enables me to transform data into compelling
                visualizations and models that drive meaningful insights and
                actionable strategies. So that, the goal of my work is to apply
                my knowledge of data science to solve challenging problems,
                create insightful visualizations from unprocessed data, and
                develop cutting-edge models for the digital sphere.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex flex-col lg:flex-row items-center">
            <div className="h-72 w-56 mb-5  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl  flex-grow aspect-square object-cover"
                src={hasan}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                MD Hasan Miah
              </h1>
            </div>
            <div className=" h-full bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="">
                <h1 className=" font-bold text-2xl my-2">MERN stack </h1>
                As a skilled Data Scientist, I'm ecstatic to be a member of this
                incredible team. My journey has been an exciting adventure
                filled with challenges and successes in the realm of Machine
                Learning, Deep Learning, and Natural Language Processing. The
                strong foundation in statistics and computer science has proven
                invaluable when it comes to tackling complex problems head-on.
                In terms of technical prowess, I'm proficient in Python, R, SQL,
                NumPy, Pandas, Scikit-Learn, TensorFlow, and Keras. This diverse
                skill set enables me to transform data into compelling
                visualizations and models that drive meaningful insights and
                actionable strategies. So that, the goal of my work is to apply
                my knowledge of data science to solve challenging problems,
                create insightful visualizations from unprocessed data, and
                develop cutting-edge models for the digital sphere.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex flex-col lg:flex-row items-center">
            <div className="h-72 w-56 mb-5  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl  flex-grow aspect-square object-cover"
                src={sayem}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Abu Sayem
              </h1>
            </div>
            <div className=" h-full bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="">
                <h1 className=" font-bold text-2xl my-2">
                   {" "}
                </h1>
                Driven React developer passionate about crafting elegant user
                interfaces. Constantly learning and exploring new technologies
                to stay ahead in the dynamic field of front-end development.
                Committed to delivering high-quality code and contributing to
                innovative projects that push the boundaries of web development.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperAbout;
