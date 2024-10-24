import { FC, useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Image from "next/image";
import PopUpImg from "@/app/assets/Images/exitPopupImg.png";
import TextImg from "@/app/assets/Images/10percent.png";
import Button from "../Button/Button";
import TrustPilot from "@/app/assets/Images/trustPilotExitPopup.png";
import Logo from "@/app/assets/Icons/Logo";

type ExitPopUpProps = {
  open: boolean;
  handleClose: () => void;
};

const ExitPopUp: FC<ExitPopUpProps> = ({ open, handleClose }) => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      secs < 10 ? "0" : ""
    }${secs}`;
  };
  return (
    <Modal
      showCloseIcon={true}
      open={open}
      onClose={handleClose}
      closeOnOverlayClick={true}
      closeOnEsc={true}
      center
      classNames={{ modalContainer: "bg-[#ffffffcf]" }}
      styles={{
        modal: {
          backgroundColor: "#fff",
          minWidth: "400px",
          paddingRight: "50px",
          paddingLeft: "50px",
        },
      }}
    >
      <div>
        <Image src={PopUpImg} alt="" />
        <p className="text-[45px] font-bold text-[#6D6D6D] text-center">
          Act Fast !
        </p>
        <div className="flex justify-center items-center gap-2 text-[30px] text-[#6D6D6D]">
          <p>Get</p>
          <Image src={TextImg} alt="" />
          <p>Off Any Service</p>
        </div>
        <p className="text-center text-[#585858]">
          Enter your details to redeem your discount before time runs out!
          <br />
          Hurry, time is running out!
        </p>
        <div className="px-16 pt-6 relative mt-2">
          <div className="absolute top-3 left-[112px] bg-white w-[60%] text-center">
            <p className="text-[#6D6D6D]">
              {formatTime(timeLeft)} Minutes Remaining
            </p>
          </div>
          <div className="border-2 rounded-[10px] py-7">
            <p className="text-center text-secondary-500 text-6xl font-bold">
              {formatTime(timeLeft)}
            </p>
            <div className="w-[140px] text-[#6D6D6D] text-lg flex justify-between items-center mx-auto">
              <p>MIN</p>
              <p>SEC</p>
            </div>
          </div>

          <Button className="mt-3 w-full bg-secondary-500 hover:text-secondary-500 hover:border-secondary-500 text-2xl font-bold">
            CLAIM 10 OFF
          </Button>
          <div className="flex justify-between items-center px-5 my-5">
            <Image src={TrustPilot} alt="" />
            <Logo />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ExitPopUp;
