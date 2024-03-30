import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import banner from "../../assets/headerbg.png";
import first from "../../assets/first.png";
import second from "../../assets/second.png";
import man from "../../assets/man.png";
import img1 from "../../assets/Image.png";
import img2 from "../../assets/image1.png";
import Services from "./Services";
import Client from "./Client";
import SwiperAbout from "../../components/SwiperAbout";

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




const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const staticData = [
    {
      name: "Mobile App",
      img: img1,
    },
    {
      name: "Web Development",
      img: img2,
    },
    {
      name: "Mobile App",
      img: img1,
    },
    {
      name: "Web Development",
      img: img2,
    },
  ];
  return (
    <div className="">
      <div className="h-screen flex items-center justify-center banner-fixed text-white text-center">
        {/* <img src={banner} className='fixed'/> */}
        <div className="w-10/12">
          <h1 className="font-bold text-3xl font-poppins tracking-wide">
            Revolutionize Your Business with Virex BD
          </h1>
          <p className="font-poppins text-semibold mt-6">
            "Welcome to Virex BD, where innovation meets excellence in the world
            of IT. Together, let's embark on a journey of cutting-edge solutions
            and technological advancements. We are not just a company; we are a
            community dedicated to shaping the future of IT. Welcome aboard!"
          </p>
          <button className="mt-10 bg-purple1 text-black py-2 px-10 rounded-lg font-poppins text-md font-semibold">
            Talk to Our Experts
          </button>
        </div>
      </div>
      <div className="px-5 lg:px-20 mt-5 lg:mt-20">
        <div className="bg-backgroundsm lg:bg-background1 flex flex-col lg:flex-row items-center">
          <div className="w-7/12 my-5">
            <img src={first} />
          </div>
          <div className="lg:w-5/12 px-2 lg:px-5 lg:pr-6">
            <h2 className=" font-poppins font-bold text-base lg:text-2xl text-white ">
              Empowering Businesses
            </h2>
            <p className="mt-3 text-white text-xs lg:text-sm font-medium font-poppins">
              Explore the possibilities with Virex BD as we embark on a journey
              to transform challenges into opportunities, empowering your
              business to thrive in the digital age. Welcome to a world where
              technology meets innovation—welcome to Virex BD.
            </p>
            <button className="bg-purple1 text-black mt-6 px-5 py-2 font-poppins font-semibold rounded-md text-sm ">
              Read more
            </button>
          </div>
        </div>

        {/* mobile start */}

        <div className="bg-backgroundsm lg:bg-background1 lg:hidden flex flex-col lg:flex-row items-center mt-5">
          <div className="w-7/12 my-5">
            <img src={second} />
          </div>
          <div className="lg:w-5/12 px-2 lg:px-5 lg:pr-6">
            <h2 className=" font-poppins font-bold text-base lg:text-2xl text-white ">
              Cutting-Edge Solutions
            </h2>
            <p className="mt-3 text-white text-xs lg:text-sm font-medium font-poppins">
              At Virex BD, we thrive on technological innovation. Specializing
              in cloud computing, web and mobile app development, data
              analytics, AI, and more, we deliver cutting-edge solutions for
              businesses. Our expertise ensures that clients stay ahead in a
              rapidly evolving digital landscape. With a commitment to
              excellence, we empower organizations to embrace the future of
              technology and achieve lasting success.
            </p>
            <button className="bg-purple1 text-black mt-6 px-5 py-2 font-poppins font-semibold rounded-md text-sm ">
              Read more
            </button>
          </div>
        </div>

        {/* mobile end */}
        <div className="bg-backgroundsm lg:bg-background2 lg:flex flex-col lg:flex-row items-center mt-2 lg:mt-20 hidden">
          <div className="lg:w-5/12 px-2 lg:px-5 lg:pr-6">
            <h2 className=" font-poppins font-bold text-base lg:text-2xl text-white ">
              Cutting-Edge Solutions
            </h2>
            <p className="mt-3 text-white text-xs lg:text-sm font-medium font-poppins">
              At Virex BD, we thrive on technological innovation. Specializing
              in cloud computing, web and mobile app development, data
              analytics, AI, and more, we deliver cutting-edge solutions for
              businesses. Our expertise ensures that clients stay ahead in a
              rapidly evolving digital landscape. With a commitment to
              excellence, we empower organizations to embrace the future of
              technology and achieve lasting success.
            </p>
            <button className="bg-purple1 text-black mt-6 px-5 py-2 font-poppins font-semibold rounded-md text-sm ">
              Read more
            </button>
          </div>
          <div className="w-7/12 mt-5 lg:mt-0 ">
            <img src={second} />
          </div>
        </div>
      </div>

      <div className="px-5 lg:px-20 mt-5 lg:mt-36 ">
        <h1 className="text-center font-poppins font-bold text-xl text-white">
          These are the technologies we use in our firm
        </h1>
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row py-5 lg:py-20 items-center lg:w-10/12">
            <div className="w-4/12 flex items-center flex-col">
              <div className="flex">
                <div className="w-6/12 px-6 py-6 bg-tomato2  rounded-lg  ">
                  <p className="text-2xl font-poppins font-bold text-center">
                    20+
                  </p>
                  <p className="text-sm font-poppins font-medium">Contriees</p>
                </div>
                <div className="w-6/12 px-6 py-6 bg-gray3  rounded-lg  ml-2 ">
                  <p className="text-2xl font-poppins font-bold text-center">
                    20+
                  </p>
                  <p className="text-sm font-poppins font-medium">Services</p>
                </div>
              </div>
              <div className="flex mt-2">
                <div className=" w-6/12 px-6 py-6 bg-yellow  rounded-lg  ">
                  <p className="text-2xl font-poppins font-bold text-center">
                    20+
                  </p>
                  <p className="text-sm font-poppins font-medium">Employees</p>
                </div>
                <div className=" w-6/12 px-6 py-6 bg-blue3  rounded-lg  ml-2 ">
                  <p className="text-2xl font-poppins font-bold text-center">
                    20+
                  </p>
                  <p className="text-sm font-poppins font-medium">Clients</p>
                </div>
              </div>
            </div>
            <div className="w-8/12 lg:ml-20">
              <h1 className="font-poppins text-xl lg:text-4xl font-bold text-white mt-2 lg:mt-0">
                What are we Building
              </h1>
              <p className="font-poppins text-sm font-normal mt-2 lg:mt-8 lg:mr-10 text-white">
                Through strategy, design, and planning we build brand identities
                that connect with your Nesi. We then fine-tune a marketing plan
                that allows us to laser focus and target your audience through
                the right channels.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 lg:mt-20 px-7 py-7 lg:px-20  lg:py-20">
        <h1 className="font-poppins font-bold text-3xl mb-5 text-white text-center">
          Team Insights
        </h1>
        <div className="lg:hidden">
          <SwiperAbout />
        </div>
        <div className="text-white mt-5 lg:mt-20 hidden lg:block">
          <Slider {...settings}>
            <div>
              <div className="flex justify-center">
                <div className="w-3/12">
                  <div className="w-11/12 bg-purple1 text-black">
                    <img className="w-full h-56" src={ashiq} />
                    <div className="py-1 text-center w-full font-poppins">
                      <p className="font-semibold">Md. Ashiqur Rahman</p>
                      <p>Frontend Web Developer</p>
                    </div>
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="w-11/12 bg-purple1 text-black">
                    <img className="w-full h-56" src={mou} />
                    <div className="py-1 text-center w-full font-poppins">
                      <p className="font-semibold">Hadia Razin Mou</p>
                      <p>Ui/ux Designer</p>
                    </div>
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="w-11/12 bg-purple1 text-black">
                    <img className="w-full h-56" src={afifa} />
                    <div className="py-1 text-center w-full font-poppins">
                      <p className="font-semibold">Ayesha afifa</p>
                      <p>Web Designer</p>
                    </div>
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="w-11/12 bg-purple1 text-black">
                    <img className="w-full h-56" src={mushfiq} />
                    <div className="py-1 text-center w-full font-poppins">
                      <p className="font-semibold">MD Moshfiqur Rahman</p>
                      <p>Android Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="w-3/12">
                  <div className="w-11/12 bg-purple1 text-black">
                    <img className="w-full h-56" src={afrahim} />
                    <div className="py-1 text-center w-full font-poppins">
                      <p className="font-semibold">Afrahim Chowdhury Fashol</p>
                      <p>Digital Marketer</p>
                    </div>
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="w-11/12 bg-purple1 text-black">
                    <img className="w-full h-56" src={munna} />
                    <div className="py-1 text-center w-full font-poppins">
                      <p className="font-semibold">Md. Nahedul Islam Munna</p>
                      <p>Data analyst</p>
                    </div>
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="w-11/12 bg-purple1 text-black">
                    <img className="w-full h-56" src={sabrina} />
                    <div className="py-1 text-center w-full font-poppins">
                      <p className="font-semibold">Sabrina Akter Sabina</p>
                      <p>Data Scientist</p>
                    </div>
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="w-11/12 bg-purple1 text-black">
                    <img className="w-full h-56" src={hasan} />
                    <div className="py-1 text-center w-full font-poppins">
                      <p className="font-semibold">MD Hasan Miah</p>
                      <p>MERN stack</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="w-3/12">
                  <div className="w-11/12 bg-purple1 text-black">
                    <img className="w-full h-56" src={sayem} />
                    <div className="py-1 text-center w-full font-poppins">
                      <p className="font-semibold">Abu Sayem</p>
                      <p>React Js developer</p>
                    </div>
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="w-11/12 bg-purple1 text-black">
                    <img className="w-full h-56" src={man} />
                    <div className="py-1 text-center w-full font-poppins">
                      <p className="font-semibold">Md. Karim Haque</p>
                      <p>President</p>
                    </div>
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="w-11/12 bg-purple1 text-black">
                    <img className="w-full h-56" src={man} />
                    <div className="py-1 text-center w-full font-poppins">
                      <p className="font-semibold">Md. Karim Haque</p>
                      <p>President</p>
                    </div>
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="w-11/12 bg-purple1 text-black">
                    <img className="w-full h-56" src={man} />
                    <div className="py-1 text-center w-full font-poppins">
                      <p className="font-semibold">Md. Karim Haque</p>
                      <p>President</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="px-7 py-7 lg:px-20 lg:py-10 mt-20 bg-back2 ">
        <div className="flex flex-col lg:flex-row justify-between">
          <h1 className="font-poppins font-semibold text-xl lg:text-2xl text-white">
            The hundred of completed works still counting
          </h1>
          <Link
            className=" py-2 px-6 rounded-lg font-bold text-medium text-white"
            style={{
              backgroundImage:
                "linear-gradient(170deg, #AC00FD 75%, #ffffff 25%)",
            }}
          >
            View All
          </Link>
        </div>
        <div className="flex justify-center items-center mt-5 lg:mt-12">
          <div className="flex flex-col lg:flex-row flex-wrap justify-between lg:w-10/12">
            {staticData.map((val, ind) => {
              return (
                <div className="lg:w-6/12  mt-5 " key={ind}>
                  <div
                    style={{ width: "90%" }}
                    className=" bg-white rounded-xl mr-10"
                  >
                    <img src={val.img} className="h-80 w-full" />
                    <p className="font-poppins text-xl font-bold px-5 py-3">
                      {val.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-2 py-2 lg:px-20 lg:py-10 mt-5 lg:mt-20">
        <Services />
      </div>
      <div className="px-2 py-2 mt-5 lg:px-20 lg:py-10  lg:mt-20">
        <Client />
      </div>
      <div className="px-20 py-24 mt-20 bg-blue1">
        <div className="flex list-none justify-between items-center border-b-2 pb-2">
          <div className=" ">
            <label className="font-poppins text-white">Lets talk</label>
            <h1 className="text-3xl font-poppins mt-4 text-white font-bold">
              Got a project?
            </h1>
          </div>
          <li>
            <Link
              to="/contact"
              className=" py-2 px-6 rounded-lg font-bold text-medium text-white"
              style={{
                backgroundImage:
                  "linear-gradient(170deg, #AC00FD 75%, #ffffff 25%)",
              }}
            >
              Career
            </Link>
          </li>
        </div>
        <p className="font-poppins text-white mt-9 leading-9">
          As a leading digital platform in Bangladesh, we look to engage with
          our clients beyond the conventional design and development agency
          relationship, becoming a partner to the people and companies we work
          with.
        </p>
      </div>
    </div>
  );
};

export default Home;
