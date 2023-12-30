"use client"
import NavLink from "../Navlink";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import {useRef, useState } from "react";
import Link from "next/link";
import Button from "../Button";
import useOutsideClick from "@/hooks/useOutsideClick";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null)
  useOutsideClick(ref,handleOutsideClick)
  function handleOutsideClick(params) {
    setIsOpen(false);
  }
  function toggleMenu(params) {
    setIsOpen(true);
  }

  return (
    <div className="fixed flex z-50 justify-between flex-row-reverse md:flex-row items-center py-5 right-[50%] translate-x-1/2 w-full lg:px-32 md:px-10 px-5">
      <div className="flex flex-row-reverse items-center gap-6">
        <h1 className="text-5xl">Shop</h1>
        <div className="relative md:hidden block">
          <Link href={"/login"}>
            <FaCartShopping size={25} />{" "}
          </Link>
          <span className="absolute top-[-10px] right-[-20px] bg-yellow-600 rounded-[50%] w-5 h-5 text-center">
            1
          </span>
        </div>
      </div>
      <div className="block md:hidden">
        <Button buttonType="trans-white" onClick={toggleMenu}>
          <RxHamburgerMenu size={35} />
        </Button>
      </div>
      <ul
        className={`${
          isOpen ? "right-0":"right-[-50vw]"
        } md:static md:h-auto md:text-white md:*:border-none *:border-b-2 *:pb-3 *:px-3 *:border-black border-none md:bg-transparent md:p-0 p-4 pt-9 gap-8 flex md:gap-6 lg:gap-10 md:flex-row md:text-lg absolute flex-col bg-gray-100 text-black top-0 h-screen w-[50vw] md:w-auto transition-all duration-500 z-50`}
        ref={ref}
      >
        <li>
          <NavLink title={"صفحه اصلی"} href={"/"} />
        </li>
        <li>
          <NavLink title={"منو"} href={"/menu"} />
        </li>
        <li>
          <NavLink title={"درباره ما"} href={"/about"} />
        </li>
        <li>
          <NavLink title={"تماس باما"} href={"/contact"} />
        </li>
        <li className="flex items-center md:hidden border-none">
          <Button to={"/login"}>ورود</Button>
        </li>
      </ul>
      <div className="md:flex gap-4 items-center hidden">
        <div className="relative">
          <Link href={"/login"}>
            <FaCartShopping size={25} />{" "}
          </Link>
          <span className="absolute top-[-10px] right-[-20px] bg-yellow-600 rounded-[50%] w-5 h-5 text-center">
            1
          </span>
        </div>
        <Button to={"/login"} buttonType="md">
          ورود
        </Button>
      </div>
    </div>
  );
}
