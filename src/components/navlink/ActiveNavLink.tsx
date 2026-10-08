"use client";

import { INavlink } from "@/bazarDor.types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveNavLink = ({ li }: { li: INavlink }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`flex shrink-0 cursor-pointer gap-1 whitespace-nowrap p-2 ${
        pathname === `/${li.slug}`
          ? "rounded-xl bg-[#048039] p-2 text-[#f2faf3]"
          : ""
      }`}
      href={`/${li.slug}`}
      key={li.id}
    >
      {li.icon}
      {li.nameBn}
    </Link>
  );
};

export default ActiveNavLink;