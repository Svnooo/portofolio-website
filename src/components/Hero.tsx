import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs md:text-sm font-medium mb-2 md:mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t('hero.badge')}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            <Trans i18nKey="hero.title">
              Building <span className="text-primary">Reliable Digital</span> Products
            </Trans>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="gap-2 h-12 px-8 text-base w-full sm:w-auto" asChild>
              <a href="#projects">
                {t('hero.view_projects')} <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-12 px-8 text-base w-full sm:w-auto" asChild>
              <a href="/Ariel Stevano-resume.pdf" download>
                {t('hero.download_cv')} <Download className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="relative w-64 sm:w-80 md:w-96 aspect-[3/4]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-[2rem] opacity-20 blur-3xl animate-pulse" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-muted/30 backdrop-blur-sm flex items-center justify-center">
               <img 
                src="/compressed.jpg" 
                alt="Ariel Stevano" 
                className="w-full h-full object-cover object-top"
               />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
