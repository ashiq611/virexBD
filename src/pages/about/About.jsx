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
import munna from "../../assets/team/munna.jpg";
import sayem from "../../assets/team/sayem.jpg";
import shuvo from "../../assets/team/sadman.jpg";

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
              Atiqur Rahman Polash
            </button>
          </div>
          <div className="right flex-1">
            <h1 className="text-lg text-white m-5 font-semibold text-center">
              Having experience with government projects indicates that Atiqur
              Rahman Polash has worked on software development projects
              commissioned or funded by government agencies or departments.
              These projects typically have specific requirements, regulations,
              and security considerations that differ from those in the private
              sector. Experience in government projects suggests that Atiqur
              Rahman Polash has navigated bureaucratic processes, adhered to
              governmental standards and guidelines, and possibly collaborated
              with various stakeholders within the government. This experience
              can be valuable in understanding how to work effectively within
              the parameters of government contracts and regulations.
            </h1>
          </div>
        </div>
        <div className="container lg:flex flex-col lg:flex-row items-center gap-9 hidden ">
          <div className="right flex-1">
            <h1 className="text-lg text-white m-5 font-semibold text-center">
              Md. Abu Hena Chowdhury is a dynamic professional with diverse
              expertise. As CEO and Managing Director of VirexBD Ltd. and CEO of
              Kohinoor Enterprise, he leads strategic initiatives and
              operational management. Additionally, he founded Shuvo Motors,
              demonstrating entrepreneurial acumen. With a background in English
              (B.A. Honors), he brings unique perspectives to his roles. Beyond
              business, he serves as a Financial Associate at MetLife and as a
              Pharmacist and CEO of Tahim Medical Hall, showcasing versatility
              across industries.
            </h1>
          </div>
          <div className="right flex-1 items-center justify-center grid gap-5 p-5 bg-[#0C1740] ">
            <h1 className="text-center text-[#FF7171] font-semibold text-2xl">
              CEO
            </h1>
            <img className="rounded-full aspect-auto" src={shuvo} alt="" />
            <button className=" btn text-sm font-medium rounded-lg  p-5 bg-[#92E8FB]">
              Md. Abu Hena Chowdhury
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
            <div className="lg:absolute right-0 top-1   h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl h-72 w-full flex-grow"
                src={munna}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Md. Nahedul Islam Munna
              </h1>
            </div>
          </div>

          <div className="lg:relative flex my-5 h-96 items-center">
            <div className="absolute h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl h-auto flex-grow"
                src={sabrina}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Sabrina Akter Sabina
              </h1>
            </div>
            <div className="ml-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="ml-24">
                <h1 className=" font-bold text-2xl my-2">Digital Marketer</h1>
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

          <div className="lg:relative flex flex-col lg:flex-row my-5 h-96 items-center">
            <div className="mr-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="mr-24">
                <h1 className="font-bold text-2xl my-2">
                  MERN Stack Developer
                </h1>
                At As a skilled Data Scientist, I'm ecstatic to be a member of
                this incredible team. My journey has been an exciting adventure
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
            <div className="lg:absolute right-0 top-1   h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl h-72 w-full flex-grow"
                src={hasan}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                MD Hasan Miah
              </h1>
            </div>
          </div>

          <div className="lg:relative flex my-5 h-96 items-center">
            <div className="absolute h-72 w-56 top-2 items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl h-auto flex-grow"
                src={sayem}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Abu Sayem
              </h1>
            </div>
            <div className="ml-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="ml-24">
                <h1 className=" font-bold text-2xl my-2">React JS Developer</h1>
                Driven React developer passionate about crafting elegant user
                interfaces. Constantly learning and exploring new technologies
                to stay ahead in the dynamic field of front-end development.
                Committed to delivering high-quality code and contributing to
                innovative projects that push the boundaries of web development.
              </p>
            </div>
          </div>

          <div className="lg:relative flex flex-col lg:flex-row my-5 h-96 items-center">
            <div className="mr-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="mr-24">
                <h1 className="font-bold text-2xl my-2">
                  MERN Stack Developer
                </h1>
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
            <div className="lg:absolute right-0 top-2   h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl h-72 w-full flex-grow"
                src={pantha}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Pantha Acharjee
              </h1>
            </div>
          </div>

          <div className="lg:relative flex my-5 h-96 items-center">
            <div className="absolute h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl h-auto flex-grow"
                src={noman}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Abdullah Al Noman
              </h1>
            </div>
            <div className="ml-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="ml-24">
                <h1 className=" font-bold text-2xl my-2">
                  {" "}
                  Associate software engineer, QA
                </h1>
                I am Abdullah Al Noman ,Highly motivated Associate Software
                Engineer with a focus on Quality Assurance, possessing strong
                analytical skills and a passion for ensuring software
                reliability and performance. Proficient in various testing
                methodologies, tools, and frameworks, dedicated to optimizing
                product quality and enhancing the user experience. Committed to
                continuous learning and improvement in a dynamic software
                development environment.Proficient in manual and automated
                testing techniques.Experience with test case design, execution,
                and reporting.Collaborated with development teams to understand
                project requirements and design comprehensive test plans and
                strategies.Executed manual and automated tests to validate
                software functionality, usability, and performance.Identified
                and documented software defects, tracked them to resolution, and
                verified fixes.Provided timely and accurate reports on test
                results and project status to stakeholders.
              </p>
            </div>
          </div>

          <div className="lg:relative flex flex-col lg:flex-row my-5 h-96 items-center">
            <div className="mr-32 h-full grid items-center bg-[#0C1740] p-8 border-gray-200 rounded-xl shadow dark:bg-gray-800 text-white">
              <p className="mr-24">
                <h1 className="font-bold text-2xl my-2">Graphics Designer</h1>
                I'm Samiul Hafiz, a highly skilled graphics designer and video
                editor known for my passion for creativity and unwavering
                commitment to excellence. From crafting captivating visuals to
                seamlessly editing videos, I bring a unique vision to every
                project, blending technical proficiency with artistic flair to
                exceed expectations. Driven by innovation, I continuously
                explore new trends and technologies, pushing the boundaries of
                what's possible. Beyond design and editing, my ultimate goal is
                to leave a lasting impact, inspiring change and evoking emotions
                through my work. With each project, I strive to transform ideas
                into unforgettable experiences, one creation at a time.
              </p>
            </div>
            <div className="lg:absolute right-0 top-2   h-72 w-56  items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <img
                className="rounded-t-xl h-72 w-full flex-grow"
                src={Samiul}
                alt=""
              />
              <h1 className="text-center text-lg bg-[#92E8FB]  rounded-b-xl p-4 font-bold w-full">
                Md. Samiul Hafiz
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
