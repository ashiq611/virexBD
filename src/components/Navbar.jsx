import React from "react";
import Logo from "../assets/Virex-logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { slide as Menu } from "react-burger-menu";

const Navbar = () => {
  return (
    <div className=" bg-blue1 py-5 px-20 rounded-b-full fixed  w-full z-50">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={Logo} className="h-42 w-20 cursor-pointer" />
          </Link>
        </div>
        <div className="lg:hidden text-white text-xl">
          <Menu
            right
            className="bg-blue1 text-white rounded-lg pt-10 flex flex-col items-center"
            customBurgerIcon={<GiHamburgerMenu />}
          >
            <Link
              className="font-semibold text-lg text-white font-poppins"
              to="/"
            >
              Home
            </Link>
            <Link
              className="font-semibold text-lg text-white font-poppins"
              to="/about"
            >
              About
            </Link>
            <Link
              className="font-semibold text-lg text-white font-poppins"
              to="/#"
            >
              Services
            </Link>
            <Link
              className="font-semibold text-lg text-white font-poppins"
              to="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="font-semibold text-lg text-white font-poppins"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className=" py-2 px-6 rounded-lg font-bold text-medium text-white"
              style={{
                backgroundImage:
                  "linear-gradient(170deg, #AC00FD 75%, #ffffff 25%)",
              }}
            >
              Career
            </Link>

            {/* <li className="mt-2">
              <Link
                className="font-semibold text-lg text-white font-poppins"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="font-semibold text-lg text-white font-poppins"
                to="#"
              >
                Services
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="font-semibold text-lg text-white font-poppins"
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="font-semibold text-lg text-white font-poppins"
                to="/contact"
              >
                Contact
              </Link>
            </li> */}
            {/* <li className="mt-5">
              <Link
                className=" py-2 px-6 rounded-lg font-bold text-medium text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(170deg, #AC00FD 75%, #ffffff 25%)",
                }}
              >
                Career
              </Link>
            </li> */}
          </Menu>
        </div>
        <div className="list-none hidden lg:flex  ">
          <li className="mx-4">
            <Link
              className="font-semibold text-lg text-white font-poppins"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="mx-4">
            <Link
              className="font-semibold text-lg text-white font-poppins"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="mx-4">
            <Link
              className="font-semibold text-lg text-white font-poppins"
              to="#"
            >
              Services
            </Link>
          </li>
          <li className="mx-4">
            <Link
              className="font-semibold text-lg text-white font-poppins"
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className="mx-4">
            <Link
              className="font-semibold text-lg text-white font-poppins"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="mx-4">
            <Link
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
      </div>
    </div>
  );
};

export default Navbar;
