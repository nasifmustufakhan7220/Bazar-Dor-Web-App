"use client";

import { INavlink } from "@/types/bazarDor.types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveNavLink = ({ li }: { li: INavlink }) => {
  const pathname = usePathname();

  return (
    <Link
      aria-current={pathname === `/category/${li.slug}` ? "page" : undefined}
      className={`flex shrink-0 cursor-pointer gap-1 whitespace-nowrap p-2 ${
        pathname === `/category/${li.slug}`
          ? "rounded-xl bg-[#048039] text-[#f2faf3]"
          : "rounded-xl hover:bg-[#e5f1e8]"
      }`}
      href={`/category/${li.slug}`}
      key={li.id}
    >
      {li.icon}
      {li.nameBn}
    </Link>
  );
};

export default ActiveNavLink;