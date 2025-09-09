import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";

const Header = () => {
  return (
    <header
      id="home"
      className="scroll-mt-[12vh] flex flex-col gap-3 w-full justify-center items-center py-20 "
    >
      <div className="flex flex-col items-center gap-5">
        <Image
          src={"/hero.webp"}
          alt="header-logo"
          width={180}
          height={180}
          className="rounded-full object-cover w-40 h-40"
          priority
        />
        <p className=" text-2xl sm:text-3xl ovo">Hi! I&apos;m Tilak.</p>
      </div>
      <div className="flex flex-wrap justify-center items-center text-4xl sm:text-5xl ovo text-center px-5">
        full stack web developer.
      </div>
      <div className="flex flex-wrap justify-center items-center text-2xl sm:text-3xl font-thin mb-2 text-center">
        always learning something new.
      </div>

      <a href="https://drive.google.com/file/d/1KgSoUMMc11d8TN0RuCbTRRo4pkYR4O5E/view?usp=sharing">
        <button
          className="flex items-center hover:bg-secondary transition-all cursor-pointer 
                           border-2 border-primary px-3 py-2 rounded-lg "
        >
          <MdOutlineFileDownload className="size-6" /> My Resume
        </button>
      </a>
    </header>
  );
};

export default Header;
