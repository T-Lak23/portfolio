"use client";
import { RefObject, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCodeSlashSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

interface NavbarProps {
  navRef: RefObject<HTMLDivElement | null>;
  handleOpen: () => void;
  handleClose: () => void;
}
const Navbar = ({ navRef, handleOpen, handleClose }: NavbarProps) => {
  const navLink = [
    { id: "1", text: "Home", link: "#home" },
    { id: "2", text: "About", link: "#about" },
    { id: "3", text: "Skills", link: "#skills" },
    { id: "4", text: "Projects", link: "#projects" },
    { id: "5", text: "Contact", link: "#contact" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="w-full lg:px-[6rem] px-[1rem] sm:px-[2rem] h-[12vh] flex md:gap-0 gap-4  z-100 justify-between 
                    items-center border-b bg-main fixed border-border"
      >
        <div className="flex items-center ">
          <IoCodeSlashSharp
            size={36}
            className="bg-secondary text-white mr-2 p-2 rounded-lg"
          />
          <p className="font-semibold text-lg md:text-xl">
            {" "}
            Tilak<span className="text-primary">.</span>
          </p>
        </div>
        <nav className="md:flex items-center  hidden md:gap-4 lg:gap-6">
          {navLink.map((nav) => (
            <a
              key={nav.id}
              href={nav.link}
              className={`px-2  py-1 ovo rounded-lg hover:underline hover:underline-offset-2  `}
            >
              {nav.text}
            </a>
          ))}
        </nav>

        <div className="md:block flex items-center gap-3">
          <button
            className="flex items-center gap-2 bg-primary px-2 py-1.5 md:px-3 md:py-2 rounded-lg hover:underline  
                   hover:underline-offset-2 cursor-pointer"
            type="button"
          >
            {" "}
            <a
              href="https://github.com/T-Lak23"
              className="flex items-center gap-2"
            >
              {" "}
              <FaGithub />
              Github
            </a>
          </button>

          {open ? (
            <RxCross2
              size={22}
              onClick={() => {
                handleClose();
                setOpen(false);
              }}
              className="md:hidden block"
            />
          ) : (
            <GiHamburgerMenu
              size={22}
              onClick={() => {
                handleOpen();
                setOpen(true);
              }}
              className="md:hidden block"
            />
          )}
        </div>
      </div>

      <div
        ref={navRef}
        className="fixed top-[12vh] right-[-100%] z-10 md:hidden bg-secondary h-[calc(100vh-12vh)] w-2/3 transition-all duration-300"
      >
        <nav className="flex flex-col gap-6 sm:text-lg items-center translate-y-[2rem]">
          {navLink.map((nav) => (
            <a
              key={nav.id}
              href={nav.link}
              className="hover:underline hover:underline-offset-2 ovo"
              onClick={() => {
                handleClose();
                setOpen(false);
              }}
            >
              {nav.text}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
