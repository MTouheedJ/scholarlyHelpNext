"use client";

import BgHero from "@/app/assets/Images/takeMyClassBg.png";
import { FC } from "react";

import useBreakpoint from "@/app/(pages)/hooks/useMediabreakpoint";
import Image from "next/image";
import { usePathname } from "next/navigation";

// import Step4 from "@/app/(pages)/do-my-class/component/Step4";
import yellowEnvalop from "@/app/assets/Images/yellowEnvalop.png";
import { formFreeQuote, phoneEmailMsgForm } from "../HideLinks/HideLinks";
import ZohoForm from "./ZohoForm";

type Content = {
  heading1?: string;
  mainHeading?: string;
  heading2?: string;
  description: string;
};

interface HeroProps {
  content: Content;
}
const Hero2: FC<HeroProps> = ({ content }) => {
  const { isMobile } = useBreakpoint();
  const currentPage = usePathname();

  const freeQuoteForm = formFreeQuote.includes(currentPage);
  const freeQuotephoneEmailMsg = phoneEmailMsgForm.includes(currentPage);

  return (
    <div className="bg-primary-300">
      <div
        className="xl:flex justify-center bg-contain bg-no-repeat bg-right-bottom px-10"
        style={{
          backgroundImage: `${isMobile ? "none" : `url(${BgHero.src})`}`,
        }}
      >
        <div className="xl:container xl:px-10 grid lg:grid-cols-2">
          <div
            className={`xl:py-12 lg:pt-20 lg:pb-4 lg:w-full ${
              !isMobile && "w-[400px]"
            } mb-9`}
          >
            <div className="w-auto flex">
              <h1
                className={`text-primary-500 font-bold md:text-3xl text-xl mt-2 mr-2`}
              >
                {content.heading1}
              </h1>
            </div>
            <div>
              <h1 className="text-primary-500 md:font-bold font-extrabold md:text-5xl text-3xl md:leading-[65px]">
                {content.mainHeading}
              </h1>
              {content.heading2 && (
                <h1
                  className={`text-primary-500 font-bold ${
                    currentPage !== "/"
                      ? "md:text-5xl text-3xl mt-4"
                      : "md:text-3xl text-xl"
                  }`}
                >
                  {content.heading2}
                </h1>
              )}
              <div className={`${!isMobile && "max-w-[520px]"} py-5`}>
                <div
                  className="text-primary-500 md:text-lg"
                  dangerouslySetInnerHTML={{ __html: content.description }}
                ></div>
              </div>
              {/* {currentPage === "/take-my-class/" && (
                <div className="mb-3">
                  <p className="font-bold md:text-lg">
                    100% Money-Back Guarantee:{" "}
                    <span className="font-normal">
                      Not satisfied with your grades?
                    </span>
                    <br />
                    Get a full refund—
                    <span className="font-normal">no questions asked.</span>
                  </p>
                </div>
              )} */}
              <div className="flex justify-center md:justify-start">
                <div>
                  <ZohoForm />
                  {/* {freeQuotephoneEmailMsg ? (
                    <PhoneEmailMsgFrom />
                  ) : (
                    <>
                      {!freeQuoteForm ? (
                        <div>
                          <Step4 />
                        </div>
                      ) : (
                        <a href="javascript:void(Tawk_API.toggle())">
                          <Button
                            type="submit"
                            className="md:w-[240px] w-[180px] flex justify-evenly md:px-16 px-10"
                          >
                            <span className="w-5">
                              <ChatBubbles />
                            </span>
                            Live Chat
                          </Button>
                        </a>
                      )}
                    </>
                  )} */}
                  {/* <Button
                  className="md:w-[240px] w-[180px] flex justify-evenly md:px-16 px-10"
                  onClick={handleModel}
                >
                  <span className="w-5">
                    <ChatBubbles />
                  </span>
                  Live Chat
                </Button> */}
                  {/* {currentPage === "/take-my-class/" && ( */}
                  <div className="w-[80%] mx-auto bg-[#2B1C50] p-5 rounded-b-lg">
                    <div className="flex justify-center items-center mx-auto gap-3">
                      <Image src={yellowEnvalop} alt="" />
                      <p className="text-sm font-semibold text-white">
                        Check Spam / Junk If You Don’t
                        <br />
                        See Our Email Within Minutes
                      </p>
                    </div>
                  </div>
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>

          <div className={!isMobile ? "hidden" : "flex justify-center"}>
            <Image src={BgHero} alt="image" />
          </div>
        </div>
      </div>
      {/* <PopUpModal open={openModal} handleClose={() => setOpenModal(false)} /> */}
    </div>
  );
};

export default Hero2;
