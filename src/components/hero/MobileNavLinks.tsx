import Link from "next/link";
import { links } from "./NavLinks";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileNavLinks = ({ setIsOpen }: Props) => {
  return (
    <ul className="md:hidden flex flex-col flex-wrap space-x-7 mt-16 text-sm relative ">
      {links.map((link) => (
        <li
          key={link.label}
          className="list-none flex flex-col items-center justify-center text-xl space-y-3 px-0 py-3"
        >
          <Link onClick={() => setIsOpen(false)} href={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavLinks;
