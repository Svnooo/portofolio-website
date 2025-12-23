import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Employee Expense & Reimbursement System",
      description: "A web-based reimbursement system designed to handle multi-step approval workflows and role-based access in an organizational environment.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      tags: ["Spring Boot", "React Vite", "Tailwind CSS", "MySQL"],
      keyFocus: ["Business workflow", "Access control", "Data consistency"],
      github: "#",
      demo: "#",
    },
    {
      title: "Driving Monitoring System",
      description: "A real-time monitoring system supporting AI-based driver safety detection during pilot deployment.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
      tags: ["FastAPI", "React Vite","Tailwind CSS", "Google Cloud Platform", "FireStore"],
      keyFocus: ["Real-time data handling", "System integration"],
      github: "#",
      demo: "#",
    },
    {
      title: "Tourism Recommendation System",
      description: "A data-driven tourism recommendation system built using a knowledge graph approach.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      tags: ["FastAPI","React Vite","Tailwind CSS", "Knowledge Graph","PostgreSQL", "Neo4J"],
      keyFocus: ["Data modeling", "Recommendation logic"],
      github: "#",
      demo: "#",
    },
    {
      title: "Localine (3rd Place Winner)",
      description: "A digital platform to help small and medium enterprises improve their online presence.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
      tags: ["React Vite", "Tailwind CSS"],
      keyFocus: ["Frontend architecture", "User experience"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-500 border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm group">
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                    <Button size="icon" variant="secondary" className="rounded-full hover:scale-110 transition-transform" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full hover:scale-110 transition-transform" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col gap-4 md:gap-6">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-xs md:text-sm font-semibold text-foreground flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Key Focus
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.keyFocus.map((focus, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground bg-secondary/30 p-2 rounded-md">
                          <div className="h-1 w-1 rounded-full bg-primary/50" />
                          {focus}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] md:text-xs py-1 px-2 border-primary/20 text-primary/80">
                        {tag}
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
