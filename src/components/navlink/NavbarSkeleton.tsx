const NavbarSkeleton = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-17.5 max-w-7xl items-center justify-center overflow-hidden px-4">
        <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
          {items.map((item) => (
            <div
              key={item}
              className="flex shrink-0 items-center gap-2"
            >
              <div className="skeleton h-5 w-5 rounded-full" />

              <div className="skeleton h-4 w-12 rounded-md sm:w-14" />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarSkeleton;