import Link from "next/link";
import React from "react";
import { SideBarLinkParam } from "./type";
import './styles.css'

const SingleRow = ({
  children,
  label,
  link,
  isActive,
}: SideBarLinkParam & { isActive: boolean }) => {
  return (
    <Link
      href={link}
      className={`flex  mt-2 gap-2 px-[20px] py-[10px] rounded-md font-medium relative truncate ${
        isActive && " text-white link"
      }`}
    >
      {children} {label}
    </Link>
  );
};

export default SingleRow;
