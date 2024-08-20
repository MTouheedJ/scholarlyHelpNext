"use client";

import { FC, useState } from "react";
import Logo from "@/app/assets/Icons/Logo";
import DownArrow from "@/app/assets/Icons/DownArrow";
import Phone from "@/app/assets/Icons/Phone";
import MenuThreeLines from "@/app/assets/Icons/MenuThreeLines";
// import "./index.css";
import useBreakpoint from "@/app/(pages)/hooks/useMediabreakpoint";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { hideLinks, supportMail, withChatNow } from "../HideLinks/HideLinks";
import Button from "../Button/Button";
import Facebook from "@/app/assets/Icons/Facebook";
import Instagram from "@/app/assets/Images/instagram.png";
import Linkedin from "@/app/assets/Images/linkedin.png";
import Tiktok from "@/app/assets/Images/tiktok.png";
import Image from "next/image";
import emailIcon from "@/app/assets/Images/emailNav.png";
interface AppNavProps {}
const AppNav: FC<AppNavProps> = ({}) => {
  const { breakpoint } = useBreakpoint();

  const [open, setOpen] = useState(false);
  const [servicesMenu, setOpenServicesMenu] = useState(false);

  const currentPage = usePathname();
  const hideLink = hideLinks.includes(currentPage);
  const withChat = withChatNow.includes(currentPage);
  const showSupportMail = supportMail.includes(currentPage);
  const handleServiceMenu = () => {
    setOpenServicesMenu(!servicesMenu);
  };
  const handleMenu = () => {
    setOpen(!open);
  };

  if (hideLink) {
    <div>
      <div className="overflow-hidden">
        <div className={`flex lg:justify-center bg-white`}>
          <div
            className={`py-3 sm:px-10 px-7 flex justify-between xl:container w-full flex-wrap sm:flex-nowrap`}
          >
            <div>
              <Link href="/">
                <Logo />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
  } else {
    return (
      <div>
        <div className="bg-primary-400 flex justify-center">
          <div className="container flex justify-between items-center">
            <div></div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className={`flex lg:justify-center bg-white`}>
            {/* <div
          className={`py-3 px-10 ${
            breakpoint !== "xxs" && "flex"
          } justify-between xl:container w-full`}
        > */}
            <div
              className={`py-3 sm:px-10 px-7 flex justify-between xl:container w-full flex-wrap sm:flex-nowrap`}
            >
              <div>
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <div className="space-x-9 hidden lg:flex lg:flex-row lg:items-center font-medium ps-7 py-2 rounded pe-2">
                <Link
                  href="/"
                  className="text-md relative after:content-[''] after:w-[0px] after:h-[4px] after:bg-primary-400 after:block after:transition-all after:duration-500 hover:after:w-[100%] "
                >
                  Home
                </Link>
                <div>
                  <div
                    className="text-md flex items-center mb-1 relative cursor-pointer"
                    onMouseEnter={() => {
                      // setOpen(false);
                      setOpenServicesMenu(true);
                    }}
                    // onMouseLeave={() => {
                    //   setOpenServicesMenu(false);
                    // }}
                  >
                    <div>Services</div>
                    <span className="w-3 ms-1">
                      <DownArrow />
                    </span>
                  </div>
                  <div
                    onMouseLeave={() => {
                      setOpenServicesMenu(false);
                    }}
                    className={`${
                      servicesMenu
                        ? "bg-white border border-[#D2D2D2] rounded-md absolute font-normal py-2 top-10 z-10"
                        : "hidden"
                    }`}
                  >
                    <ul>
                      <li className="hover:bg-primary-200 px-5 cursor-pointer py-1">
                        <Link href="/online-class">Online Class</Link>
                      </li>
                      <li className="hover:bg-primary-200 px-5 cursor-pointer py-1">
                        <Link href="/exams">Exams</Link>
                      </li>
                      <li className="hover:bg-primary-200 px-5 cursor-pointer py-1">
                        <Link href="/homework">Homework</Link>
                      </li>
                      <li className="hover:bg-primary-200 px-5 cursor-pointer py-1">
                        <Link href="/assignment">Assignment</Link>
                      </li>
                      <li className="hover:bg-primary-200 px-5 cursor-pointer py-1">
                        <Link href="/essay-writing">Essay Writing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  href="/samples"
                  className="text-md relative after:content-[''] after:w-[0px] after:h-[4px] after:bg-primary-400 after:block after:transition-all after:duration-500 hover:after:w-[100%]"
                >
                  Samples
                </Link>
                {/* <Link
                  href="/about-us"
                  className="text-md relative after:content-[''] after:w-[0px] after:h-[4px] after:bg-primary-400 after:block after:transition-all after:duration-500 hover:after:w-[100%]"
                >
                  About us
                </Link> */}
                <Link
                  href="/tools"
                  className="text-md relative after:content-[''] after:w-[0px] after:h-[4px] after:bg-primary-400 after:block after:transition-all after:duration-500 hover:after:w-[100%]"
                >
                  Tools
                </Link>
                <Link
                  href="https://scholarlyhelp.com/blog/"
                  className="text-md relative after:content-[''] after:w-[0px] after:h-[4px] after:bg-primary-400 after:block after:transition-all after:duration-500 hover:after:w-[100%]"
                >
                  Blogs
                </Link>
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE_NUMBER}`}
                  className="flex items-center text-primary-400"
                >
                  <span className="w-6 mr-1 text-primary-400">
                    <Phone color="#565ADD" />
                  </span>
                  1-716-708-1869
                </a>
                {/* <a
                  href="mailto:support@scholarlyhelp.com"
                  target="_blank"
                  className="flex items-center text-primary-400"
                >
                  <span className="w-6 mr-1 text-primary-400">
                    <Image src={emailIcon} alt="icon" className="w-8" />
                  </span>
                  support@scholarlyhelp.com
                </a> */}
              </div>

              <div className="flex items-center lg:hidden">
                <div>
                  <div className="md:text-lg text-sm text-primary-400 mr-2">
                    <a
                      href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE_NUMBER}`}
                      className="flex items-center "
                    >
                      <span className="sm:w-6 w-4 mr-1 text-primary-400">
                        <Phone color="#565ADD" />
                      </span>
                      1-716-708-1869
                    </a>
                    {/* <a
                      href="mailto:support@scholarlyhelp.com"
                      target="_blank"
                      className="flex items-center text-primary-400"
                    >
                      <span className="sm:w-6 w-4 mr-1 text-primary-400">
                        <Image src={emailIcon} alt="icon" className="w-8" />
                      </span>
                      support@scholarlyhelp.com
                    </a> */}
                  </div>
                </div>
                <div
                  className="flex justify-center items-center border border-[#D9D9D9] py-1 sm:px-3 px-2 rounded-md"
                  onClick={handleMenu}
                >
                  <div className="sm:w-8 w-6">
                    <MenuThreeLines />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`font-medium px-14 transition-all duration-500 ${
              open ? `${servicesMenu ? "h-[390px]" : "h-[200px]"}` : "h-0"
            }`}
          >
            <div className="mb-2">
              <Link href="/" className="text-md relative">
                Home
              </Link>
            </div>
            <div className="mb-2">
              <div>
                <div
                  className="text-md flex items-center mb-1"
                  onClick={handleServiceMenu}
                >
                  <div>Services</div>
                  <span className="w-3 ms-1">
                    <DownArrow />
                  </span>
                </div>
                <div
                  onMouseLeave={() => {
                    setOpenServicesMenu(false);
                  }}
                  className={`${
                    servicesMenu
                      ? "bg-white border border-[#D2D2D2] rounded-md font-normal py-2 z-10 w-full"
                      : "hidden"
                  }`}
                >
                  <ul>
                    <li className="hover:bg-primary-200 px-5 cursor-pointer py-1">
                      <Link href="/online-class">Online Class</Link>
                    </li>
                    <li className="hover:bg-primary-200 px-5 cursor-pointer py-1">
                      <Link href="/exams">Exams</Link>
                    </li>
                    <li className="hover:bg-primary-200 px-5 cursor-pointer py-1">
                      <Link href="/homework">Homework</Link>
                    </li>
                    <li className="hover:bg-primary-200 px-5 cursor-pointer py-1">
                      <Link href="/assignment">Assignment</Link>
                    </li>
                    <li className="hover:bg-primary-200 px-5 cursor-pointer py-1">
                      <Link href="/essay-writing">Essay Writing</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <Link href="/samples" className="text-md">
                Samples
              </Link>
            </div>
            <div className="mb-2">
              <Link href="/about-us" className="text-md">
                About us
              </Link>
            </div>
            <div className="mb-2">
              <Link href="/tools" className="text-md">
                Tools
              </Link>
            </div>
            <div className="mb-2">
              <Link href="#" className="text-md">
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (withChat) {
    return (
      <div>
        {/* <div className="bg-primary-400">
          <a href="mailto:support@scholarlyhelp.com" target="_blank">
            <p className="text-white font-bold text-center py-3">
              support@scholarlyhelp.com
            </p>
          </a>
        </div> */}
        <div className="container sm:mx-auto sm:px-0 px-4 flex justify-between py-4 items-center flex-wrap">
          <div>
            <Logo />
          </div>
          <div className="text-primary-500 font-bold text-center py-3 md:block hidden grow rounded-md mr-2">
            Get 10% Discount - Limited Time Offer!
          </div>
          {/* <div className="flex items-center"> */}
          {/* <div className="md:text-lg text-sm text-primary-400 mr-2">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE_NUMBER}`}
              className="flex items-center "
            >
              <span className="sm:w-6 w-4 mr-1 text-primary-400">
                <Phone color="#565add" />
              </span>
              1-716-708-1869
            </a>
          </div> */}
          <div className="mr-4">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE_NUMBER}`}
              className="flex items-center text-primary-400"
            >
              <span className="w-6 mr-1 text-primary-400">
                <Phone color="#565ADD" />
              </span>
              1-716-708-1869
            </a>
            {/* <a href="javascript:void(Tawk_API.toggle())">
              <Button className="md:w-36 w-28 ">Chat Now</Button>
            </a> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container sm:mx-auto sm:px-0 px-4 flex justify-between py-4 items-center flex-wrap">
        <div>
          <Logo />
        </div>
        {currentPage === "/take-my-class/" ? (
          <a href="javascript:void(Tawk_API.toggle())">
            <Button
              type="submit"
              className="md:w-[120px] w-[100px] h-10 flex justify-center text-sm"
            >
              Live Chat
            </Button>
          </a>
        ) : (
          <div className="md:text-lg text-sm text-primary-400 mr-2">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE_NUMBER}`}
              className="flex items-center "
            >
              <span className="sm:w-6 w-4 mr-1 text-primary-400">
                <Phone color="#565add" />
              </span>
              1-716-708-1869
            </a>
          </div>
        )}
      </div>
    );
  }
};

export default AppNav;
