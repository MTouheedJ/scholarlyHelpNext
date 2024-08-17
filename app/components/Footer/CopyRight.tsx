"use client";

import { FC, useState } from "react";

interface CopyRightProps {}
const CopyRight: FC<CopyRightProps> = ({}) => {
  return (
    <div className="bg-primary-500 py-6 flex justify-center">
      <div className="container px-10 text-white text-center text-sm">
        Copyrights © 2024 All Rights Reserved by Scholarly Help
      </div>
    </div>
  );
};

export default CopyRight;
