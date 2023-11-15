import React from "react";
import GreenieLogo from "../../../assets/greenieone_logo.jpeg";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between border-b-2 border-gray-400">
        <Image
          src={GreenieLogo}
          alt="company-logo"
          className="h-[65px] w-[65px] ml-16"
        />
        <h1 className="text-2xl font-bold">User Management Dashboard</h1>
        <div className="mr-16"></div>
      </div>
    </>
  );
};

export default Navbar;
