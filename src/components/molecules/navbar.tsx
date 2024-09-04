import { Button } from "../ui/button";

const Navbar = () => {
  const styles = {
    btn: `bg-white border text-black border-black rounded-md hover:bg-none`,
    links: {
      nav: `cursor-pointer font-normal`,
    },
  };
  const navLinks: { path: string; text: string }[] = [
    {
      path: "#",
      text: "Order",
    },
    {
      path: "#",
      text: "Menu",
    },
    {
      path: "#",
      text: "Offers",
    },
    {
      path: "#",
      text: "Restaurants",
    },
    {
      path: "#",
      text: "Careers",
    },
    {
      path: "#",
      text: "News",
    },
  ];
  return (
    <nav className="flex items-center justify-between py-4 mb-8">
      <div className="flex items-center gap-x-8">
        <h2 className="font-bold text-xl">Foody Lounge</h2>
        <ul className="flex items-center gap-x-4">
          {navLinks.map((link) => (
            <li>
              <a href={link.path} className={`${styles.links.nav}`}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-x-2">
        <Button className="">Login</Button>
        <Button className={`${styles.btn} hover:bg-white-500`}>Sign up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
