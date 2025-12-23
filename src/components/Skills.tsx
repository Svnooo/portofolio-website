import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Cloud, Database, Layout, Server } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation();

  const skills = [
    {
      category: "Core Skills",
      icon: Layout,
      items: ["Full Stack Web Development", "RESTful API Design", "System & Database Design"],
    },
    {
      category: "Frontend",
      icon: Database, // Using Database as placeholder, will swap to LayoutTemplate if available or Monitor
      items: ["React", "TypeScript", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Java Spring Boot", "FastAPI", "Node.js", "Laravel", "CodeIgniter"],
    },
    {
      category: "Cloud & Tools",
      icon: Cloud,
      items: ["Google Cloud Platform", "Docker", "Git & GitHub", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('skills.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm group">
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge 
                        key={item} 
                        variant="secondary" 
                        className="text-xs md:text-sm py-1.5 px-3 bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
