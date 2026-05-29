import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/dm.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Areas", href: "#areas" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? "py-3"
              : "py-5"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 overflow-hidden">
          <div
            className={`
              rounded-2xl
              overflow-hidden
              border
              backdrop-blur-xl
              transition-all duration-300
              ${
                scrolled
                  ? "bg-white/80 border-slate-200 shadow-lg"
                  : "bg-white/60 border-white/50"
              }
            `}
          >
            <div className="flex items-center justify-between px-6 py-4">

              {/* Logo */}
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Dhruv Marketing"
                  className="h-11 w-auto"
                />

                <div>
                  <h2 className="font-bold text-slate-900 text-lg">
                    Dhruv Marketing
                  </h2>

                  <p className="text-xs text-slate-500">
                    Trusted Since 2005
                  </p>
                </div>
              </div>

              {/* Desktop Menu */}
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="
                      text-slate-700
                      font-medium
                      hover:text-sky-600
                      transition
                    "
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Desktop CTA */}
              <a
                href="https://wa.me/919998634688"
                target="_blank"
                rel="noreferrer"
                className="
                  hidden md:flex
                  items-center
                  rounded-xl
                  bg-sky-500
                  px-5 py-3
                  text-white
                  font-semibold
                  shadow-md
                  hover:scale-105
                  hover:bg-sky-600
                  transition-all
                "
              >
                Order Now
              </a>

              {/* Mobile Button */}
              <button
                onClick={() =>
                  setMobileOpen(!mobileOpen)
                }
                className="md:hidden"
              >
                {mobileOpen ? (
                  <X size={26} />
                ) : (
                  <Menu size={26} />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`
                overflow-hidden
                transition-all duration-300
                ${
                  mobileOpen
                    ? "max-h-96"
                    : "max-h-0"
                }
              `}
            >
              <div className="px-6 pb-6 flex flex-col gap-4">

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="
                      text-slate-700
                      font-medium
                    "
                    onClick={() =>
                      setMobileOpen(false)
                    }
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="https://wa.me/919998634688"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    mt-2
                    rounded-xl
                    bg-sky-500
                    py-3
                    text-center
                    text-white
                    font-semibold
                  "
                >
                  Order on WhatsApp
                </a>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}