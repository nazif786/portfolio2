import HeroSection from "./hero/HeroSection";
import Navbar from "./hero/Navbar";

const Nav = () => {
  return (
    <div className="bg-slate-50 px-1">
      <div className="h-svh">
        <div className="md:w-[85%] m-auto">
          <Navbar />
        </div>
        <HeroSection />
      </div>
    </div>
  );
};

export default Nav;
