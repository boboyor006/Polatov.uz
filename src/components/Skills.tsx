
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: 'HTML/CSS', level: 95, icon: '🌐' },
        { name: 'JavaScript', level: 90, icon: '⚡' },
        { name: 'React.js', level: 88, icon: '⚛️' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' }
      ]
    },
    {
      title: t('skills.frameworks'),
      skills: [
        { name: 'Bootstrap', level: 85, icon: '🅱️' },
        { name: 'SCSS/Sass', level: 80, icon: '💎' },
        { name: 'Framer Motion', level: 75, icon: '🎭' },
        { name: 'Three.js', level: 70, icon: '🎲' }
      ]
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Git/GitHub', level: 85, icon: '📚' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Figma', level: 80, icon: '🎨' },
        { name: 'Webpack', level: 70, icon: '📦' }
      ]
    },
    {
      title: t('skills.learning'),
      skills: [
        { name: 'TypeScript', level: 65, icon: '📘' },
        { name: 'Next.js', level: 60, icon: '▲' },
        { name: 'Node.js', level: 55, icon: '🟢' },
        { name: 'GraphQL', level: 50, icon: '🔗' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            {t('skills.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
