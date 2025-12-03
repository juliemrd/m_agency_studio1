import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between py-6">
          <a href="/" className="font-display text-sm md:text-base font-medium tracking-[0.25em] uppercase">
            M Agency Studio
          </a>

          <ul className="hidden md:flex items-center gap-10">
            {["About", "Services", "Process", "Contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-caption link-underline"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection("contact")}
            className="md:hidden text-caption"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
