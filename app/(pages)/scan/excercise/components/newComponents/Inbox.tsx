import BotImg from "@/app/assets/Images/botImg.png";
import UserImg from "@/app/assets/Images/userImg.png";
import axiosInstance from "@/app/axios";
import EmailPopup from "@/app/components/PopUpModal/EmailPopup";
import Image from "next/image";
import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { GoPaperclip } from "react-icons/go";
import { HiArrowRight } from "react-icons/hi2";
import MarkDown from "../../../../../components/MarkDown/MarkDown";

type Response = {
  _id: string | null;
  senderId: string | null;
  query: string | null;
  content: string | null;
  imageUrl: string | null;
  createdAt: string;
};

interface InboxProps {}

const Inbox: FC<InboxProps> = ({}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [text, setText] = useState<string>("");
  const [imgError, setImageError] = useState<string>("");
  const [textError, setTextError] = useState<string>("");
  const [localUserId, setLocalUserId] = useState<string | null>(null);
  const [resData, setResData] = useState<Response[]>([]);
  const [emailDialogues, setEmailDialogues] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<boolean>(false); // New loading state

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const generateUUID = (): string => {
    return window.crypto.randomUUID();
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [resData]);

  useEffect(() => {
    let userId = localStorage.getItem("localUserId");

    if (!userId) {
      userId = generateUUID();
      localStorage.setItem("localUserId", userId);
    }

    setLocalUserId(userId);
  }, []);

  useEffect(() => {
    const forEmail = async () => {
      if (!localUserId) return;
      try {
        const response = await axiosInstance.get(
          `/scan-to-solve/email-popup-status/local/${localUserId}`
        );
        console.log("here");

        setEmailDialogues(response.data.showEmailPopup);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    forEmail();
  }, [localUserId]);

  useEffect(() => {
    const fetchData = async () => {
      if (!localUserId) return;
      try {
        const response = await axiosInstance.get(
          `/scan-to-solve/exercise-history/local/${localUserId}`
        );
        setResData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [localUserId]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const uploadedFile = files[0];
      setFileName(uploadedFile.name);
      setImageError("");
      setUploadedImage(uploadedFile);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text && !uploadedImage) {
      setTextError("Please add an image and some description");
      return;
    }
    if (!text) {
      setTextError("Please add description");
      return;
    }
    if (!uploadedImage) {
      setImageError("Please add an image");
      return;
    }

    const fd = new FormData();
    fd.append("image", uploadedImage);
    fd.append("query", text);
    fd.append("localUserId", localUserId!);

    setUploadedImage(null);
    setText("");
    setFileName("");
    setLoadingMessage(true); // Start loading for the upcoming message

    try {
      const res = await axiosInstance.post(
        `/scan-to-solve/predict-image/local`,
        fd
      );
      setEmailDialogues(res.data.showEmailPopup);
    } catch (error) {
      console.log("Message failed:", error);
    } finally {
      const response = await axiosInstance.get(
        `/scan-to-solve/exercise-history/local/${localUserId}/`
      );
      setResData(response.data);
      setLoadingMessage(false); // Stop loading after receiving the response
    }
  };

  const formatTime = (timestamp: string): string => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };
  return (
    <>
      <div className="h-[89vh] flex flex-col justify-between">
        <div
          className="h-[77vh] overflow-auto scrollbar-hide"
          ref={chatContainerRef}
        >
          {resData.map((data, index) => (
            <div key={index} className="space-y-3">
              {data.senderId ? (
                <div className="flex justify-end gap-4">
                  <div>
                    <p className="text-[#9F9F9F] text-xs mb-2 text-end">
                      {formatTime(data.createdAt)}
                    </p>
                    <div className="bg-[#F8F8F8] p-4 rounded-lg text-[#444746] text-[13px] w-fit">
                      <img
                        src={data.imageUrl || "/default-placeholder.png"}
                        alt="Uploaded Preview"
                        className="w-[200px] h-auto rounded mb-3"
                      />
                      <p>{data.query}</p>
                    </div>
                  </div>
                  <div className="pt-8">
                    <Image src={UserImg} alt="" className="w-10" />
                  </div>
                </div>
              ) : (
                <div className="flex gap-4 w-[80%]">
                  <div className="pt-8">
                    <Image src={BotImg} alt="" className="min-w-10" />
                  </div>

                  <div className={`${emailDialogues && "blur-sm"}`}>
                    <p className="text-[#9F9F9F] text-xs mb-2">
                      {formatTime(data.createdAt)}
                    </p>
                    {index === resData.length - 1 && loadingMessage ? (
                      <div className="space-y-3 animate-pulse w-[200px]">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                      </div>
                    ) : (
                      <div className="bg-[#F8F8F8] p-4 rounded-lg text-[#444746] text-[13px] w-fit">
                        <MarkDown content={data.content} />
                        {/* <p>{data.content}</p> */}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-[86%] mx-auto">
          <div>
            {fileName && (
              <p className="text-sm text-gray-600">
                Selected File: <span className="font-medium">{fileName}</span>
              </p>
            )}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex gap-4 items-center p-[6px] rounded-full border border-primary-400"
          >
            <div
              onClick={triggerFileInput}
              className="flex justify-center items-center bg-primary-400 sm:w-12 w-7 sm:h-12 h-7 sm:min-w-12 min-w-7 sm:min-h-12 min-h-7 rounded-full cursor-pointer"
            >
              <GoPaperclip className="text-white sm:text-2xl text-lg mr-1" />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <input
              placeholder="Type your prompt here"
              className="sm:text-lg bg-transparent grow chatInput focus:outline-none"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setTextError("");
              }}
            />
            <button
              type="submit"
              className="flex justify-center items-center bg-primary-400 sm:w-12 w-7 sm:h-12 h-7 sm:min-w-12 min-w-7 sm:min-h-12 min-h-7 rounded-full"
            >
              <HiArrowRight className="text-white sm:text-2xl text-lg" />
            </button>
          </form>
          {imgError && <p className="text-sm text-red-600">{imgError}</p>}
          {textError && <p className="text-sm text-red-600">{textError}</p>}
        </div>
      </div>
      {emailDialogues && (
        <EmailPopup
          open={emailDialogues}
          handleClose={() => setEmailDialogues(false)}
        />
      )}
    </>
  );
};

export default Inbox;