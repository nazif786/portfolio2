import Link from "next/link";

const Navbar = () => {
  const links = [
    { label: "Home", href: "/#home" },
    { label: "About Me", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];
  return (
    <nav className="md:flex md:justify-between md:px-5 md:py-3">
      <h1 className="font-extrabold font-mono text-5xl text-center md:text-left mt-3">
        SHIRZAI
        <span className="text-red-800 text-12xl">.</span>
      </h1>
      <div>
        <ul className=" hidden md:flex md:space-x-7 mt-7 text-sm">
          {links.map((link) => (
            <li
              key={link.label}
              className="list-none hover:text-slate-600 nav-link"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
