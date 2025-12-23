import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary/30 py-12 border-t">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Portfolio.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Svnooo" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/arielstevano/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>

        </div>
      </div>
    </footer>
  );
}
