import HeroSlider from "../molecules/hero-slider";
import Navbar from "../molecules/navbar";

const Header = () => {
  return (
    <div>
      <Navbar />
      <header>
        <HeroSlider />
      </header>
    </div>
  );
};

export default Header;
