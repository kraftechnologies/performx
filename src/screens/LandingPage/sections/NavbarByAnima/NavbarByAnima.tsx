import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RunningLogo } from "../../../../components/ui/running-logo";
import TopBar from "../../../../components/ui/TopBar";

export const NavbarByAnima = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Pricing", href: "/pricing" },
    {
      title: "Features",
      href: "#",
      dropdown: [
        "Overview",
        "Analytics Dashboard",
        "Integrations",
        "AI-Powered Insights",
        "Security & Compliance",
      ],
    },
    {
      title: "Resources",
      href: "#",
      dropdown: ["Blog", "Whitepapers", "Webinars", "Help Center / FAQs"],
    },
    {
      title: "Company",
      href: "#",
      dropdown: ["About Us", "Careers", "Contact", "Partner Program"],
    },
    {
      title: "Case Studies",
      href: "#",
      dropdown: ["By Industry", "By Business Size", "Client Stories"],
    },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-[100px]">
      <TopBar />
      <motion.header
        className={`fixed top-[42px] left-0 right-0 z-40 w-full p-2 font-jost bg-[#1d002c] text-white text-sm border-b border-[#404040]`}
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="h-12 max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between"
        >
          <Link to="/" className="flex items-center">
            <RunningLogo />
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-app-accent/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Sidebar */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                className="absolute top-full left-0 w-full bg-[#1d002c] text-white shadow-xl md:hidden z-40"
              >
                <div className="flex flex-col p-6 space-y-4 overflow-y-auto">
                  {navLinks.map((link) => (
                    <div key={link.title}>
                      <button
                        onClick={() =>
                          setActiveDropdown((prev) =>
                            prev === link.title ? null : link.title
                          )
                        }
                        className="text-left w-full text-white font-medium text-base flex items-center justify-between"
                      >
                        {link.title}
                        {link.dropdown && <ChevronDown size={16} />}
                      </button>
                      {link.dropdown && activeDropdown === link.title && (
                        <div className="pl-4 mt-2 space-y-2 text-sm font-normal text-gray-300 leading-relaxed">
                          {link.dropdown.map((item) => (
                            <a
                              key={item}
                              href="#"
                              onClick={() => setIsMenuOpen(false)}
                              className="block hover:text-white transition-colors duration-200"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center space-x-4 lg:space-x-6"
            ref={dropdownRef}
          >
            {navLinks.map((link) => (
              <div key={link.title} className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown((prev) =>
                      prev === link.title ? null : link.title
                    )
                  }
                  className="text-white font-medium hover:text-purple-300 text-sm flex items-center gap-1"
                >
                  {link.title}
                  {link.dropdown && (
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform duration-200 ${activeDropdown === link.title ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </button>

                {link.dropdown && activeDropdown === link.title && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute top-full mt-2 w-64 bg-[#1e295f] text-white rounded-lg shadow-xl border border-purple-600/30 z-50 py-2"
                  >
                    {link.dropdown.map((item, i) => (
                      <motion.a
                        key={item}
                        href="#"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="block px-5 py-2 text-sm text-gray-200 hover:bg-purple-700/50 hover:pl-6 transition-all duration-200 ease-in-out first:rounded-t-lg last:rounded-b-lg"
                      >
                        {item}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-purple-300 text-sm"
              >
                Custom Request
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-6 py-2 text-white text-sm"
                aria-label="Contact sales"
                onClick={() => {
                  const footer = document.getElementById("footer");
                  if (footer) {
                    footer.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>
    </div>
  );
};
