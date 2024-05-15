import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import styles from "@/styles/styles";
import Button from "./Button";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className={`${styles.width} ${styles.padding} py-5 relative z-10`}>
        <div className="flex justify-between items-center">
          <div>
            <Image src={logo} alt="" className="w-[100px] md:w-[150px]" />
          </div>

          <div className="flex gap-5 md:gap-14 items-center">
            <ul className="hidden md:flex gap-14 p-0">
              <li className="border-b-2 border-solid border-primary">
                <Link href="/" className="font-semibold text-sm">
                  Pricecare Search
                </Link>
              </li>
              <li>
                <Link href="/health" className=" text-sm">
                  Health Spotlight{" "}
                </Link>
              </li>
            </ul>

            <div>
              <Button link="Sign in" />
            </div>

            {/* Hamburger Icon */}
            <div onClick={handleNav} className="md:hidden">
              <CgMenuRight
                className="cursor-pointer text-[#000000]"
                size={30}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className="position">
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between mb-5">
                <Link href="/">
                  <Image src={logo} width="87" height="35" alt="/" />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-md shadow-gray-800 p-3 cursor-pointer"
                >
                  <AiOutlineClose className="text-white" />
                </div>
              </div>
            </div>
            <div className="py-14 flex flex-col">
              <ul className="uppercase">
                <Link href="/#">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-white font-medium"
                  >
                    Pricecare Search
                  </li>
                </Link>
                <Link href="/">
                  <li
                    onClick={() => setNav(false)}
                    className="py-3 text-sm text-white font-medium"
                  >
                    Health Spotlight
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
