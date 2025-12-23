import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
          >
            <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:arielstevano17@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    arielstevano17@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <a href="tel:+6285183080529" className="text-muted-foreground hover:text-primary transition-colors">
                    +62 8518 3080 529
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Jakarta, Indonesia</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
