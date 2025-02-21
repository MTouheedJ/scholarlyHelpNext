"use client";
import heroBg from "@/app/assets/Images/hero3Bg.png";
import axiosInstance from "@/app/axios";
import { isEmailValid } from "@/app/utilities/utilities";
import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
interface Hero3Props {}

const Hero3: FC<Hero3Props> = () => {
  const [email, setEmail] = useState<string>("");
  const [emailErr, setEmailErr] = useState<string>("");
  const [emailLoading, setEmailLoading] = useState<boolean>(false);
  const [FBCLID, setFBCLID] = useState("");
  const [GCLID, setGCLID] = useState("");
  const [wholeUrl, setWholeUrl] = useState<string>("");

  const currentPage = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (window.location) {
      setWholeUrl(window.location.href);
    } else {
      setWholeUrl(currentPage);
    }
  }, []);

  useEffect(() => {
    if (window?.location?.href?.includes("fbclid=")) {
      setFBCLID(window?.location?.href);
    }
    if (window?.location?.href?.includes("gclid=")) {
      setGCLID(window?.location?.href);
    }
  }, []);

  const handleEmailSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("redirectFromThankYouPage", wholeUrl);
    if (!email) {
      setEmailErr("Please enter a valid email address");
      return;
    }
    const isValidEmail = isEmailValid(email);

    if (!isValidEmail) {
      setEmailErr("Invalid Email");
      return;
    }
    setEmailLoading(true);

    const fd = new FormData();
    if (FBCLID) {
      fd.append("fbclid", FBCLID);
    }
    if (GCLID) {
      fd.append("gclid", GCLID);
    }
    if (email) {
      fd.append("email", email);
    }
    fd.append("url", wholeUrl);

    try {
      await axiosInstance.post(`/order/quote`, fd);
      setEmailLoading(false);
      router.push("/thank-you-2/");
    } catch (error) {
      // @ts-ignore
      alert(error?.response?.data?.message);
      setEmailLoading(false);
    }
  };

  return (
    <div
      className="px-[90px] h-[690px] bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${heroBg.src})`,
      }}
    >
      <div className="container mx-auto  flex flex-col justify-center h-full">
        <div className="max-w-[550px]">
          <h1 className="text-[31px] font-medium text-primary-500 mb-7">
            You’re about to get{" "}
            <span className="text-[38px] font-semibold text-secondary-500">
              40+ hours
            </span>{" "}
            back each month by letting an expert handle your{" "}
            <span className="text-primary-400 font-semibold">
              Online Classes
            </span>
          </h1>
          <p className="text-[31px] font-medium text-primary-500 mb-[30px]">
            I’ve put together a quick guide on{" "}
            <span className="bg-primary-400 pt-[2px] pb-[6px] px-[15px] rounded-[6px] text-white text-[28px] font-medium">
              5 profitable side hassles
            </span>{" "}
            you can start with those saved hours.
          </p>
          <form
            onSubmit={handleEmailSubmission}
            className="w-full flex items-center gap-2"
          >
            <div className="w-[286px] h-[57px] border border-[#919191] rounded-[5px] flex items-center px-4">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailErr("");
                }}
                placeholder="Email Address"
                className="focus:outline-none w-full text-xs italic "
              />
            </div>
            <button
              type="submit"
              disabled={emailLoading}
              className="bg-secondary-500 text-[15px] font-bold text-white uppercase rounded-[5px] w-[254px] h-[54px] flex justify-center items-center"
            >
              {emailLoading ? (
                <ColorRing
                  height="40"
                  width="40"
                  ariaLabel="color-ring-loading"
                  colors={["white", "white", "white", "white", "white"]}
                />
              ) : (
                "Download your free guide"
              )}
            </button>
          </form>
          {emailErr && <p className="text-red-500 text-sm">{emailErr}</p>}
        </div>
      </div>
    </div>
  );
};
export default Hero3;
