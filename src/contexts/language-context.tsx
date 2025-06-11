"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ru" | "de" | "kk" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface Translations {
  [key: string]: string;
}

const translations: Record<string, Translations> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",

    // Home Page
    "home.hero.badge": "Trusted by 8,500+ International Patients",
    "home.hero.title1": "YES, WE CARE",
    "home.hero.title2": "AND WE DARE",
    "home.hero.title3": "TO PROVIDE",
    "home.hero.title4": "EVERYTHING",
    "home.hero.subtitle":
      "Experience world-class medical treatment in India with comprehensive support for patients from Kazakhstan and Russia. Your health journey starts here with our exceptional care and unwavering commitment.",
    "home.hero.startJourney": "Start Your Journey",
    "home.hero.exploreServices": "Explore Services",
    "home.stats.treatments": "Successful Treatments",
    "home.stats.patients": "Happy Patients",
    "home.stats.hospitals": "Partner Hospitals",
    "home.stats.experience": "Years Experience",
    "home.hospitals.badge": "Premium Healthcare Partners",
    "home.hospitals.title": "Our Partner Hospitals",
    "home.hospitals.subtitle":
      "We collaborate with India's most prestigious hospitals to ensure you receive world-class medical care with the highest standards of treatment and international patient services.",
    "home.popup.title": "Hello everyone,",
    "home.popup.subtitle": "YES, WE CARE AND WE DARE TO PROVIDE EVERYTHING.",
    "home.popup.description":
      "We provide comprehensive support for patients from Kazakhstan and Russia seeking world-class treatment in India. From visa assistance to post-treatment care, we're with you every step of the way.",
    "home.popup.contactUs": "Contact Us Now",
    "home.popup.visitServices": "Explore Our Services",

    // Services Page
    "services.hero.badge": "World-Class Medical Services",
    "services.hero.title": "Comprehensive Healthcare Solutions",
    "services.hero.subtitle":
      "Discover our extensive range of medical treatments and procedures, delivered by world-renowned specialists using cutting-edge technology and personalized care protocols.",
    "services.specialties.title": "Our Medical Specialties",
    "services.specialties.subtitle":
      "Each service is backed by internationally trained specialists and state-of-the-art medical technology",
    "services.cancer.badge": "Specialized Oncology Care",
    "services.cancer.title": "Advanced Cancer Treatments",
    "services.cancer.subtitle":
      "Our comprehensive oncology program combines cutting-edge treatments, precision medicine, and compassionate care to deliver the best possible outcomes for cancer patients.",
    "services.successRate": "Success Rate",
    "services.treatmentSuccess": "Treatment Success",
    "services.excellenceRating": "Excellence Rating",

    // About Page
    "about.hero.title": "Our Story & Mission",
    "about.hero.subtitle":
      "Bridging healthcare excellence between India and the CIS region for over 15 years. We are committed to making world-class medical treatment accessible and affordable.",
    "about.story.title": "Connecting Hearts, Healing Lives",
    "about.values.title": "Our Core Values",
    "about.values.subtitle":
      "These principles guide everything we do and shape our commitment to excellence in healthcare facilitation.",
    "about.team.title": "Meet Our Team",
    "about.team.subtitle":
      "Our dedicated professionals combine medical expertise with cultural understanding to provide exceptional care coordination.",
    "about.journey.title": "Our Journey",
    "about.journey.subtitle": "Key milestones that have shaped our growth and commitment to excellence.",

    // Contact Page
    "contact.hero.title": "Get In Touch",
    "contact.hero.subtitle":
      "Ready to start your medical journey? Our dedicated team is here to assist you every step of the way. Contact us for personalized consultation and support.",
    "contact.form.title": "Request a Call Back",
    "contact.form.subtitle": "Fill out the form below and our medical coordinator will contact you within 24 hours.",
    "contact.form.name": "Full Name",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell us about your medical needs or any questions you have...",
    "contact.form.submit": "Request a Call Back",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Thank you! Your message has been sent successfully. We'll contact you soon.",
    "contact.info.title": "Contact Information",
    "contact.info.subtitle":
      "We're here to help you navigate your medical journey with confidence. Reach out to us through any of the following channels.",
    "contact.emergency.title": "Emergency Support",
    "contact.emergency.subtitle": "For urgent medical assistance or emergencies:",

    // Features
    "features.support": "24/7 Medical Support",
    "features.visa": "Visa Assistance",
    "features.interpreters": "Language Interpreters",
    "features.transfers": "Airport Transfers",
    "features.accommodation": "Accommodation Booking",
    "features.postCare": "Post-Treatment Care",

    // Common
    "common.loading": "Loading...",
    "common.readMore": "Read More",
    "common.learnMore": "Learn More",
    "common.viewAll": "View All",
  },

  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.about": "О нас",
    "nav.contact": "Контакты",
    "nav.getStarted": "Начать",

    // Home Page
    "home.hero.badge": "Нам доверяют 8,500+ международных пациентов",
    "home.hero.title1": "ДА, МЫ ЗАБОТИМСЯ",
    "home.hero.title2": "И МЫ СМЕЕМ",
    "home.hero.title3": "ПРЕДОСТАВИТЬ",
    "home.hero.title4": "ВСЁ",
    "home.hero.subtitle":
      "Получите медицинское лечение мирового класса в Индии с комплексной поддержкой для пациентов из Казахстана и России. Ваш путь к здоровью начинается здесь с нашей исключительной забото�� и непоколебимой приверженностью.",
    "home.hero.startJourney": "Начать путешествие",
    "home.hero.exploreServices": "Изучить услуги",
    "home.stats.treatments": "Успешных лечений",
    "home.stats.patients": "Довольных пациентов",
    "home.stats.hospitals": "Больниц-партнёров",
    "home.stats.experience": "Лет опыта",
    "home.hospitals.badge": "Премиальные медицинские партнёры",
    "home.hospitals.title": "Наши больницы-партнёры",
    "home.hospitals.subtitle":
      "Мы сотрудничаем с самыми престижными больницами Индии, чтобы обеспечить вам медицинскую помощь мирового класса с высочайшими стандартами лечения и международными услугами для пациентов.",
    "home.popup.title": "Привет всем,",
    "home.popup.subtitle": "ДА, МЫ ЗАБОТИМСЯ И МЫ СМЕЕМ ПРЕДОСТАВИТЬ ВСЁ.",
    "home.popup.description":
      "Мы предоставляем комплексную поддержку пациентам из Казахстана и России, ищущим лечение мирового класса в Индии. От помощи с визой до послеоперационного ухода - мы с вами на каждом этапе.",
    "home.popup.contactUs": "Связаться с нами",
    "home.popup.visitServices": "Изучить наши услуги",

    // Services Page
    "services.hero.badge": "Медицинские услуги мирового класса",
    "services.hero.title": "Комплексные решения здравоохранения",
    "services.hero.subtitle":
      "Откройте для себя наш обширный спектр медицинских процедур и лечения, предоставляемых всемирно известными специалистами с использованием передовых технологий и персонализированных протоколов ухода.",
    "services.specialties.title": "Наши медицинские специальности",
    "services.specialties.subtitle":
      "Каждая услуга поддерживается международно обученными специалистами и современными медицинскими технологиями",
    "services.cancer.badge": "Специализированная онкологическая помощь",
    "services.cancer.title": "Передовые методы лечения рака",
    "services.cancer.subtitle":
      "Наша комплексная онкологическая программа сочетает передовые методы лечения, прецизионную медицину и сострадательную помощь для достижения наилучших результатов для онкологических пациентов.",
    "services.successRate": "Процент успеха",
    "services.treatmentSuccess": "Успех лечения",
    "services.excellenceRating": "Рейтинг превосходства",

    // About Page
    "about.hero.title": "Наша история и миссия",
    "about.hero.subtitle":
      "Соединяем медицинское превосходство между Индией и регионом СНГ уже более 15 лет. Мы стремимся сделать медицинское лечение мирового класса доступным и недорогим.",
    "about.story.title": "Соединяя сердца, исцеляя жизни",
    "about.values.title": "Наши основные ценности",
    "about.values.subtitle":
      "Эти принципы направляют всё, что мы делаем, и формируют нашу приверженность совершенству в содействии здравоохранению.",
    "about.team.title": "Познакомьтесь с нашей командой",
    "about.team.subtitle":
      "Наши преданные профессионалы сочетают медицинский опыт с культурным пониманием для обеспечения исключительной координации ухода.",
    "about.journey.title": "Наш путь",
    "about.journey.subtitle": "Ключевые вехи, которые сформировали наш рост и приверженность совершенству.",

    // Contact Page
    "contact.hero.title": "Свяжитесь с нами",
    "contact.hero.subtitle":
      "Готовы начать своё медицинское путешествие? Наша преданная команда готова помочь вам на каждом этапе. Свяжитесь с нами для персональной консультации и поддержки.",
    "contact.form.title": "Запросить обратный звонок",
    "contact.form.subtitle": "Заполните форму ниже, и наш медицинский координатор свяжется с вами в течение 24 часов.",
    "contact.form.name": "Полное имя",
    "contact.form.phone": "Номер телефона",
    "contact.form.message": "Сообщение",
    "contact.form.messagePlaceholder": "Расскажите нам о ваших медицинских потребностях или любых вопросах...",
    "contact.form.submit": "Запросить обратный звонок",
    "contact.form.sending": "Отправка...",
    "contact.form.success": "Спасибо! Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.",
    "contact.info.title": "Контактная информация",
    "contact.info.subtitle":
      "Мы здесь, чтобы помочь вам уверенно пройти ваш медицинский путь. Обращайтесь к нам через любой из следующих каналов.",
    "contact.emergency.title": "Экстренная поддержка",
    "contact.emergency.subtitle": "Для срочной медицинской помощи или чрезвычайных ситуаций:",

    // Features
    "features.support": "Медицинская поддержка 24/7",
    "features.visa": "Помощь с визой",
    "features.interpreters": "Переводчики",
    "features.transfers": "Трансферы из аэропорта",
    "features.accommodation": "Бронирование жилья",
    "features.postCare": "Послеоперационный уход",

    // Common
    "common.loading": "Загрузка...",
    "common.readMore": "Читать далее",
    "common.learnMore": "Узнать больше",
    "common.viewAll": "Посмотреть все",
  },

  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.services": "Dienstleistungen",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "nav.getStarted": "Loslegen",

    // Home Page
    "home.hero.badge": "Vertrauen von 8.500+ internationalen Patienten",
    "home.hero.title1": "JA, WIR KÜMMERN UNS",
    "home.hero.title2": "UND WIR WAGEN ES",
    "home.hero.title3": "ALLES ZU",
    "home.hero.title4": "BIETEN",
    "home.hero.subtitle":
      "Erleben Sie medizinische Behandlung von Weltklasse in Indien mit umfassender Unterstützung für Patienten aus Kasachstan und Russland. Ihre Gesundheitsreise beginnt hier mit unserer außergewöhnlichen Betreuung und unerschütterlichen Hingabe.",
    "home.hero.startJourney": "Reise beginnen",
    "home.hero.exploreServices": "Services erkunden",
    "home.stats.treatments": "Erfolgreiche Behandlungen",
    "home.stats.patients": "Zufriedene Patienten",
    "home.stats.hospitals": "Partner-Krankenhäuser",
    "home.stats.experience": "Jahre Erfahrung",
    "home.hospitals.badge": "Premium-Gesundheitspartner",
    "home.hospitals.title": "Unsere Partner-Krankenhäuser",
    "home.hospitals.subtitle":
      "Wir arbeiten mit Indiens renommiertesten Krankenhäusern zusammen, um sicherzustellen, dass Sie medizinische Versorgung von Weltklasse mit höchsten Behandlungsstandards und internationalen Patientenservices erhalten.",
    "home.popup.title": "Hallo zusammen,",
    "home.popup.subtitle": "JA, WIR KÜMMERN UNS UND WIR WAGEN ES, ALLES ZU BIETEN.",
    "home.popup.description":
      "Wir bieten umfassende Unterstützung für Patienten aus Kasachstan und Russland, die eine Weltklasse-Behandlung in Indien suchen. Von der Visa-Hilfe bis zur Nachbehandlung - wir sind bei jedem Schritt bei Ihnen.",
    "home.popup.contactUs": "Kontaktieren Sie uns",
    "home.popup.visitServices": "Unsere Services erkunden",

    // Services Page
    "services.hero.badge": "Medizinische Dienstleistungen von Weltklasse",
    "services.hero.title": "Umfassende Gesundheitslösungen",
    "services.hero.subtitle":
      "Entdecken Sie unser umfangreiches Angebot an medizinischen Behandlungen und Verfahren, die von weltbekannten Spezialisten mit modernster Technologie und personalisierten Pflegeprotokollen durchgeführt werden.",
    "services.specialties.title": "Unsere medizinischen Fachgebiete",
    "services.specialties.subtitle":
      "Jeder Service wird von international ausgebildeten Spezialisten und modernster Medizintechnik unterstützt",
    "services.cancer.badge": "Spezialisierte onkologische Betreuung",
    "services.cancer.title": "Fortgeschrittene Krebsbehandlungen",
    "services.cancer.subtitle":
      "Unser umfassendes Onkologie-Programm kombiniert modernste Behandlungen, Präzisionsmedizin und mitfühlende Betreuung, um die bestmöglichen Ergebnisse für Krebspatienten zu erzielen.",
    "services.successRate": "Erfolgsrate",
    "services.treatmentSuccess": "Behandlungserfolg",
    "services.excellenceRating": "Exzellenz-Bewertung",

    // About Page
    "about.hero.title": "Unsere Geschichte & Mission",
    "about.hero.subtitle":
      "Wir verbinden medizinische Exzellenz zwischen Indien und der GUS-Region seit über 15 Jahren. Wir sind verpflichtet, medizinische Behandlung von Weltklasse zugänglich und erschwinglich zu machen.",
    "about.story.title": "Herzen verbinden, Leben heilen",
    "about.values.title": "Unsere Grundwerte",
    "about.values.subtitle":
      "Diese Prinzipien leiten alles, was wir tun, und prägen unser Engagement für Exzellenz in der Gesundheitsförderung.",
    "about.team.title": "Lernen Sie unser Team kennen",
    "about.team.subtitle":
      "Unsere engagierten Fachkräfte verbinden medizinische Expertise mit kulturellem Verständnis, um außergewöhnliche Pflegekoordination zu bieten.",
    "about.journey.title": "Unsere Reise",
    "about.journey.subtitle":
      "Wichtige Meilensteine, die unser Wachstum und unser Engagement für Exzellenz geprägt haben.",

    // Contact Page
    "contact.hero.title": "Kontakt aufnehmen",
    "contact.hero.subtitle":
      "Bereit, Ihre medizinische Reise zu beginnen? Unser engagiertes Team ist hier, um Ihnen bei jedem Schritt zu helfen. Kontaktieren Sie uns für eine persönliche Beratung und Unterstützung.",
    "contact.form.title": "Rückruf anfordern",
    "contact.form.subtitle":
      "Füllen Sie das untenstehende Formular aus und unser medizinischer Koordinator wird Sie innerhalb von 24 Stunden kontaktieren.",
    "contact.form.name": "Vollständiger Name",
    "contact.form.phone": "Telefonnummer",
    "contact.form.message": "Nachricht",
    "contact.form.messagePlaceholder": "Erzählen Sie uns von Ihren medizinischen Bedürfnissen oder Fragen...",
    "contact.form.submit": "Rückruf anfordern",
    "contact.form.sending": "Senden...",
    "contact.form.success":
      "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns bald bei Ihnen melden.",
    "contact.info.title": "Kontaktinformationen",
    "contact.info.subtitle":
      "Wir sind hier, um Ihnen zu helfen, Ihre medizinische Reise mit Vertrauen zu navigieren. Wenden Sie sich über einen der folgenden Kanäle an uns.",
    "contact.emergency.title": "Notfall-Support",
    "contact.emergency.subtitle": "Für dringende medizinische Hilfe oder Notfälle:",

    // Features
    "features.support": "24/7 Medizinische Unterstützung",
    "features.visa": "Visa-Hilfe",
    "features.interpreters": "Dolmetscher",
    "features.transfers": "Flughafen-Transfers",
    "features.accommodation": "Unterkunftsbuchung",
    "features.postCare": "Nachbehandlung",

    // Common
    "common.loading": "Laden...",
    "common.readMore": "Mehr lesen",
    "common.learnMore": "Mehr erfahren",
    "common.viewAll": "Alle anzeigen",
  },

  kk: {
    // Navigation
    "nav.home": "Басты бет",
    "nav.services": "Қызметтер",
    "nav.about": "Біз туралы",
    "nav.contact": "Байланыс",
    "nav.getStarted": "Бастау",

    // Home Page
    "home.hero.badge": "8,500+ халықаралық науқастардың сенімі",
    "home.hero.title1": "ИӘ, БІЗ ҚАМҚОРЛЫҚ",
    "home.hero.title2": "ЖАСАЙМЫЗ ЖӘНЕ БІЗ",
    "home.hero.title3": "БАРЛЫҒЫН",
    "home.hero.title4": "ҰСЫНУҒА БАТЫЛМЫЗ",
    "home.hero.subtitle":
      "Қазақстан мен Ресейден келген науқастарға жан-жақты қолдау көрсете отырып, Үндістанда әлемдік деңгейдегі медициналық емді алыңыз. Сіздің денсаулық саяхатыңыз біздің ерекше қамқорлығымыз бен мызғымас міндеттемеміз арқылы басталады.",
    "home.hero.startJourney": "Саяхатты бастау",
    "home.hero.exploreServices": "Қызметтерді зерттеу",
    "home.stats.treatments": "Сәтті емдеулер",
    "home.stats.patients": "Қанағаттанған науқастар",
    "home.stats.hospitals": "Серіктес ауруханалар",
    "home.stats.experience": "Жылдық тәжірибе",
    "home.hospitals.badge": "Премиум денсаулық серіктестері",
    "home.hospitals.title": "Біздің серіктес ауруханалар",
    "home.hospitals.subtitle":
      "Біз Үндістанның ең беделді ауруханаларымен ынтымақтастық жасаймыз, сізге әлемдік деңгейдегі медициналық көмек пен ең жоғары емдеу стандарттары мен халықаралық науқас қызметтерін қамтамасыз ету үшін.",
    "home.popup.title": "Барлығыңызға сәлем,",
    "home.popup.subtitle": "ИӘ, БІЗ ҚАМҚОРЛЫҚ ЖАСАЙМЫЗ ЖӘНЕ БАРЛЫҒЫН ҰСЫНУҒА БАТЫЛМЫЗ.",
    "home.popup.description":
      "Біз Қазақстан мен Ресейден Үндістанда әлемдік де��гейдегі емдеуді іздеген науқастарға жан-жақты қолдау көрсетеміз. Виза көмегінен емдеуден кейінгі күтімге дейін - біз сіздің әрбір қадамыңызда жаныңыздамыз.",
    "home.popup.contactUs": "Бізбен байланысыңыз",
    "home.popup.visitServices": "Біздің қызметтерді зерттеңіз",

    // Services Page
    "services.hero.badge": "Әлемдік деңгейдегі медициналық қызметтер",
    "services.hero.title": "Кешенді денсаулық шешімдері",
    "services.hero.subtitle":
      "Әлемге танымал мамандар тарапынан озық технологиялар мен жеке күтім хаттамаларын пайдалана отырып жүргізілетін медициналық емдеу мен процедуралардың кең ауқымын ашыңыз.",
    "services.specialties.title": "Біздің медициналық мамандықтар",
    "services.specialties.subtitle":
      "Әрбір қызмет халықаралық дайындалған мамандар мен озық медициналық технологиялармен қолдау табады",
    "services.cancer.badge": "Мамандандырылған онкологиялық көмек",
    "services.cancer.title": "Озық қатерлі ісік емдеулері",
    "services.cancer.subtitle":
      "Біздің кешенді онкология бағдарламасы қатерлі ісік науқастары үшін ең жақсы нәтижелерге қол жеткізу үшін озық емдеулерді, дәлдік медицинасын және мейірімді күтімді біріктіреді.",
    "services.successRate": "Сәттілік деңгейі",
    "services.treatmentSuccess": "Емдеу сәттілігі",
    "services.excellenceRating": "Үздіктік рейтингі",

    // About Page
    "about.hero.title": "Біздің тарих пен миссия",
    "about.hero.subtitle":
      "15 жылдан астам уақыт бойы Үндістан мен ТМД аймағы арасында медициналық үздіктікті байланыстырып келеміз. Біз әлемдік деңгейдегі медициналық емдеуді қолжетімді және қолайлы ету үшін міндеттенеміз.",
    "about.story.title": "Жүректерді байланыстыру, өмірді емдеу",
    "about.values.title": "Біздің негізгі құндылықтар",
    "about.values.subtitle":
      "Бұл принциптер біз жасайтын барлық нәрсені басқарады және денсаулық сақтауды жеңілдетудегі үздіктікке деген міндеттемемізді қалыптастырады.",
    "about.team.title": "Біздің командамен танысыңыз",
    "about.team.subtitle":
      "Біздің адал мамандарымыз ерекше күтім үйлестіруін қамтамасыз ету үшін медициналық тәжірибені мәдени түсініспен біріктіреді.",
    "about.journey.title": "Біздің жол",
    "about.journey.subtitle": "Біздің өсуімізді және үздіктікке деген міндеттемемізді қалыптастырған негізгі кезеңдер.",

    // Contact Page
    "contact.hero.title": "Байланысыңыз",
    "contact.hero.subtitle":
      "Медициналық саяхатыңызды бастауға дайынсыз ба? Біздің адал командамыз сіздің әрбір қадамыңызда көмектесуге дайын. Жеке кеңес пен қолдау үшін бізбен байланысыңыз.",
    "contact.form.title": "Кері қоңырау сұрау",
    "contact.form.subtitle":
      "Төмендегі форманы толтырыңыз және біздің медициналық үйлестіруші 24 сағат ішінде сізбен байланысады.",
    "contact.form.name": "Толық аты-жөні",
    "contact.form.phone": "Телефон нөмірі",
    "contact.form.message": "Хабарлама",
    "contact.form.messagePlaceholder": "Медициналық қажеттіліктеріңіз немесе сұрақтарыңыз туралы айтыңыз...",
    "contact.form.submit": "Кері қоңырау сұрау",
    "contact.form.sending": "Жіберілуде...",
    "contact.form.success": "Рахмет! Сіздің хабарламаңыз сәтті жіберілді. Біз жақын арада сізбен байланысамыз.",
    "contact.info.title": "Байланыс ақпараты",
    "contact.info.subtitle":
      "Біз сіздің медициналық жолыңызды сенімділікпен жүруіңізге көмектесу үшін осындамыз. Келесі арналардың кез келгені арқылы бізбен байланысыңыз.",
    "contact.emergency.title": "Шұғыл қолдау",
    "contact.emergency.subtitle": "Шұғыл медициналық көмек немесе төтенше жағдайлар үшін:",

    // Features
    "features.support": "24/7 медициналық қолдау",
    "features.visa": "Виза көмегі",
    "features.interpreters": "Аудармашылар",
    "features.transfers": "Әуежай трансферлері",
    "features.accommodation": "Тұрғын үй брондау",
    "features.postCare": "Емдеуден кейінгі күтім",

    // Common
    "common.loading": "Жүктелуде...",
    "common.readMore": "Толығырақ оқу",
    "common.learnMore": "Көбірек білу",
    "common.viewAll": "Барлығын көру",
  },

  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",
    "nav.getStarted": "ابدأ الآن",

    // Home Page
    "home.hero.badge": "موثوق من قبل 8,500+ مريض دولي",
    "home.hero.title1": "نعم، نحن نهتم",
    "home.hero.title2": "ونحن نجرؤ على",
    "home.hero.title3": "تقديم",
    "home.hero.title4": "كل شيء",
    "home.hero.subtitle":
      "اختبر العلاج الطبي عالمي المستوى في الهند مع الدعم الشامل للمرضى من كازاخستان وروسيا. رحلتك الصحية تبدأ هنا مع رعايتنا الاستثنائية والتزامنا الثابت.",
    "home.hero.startJourney": "ابدأ رحلتك",
    "home.hero.exploreServices": "استكشف الخدمات",
    "home.stats.treatments": "علاجات ناجحة",
    "home.stats.patients": "مرضى راضون",
    "home.stats.hospitals": "مستشفيات شريكة",
    "home.stats.experience": "سنوات خبرة",
    "home.hospitals.badge": "شركاء الرعاية الصحية المتميزون",
    "home.hospitals.title": "مستشفياتنا الشريكة",
    "home.hospitals.subtitle":
      "نتعاون مع أرقى مستشفيات الهند لضمان حصولك على رعاية طبية عالمية المستوى بأعلى معايير العلاج وخدمات المرضى الدوليين.",
    "home.popup.title": "مرحباً بالجميع،",
    "home.popup.subtitle": "نعم، نحن نهتم ونجرؤ على تقديم كل شيء.",
    "home.popup.description":
      "نحن نقدم الدعم الشامل للمرضى من كازاخستان وروسيا الذين يسعون للحصول على علاج عالمي المستوى في الهند. من مساعدة التأشيرة إلى الرعاية بعد العلاج - نحن معك في كل خطوة.",
    "home.popup.contactUs": "اتصل بنا الآن",
    "home.popup.visitServices": "استكشف خدماتنا",

    // Services Page
    "services.hero.badge": "خدمات طبية عالمية المستوى",
    "services.hero.title": "حلول الرعاية الصحية الشاملة",
    "services.hero.subtitle":
      "اكتشف مجموعتنا الواسعة من العلاجات والإجراءات الطبية، المقدمة من قبل متخصصين مشهورين عالمياً باستخدام أحدث التقنيات وبروتوكولات الرعاية المخصصة.",
    "services.specialties.title": "تخصصاتنا الطبية",
    "services.specialties.subtitle": "كل خدمة مدعومة بمتخصصين مدربين دولياً وتكنولوجيا طبية متطورة",
    "services.cancer.badge": "رعاية الأورام المتخصصة",
    "services.cancer.title": "علاجات السرطان المتقدمة",
    "services.cancer.subtitle":
      "برنامج الأورام الشامل لدينا يجمع بين العلاجات المتطورة والطب الدقيق والرعاية الرحيمة لتحقيق أفضل النتائج الممكنة لمرضى السرطان.",
    "services.successRate": "معدل النجاح",
    "services.treatmentSuccess": "نجاح العلاج",
    "services.excellenceRating": "تقييم التميز",

    // About Page
    "about.hero.title": "قصتنا ومهمتنا",
    "about.hero.subtitle":
      "نربط التميز في الرعاية الصحية بين الهند ومنطقة رابطة الدول المستقلة لأكثر من 15 عاماً. نحن ملتزمون بجعل العلاج الطبي عالمي المستوى متاحاً وبأسعار معقولة.",
    "about.story.title": "ربط القلوب، شفاء الأرواح",
    "about.values.title": "قيمنا الأساسية",
    "about.values.subtitle": "هذه المبادئ توجه كل ما نقوم به وتشكل التزامنا بالتميز في تسهيل الرعاية الصحية.",
    "about.team.title": "تعرف على فريقنا",
    "about.team.subtitle": "محترفونا المتفانون يجمعون بين الخبرة الطبية والفهم الثقافي لتقديم تنسيق رعاية استثنائي.",
    "about.journey.title": "رحلتنا",
    "about.journey.subtitle": "المعالم الرئيسية التي شكلت نمونا والتزامنا بالتميز.",

    // Contact Page
    "contact.hero.title": "تواصل معنا",
    "contact.hero.subtitle":
      "مستعد لبدء رحلتك الطبية؟ فريقنا المتفاني هنا لمساعدتك في كل خطوة. اتصل بنا للحصول على استشارة ودعم شخصي.",
    "contact.form.title": "طلب معاودة الاتصال",
    "contact.form.subtitle": "املأ النموذج أدناه وسيتصل بك منسق طبي خلال 24 ساعة.",
    "contact.form.name": "الاسم الكامل",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.message": "الرسالة",
    "contact.form.messagePlaceholder": "أخبرنا عن احتياجاتك الطبية أو أي أسئلة لديك...",
    "contact.form.submit": "طلب معاودة الاتصال",
    "contact.form.sending": "جاري الإرسال...",
    "contact.form.success": "شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.",
    "contact.info.title": "معلومات الاتصال",
    "contact.info.subtitle":
      "نحن هنا لمساعدتك في التنقل في رحلتك الطبية بثقة. تواصل معنا من خلال أي من القنوات التالية.",
    "contact.emergency.title": "الدعم الطارئ",
    "contact.emergency.subtitle": "للمساعدة الطبية العاجلة أو حالات الطوارئ:",

    // Features
    "features.support": "دعم طبي 24/7",
    "features.visa": "مساعدة التأشيرة",
    "features.interpreters": "مترجمون",
    "features.transfers": "نقل من المطار",
    "features.accommodation": "حجز الإقامة",
    "features.postCare": "رعاية ما بعد العلاج",

    // Common
    "common.loading": "جاري التحميل...",
    "common.readMore": "اقرأ المزيد",
    "common.learnMore": "تعلم المزيد",
    "common.viewAll": "عرض الكل",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when changed
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("preferred-language", lang)
  }
  

  // Translation function
  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      <div className={language === "ar" ? "rtl" : "ltr"} dir={language === "ar" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
