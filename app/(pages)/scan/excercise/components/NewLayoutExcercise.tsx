"use client";

import dynamic from "next/dynamic";
import Inbox from "./newComponents/Inbox";
import SideBar from "./newComponents/SideBar";

function Exercise() {
  return (
    <div className="grid grid-cols-11 w-full static">
      <div className="col-span-3">
        <SideBar />
      </div>
      <div className="col-span-8 py-[34px] px-7">
        <Inbox />
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Exercise), { ssr: false });
