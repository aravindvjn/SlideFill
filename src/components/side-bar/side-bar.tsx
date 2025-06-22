"use client";
import React from "react";
import Logo from "../icons/logo";
import SingleRow from "./single-row";
import { sideBarLinks } from "./links";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathName = usePathname();
  return (
    <div className="hidden lg:flex flex-col lg:w-[270px] xl:w-[300px] border-r-1 border-border h-svh p-[20px] top-0 sticky">
      <Logo />
      <div className="h-4" />
      {sideBarLinks.map((item) => (
        <SingleRow
          isActive={pathName === item.link}
          key={item.link}
          {...item}
        />
      ))}
    </div>
  );
};

export default SideBar;
