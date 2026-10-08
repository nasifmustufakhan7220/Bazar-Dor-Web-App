import { INavlink } from "@/bazarDor.types";
import ActiveNavLink from "./ActiveNavLink";

const NavLinks = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    { cache: "force-cache" }
  );

  const data: INavlink[] = await res.json();

  return (
    <div className="mt-8 w-full border-t border-[#e9f0e9]">
      <div className="mx-auto flex w-full max-w-250">
        {data.map((li) => (
          <ActiveNavLink key={li.id} li={li} />
        ))}
      </div>
    </div>
  );
};

export default NavLinks;