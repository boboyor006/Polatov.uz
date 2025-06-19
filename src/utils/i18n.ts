
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      nav: {
        home: "Bosh sahifa",
        about: "Men haqimda",
        skills: "Ko'nikmalar",
        projects: "Loyihalar",
        contact: "Aloqa"
      },
      hero: {
        greeting: "Salom, men",
        name: "Frontend Dasturchi",
        description: "Zamonaviy va interaktiv veb-saytlar yaratuvchi dasturchi",
        hireMe: "Meni ishga oling",
        downloadCV: "CV yuklab olish",
        viewProjects: "Loyihalarni ko'rish"
      },
      about: {
        title: "Men haqimda",
        description: "Men tajribali Frontend dasturchiman, zamonaviy veb-texnologiyalar bilan ishlashni yaxshi bilaman. Har bir loyihani mukammallik bilan bajarishga intilamanpython.",
        learning: "Hozir o'rganyapman"
      },
      skills: {
        title: "Ko'nikmalar",
        frontend: "Frontend Texnologiyalar",
        frameworks: "Freymvorklar",
        tools: "Vositalar",
        learning: "O'rganyapman"
      },
      projects: {
        title: "Loyihalar",
        viewDemo: "Demo ko'rish",
        viewCode: "Kodni ko'rish",
        allProjects: "Barcha loyihalar"
      },
      contact: {
        title: "Aloqa",
        name: "Ism",
        email: "Email",
        subject: "Mavzu",
        message: "Xabar",
        send: "Yuborish",
        success: "Xabar muvaffaqiyatli yuborildi!"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        greeting: "Hello, I'm",
        name: "Frontend Developer",
        description: "Creating modern and interactive web experiences",
        hireMe: "Hire Me",
        downloadCV: "Download CV",
        viewProjects: "View Projects"
      },
      about: {
        title: "About Me",
        description: "I'm an experienced Frontend Developer with expertise in modern web technologies. I strive for perfection in every project I undertake.",
        learning: "Currently Learning"
      },
      skills: {
        title: "Skills",
        frontend: "Frontend Technologies",
        frameworks: "Frameworks",
        tools: "Tools",
        learning: "Learning"
      },
      projects: {
        title: "Projects",
        viewDemo: "View Demo",
        viewCode: "View Code",
        allProjects: "All Projects"
      },
      contact: {
        title: "Contact",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send",
        success: "Message sent successfully!"
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        about: "Обо мне",
        skills: "Навыки",
        projects: "Проекты",
        contact: "Контакты"
      },
      hero: {
        greeting: "Привет, я",
        name: "Frontend Разработчик",
        description: "Создаю современные и интерактивные веб-приложения",
        hireMe: "Нанять меня",
        downloadCV: "Скачать CV",
        viewProjects: "Смотреть проекты"
      },
      about: {
        title: "Обо мне",
        description: "Я опытный Frontend разработчик с экспертизой в современных веб-технологиях. Стремлюсь к совершенству в каждом проекте.",
        learning: "Изучаю сейчас"
      },
      skills: {
        title: "Навыки",
        frontend: "Frontend Технологии",
        frameworks: "Фреймворки",
        tools: "Инструменты",
        learning: "Изучаю"
      },
      projects: {
        title: "Проекты",
        viewDemo: "Демо",
        viewCode: "Код",
        allProjects: "Все проекты"
      },
      contact: {
        title: "Контакты",
        name: "Имя",
        email: "Email",
        subject: "Тема",
        message: "Сообщение",
        send: "Отправить",
        success: "Сообщение успешно отправлено!"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
