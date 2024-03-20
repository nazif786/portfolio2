import React from "react";
import { ModeToggle } from "./ToggleTheme";
import Link from "next/link";
export const links = [
  { label: "", href: "" },
  { label: "Home", href: "/#home" },
  { label: "About Me", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];
const NavLinks = () => {
  return (
    <ul className="hidden md:flex md:space-x-7 mt-7 md:text-sm md:relative">
      {links.map((link) => (
        <li
          key={link.label}
          className="list-none hover:text-slate-600 nav-link "
        >
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
      <li className="-mt-3">
        <ModeToggle />
      </li>
    </ul>
  );
};

export default NavLinks;
