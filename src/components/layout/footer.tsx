import { Instagram, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-200 border-t-2 border-t-[#FFF] p-24">
      <section className="container mx-auto">
        <div className="flex items-center justify-between w-full">
          <section>
            <h5 className="font-bold text-xl">Foody Lounge</h5>
          </section>
          <section className="flex items-center gap-[10px]">
            <a href="https://www.instagram.com/bodiedbyluto?igsh=MWRwaHl4ZWhuOGV5MA==">
              <Instagram color="#000" />
            </a>
            <a
              href="mailto:info@bodiedbylu.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail color="#000" />
            </a>
          </section>
        </div>
      </section>
      <section>
        <p className="text-[#000] font-normal text-base">
          {new Date().getFullYear()} &copy; Foody Lounge
        </p>
      </section>
    </footer>
  );
}

export default Footer;
