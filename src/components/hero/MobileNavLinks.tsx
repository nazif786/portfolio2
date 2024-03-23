import Link from "next/link";
import { links } from "./NavLinks";

const MobileNavLinks = () => {
  return (
    <ul className="md:hidden flex flex-col flex-wrap space-x-7 mt-16 text-sm relative ">
      {links.map((link) => (
        <li
          key={link.label}
          className="list-none flex flex-col items-center justify-center text-xl space-y-3 px-0 py-3 border-2"
        >
          <Link className="" href={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavLinks;
