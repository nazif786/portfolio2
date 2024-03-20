import HeroSection from "./hero/HeroSection";
import Navbar from "./hero/Navbar";
import bg from "../../public/bg.jpg";

const Nav = () => {
  return (
    <div className={`bg-background px-1 `}>
      <div className="h-content z-50">
        <div className="md:w-[85%] m-auto">
          <Navbar />
        </div>
        <HeroSection />
      </div>
    </div>
  );
};

export default Nav;
