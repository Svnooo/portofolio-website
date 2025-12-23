import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./language-toggle";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.about'), href: "#about" },
    { name: t('navbar.projects'), href: "#projects" },
    { name: t('navbar.skills'), href: "#skills" },
    { name: t('navbar.contact'), href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Portfolio.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-2 ml-4">
            <LanguageToggle />
            <ModeToggle />
            <div className="w-px h-6 bg-border mx-2" />
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Svnooo" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/arielstevano/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild>
              <a href="#contact">{t('navbar.contact')}</a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b animate-in slide-in-from-top-5">
          <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 py-2">
               <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Svnooo" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/arielstevano/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
             <Button className="w-full" asChild>
              <a href="#contact" onClick={() => setIsOpen(false)}>{t('navbar.contact')}</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
