"use client";

import axiosInstance from "@/app/axios";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { IoIosMail } from "react-icons/io";
import { IoChatbubbles } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";

interface ZohoForm2Props {
  nameValue?: string;
}

const ZohoForm2: FC<ZohoForm2Props> = ({ nameValue }) => {
  const [formData, setFormData] = useState({
    Email: "",
    Last_Name: "DefaultLastName",
    Phone: "",
    Description: "",
  });
  // const [email, setEmail] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [FBCLID, setFBCLID] = useState("");
  const [GCLID, setGCLID] = useState("");
  const [wholeUrl, setWholeUrl] = useState<string>("");
  const currentPage = usePathname();
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = () => {
    const emailVal = formData.Email.trim();
    if (emailVal.length === 0) return true;

    const atpos = emailVal.indexOf("@");
    const dotpos = emailVal.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const checkMandatory = () => {
    if (formData.Last_Name.trim().length === 0) {
      alert("Last Name cannot be empty.");
      return false;
    }
    return validateEmail();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (checkMandatory()) {
      const form = e.target as HTMLFormElement;
      const submitButton = form.querySelector(".formsubmit");
      const fd = new FormData();
      if (FBCLID) {
        fd.append("fbclid", FBCLID);
      }
      if (GCLID) {
        fd.append("gclid", GCLID);
      }
      fd.append("url", wholeUrl);
      fd.append("email", formData.Email);
      if (formData.Phone) {
        fd.append("phone_number", formData.Phone);
      }
      if (formData.Description) {
        fd.append("instructions", formData.Description);
      }

      try {
        const res = await axiosInstance.post(`/order/quote`, fd);
        form.submit();
      } catch (error) {
        alert("Failed to send request try again later");
      }
      if (submitButton) {
        submitButton.setAttribute("disabled", "true");
      }
      form.submit();
    }
  };

  return (
    <div className="max-w-[600px]">
      <form
        id="webform5887452000005238025"
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name="WebToLeads5887452000005238025"
        method="POST"
        onSubmit={handleSubmit}
        acceptCharset="UTF-8"
        className="bg-primary-500 rounded flex flex-col gap-[9px] py-5 px-[9px]"
      >
        {/* Hidden Inputs */}
        <input
          type="hidden"
          name="xnQsjsdp"
          value="729204db6fddcde9b0550fb47b456290290e71c17e6a7a23954d135d1246a9c3"
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="hidden"
          name="xmIwtLD"
          value="8f2e717009b206c4097a345636ca5e02d6328b7cd18d700cdf46989793752f2f28933351a4d39c0423957df0a8e2a3ec"
        />
        <input type="hidden" name="actionType" value="TGVhZHM=" />
        <input
          type="hidden"
          name="returnURL"
          value="https://scholarlyhelp.com/thank-you-2/"
        />

        {/* Email Field */}
        <div className="flex items-center border border-[#49498B] divide-[#49498B] divide-x gap-3 rounded p-3">
          <IoIosMail className="text-[#49498B] text-lg" />
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Email *"
            value={formData.Email}
            onChange={handleChange}
            // maxLength={100}
            required
            className="focus:outline-none flex-grow bg-primary-500 pl-3 placeholder-white text-[13px] text-white"
          />
        </div>

        {/* Last Name Field */}
        <div className="hidden items-center border border-[#49498B] divide-[#49498B] divide-x gap-3 rounded p-3">
          <input
            type="text"
            id="Last Name"
            name="Last Name"
            value="DefaultLastName"
            readOnly
            className="focus:outline-none flex-grow bg-transparent pl-3 placeholder-white text-[13px] text-white"
          />
        </div>

        {/* Phone Field */}
        <div className="flex items-center border border-[#49498B] divide-[#49498B] divide-x gap-3 rounded p-3">
          <MdPhoneInTalk className="text-[#49498B] text-lg" />
          <input
            type="text"
            id="Phone"
            name="Phone"
            placeholder="Phone # *"
            value={formData.Phone}
            onChange={handleChange}
            maxLength={30}
            required
            className="focus:outline-none flex-grow bg-primary-500 pl-3 placeholder-white text-[13px] text-white"
          />
        </div>

        {/* Description Field */}
        <div className="flex items-start border border-[#49498B] gap-3 rounded p-3">
          <IoChatbubbles className="text-[#49498B] text-lg" />
          <div className=" border-r border-[#49498B] h-[20px]"></div>
          <textarea
            id="Description"
            name="Description"
            placeholder="What do you need help with *"
            rows={4}
            value={formData.Description}
            onChange={handleChange}
            required
            className="focus:outline-none flex-grow bg-primary-500 placeholder-white text-[13px] text-white resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end w-full mt-4">
          {/* <button
            type="reset"
            className="border border-[#c0c6cc] rounded px-4 py-2 text-sm"
          >
            Reset
          </button> */}
          <button
            type="submit"
            className="h-[46px] w-full bg-white rounded flex justify-center items-center uppercase"
          >
            Get My Free Quote
          </button>
        </div>
      </form>
    </div>
  );
};

export default ZohoForm2;
