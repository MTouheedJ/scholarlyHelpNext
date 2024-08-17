"use client";

import React from "react";
import Excercise from "./components/Excercise";
import Scan from "@/app/layouts/Scan";

const page = () => {
  return (
    <Scan hideFooter hideHeader>
      <Excercise />
    </Scan>
  );
};

export default page;
