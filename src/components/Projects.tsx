
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import Ekomers from "../../src/ekomers.webp"
import Weathers from "../Weather .png"
import Tasks from "../3912429.jpg"
import Restoran from "../restfood-restaurant-one-page-html5-website-template_255812-original.webp"
import Chats from "../istockphoto-1217093906-612x612.jpg"





const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern online shopping platform with React and Tailwind CSS',
      image: Ekomers,
      technologies: ['React', 'Tailwind', 'JavaScript', 'API'],
      category: 'react',
    demoUrl: 'https://github.com/boboyor006',
      codeUrl: 'https://github.com/boboyor006'
    },
    
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with beautiful UI',
      image: Weathers,
      technologies: ['React', 'API', 'Charts', 'Responsive'],
      category: 'react',
    demoUrl: 'https://github.com/boboyor006',
      codeUrl: 'https://github.com/boboyor006'
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Productivity app with drag and drop functionality',
      image: Tasks,
      technologies: ['React', 'Redux', 'TypeScript', 'DnD'],
      category: 'react',
      demoUrl: 'https://github.com/boboyor006',
      codeUrl: 'https://github.com/boboyor006'
    },
    {
      id: 5,
      title: 'Restaurant Website',
      description: 'Beautiful restaurant landing page with animations',
      image: Restoran,
      technologies: ['HTML', 'SCSS', 'JavaScript', 'AOS'],
      category: 'design',
      demoUrl: 'https://github.com/boboyor006',
      codeUrl: 'https://github.com/boboyor006'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat app with modern design',
      image: Chats,
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      demoUrl: 'https://github.com/boboyor006',
      codeUrl: 'https://github.com/boboyor006'
    }
  ];

  const categories = [
    { key: 'all', label: t('projects.allProjects') },
    { key: 'react', label: 'React' },
    { key: 'vanilla', label: 'Vanilla JS' },
    { key: 'design', label: 'UI Design' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={filter === category.key ? 'default' : 'outline'}
                onClick={() => setFilter(category.key)}
                className={filter === category.key ? 'bg-gradient-to-r from-blue-500 to-orange-500' : ''}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('projects.viewDemo')}
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {t('projects.viewCode')}
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
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
};

export default Projects;
