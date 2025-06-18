"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ru" | "de" | "kk" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

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
      "Experience world-class medical treatment in India with comprehensive support for patients from Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, Azerbaijan, Fiji, Myanmar, Indonesia, South Africa, Russia, and beyond. Your health journey starts here with our exceptional care and unwavering commitment.",
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
      "We provide comprehensive support for patients from Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, Azerbaijan, Fiji, Myanmar, Indonesia, South Africa, Russia, and more, seeking world-class treatment in India. From visa assistance to post-treatment care, we're with you every step of the way.",
    "home.popup.contactUs": "Contact Us Now",
    "home.popup.visitServices": "Explore Our Services",
    "home.hospitals.excellenceRating": "Excellence Rating",
    "home.hospitals.max.name": "Max Healthcare",
    "home.hospitals.max.description":
      "Comprehensive healthcare services with international standards and expert medical care across multiple specialties.",
    "home.hospitals.artemis.name": "Artemis Hospital",
    "home.hospitals.artemis.description":
      "World-class healthcare with personalized care and comprehensive international patient services and support.",
    "home.hospitals.apollo.name": "Apollo Hospitals",
    "home.hospitals.apollo.description":
      "Leading multi-specialty hospital with world-class facilities and experienced doctors specializing in complex procedures.",
    "home.hospitals.fortis.name": "Fortis Healthcare",
    "home.hospitals.fortis.description":
      "Advanced medical care with cutting-edge technology and personalized treatment protocols for international patients.",
    "home.hospitals.medanta.name": "Medanta Hospital",
    "home.hospitals.medanta.description":
      "State-of-the-art medical facility specializing in complex surgeries and advanced treatments with robotic assistance.",
    "home.popup.featureBestHospitals": "Best Hospitals",
    "home.buttons.contactUs": "Contact Us",

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

    "services.features.hospitals": "50+ Partner Hospitals",
    "services.features.standards": "International Standards",
    "services.features.technology": "Advanced Technology",

    "services.cancer.breast.name": "Breast Cancer Treatment",
    "services.cancer.cervical.name": "Cervical Cancer Treatment",
    "services.cancer.stomach.name": "Stomach Cancer Treatment",
    "services.cancer.lung.name": "Lung Cancer Treatment",
    "services.cancer.ovarian.name": "Ovarian Cancer Treatment",
    "services.cancer.pancreatic.name": "Pancreatic Cancer Treatment",
    "services.cancer.rectal.name": "Rectal Cancer Treatment",
    "services.cancer.prostate.name": "Prostate Cancer Treatment",
    "services.cancer.leukemia.name": "Leukemia Treatment",
    "services.oncology.name": "Oncology",
    "services.oncology.description":
      "Advanced cancer treatment with precision medicine, immunotherapy, and personalized care protocols for optimal outcomes.",
    "services.liver.name": "Liver Transplantation",
    "services.liver.description":
      "World-class liver transplant procedures with 95% success rate, performed by internationally trained surgeons.",
    "services.kidney.name": "Kidney Transplant",
    "services.kidney.description":
      "Comprehensive kidney transplantation program with advanced immunosuppression protocols and long-term care.",
    "services.cardiology.name": "Cardiology",
    "services.cardiology.description":
      "Complete cardiac care including minimally invasive procedures, robotic surgery, and cardiac rehabilitation programs.",
    "services.neurosurgery.name": "Neurosurgery",
    "services.neurosurgery.description":
      "Cutting-edge brain and spine surgeries using advanced imaging, microsurgery, and neuro-navigation technology.",
    "services.hair.name": "Hair Transplantation",
    "services.hair.description":
      "Revolutionary FUE and DHI hair restoration techniques for natural-looking results with minimal downtime.",
    "services.dental.name": "Dental Implants",
    "services.dental.description":
      "State-of-the-art dental implantology with 3D planning, immediate loading, and ceramic implant options.",
    "services.cosmetic.name": "Cosmetic Surgery",
    "services.cosmetic.description":
      "Aesthetic and reconstructive procedures with natural results using advanced techniques and premium materials.",
    "services.knee.name": "Knee Replacement",
    "services.knee.description":
      "Advanced joint replacement surgery with robotic assistance, custom implants, and rapid recovery protocols.",
    "services.eye.name": "Eye Surgery (LASIK)",
    "services.eye.description":
      "Precision vision correction with femtosecond laser technology, custom wavefront analysis, and lifetime warranties.",
    "services.breast.name": "Breast Augmentation",
    "services.breast.description":
      "Advanced breast enhancement procedures with premium implants, 3D imaging, and personalized surgical planning.",
    "services.spine.name": "Spine Surgery",
    "services.spine.description":
      "Minimally invasive spinal procedures with navigation technology, artificial disc replacement, and pain management.",
    "services.ivf.name": "IVF Treatment",
    "services.ivf.description":
      "Comprehensive fertility solutions with advanced reproductive technologies, genetic screening, and high success rates.",
    "services.bone_marrow.name": "Bone Marrow Transplant",
    "services.bone_marrow.description":
      "Life-saving hematopoietic stem cell transplantation with advanced conditioning regimens and supportive care.",
    "services.gynecology.name": "Gynecology",
    "services.gynecology.description":
      "Complete women's healthcare with minimally invasive procedures, robotic surgery, and comprehensive wellness programs.",
    "services.bariatric.name": "Bariatric Surgery",
    "services.bariatric.description":
      "Advanced weight loss procedures with metabolic surgery options, nutritional counseling, and long-term support.",

    "services.testimonials.title": "Patient Testimonials",
    "services.testimonials.subtitle":
      "Hear from our patients about their experiences and successful treatments",

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
    "about.journey.subtitle":
      "Key milestones that have shaped our growth and commitment to excellence.",
    "about.story.paragraph1":
      "Founded in 2008, our company emerged from a simple yet powerful vision: to make world-class healthcare accessible to patients from Kazakhstan and Russia. What started as a small initiative has grown into a trusted bridge between patients seeking quality medical care and India's renowned healthcare system.",
    "about.story.paragraph2":
      "Our founders, having experienced the challenges of navigating foreign healthcare systems firsthand, understood the need for a comprehensive support system. We recognized that medical treatment abroad involves more than just clinical care – it requires cultural understanding, language support, and emotional guidance.",
    "about.story.paragraph3":
      "Today, we proudly serve as the trusted partner for thousands of patients, offering not just medical coordination but a complete care ecosystem that addresses every aspect of the medical tourism journey.",
    "about.story.image_alt": "Our medical team discussing patient care",
    "about.values.compassionate.title": "Compassionate Care",
    "about.values.compassionate.description":
      "We treat every patient with empathy, understanding their unique needs and concerns.",
    "about.values.trust.title": "Trust & Transparency",
    "about.values.trust.description":
      "Complete transparency in treatment costs, procedures, and expected outcomes.",
    "about.values.global.title": "Global Standards",
    "about.values.global.description":
      "International quality healthcare with world-class facilities and expert doctors.",
    "about.values.support.title": "Personal Support",
    "about.values.support.description":
      "Dedicated support team to assist you throughout your medical journey in India.",
    "about.team.dr_meenu.name": "Dr. Meenu Walia",
    "about.team.dr_meenu.role": "Oncologist",
    "about.team.dr_meenu.description":
      "Top medical oncologist at Max Delhi, specializing in cancer care.",
    "about.team.dr_subhash.name": "Dr. Subhash Gupta",
    "about.team.dr_subhash.role": "Liver Transplant Surgeon",
    "about.team.dr_subhash.description":
      "Top liver transplant surgeon at Max Delhi (4,000+ transplants).",
    "about.team.dr_sanjeev.name": "Dr. Sanjeev Dua",
    "about.team.dr_sanjeev.role": "Neurosurgeon",
    "about.team.dr_sanjeev.description":
      "Expert in brain & spine surgeries with 20+ years experience",
    "about.milestones.2008.year": "2008",
    "about.milestones.2008.event": "Company Founded",
    "about.milestones.2008.description":
      "Started with a vision to bridge healthcare gaps",
    "about.milestones.2012.year": "2012",
    "about.milestones.2012.event": "1000+ Patients",
    "about.milestones.2012.description": "Reached our first major milestone",
    "about.milestones.2016.year": "2016",
    "about.milestones.2016.event": "50+ Partner Hospitals",
    "about.milestones.2016.description": "Expanded our network across India",
    "about.milestones.2020.year": "2020",
    "about.milestones.2020.event": "Digital Transformation",
    "about.milestones.2020.description":
      "Launched online consultation services",
    "about.milestones.2023.year": "2023",
    "about.milestones.2023.event": "10,000+ Success Stories",
    "about.milestones.2023.description":
      "Celebrating over a decade of excellence",
    "about.buttons.callback": "Request Callback",
    "about.buttons.whatsapp": "WhatsApp Now",
    "about.buttons.whatsapp_message":
      "Hi, I need more details about Aarogyacare services.",

    // Contact Page
    "contact.hero.title": "Get In Touch",
    "contact.hero.subtitle":
      "Ready to start your medical journey? Our dedicated team is here to assist you every step of the way. Contact us for personalized consultation and support.",
    "contact.form.title": "Request a Call Back",
    "contact.form.subtitle":
      "Fill out the form below and our medical coordinator will contact you within 24 hours.",
    "contact.form.name": "Full Name",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder":
      "Tell us about your medical needs or any questions you have...",
    "contact.form.submit": "Request a Call Back",
    "contact.form.sending": "Sending...",
    "contact.form.success":
      "Thank you! Your message has been sent successfully. We'll contact you soon.",
    "contact.info.title": "Contact Information",
    "contact.info.subtitle":
      "We're here to help you navigate your medical journey with confidence. Reach out to us through any of the following channels.",
    "contact.emergency.title": "Emergency Support",
    "contact.emergency.subtitle":
      "For urgent medical assistance or emergencies:",

    // Feedback Form
    "feedback.title": "Feedback Form",
    "feedback.subtitle":
      "We value your feedback and want to address any concerns you may have.",
    "feedback.successMessage":
      "Thank you for your feedback! We'll review it and get back to you soon.",

    // Form Fields
    "feedback.fields.name.label": "Name",
    "feedback.fields.name.placeholder": "Enter your full name",
    "feedback.fields.address.label": "Address",
    "feedback.fields.address.placeholder": "Enter your complete address",
    "feedback.fields.address.required": "Address is required",
    "feedback.fields.telephone.label": "Telephone",
    "feedback.fields.telephone.placeholder": "+91 98765 43210",
    "feedback.fields.telephone.required": "Please enter a valid phone number",
    "feedback.fields.email.label": "E-mail",
    "feedback.fields.email.placeholder": "your.email@example.com",
    "feedback.fields.complaint.label": "Detailed complaint",
    "feedback.fields.complaint.placeholder":
      "Please provide detailed information about your complaint or feedback...",

    // Buttons & Actions
    "feedback.submitButton": "Submit Feedback",
    "feedback.submitting": "Submitting Feedback...",

    // Footer
    "feedback.assistanceText": "Need immediate assistance?",
    "feedback.assistanceLink": "Contact us on whats app directly",

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
    "home.hero.badge": "Нам доверяют более 8 500 международных пациентов",
    "home.hero.title1": "ДА, МЫ ЗАБОТИМСЯ",
    "home.hero.title2": "И МЫ СМЕЛЫ",
    "home.hero.title3": "ЧТОБЫ ПРЕДОСТАВИТЬ",
    "home.hero.title4": "ВСЁ",
    "home.hero.subtitle":
      "Пройдите лечение мирового уровня в Индии с комплексной поддержкой для пациентов из Казахстана, Кыргызстана, Таджикистана, Туркменистана, Азербайджана, Фиджи, Мьянмы, Индонезии, Южной Африки, России и других стран. Ваш путь к здоровью начинается здесь с нашим исключительным уходом и неизменной приверженностью.",
    "home.hero.startJourney": "Начать путь",
    "home.hero.exploreServices": "Изучить услуги",
    "home.stats.treatments": "Успешные лечения",
    "home.stats.patients": "Довольные пациенты",
    "home.stats.hospitals": "Партнёрские больницы",
    "home.stats.experience": "Лет опыта",
    "home.hospitals.badge": "Премиальные медицинские партнёры",
    "home.hospitals.title": "Наши партнёрские больницы",
    "home.hospitals.subtitle":
      "Мы сотрудничаем с самыми престижными больницами Индии, чтобы вы получили медицинскую помощь мирового уровня с высочайшими стандартами лечения и обслуживания международных пациентов.",
    "home.popup.title": "Здравствуйте всем,",
    "home.popup.subtitle":
      "ДА, МЫ ЗАБОТИМСЯ И МЫ СМЕЛЫ, ЧТОБЫ ПРЕДОСТАВИТЬ ВСЁ.",
    "home.popup.description":
      "Мы предоставляем комплексную поддержку пациентам из Казахстана, Кыргызстана, Таджикистана, Туркменистана, Азербайджана, Фиджи, Мьянмы, Индонезии, Южной Африки, России и других стран, которые ищут лечение мирового уровня в Индии. От помощи с визой до ухода после лечения — мы с вами на каждом этапе.",
    "home.popup.contactUs": "Связаться с нами сейчас",
    "home.popup.visitServices": "Изучить наши услуги",
    "home.hospitals.excellenceRating": "Рейтинг качества",
    "home.hospitals.max.name": "Max Healthcare",
    "home.hospitals.max.description":
      "Комплексные медицинские услуги международного уровня и экспертная помощь в различных медицинских специализациях.",
    "home.hospitals.artemis.name": "Artemis Hospital",
    "home.hospitals.artemis.description":
      "Медицинская помощь мирового уровня с индивидуальным подходом и полным сопровождением международных пациентов.",
    "home.hospitals.apollo.name": "Apollo Hospitals",
    "home.hospitals.apollo.description":
      "Ведущая многопрофильная больница с передовыми технологиями и опытными врачами, специализирующимися на сложных процедурах.",
    "home.hospitals.fortis.name": "Fortis Healthcare",
    "home.hospitals.fortis.description":
      "Современная медицинская помощь с передовыми технологиями и индивидуальными протоколами лечения для международных пациентов.",
    "home.hospitals.medanta.name": "Medanta Hospital",
    "home.hospitals.medanta.description":
      "Ультрасовременное медицинское учреждение, специализирующееся на сложных операциях и передовых методах лечения с использованием робототехники.",
    "home.popup.featureBestHospitals": "Лучшие больницы",
    "home.buttons.contactUs": "Связаться с нами",

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
      "Мы объединяем передовую медицину Индии и стран СНГ уже более 15 лет. Наша цель — сделать мировую медицинскую помощь доступной и финансово приемлемой.",
    "about.story.title": "Соединяя сердца, исцеляя жизни",
    "about.values.title": "Наши ключевые ценности",
    "about.values.subtitle":
      "Эти принципы определяют нашу работу и формируют приверженность к качеству медицинских услуг.",
    "about.team.title": "Наша команда",
    "about.team.subtitle":
      "Наша команда сочетает медицинскую экспертизу с культурным пониманием для организации исключительного ухода.",
    "about.journey.title": "Наш путь",
    "about.journey.subtitle":
      "Основные этапы, которые сформировали наш рост и стремление к совершенству.",
    "about.story.paragraph1":
      "Основанная в 2008 году, наша компания возникла из простой, но мощной идеи: сделать высококачественное медицинское обслуживание доступным для пациентов из Казахстана и России. То, что началось как небольшая инициатива, превратилось в надежный мост между пациентами и ведущими медицинскими учреждениями Индии.",
    "about.story.paragraph2":
      "Наши основатели, лично столкнувшиеся с трудностями при получении медицинской помощи за рубежом, поняли необходимость комплексной поддержки. Мы осознали, что лечение за границей — это не только медицинская помощь, но и культурное понимание, языковая поддержка и эмоциональное сопровождение.",
    "about.story.paragraph3":
      "Сегодня мы гордимся тем, что являемся надежным партнером для тысяч пациентов, предлагая не только медицинскую координацию, но и полный спектр услуг для поддержки на каждом этапе медицинского туризма.",
    "about.story.image_alt":
      "Наша медицинская команда обсуждает уход за пациентом",
    "about.values.compassionate.title": "Сострадательный уход",
    "about.values.compassionate.description":
      "Мы относимся к каждому пациенту с сочувствием и учитываем его индивидуальные потребности.",
    "about.values.trust.title": "Доверие и прозрачность",
    "about.values.trust.description":
      "Полная прозрачность в стоимости лечения, процедурах и ожидаемых результатах.",
    "about.values.global.title": "Мировые стандарты",
    "about.values.global.description":
      "Международное качество медицинской помощи с современными клиниками и опытными врачами.",
    "about.values.support.title": "Личная поддержка",
    "about.values.support.description":
      "Посвященная команда поддержки сопровождает вас на всем пути лечения в Индии.",
    "about.team.dr_meenu.name": "Др. Мину Валия",
    "about.team.dr_meenu.role": "Онколог",
    "about.team.dr_meenu.description":
      "Ведущий медицинский онколог в Max Delhi, специализирующийся на лечении рака.",
    "about.team.dr_subhash.name": "Др. Субхаш Гупта",
    "about.team.dr_subhash.role": "Хирург по трансплантации печени",
    "about.team.dr_subhash.description":
      "Ведущий хирург по трансплантации печени в Max Delhi (4000+ трансплантаций).",
    "about.team.dr_sanjeev.name": "Др. Санджив Дуа",
    "about.team.dr_sanjeev.role": "Нейрохирург",
    "about.team.dr_sanjeev.description":
      "Эксперт по операциям на головном и спинном мозге с более чем 20-летним опытом.",
    "about.milestones.2008.year": "2008",
    "about.milestones.2008.event": "Основание компании",
    "about.milestones.2008.description":
      "Начали с целью устранить разрыв в доступе к медицинской помощи",
    "about.milestones.2012.year": "2012",
    "about.milestones.2012.event": "1000+ пациентов",
    "about.milestones.2012.description": "Достигли первой значительной вехи",
    "about.milestones.2016.year": "2016",
    "about.milestones.2016.event": "50+ партнерских больниц",
    "about.milestones.2016.description": "Расширили нашу сеть по всей Индии",
    "about.milestones.2020.year": "2020",
    "about.milestones.2020.event": "Цифровая трансформация",
    "about.milestones.2020.description": "Запустили онлайн-консультации",
    "about.milestones.2023.year": "2023",
    "about.milestones.2023.event": "10 000+ успешных историй",
    "about.milestones.2023.description": "Отмечаем более десятилетия успеха",
    "about.buttons.callback": "Заказать звонок",
    "about.buttons.whatsapp": "Написать в WhatsApp",
    "about.buttons.whatsapp_message":
      "Здравствуйте, мне нужны подробности об услугах Aarogyacare.",

    // Contact Page
    "contact.hero.title": "Свяжитесь с нами",
    "contact.hero.subtitle":
      "Готовы начать своё медицинское путешествие? Наша преданная команда готова помочь вам на каждом этапе. Свяжитесь с нами для персональной консультации и поддержки.",
    "contact.form.title": "Запросить обратный звонок",
    "contact.form.subtitle":
      "Заполните форму ниже, и наш медицинский координатор свяжется с вами в течение 24 часов.",
    "contact.form.name": "Полное имя",
    "contact.form.phone": "Номер телефона",
    "contact.form.message": "Сообщение",
    "contact.form.messagePlaceholder":
      "Расскажите нам о ваших медицинских потребностях или любых вопросах...",
    "contact.form.submit": "Запросить обратный звонок",
    "contact.form.sending": "Отправка...",
    "contact.form.success":
      "Спасибо! Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.",
    "contact.info.title": "Контактная информация",
    "contact.info.subtitle":
      "Мы здесь, чтобы помочь вам уверенно пройти ваш медицинский путь. Обращайтесь к нам через любой из следующих каналов.",
    "contact.emergency.title": "Экстренная поддержка",
    "contact.emergency.subtitle":
      "Для срочной медицинской помощи или чрезвычайных ситуаций:",

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

  fr: {
    // French
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.about": "À propos de nous",
    "nav.contact": "Contact",
    "nav.getStarted": "Commencer",

    // Home Page
    "home.hero.badge": "Approuvé par plus de 8 500 patients internationaux",
    "home.hero.title1": "OUI, NOUS PRENONS SOIN",
    "home.hero.title2": "ET NOUS OSONS",
    "home.hero.title3": "FOURNIR",
    "home.hero.title4": "TOUT",
    "home.hero.subtitle":
      "Découvrez un traitement médical de classe mondiale en Inde avec un accompagnement complet pour les patients du Kazakhstan et de la Russie. Votre parcours santé commence ici avec nos soins exceptionnels et notre engagement sans faille.",
    "home.hero.startJourney": "Commencer votre parcours",
    "home.hero.exploreServices": "Découvrir les services",
    "home.stats.treatments": "Traitements réussis",
    "home.stats.patients": "Patients satisfaits",
    "home.stats.hospitals": "Hôpitaux partenaires",
    "home.stats.experience": "Années d'expérience",
    "home.hospitals.badge": "Partenaires de soins de santé haut de gamme",
    "home.hospitals.title": "Nos hôpitaux partenaires",
    "home.hospitals.subtitle":
      "Nous collaborons avec les hôpitaux les plus prestigieux d’Inde pour vous garantir des soins médicaux de classe mondiale, répondant aux normes de traitement les plus élevées et aux services pour patients internationaux.",
    "home.popup.title": "Bonjour à tous,",
    "home.popup.subtitle": "OUI, NOUS PRENONS SOIN ET NOUS OSONS TOUT FOURNIR.",
    "home.popup.description":
      "Nous offrons un accompagnement complet aux patients du Kazakhstan et de la Russie qui recherchent un traitement de classe mondiale en Inde. De l’aide au visa aux soins post-traitement, nous sommes à vos côtés à chaque étape.",
    "home.popup.contactUs": "Contactez-nous maintenant",
    "home.popup.visitServices": "Découvrir nos services",

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
    "services.features.hospitals": "50+ Партнерских больниц",
    "services.features.standards": "Международные стандарты",
    "services.features.technology": "Передовые технологии",
    "services.cancer.breast.name": "Лечение рака молочной железы",
    "services.cancer.cervical.name": "Лечение рака шейки матки",
    "services.cancer.stomach.name": "Лечение рака желудка",
    "services.cancer.lung.name": "Лечение рака легких",
    "services.cancer.ovarian.name": "Лечение рака яичников",
    "services.cancer.pancreatic.name": "Лечение рака поджелудочной железы",
    "services.cancer.rectal.name": "Лечение рака прямой кишки",
    "services.cancer.prostate.name": "Лечение рака простаты",
    "services.cancer.leukemia.name": "Лечение лейкемии",
    "services.oncology.name": "Онкология",
    "services.oncology.description":
      "Передовое лечение рака с использованием прецизионной медицины, иммунотерапии и персонализированных протоколов ухода для достижения оптимальных результатов.",
    "services.liver.name": "Трансплантация печени",
    "services.liver.description":
      "Процедуры трансплантации печени мирового уровня с 95% успехом, выполняемые международными специалистами.",
    "services.kidney.name": "Трансплантация почки",
    "services.kidney.description":
      "Комплексная программа трансплантации почек с современными протоколами иммуносупрессии и долгосрочным уходом.",
    "services.cardiology.name": "Кардиология",
    "services.cardiology.description":
      "Полный спектр кардиологической помощи, включая малоинвазивные процедуры, роботизированную хирургию и программы кардиореабилитации.",
    "services.neurosurgery.name": "Нейрохирургия",
    "services.neurosurgery.description":
      "Передовые операции на головном и спинном мозге с использованием современных методов визуализации, микрохирургии и нейронавигации.",
    "services.hair.name": "Пересадка волос",
    "services.hair.description":
      "Революционные методы восстановления волос FUE и DHI для естественного результата с минимальным временем восстановления.",
    "services.dental.name": "Дентальные импланты",
    "services.dental.description":
      "Современная имплантология с 3D-планированием, немедленной нагрузкой и керамическими имплантами.",
    "services.cosmetic.name": "Косметическая хирургия",
    "services.cosmetic.description":
      "Эстетические и реконструктивные операции с естественным результатом, выполненные с использованием передовых техник и премиальных материалов.",
    "services.knee.name": "Эндопротезирование коленного сустава",
    "services.knee.description":
      "Современная замена суставов с использованием роботизированной технологии, индивидуальных имплантов и ускоренных протоколов восстановления.",
    "services.eye.name": "Лазерная коррекция зрения (LASIK)",
    "services.eye.description":
      "Точная коррекция зрения с использованием технологии фемтосекундного лазера, индивидуального анализа и пожизненной гарантии.",
    "services.breast.name": "Увеличение груди",
    "services.breast.description":
      "Современные процедуры увеличения груди с использованием премиальных имплантов, 3D-визуализации и персонализированного хирургического планирования.",
    "services.spine.name": "Операции на позвоночнике",
    "services.spine.description":
      "Малоинвазивные операции на позвоночнике с навигационной технологией, заменой межпозвоночного диска и управлением болью.",
    "services.ivf.name": "Лечение бесплодия (ЭКО)",
    "services.ivf.description":
      "Комплексные решения для лечения бесплодия с использованием современных репродуктивных технологий, генетического скрининга и высоким уровнем успеха.",
    "services.bone_marrow.name": "Трансплантация костного мозга",
    "services.bone_marrow.description":
      "Жизненно важная трансплантация стволовых клеток с современными подготовительными режимами и поддерживающим уходом.",
    "services.gynecology.name": "Гинекология",
    "services.gynecology.description":
      "Полное женское здоровье с малоинвазивными процедурами, роботизированной хирургией и комплексными программами оздоровления.",
    "services.bariatric.name": "Бариатрическая хирургия",
    "services.bariatric.description":
      "Современные процедуры по снижению веса с метаболической хирургией, диетологическим консультированием и долгосрочной поддержкой.",
    "services.testimonials.title": "Отзывы пациентов",
    "services.testimonials.subtitle":
      "Узнайте от наших пациентов об их опыте и успешном лечении",

    // About Page
    "about.hero.title": "Notre histoire et notre mission",
    "about.hero.subtitle":
      "Un pont entre l'excellence médicale de l’Inde et la région CEI depuis plus de 15 ans. Nous nous engageons à rendre les soins de santé de classe mondiale accessibles et abordables.",
    "about.story.title": "Relier les cœurs, guérir des vies",
    "about.values.title": "Nos valeurs fondamentales",
    "about.values.subtitle":
      "Ces principes guident chacune de nos actions et définissent notre engagement envers l’excellence dans la facilitation des soins de santé.",
    "about.team.title": "Rencontrez notre équipe",
    "about.team.subtitle":
      "Nos professionnels dévoués allient expertise médicale et compréhension culturelle pour offrir une coordination exceptionnelle des soins.",
    "about.journey.title": "Notre parcours",
    "about.journey.subtitle":
      "Les étapes clés qui ont marqué notre croissance et notre engagement envers l’excellence.",

    // Contact Page
    "contact.hero.title": "Contactez-nous",
    "contact.hero.subtitle":
      "Prêt à commencer votre parcours médical ? Notre équipe dédiée est là pour vous accompagner à chaque étape. Contactez-nous pour une consultation personnalisée et un accompagnement sur mesure.",
    "contact.form.title": "Demander un rappel",
    "contact.form.subtitle":
      "Remplissez le formulaire ci-dessous et notre coordinateur médical vous contactera dans les 24 heures.",
    "contact.form.name": "Nom complet",
    "contact.form.phone": "Numéro de téléphone",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder":
      "Parlez-nous de vos besoins médicaux ou de vos questions...",
    "contact.form.submit": "Demander un rappel",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.success":
      "Merci ! Votre message a été envoyé avec succès. Nous vous contacterons bientôt.",
    "contact.info.title": "Informations de contact",
    "contact.info.subtitle":
      "Nous sommes là pour vous aider à naviguer dans votre parcours médical avec confiance. Contactez-nous via l'un des moyens suivants.",
    "contact.emergency.title": "Assistance d'urgence",
    "contact.emergency.subtitle":
      "Pour une assistance médicale urgente ou en cas d'urgence :",

    // Features
    "features.support": "Assistance médicale 24h/24",
    "features.visa": "Assistance pour les visas",
    "features.interpreters": "Interprètes linguistiques",
    "features.transfers": "Transferts aéroport",
    "features.accommodation": "Réservation d’hébergement",
    "features.postCare": "Soins post-traitement",

    // Common
    "common.loading": "Chargement...",
    "common.readMore": "Lire la suite",
    "common.learnMore": "En savoir plus",
    "common.viewAll": "Voir tout",
  },

  indo: {
    //indonesian
    // Navigation
    "nav.home": "Beranda",
    "nav.services": "Layanan",
    "nav.about": "Tentang Kami",
    "nav.contact": "Kontak",
    "nav.getStarted": "Mulai Sekarang",

    // Home Page
    "home.hero.badge": "Dipercaya oleh 8.500+ Pasien Internasional",
    "home.hero.title1": "YA, KAMI PEDULI",
    "home.hero.title2": "DAN KAMI BERANI",
    "home.hero.title3": "UNTUK MEMBERIKAN",
    "home.hero.title4": "SEGALANYA",
    "home.hero.subtitle":
      "Rasakan perawatan medis kelas dunia di India dengan dukungan lengkap bagi pasien dari Kazakhstan dan Rusia. Perjalanan kesehatan Anda dimulai di sini dengan pelayanan luar biasa dan komitmen kami yang teguh.",
    "home.hero.startJourney": "Mulai Perjalanan Anda",
    "home.hero.exploreServices": "Jelajahi Layanan",
    "home.stats.treatments": "Perawatan Berhasil",
    "home.stats.patients": "Pasien Bahagia",
    "home.stats.hospitals": "Rumah Sakit Mitra",
    "home.stats.experience": "Tahun Pengalaman",
    "home.hospitals.badge": "Mitra Layanan Kesehatan Premium",
    "home.hospitals.title": "Rumah Sakit Mitra Kami",
    "home.hospitals.subtitle":
      "Kami bekerja sama dengan rumah sakit paling bergengsi di India untuk memastikan Anda menerima perawatan medis kelas dunia dengan standar tertinggi dan layanan untuk pasien internasional.",
    "home.popup.title": "Halo semuanya,",
    "home.popup.subtitle": "YA, KAMI PEDULI DAN BERANI MEMBERIKAN SEGALANYA.",
    "home.popup.description":
      "Kami menyediakan dukungan lengkap bagi pasien dari Kazakhstan dan Rusia yang mencari perawatan kelas dunia di India. Dari bantuan visa hingga perawatan pasca pengobatan, kami bersama Anda di setiap langkah.",
    "home.popup.contactUs": "Hubungi Kami Sekarang",
    "home.popup.visitServices": "Jelajahi Layanan Kami",

    // Services Page
    "services.hero.badge": "Layanan Medis Kelas Dunia",
    "services.hero.title": "Solusi Kesehatan Komprehensif",
    "services.hero.subtitle":
      "Temukan berbagai macam perawatan dan prosedur medis kami, yang diberikan oleh spesialis terkenal dunia menggunakan teknologi mutakhir dan protokol perawatan yang dipersonalisasi.",
    "services.specialties.title": "Spesialisasi Medis Kami",
    "services.specialties.subtitle":
      "Setiap layanan didukung oleh spesialis terlatih internasional dan teknologi medis canggih",
    "services.cancer.badge": "Perawatan Onkologi Khusus",
    "services.cancer.title": "Perawatan Kanker Lanjutan",
    "services.cancer.subtitle":
      "Program onkologi komprehensif kami menggabungkan perawatan mutakhir, pengobatan presisi, dan perawatan penuh empati untuk memberikan hasil terbaik bagi pasien kanker.",
    "services.successRate": "Tingkat Keberhasilan",
    "services.treatmentSuccess": "Keberhasilan Pengobatan",
    "services.excellenceRating": "Peringkat Keunggulan",

    // About Page
    "about.hero.title": "Kisah & Misi Kami",
    "about.hero.subtitle":
      "Menjembatani keunggulan layanan kesehatan antara India dan kawasan CIS selama lebih dari 15 tahun. Kami berkomitmen untuk menyediakan pengobatan kelas dunia yang terjangkau dan mudah diakses.",
    "about.story.title": "Menghubungkan Hati, Menyembuhkan Kehidupan",
    "about.values.title": "Nilai Inti Kami",
    "about.values.subtitle":
      "Prinsip-prinsip ini membimbing setiap tindakan kami dan membentuk komitmen kami terhadap keunggulan dalam fasilitasi layanan kesehatan.",
    "about.team.title": "Temui Tim Kami",
    "about.team.subtitle":
      "Profesional berdedikasi kami menggabungkan keahlian medis dengan pemahaman budaya untuk memberikan koordinasi perawatan yang luar biasa.",
    "about.journey.title": "Perjalanan Kami",
    "about.journey.subtitle":
      "Tonggak-tonggak penting yang membentuk pertumbuhan dan komitmen kami terhadap keunggulan.",

    // Contact Page
    "contact.hero.title": "Hubungi Kami",
    "contact.hero.subtitle":
      "Siap memulai perjalanan medis Anda? Tim kami yang berdedikasi siap membantu Anda di setiap langkah. Hubungi kami untuk konsultasi dan dukungan yang dipersonalisasi.",
    "contact.form.title": "Minta Panggilan Balik",
    "contact.form.subtitle":
      "Isi formulir di bawah ini dan koordinator medis kami akan menghubungi Anda dalam 24 jam.",
    "contact.form.name": "Nama Lengkap",
    "contact.form.phone": "Nomor Telepon",
    "contact.form.message": "Pesan",
    "contact.form.messagePlaceholder":
      "Ceritakan kebutuhan medis Anda atau pertanyaan apa pun yang Anda miliki...",
    "contact.form.submit": "Minta Panggilan Balik",
    "contact.form.sending": "Mengirim...",
    "contact.form.success":
      "Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.",
    "contact.info.title": "Informasi Kontak",
    "contact.info.subtitle":
      "Kami di sini untuk membantu Anda menavigasi perjalanan medis Anda dengan percaya diri. Hubungi kami melalui saluran berikut.",
    "contact.emergency.title": "Dukungan Darurat",
    "contact.emergency.subtitle":
      "Untuk bantuan medis darurat atau keadaan darurat:",

    // Features
    "features.support": "Dukungan Medis 24/7",
    "features.visa": "Bantuan Visa",
    "features.interpreters": "Penerjemah Bahasa",
    "features.transfers": "Penjemputan Bandara",
    "features.accommodation": "Pemesanan Akomodasi",
    "features.postCare": "Perawatan Pasca Pengobatan",

    // Common
    "common.loading": "Memuat...",
    "common.readMore": "Baca Selengkapnya",
    "common.learnMore": "Pelajari Lebih Lanjut",
    "common.viewAll": "Lihat Semua",
  },

  //burmese
  my: {
    // Navigation
    "nav.home": "ပင်မစာမျက်နှာ",
    "nav.services": "ဝန်ဆောင်မှုများ",
    "nav.about": "အကြောင်းအရာ",
    "nav.contact": "ဆက်သွယ်ရန်",
    "nav.getStarted": "အစပြုပါ",

    // Home Page
    "home.hero.badge": "ကမ္ဘာလုံးဆိုင်ရာ လူနာ ၈,၅၀၀+ မှ ယုံကြည်ကြသည်",
    "home.hero.title1": "ဟုတ်ကဲ့၊ ကျွန်ုပ်တို့စိတ်ထဲတွင်ထားသည်",
    "home.hero.title2": "ပြီးတော့ ကျွန်ုပ်တို့သည် သတိထားသည်",
    "home.hero.title3": "ပံ့ပိုးနိုင်ရန်",
    "home.hero.title4": "အယ်လ်လ်ယမိ",
    "home.hero.subtitle":
      "ကာဇတ်ကစတန်နှင့် ရုရှားမှ လူနာများအတွက် အထောက်အပံ့ပြည့်စုံပြီး၊ အနိုင်ယူနိုင်သော ဆေးကုသမှုများအတွက် အိန္ဒိယတွင် ကမ္ဘာ့အဆင့်ဆေးဘက်ဆိုင်ရာ ဝန်ဆောင်မှုများကို ခံစားကြည့်ပါ။ ကျန်းမာရေးခရီးစဥ်ကို ကျွန်ုပ်တို့၏ ထူးချွန်သော စောင့်ရှောက်မှုနှင့် မတည်ငြိမ်သော ကတိကဝတ်ဖြင့် ဒီမှာ စတင်ပါသည်။",
    "home.hero.startJourney": "သင့်ခရီးစတင်ပါ",
    "home.hero.exploreServices": "ဝန်ဆောင်မှုများကို တွေ့ပါ",
    "home.stats.treatments": "အောင်မြင်မှု ဆေးကုသမှုများ",
    "home.stats.patients": "ကျေနပ်သော လူနာများ",
    "home.stats.hospitals": "ပူးပေါင်းဆေးရုံများ",
    "home.stats.experience": "အတွေ့အကြုံ နှစ်များ",
    "home.hospitals.badge": "အဆင့်မြင့် ကျန်းမာရေး မိတ်ဖက်များ",
    "home.hospitals.title": "ကျွန်ုပ်တို့၏ မိတ်ဖက် ဆေးရုံများ",
    "home.hospitals.subtitle":
      "အိန္ဒိယ၏ ထိပ်တန်းဂုဏ်ယူစရာ ဆေးရုံများနှင့် ပူးပေါင်းကာ သင်သည် အကောင်းဆုံး ကုသမှုများနှင့် နိုင်ငံတကာလူနာ ဝန်ဆောင်မှုများကို ရရှိစေရန် ကတိပြုပါသည်။",
    "home.popup.title": "မင်္ဂလာပါ၊",
    "home.popup.subtitle":
      "ဟုတ်ကဲ့၊ ကျွန်ုပ်တို့စိတ်ထဲတွင်ထားပြီး အားလုံးပံ့ပိုးမည်။",
    "home.popup.description":
      "ကျွန်ုပ်တို့သည် ကာဇတ်ကစတန်နှင့် ရုရှားမှ လူနာများအတွက် ဗီဇာအကူအညီမှ ကုသမှုအပြီးထိ အထောက်အပံ့ပြည့်စုံစွာ ပေးပါသည်။ ကျွန်ုပ်တို့သည် လမ်းနှစ်ဘက်တွင် သင့်နှင့်အတူ ရှိပါသည်။",
    "home.popup.contactUs": "ယခုဆက်သွယ်ပါ",
    "home.popup.visitServices": "ငါတို့၏ ဝန်ဆောင်မှုများကို လေ့လာပါ",

    // Services Page
    "services.hero.badge": "ကမ္ဘာ့အဆင့် ဆေးဘက် ဝန်ဆောင်မှုများ",
    "services.hero.title": "ပြည့်စုံသော ကျန်းမာရေး ဖြေရှင်းချက်များ",
    "services.hero.subtitle":
      "ကမ္ဘာကျော် အထူးကုများမှ ထောက်ပံ့သော တီထွင်ဆန်းသစ်သော နည်းပညာများဖြင့် တစ်ဦးချင်းစီ အတွက် ပြုစုထိန်းသိမ်းမှုများကိုတင်ပြသော ကျန်းမာရေးကုသမှုနှင့် အထူးကုစနစ်များကို တွေ့ပါ။",
    "services.specialties.title":
      "ကျွန်ုပ်တို့၏ ဆေးဘက် အထူးပြု ရောဂါကုသမှုများ",
    "services.specialties.subtitle":
      "တိုင်းဝန်ဆောင်မှုတိုင်းမှာ နိုင်ငံတကာသင်တန်းကျွမ်းကျင်သော အထူးကုများနှင့် ထိပ်တန်း ဆေးဘက်နည်းပညာများဖြင့် အထောက်အပံ့ပေးပါသည်",
    "services.cancer.badge": "အထူးထုတ် Onkology ကုသမှု",
    "services.cancer.title": "သွေးအမ် ခွဲခြမ်းထုတ်ခြင်း ကြီးမားသော ကုသမှုများ",
    "services.cancer.subtitle":
      "ကျွန်ုပ်တို့၏ ပြည့်စုံသော ကင်ဆာကုသရေးအစီအစဉ်သည် နောက်ဆုံးပေါ် ကုထုံးများ၊ တိကျသော ဆေးကုသမှုနည်းလမ်းများနှင့် အပြုသဘောထားလူမုဆွေပြုပြီး ကျန်းမာရေးနဲ့ ဘဝကောင်းမွန်စေသည်။",
    "services.successRate": "အောင်မြင်မှုနှုန်း",
    "services.treatmentSuccess": "ကုသမှု အောင်မြင်မှု",
    "services.excellenceRating": "ထူးချွန်ခြင်း အဆင့်",

    // About Page
    "about.hero.title": "ကျွန်ုပ်တို့၏ ဇာတ်ကြောင်းနှင့် မစ်ရှင်",
    "about.hero.subtitle":
      "အိန္ဒိယနှင့် CIS ဒေသအကြား ကျန်းမာရေး ဝန်ဆောင်မှု တစ်ဆက်တည်း တည်ဆောက်ခဲ့ပြီး အတွေ့နှစ် ၁၅ ကျော်ကာ ကျန်းမာရေးကုသမှုများကို လူတိုင်း ရရှိစေရန် ကြိုးစားနေသည်။",
    "about.story.title": "နှလုံးနှင့် နှုတ်ဆက်ခြင်း၊ ဘဝများ ကုသခြင်း",
    "about.values.title": "ကျွန်ုပ်တို့၏ အခြေခံတန်ဖိုးများ",
    "about.values.subtitle":
      "ဒီကောင်းမွန်သော စည်းကမ်းများသည် ကျွန်ုပ်တို့၏ လုပ်ဆောင်ချက်တိုင်းကို ဦးတည်ကာ ကျန်းမာရေးဝန်ဆောင်မှုထောက်ပံ့ခြင်းတွင် ထူးချွန်မှုကို ဖွင့်မြင်ရန် ဦးတည်သည်။",
    "about.team.title": "ကျွန်ုပ်တို့၏ အဖွဲ့အစည်းကို တွေ့ဆုံပါ",
    "about.team.subtitle":
      "ကျွန်ုပ်တို့၏ အဖွဲ့သည် ဆေးဘက် အထူးပြု ကျွမ်းကျင်မှုနှင့် ယဉ်ကျေးရေးကို နားလည်မှုများကို ပေါင်းစပ်ကာ ထူးချွန်သော စာချုပ်ပို့ဆောင်မှုကို လုပ်ဆောင်ပါသည်။",
    "about.journey.title": "ကျွန်ုပ်တို့၏ ခရီးစဉ်",
    "about.journey.subtitle":
      "ကျွန်ုပ်တို့၏ တိုးတက်မှုနှင့် ထူးချွန်မှုဆီကို လူမီမိုက်သော အဓိကအမှတ်တရများ။",

    // Contact Page
    "contact.hero.title": "ဆက်သွယ်ရန်",
    "contact.hero.subtitle":
      "သင့်ဆေးကုသခရီးစတင်ရန် အသင့်ပါသလား? ကျွန်ုပ်တို့၏ အဖွဲ့သည် လူကြီးမင်းအား အချိန်တိုင်း ကူညီရန်ရှိသည်။ ကုသမှုပို့ဆောင်ရေးအတွက် ကိုယ်ပိုင်အထောက်အကူအညီရယူရန် ကျေးဇူးပြု၍ ဆက်သွယ်ပါ။",
    "contact.form.title": "ပြန်ခေါ်ရန် တောင်းဆိုပါ",
    "contact.form.subtitle":
      "အောက်ပါ ပုံစံကို ဖြည့်ပါ၊ ကျွန်ုပ်တို့၏ ဆေးရေးညှိအစီအဆုံးသတ် ကို ၂၄ နာရီအတွင်း ဆက်သွယ်မည်ဖြစ်သည်။",
    "contact.form.name": "အမည် ပြည့်စုံ",
    "contact.form.phone": "တယ်လီဖုန်းနံပါတ်",
    "contact.form.message": "မက်ဆေ့ခ်ျ",
    "contact.form.messagePlaceholder":
      "သင့်ဆေးဘက်လိုအပ်ချက်များ သို့မဟုတ် မေးခွန်းများကို ပြောပြပါ...",
    "contact.form.submit": "ပြန်ခေါ်ရန် တောင်းဆိုပါ",
    "contact.form.sending": "ပို့နေသည်...",
    "contact.form.success":
      "ကျေးဇူးတင်ပါသည်! သင့်မက်ဆေ့ခ်ျကို အောင်မြင်စွာ ပို့လိုက်ပါသည်။ မကြာမီ ဆက်သွယ်မည်ဖြစ်သည်။",
    "contact.info.title": "ဆက်သွယ်ရန် အချက်အလက်",
    "contact.info.subtitle":
      "ကျွန်ုပ်တို့သည် သင်၏ ဆေးကုသခရီးစဉ်ကို ယုံကြည်စိတ်ချစွာ ညွှန်ကြားရန် ကူညီရန် ရှိသည်။ အောက်ပါနည်းလမ်းများမှတစ်ဆင့် ဆက်သွယ်ပါ။",
    "contact.emergency.title": "အရေးပေါ် အထောက်အပံ့",
    "contact.emergency.subtitle":
      "အရေးပေါ် ဆေးဘက်ကူညီမှု သို့မဟုတ် အရေးပေါ် နိုင်ငံရပ်ခြားအကူအညီအတွက်:",

    // Features
    "features.support": "၂၄/၇ ဆေးဘက် အထောက်အပံ့",
    "features.visa": "ဗီဇာ အကူအညီ",
    "features.interpreters": "ဘာသာပြန်များ",
    "features.transfers": "လေဆိပ်ကူးပြောင်းပို့ဆောင်မှု",
    "features.accommodation": "နေစခန်း ကြိုတင်မှာယူမှု",
    "features.postCare": "ကုသပြီးနောက် ဤမြောက်မောင်း",

    // Common
    "common.loading": "ဖွင့်နေသည်...",
    "common.readMore": "နားလည်စုံစမ်းရန်",
    "common.learnMore": "ပိုမိုလေထဲ့ရန်",
    "common.viewAll": "အားလုံးကို ကြည့်ရန်",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      "preferred-language"
    ) as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when changed
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("preferred-language", lang);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      <div
        className={language === "ar" ? "rtl" : "ltr"}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
