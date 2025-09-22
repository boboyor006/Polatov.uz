
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-foreground">{t('hero.greeting')} </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                {t('hero.name')}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600">
                <Mail className="w-4 h-4 mr-2" />
                {t('hero.hireMe')}
              </Button>
              
              <Button variant="outline" size="lg">
                <Download className="w-4 h-4 mr-2" />
                {t('hero.downloadCV')}
              </Button>

              <Button variant="ghost" size="lg">
                <Github className="w-4 h-4 mr-2" />
                {t('hero.viewProjects')}
              </Button>
            </motion.div>
          </motion.div>

       
        </div>
      </div>
    </section>
  );
};

export default Hero;
