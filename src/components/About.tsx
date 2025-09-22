
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation();

  const learningSkills = [
    'TypeScript',
    'Next.js',
    'Node.js',
    'GraphQL',
    'Figma ',
    'Blog'
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {t('about.learning')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {learningSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-orange-500/20 border border-blue-500/30 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-500 mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Tajribam </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange-500 mb-2">17+</div>
                  <div className="text-sm text-muted-foreground">Loyhalarim </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-500 mb-2">32+</div>
                  <div className="text-sm text-muted-foreground">doyimi klentlar </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
