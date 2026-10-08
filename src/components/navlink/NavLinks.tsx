import { INavlink } from "@/bazarDor.types";
import ActiveNavLink from "./ActiveNavLink";

const NavLinks = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    { cache: "force-cache" }
  );

  const data: INavlink[] = await res.json();

  return (
    <div className="mx-auto mt-8 w-full max-w-240 py-4 overflow-x-auto border-t border-[#e9f0e9]">
      <div className="flex min-w-max items-center px-4 sm:px-0">
        {data.map((li) => (
          <ActiveNavLink key={li.id} li={li} />
        ))}
      </div>
    </div>
  );
};

export default NavLinks;