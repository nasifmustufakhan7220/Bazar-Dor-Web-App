import { INavlink } from "@/types/bazarDor.types";
import ActiveNavLink from "./ActiveNavLink";
import { Suspense } from "react";
import NavbarSkeleton from "./NavbarSkeleton";

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    { cache: "force-cache" }
  );

  const data: INavlink[] = await res.json();

  return (
    <nav aria-label="পণ্যের বিভাগ" className="mx-auto mt-4 w-full max-w-6xl overflow-x-auto border-t border-[#e9f0e9] py-2 sm:mt-6 sm:py-3">
      <div className="flex min-w-max items-center gap-1 px-3 sm:px-4">
        {data.map((li) => (
          <Suspense key={li.id} fallback={<NavbarSkeleton/>}>
            <ActiveNavLink li={li} />
          </Suspense>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;