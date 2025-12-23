import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800&q=80"
                alt="Working on code"
                className="relative rounded-2xl shadow-lg w-full object-cover aspect-video md:aspect-[4/5] lg:h-[400px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              {t('about.heading')}
            </h3>
            {/* <p className="text-muted-foreground leading-relaxed">
              {t('about.p1')}
            </p> */}
            <p className="text-muted-foreground leading-relaxed">
              {t('about.p2')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.p3')}
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-8">
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-4 md:p-6 flex flex-col items-center gap-3 text-center">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-primary mb-1">20+</h4>
                    <p className="text-xs md:text-sm text-muted-foreground font-medium">{t('about.tools_and_technologies')}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-4 md:p-6 flex flex-col items-center gap-3 text-center">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-primary mb-1">10+</h4>
                    <p className="text-xs md:text-sm text-muted-foreground font-medium">{t('about.projects_completed')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
