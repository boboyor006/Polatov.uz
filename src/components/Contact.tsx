
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import "../css/Contac.css"

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const isFormValid = formData.name.trim() !== '' && 
                     formData.email.trim() !== '' && 
                     formData.subject.trim() !== '' && 
                     formData.message.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) {
      toast.error('Please fill out all fields before submitting.');
      return;
    }

    console.log('Form submitted:', formData);
    toast.success(t('contact.success'));
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:your.polatovt033@gmail.com', label: 'Email' },
    { icon: Github, href: 'https://github.com/boboyor006', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/boboyor-po%CA%BBlatov-034006350/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://t.me/Polatov0555', label: 'Telegram' }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="grid class_input lg:grid-cols-2 gap-12 max-w-6xl mx-auto ">
        

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className='Cards_constac'>
              <CardHeader>
                <CardTitle className="text-2xl">Men Billan bog'lanish </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                Men har doim yangi imkoniyatlar va qiziqarli loyihalar haqida suhbatlashishga tayyorman.
                Agar hamkorlik qilishni yoki shunchaki suhbat qurishni istasangiz, bemalol murojaat qiling!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span>polatovt033@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">📍</span>
                    <span>Surxondaryo, Uzbekistan</span>
                  </div>
                  <div className="flex items-center space-x-3">
             
               
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-accent transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="text-sm">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
