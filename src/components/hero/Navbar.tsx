"use client";
import { useState } from "react";
import { LineMdCloseToMenuAltTransition } from "../ui/LineMdCloseToMenuAltTransition";
import { LineMdMenuToCloseAltTransition } from "../ui/LineMdMenuToCloseAltTransition";
import { Button } from "../ui/button";
import NavLinks from "./NavLinks";
import MobileNavLinks from "./MobileNavLinks";
import { ModeToggle } from "./ToggleTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleMenu = () => {};
  return (
    <>
      <nav className="flex justify-between md:px-5 md:py-3">
        <h1 className="font-extrabold font-mono text-3xl text-center md:text-left mt-3 pl-2">
          SHIRZAI
          <span className="text-red-800 text-12xl">.</span>
        </h1>
        <div>
          <div className="sticky">
            <NavLinks />
          </div>
          <div className="md:hidden absolute top-2 right-1 z-30">
            <ModeToggle />
            <Button onClick={() => setIsOpen(!isOpen)} variant={"link"}>
              {isOpen ? (
                <LineMdMenuToCloseAltTransition fontSize={18} />
              ) : (
                <LineMdCloseToMenuAltTransition fontSize={18} />
              )}
            </Button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute top-0 left-0 z-20 w-full h-dvh bg-accent">
          <MobileNavLinks />
        </div>
      )}
    </>
  );
};

export default Navbar;
