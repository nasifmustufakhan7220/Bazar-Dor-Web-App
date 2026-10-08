const Footer = () => {
  return (
    <footer className="border-t border-[#dce4dd] bg-[#f9fbf9] mt-12">
      <div className="mx-auto flex w-full max-w-250 flex-col items-center justify-between gap-4 px-5 py-7 text-center text-sm text-[#202923] sm:px-6 md:flex-row md:gap-6 md:py-8 md:text-left">
        {/* Left */}
        <p>
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>

        {/* Right */}
        <p className="md:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;