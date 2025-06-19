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
    "services.buttons.bookNow": "Book Now",
    "sevices.buttons.learnMore": "Learn More",
    "services.buttons.callback": "Request Callback",
    "services.buttons.whatsapp": "WhatsApp Now",
    "services.buttons.whatsapp_message":
      "Hi, I need more details about Aarogyacare services.",
    "services.buttons.knowMore": "Know More",

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

    "contact.form.description": "Your feedback helps us improve our services",

    "contact.form.name.label": "Full Name",
    "contact.form.name.placeholder": "Enter your full name",
    "contact.form.address.label": "Address",
    "contact.form.address.placeholder": "Enter your address",
    "contact.form.phone.label": "Phone Number",
    "contact.form.phone.placeholder": "Enter your phone number",
    "contact.form.email.label": "Email Address",
    "contact.form.email.placeholder": "Enter your email address",
    "contact.form.message.label": "Your Message",
    "contact.form.message.placeholder":
      "Tell us about your experience or any concerns...",
    "contact.form.immediateAssistance": "Need immediate assistance?",
    "contact.form.whatsapp": "Contact us on WhatsApp",
    "contact.info.description":
      "We're available 24/7 to provide you with the best medical care and support",
    "contact.info.phone.title": "Phone Support",
    "contact.info.phone.detail1": "+91 9097 272 726",
    "contact.info.phone.detail2": "+91 9599 023 663",
    "contact.info.phone.description": "24/7 emergency support available",
    "contact.info.email.title": "Email Support",
    "contact.info.email.detail1": "SHUBHAMAGRAWAL970@GMAIL.COM",
    "contact.info.email.description": "Response within 2 hours",
    "contact.info.hours.title": "Working Hours",
    "contact.info.hours.detail1": "Mon-Fri: 9:00 AM - 8:00 PM",
    "contact.info.hours.detail2": "Sat-Sun: 10:00 AM - 6:00 PM",
    "contact.info.hours.description": "India Standard Time (IST)",
    "contact.emergency.description":
      "Available 24/7 for urgent medical assistance",
    "contact.emergency.phone": "+91 90972 72726",
    "contact.faqs.title": "Quick Answers",
    "contact.faqs.subtitle":
      "Common questions about our medical tourism services and support.",
    "contact.faqs.arrangement.question":
      "How quickly can you arrange treatment?",
    "contact.faqs.arrangement.answer":
      "We can typically arrange consultations within 48-72 hours and treatment within 1-2 weeks, depending on the procedure.",
    "contact.faqs.visa.question": "Do you provide visa assistance?",
    "contact.faqs.visa.answer":
      "Yes, we provide complete visa assistance including medical visa documentation and invitation letters.",
    "contact.faqs.languages.question": "What languages do you support?",
    "contact.faqs.languages.answer":
      "We provide support in Russian, Kazakh, and English with dedicated coordinators for each language.",
    "contact.faqs.costs.question": "Are treatment costs transparent?",
    "contact.faqs.costs.answer":
      "Absolutely. We provide detailed cost estimates upfront with no hidden charges, including treatment, accommodation, and travel.",

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
    "footer.brand": "Aarogyacare",
    "footer.description":
      "Bridging healthcare excellence between India and the CIS region. Your trusted partner for world-class medical treatment.",
    "footer.titles.services": "Medical Services",
    "footer.titles.support": "Patient Support",
    "footer.titles.company": "Company",
    "footer.links.services.oncology": "Oncology",
    "footer.links.services.cardiology": "Cardiology",
    "footer.links.services.neurosurgery": "Neurosurgery",
    "footer.links.services.transplantation": "Transplantation",
    "footer.links.services.cosmetic": "Cosmetic Surgery",
    "footer.links.services.dental": "Dental Care",
    "footer.links.support.contact": "Contact Us",
    "footer.links.support.emergency": "Emergency Support",
    "footer.links.support.portal": "Patient Portal",
    "footer.links.support.insurance": "Insurance Help",
    "footer.links.support.travel": "Travel Assistance",
    "footer.links.support.language": "Language Support",
    "footer.links.company.about": "About Us",
    "footer.links.company.team": "Our Team",
    "footer.links.company.careers": "Careers",
    "footer.links.company.privacy": "Privacy Policy",
    "footer.links.company.terms": "Terms of Service",
    "footer.links.company.blog": "Blog",
    "footer.contact.phone": "Phone",
    "footer.contact.email": "Email",
    "footer.contact.address": "Address",
    "footer.social.facebook": "Facebook",
    "footer.social.instagram": "Instagram",
    "footer.social.linkedin": "LinkedIn",
    "footer.copyright": "© {{year}} Aarogyacare. All rights reserved.",

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
    // Навигация (Navigation)
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.about": "О нас",
    "nav.contact": "Контакты",
    "nav.getStarted": "Начать",

    // Главная страница (Home Page)
    "home.hero.badge": "Доверяют более 8,500 международных пациентов",
    "home.hero.title1": "ДА, МЫ ЗАБОТИМСЯ",
    "home.hero.title2": "И МЫ ГОТОВЫ",
    "home.hero.title3": "ПРЕДОСТАВИТЬ",
    "home.hero.title4": "ВСЁ НЕОБХОДИМОЕ",
    "home.hero.subtitle":
      "Получите мировое медицинское обслуживание в Индии с комплексной поддержкой для пациентов из Казахстана, Кыргызстана, Таджикистана, Туркменистана, Азербайджана, Фиджи, Мьянмы, Индонезии, Южной Африки, России и других стран. Ваше путешествие к здоровью начинается здесь с нашей исключительной заботы и непоколебимой приверженности.",
    "home.hero.startJourney": "Начать путешествие",
    "home.hero.exploreServices": "Изучить услуги",
    "home.stats.treatments": "Успешных процедур",
    "home.stats.patients": "Довольных пациентов",
    "home.stats.hospitals": "Партнерских больниц",
    "home.stats.experience": "Лет опыта",
    "home.hospitals.badge": "Премиальные партнеры в сфере здравоохранения",
    "home.hospitals.title": "Наши партнерские больницы",
    "home.hospitals.subtitle":
      "Мы сотрудничаем с самыми престижными больницами Индии, чтобы обеспечить вам медицинское обслуживание мирового уровня с высочайшими стандартами лечения и услуг для международных пациентов.",
    "home.popup.title": "Всем привет,",
    "home.popup.subtitle":
      "ДА, МЫ ЗАБОТИМСЯ И МЫ ГОТОВЫ ПРЕДОСТАВИТЬ ВСЁ НЕОБХОДИМОЕ.",
    "home.popup.description":
      "Мы предоставляем комплексную поддержку пациентам из Казахстана, Кыргызстана, Таджикистана, Туркменистана, Азербайджана, Фиджи, Мьянмы, Индонезии, Южной Африки, России и других стран, ищущих лечение мирового уровня в Индии. От помощи с визой до послеоперационного ухода - мы с вами на каждом этапе.",
    "home.popup.contactUs": "Свяжитесь с нами",
    "home.popup.visitServices": "Изучите наши услуги",
    "home.hospitals.excellenceRating": "Рейтинг качества",
    "home.hospitals.max.name": "Max Healthcare",
    "home.hospitals.max.description":
      "Комплексные медицинские услуги международного уровня и экспертная медицинская помощь по различным специальностям.",
    "home.hospitals.artemis.name": "Больница Artemis",
    "home.hospitals.artemis.description":
      "Медицинское обслуживание мирового класса с индивидуальным подходом и комплексными услугами для международных пациентов.",
    "home.hospitals.apollo.name": "Больницы Apollo",
    "home.hospitals.apollo.description":
      "Ведущая многопрофильная больница с мировыми стандартами и опытными врачами, специализирующимися на сложных процедурах.",
    "home.hospitals.fortis.name": "Fortis Healthcare",
    "home.hospitals.fortis.description":
      "Современное медицинское обслуживание с передовыми технологиями и индивидуальными протоколами лечения для международных пациентов.",
    "home.hospitals.medanta.name": "Больница Medanta",
    "home.hospitals.medanta.description":
      "Современное медицинское учреждение, специализирующееся на сложных операциях и передовых методах лечения с роботизированной помощью.",
    "home.popup.featureBestHospitals": "Лучшие больницы",
    "home.buttons.contactUs": "Связаться с нами",

    // Страница услуг (Services Page)
    "services.hero.badge": "Медицинские услуги мирового уровня",
    "services.hero.title": "Комплексные медицинские решения",
    "services.hero.subtitle":
      "Откройте для себя наш широкий спектр медицинских процедур, проводимых всемирно известными специалистами с использованием передовых технологий и индивидуальных протоколов лечения.",
    "services.specialties.title": "Наши медицинские специализации",
    "services.specialties.subtitle":
      "Каждая услуга поддерживается международными специалистами и современными медицинскими технологиями",
    "services.cancer.badge": "Специализированная онкологическая помощь",
    "services.cancer.title": "Передовые методы лечения рака",
    "services.cancer.subtitle":
      "Наша комплексная онкологическая программа сочетает передовые методы лечения, прецизионную медицину и заботливый уход для достижения наилучших результатов для пациентов с раком.",
    "services.successRate": "Уровень успеха",
    "services.treatmentSuccess": "Успешность лечения",
    "services.excellenceRating": "Рейтинг качества",

    "services.features.hospitals": "50+ партнерских больниц",
    "services.features.standards": "Международные стандарты",
    "services.features.technology": "Передовые технологии",

    "services.cancer.breast.name": "Лечение рака груди",
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
      "Передовое лечение рака с использованием прецизионной медицины, иммунотерапии и индивидуальных протоколов лечения для оптимальных результатов.",
    "services.liver.name": "Трансплантация печени",
    "services.liver.description":
      "Трансплантация печени мирового уровня с 95% успешностью, выполняемая международными хирургами.",
    "services.kidney.name": "Трансплантация почки",
    "services.kidney.description":
      "Комплексная программа трансплантации почки с передовыми протоколами иммуносупрессии и долгосрочным наблюдением.",
    "services.cardiology.name": "Кардиология",
    "services.cardiology.description":
      "Полный спектр кардиологической помощи, включая минимально инвазивные процедуры, роботизированную хирургию и программы реабилитации.",
    "services.neurosurgery.name": "Нейрохирургия",
    "services.neurosurgery.description":
      "Современные операции на головном и спинном мозге с использованием передовой визуализации, микрохирургии и нейронавигационных технологий.",
    "services.hair.name": "Трансплантация волос",
    "services.hair.description":
      "Инновационные методы FUE и DHI для естественного восстановления волос с минимальным периодом восстановления.",
    "services.dental.name": "Зубные импланты",
    "services.dental.description":
      "Современная имплантология с 3D-планированием, немедленной нагрузкой и керамическими имплантами.",
    "services.cosmetic.name": "Косметическая хирургия",
    "services.cosmetic.description":
      "Эстетические и реконструктивные процедуры с естественными результатами с использованием передовых технологий и премиальных материалов.",
    "services.knee.name": "Замена коленного сустава",
    "services.knee.description":
      "Современная замена суставов с роботизированной помощью, индивидуальными имплантами и быстрым восстановлением.",
    "services.eye.name": "Лазерная коррекция зрения (LASIK)",
    "services.eye.description":
      "Точная коррекция зрения с фемтосекундным лазером, индивидуальным анализом волнового фронта и пожизненной гарантией.",
    "services.breast.name": "Увеличение груди",
    "services.breast.description":
      "Передовые процедуры увеличения груди с премиальными имплантами, 3D-визуализацией и индивидуальным планированием.",
    "services.spine.name": "Хирургия позвоночника",
    "services.spine.description":
      "Минимально инвазивные процедуры на позвоночнике с навигационными технологиями, заменой дисков и управлением болью.",
    "services.ivf.name": "ЭКО лечение",
    "services.ivf.description":
      "Комплексные решения по лечению бесплодия с передовыми репродуктивными технологиями, генетическим скринингом и высокими показателями успеха.",
    "services.bone_marrow.name": "Трансплантация костного мозга",
    "services.bone_marrow.description":
      "Спасительная трансплантация гемопоэтических стволовых клеток с передовыми режимами кондиционирования и поддерживающей терапией.",
    "services.gynecology.name": "Гинекология",
    "services.gynecology.description":
      "Полный спектр женского здоровья с минимально инвазивными процедурами, роботизированной хирургией и программами wellness.",
    "services.bariatric.name": "Бариатрическая хирургия",
    "services.bariatric.description":
      "Передовые процедуры снижения веса с вариантами метаболической хирургии, нутрициологической поддержкой и долгосрочным наблюдением.",

    "services.testimonials.title": "Отзывы пациентов",
    "services.testimonials.subtitle":
      "Услышьте от наших пациентов об их опыте и успешном лечении",
    "services.buttons.bookNow": "Забронировать сейчас",
    "sevices.buttons.learnMore": "Узнать больше",
    "services.buttons.callback": "Заказать звонок",
    "services.buttons.whatsapp": "Написать в WhatsApp",
    "services.buttons.whatsapp_message":
      "Здравствуйте, мне нужна дополнительная информация об услугах Aarogyacare.",
    "services.buttons.knowMore": "Узнать больше",

    // Страница "О нас" (About Page)
    "about.hero.title": "Наша история и миссия",
    "about.hero.subtitle":
      "Соединяем медицинское превосходство между Индией и странами СНГ более 15 лет. Мы стремимся сделать мировое медицинское лечение доступным и экономичным.",
    "about.story.title": "Соединяя сердца, исцеляя жизни",
    "about.values.title": "Наши основные ценности",
    "about.values.subtitle":
      "Эти принципы направляют всё, что мы делаем, и формируют нашу приверженность совершенству в организации медицинской помощи.",
    "about.team.title": "Наша команда",
    "about.team.subtitle":
      "Наши преданные профессионалы сочетают медицинскую экспертизу с культурным пониманием, чтобы обеспечить исключительную координацию ухода.",
    "about.journey.title": "Наш путь",
    "about.journey.subtitle":
      "Ключевые вехи, которые сформировали наш рост и приверженность совершенству.",
    "about.story.paragraph1":
      "Основанная в 2008 году, наша компания возникла из простой, но мощной идеи: сделать мировое здравоохранение доступным для пациентов из Казахстана и России. То, что начиналось как небольшая инициатива, превратилось в надежный мост между пациентами, ищущими качественное лечение, и известной индийской системой здравоохранения.",
    "about.story.paragraph2":
      "Наши основатели, на собственном опыте столкнувшиеся с трудностями навигации в иностранных системах здравоохранения, поняли необходимость комплексной системы поддержки. Мы осознали, что медицинское лечение за рубежом включает не только клинический уход - оно требует культурного понимания, языковой поддержки и эмоционального сопровождения.",
    "about.story.paragraph3":
      "Сегодня мы с гордостью служим доверенным партнером для тысяч пациентов, предлагая не только медицинскую координацию, но и полную экосистему ухода, охватывающую все аспекты медицинского туризма.",
    "about.story.image_alt":
      "Наша медицинская команда обсуждает уход за пациентом",
    "about.values.compassionate.title": "Сочувственная забота",
    "about.values.compassionate.description":
      "Мы относимся к каждому пациенту с эмпатией, понимая его уникальные потребности и проблемы.",
    "about.values.trust.title": "Доверие и прозрачность",
    "about.values.trust.description":
      "Полная прозрачность в стоимости лечения, процедурах и ожидаемых результатах.",
    "about.values.global.title": "Глобальные стандарты",
    "about.values.global.description":
      "Международное качественное здравоохранение с мировыми стандартами и опытными врачами.",
    "about.values.support.title": "Персональная поддержка",
    "about.values.support.description":
      "Персональный координатор, который будет сопровождать вас на протяжении всего медицинского путешествия в Индии.",
    "about.team.dr_meenu.name": "Доктор Мину Валия",
    "about.team.dr_meenu.role": "Онколог",
    "about.team.dr_meenu.description":
      "Ведущий медицинский онколог в Max Delhi, специализирующийся на лечении рака.",
    "about.team.dr_subhash.name": "Доктор Субхаш Гупта",
    "about.team.dr_subhash.role": "Хирург по трансплантации печени",
    "about.team.dr_subhash.description":
      "Ведущий хирург по трансплантации печени в Max Delhi (более 4,000 трансплантаций).",
    "about.team.dr_sanjeev.name": "Доктор Санджив Дуа",
    "about.team.dr_sanjeev.role": "Нейрохирург",
    "about.team.dr_sanjeev.description":
      "Эксперт в операциях на головном и спинном мозге с более чем 20-летним опытом",
    "about.milestones.2008.year": "2008",
    "about.milestones.2008.event": "Основание компании",
    "about.milestones.2008.description":
      "Начали с видения преодоления разрывов в здравоохранении",
    "about.milestones.2012.year": "2012",
    "about.milestones.2012.event": "1000+ пациентов",
    "about.milestones.2012.description": "Достигли нашей первой важной вехи",
    "about.milestones.2016.year": "2016",
    "about.milestones.2016.event": "50+ партнерских больниц",
    "about.milestones.2016.description": "Расширили нашу сеть по всей Индии",
    "about.milestones.2020.year": "2020",
    "about.milestones.2020.event": "Цифровая трансформация",
    "about.milestones.2020.description": "Запустили услуги онлайн-консультаций",
    "about.milestones.2023.year": "2023",
    "about.milestones.2023.event": "10,000+ успешных историй",
    "about.milestones.2023.description":
      "Отмечаем более десятилетия совершенства",
    "about.buttons.callback": "Заказать звонок",
    "about.buttons.whatsapp": "Написать в WhatsApp",
    "about.buttons.whatsapp_message":
      "Здравствуйте, мне нужна дополнительная информация об услугах Aarogyacare.",

    // Страница контактов (Contact Page)
    "contact.hero.title": "Свяжитесь с нами",
    "contact.hero.subtitle":
      "Готовы начать ваше медицинское путешествие? Наша команда готова помочь вам на каждом этапе. Свяжитесь с нами для персональной консультации и поддержки.",
    "contact.form.title": "Заказать обратный звонок",
    "contact.form.subtitle":
      "Заполните форму ниже, и наш медицинский координатор свяжется с вами в течение 24 часов.",
    "contact.form.name": "Полное имя",
    "contact.form.phone": "Номер телефона",
    "contact.form.message": "Сообщение",
    "contact.form.messagePlaceholder":
      "Расскажите нам о ваших медицинских потребностях или вопросах...",
    "contact.form.submit": "Заказать обратный звонок",
    "contact.form.sending": "Отправка...",
    "contact.form.success":
      "Спасибо! Ваше сообщение успешно отправлено. Мы скоро с вами свяжемся.",
    "contact.info.title": "Контактная информация",
    "contact.info.subtitle":
      "Мы здесь, чтобы помочь вам с уверенностью ориентироваться в вашем медицинском путешествии. Свяжитесь с нами любым удобным способом.",
    "contact.emergency.title": "Экстренная поддержка",
    "contact.emergency.subtitle":
      "Для срочной медицинской помощи или экстренных случаев:",

    "contact.form.description": "Ваши отзывы помогают нам улучшать наши услуги",

    "contact.form.name.label": "Полное имя",
    "contact.form.name.placeholder": "Введите ваше полное имя",
    "contact.form.address.label": "Адрес",
    "contact.form.address.placeholder": "Введите ваш адрес",
    "contact.form.phone.label": "Номер телефона",
    "contact.form.phone.placeholder": "Введите ваш номер телефона",
    "contact.form.email.label": "Электронная почта",
    "contact.form.email.placeholder": "Введите ваш email",
    "contact.form.message.label": "Ваше сообщение",
    "contact.form.message.placeholder":
      "Расскажите нам о вашем опыте или проблемах...",
    "contact.form.immediateAssistance": "Нужна срочная помощь?",
    "contact.form.whatsapp": "Свяжитесь с нами в WhatsApp",
    "contact.info.description":
      "Мы доступны 24/7, чтобы предоставить вам лучшую медицинскую помощь и поддержку",
    "contact.info.phone.title": "Телефонная поддержка",
    "contact.info.phone.detail1": "+91 9097 272 726",
    "contact.info.phone.detail2": "+91 9599 023 663",
    "contact.info.phone.description": "Круглосуточная экстренная поддержка",
    "contact.info.email.title": "Электронная почта",
    "contact.info.email.detail1": "SHUBHAMAGRAWAL970@GMAIL.COM",
    "contact.info.email.description": "Ответ в течение 2 часов",
    "contact.info.hours.title": "Рабочие часы",
    "contact.info.hours.detail1": "Пн-Пт: 9:00 - 20:00",
    "contact.info.hours.detail2": "Сб-Вс: 10:00 - 18:00",
    "contact.info.hours.description":
      "По индийскому стандартному времени (IST)",
    "contact.emergency.description":
      "Доступно 24/7 для срочной медицинской помощи",
    "contact.emergency.phone": "+91 90972 72726",
    "contact.faqs.title": "Быстрые ответы",
    "contact.faqs.subtitle":
      "Часто задаваемые вопросы о наших услугах медицинского туризма и поддержке.",
    "contact.faqs.arrangement.question":
      "Как быстро вы можете организовать лечение?",
    "contact.faqs.arrangement.answer":
      "Обычно мы можем организовать консультации в течение 48-72 часов и лечение в течение 1-2 недель, в зависимости от процедуры.",
    "contact.faqs.visa.question": "Вы помогаете с визой?",
    "contact.faqs.visa.answer":
      "Да, мы предоставляем полную помощь с визой, включая документы для медицинской визы и пригласительные письма.",
    "contact.faqs.languages.question":
      "На каких языках вы предоставляете поддержку?",
    "contact.faqs.languages.answer":
      "Мы предоставляем поддержку на русском, казахском и английском языках с персональными координаторами для каждого языка.",
    "contact.faqs.costs.question":
      "Являются ли расходы на лечение прозрачными?",
    "contact.faqs.costs.answer":
      "Абсолютно. Мы предоставляем детальные сметы расходов заранее без скрытых платежей, включая лечение, проживание и проезд.",

    // Форма обратной связи (Feedback Form)
    "feedback.title": "Форма обратной связи",
    "feedback.subtitle":
      "Мы ценим ваши отзывы и хотим решить любые ваши проблемы.",
    "feedback.successMessage":
      "Спасибо за ваш отзыв! Мы рассмотрим его и свяжемся с вами в ближайшее время.",

    // Поля формы (Form Fields)
    "feedback.fields.name.label": "Имя",
    "feedback.fields.name.placeholder": "Введите ваше полное имя",
    "feedback.fields.address.label": "Адрес",
    "feedback.fields.address.placeholder": "Введите ваш полный адрес",
    "feedback.fields.address.required": "Адрес обязателен",
    "feedback.fields.telephone.label": "Телефон",
    "feedback.fields.telephone.placeholder": "+91 98765 43210",
    "feedback.fields.telephone.required":
      "Пожалуйста, введите корректный номер телефона",
    "feedback.fields.email.label": "Электронная почта",
    "feedback.fields.email.placeholder": "ваш.email@example.com",
    "feedback.fields.complaint.label": "Подробная жалоба",
    "feedback.fields.complaint.placeholder":
      "Пожалуйста, предоставьте подробную информацию о вашей жалобе или отзыве...",

    // Кнопки и действия (Buttons & Actions)
    "feedback.submitButton": "Отправить отзыв",
    "feedback.submitting": "Отправка отзыва...",

    // Подвал (Footer)
    "feedback.assistanceText": "Нужна срочная помощь?",
    "feedback.assistanceLink": "Свяжитесь с нами в WhatsApp напрямую",
    "footer.brand": "Aarogyacare",
    "footer.description":
      "Соединяем медицинское превосходство между Индией и странами СНГ. Ваш надежный партнер в получении медицинского лечения мирового уровня.",
    "footer.titles.services": "Медицинские услуги",
    "footer.titles.support": "Поддержка пациентов",
    "footer.titles.company": "Компания",
    "footer.links.services.oncology": "Онкология",
    "footer.links.services.cardiology": "Кардиология",
    "footer.links.services.neurosurgery": "Нейрохирургия",
    "footer.links.services.transplantation": "Трансплантация",
    "footer.links.services.cosmetic": "Косметическая хирургия",
    "footer.links.services.dental": "Стоматология",
    "footer.links.support.contact": "Контакты",
    "footer.links.support.emergency": "Экстренная помощь",
    "footer.links.support.portal": "Пациентский портал",
    "footer.links.support.insurance": "Помощь со страховкой",
    "footer.links.support.travel": "Помощь с поездкой",
    "footer.links.support.language": "Языковая поддержка",
    "footer.links.company.about": "О нас",
    "footer.links.company.team": "Наша команда",
    "footer.links.company.careers": "Карьера",
    "footer.links.company.privacy": "Политика конфиденциальности",
    "footer.links.company.terms": "Условия обслуживания",
    "footer.links.company.blog": "Блог",
    "footer.contact.phone": "Телефон",
    "footer.contact.email": "Электронная почта",
    "footer.contact.address": "Адрес",
    "footer.social.facebook": "Facebook",
    "footer.social.instagram": "Instagram",
    "footer.social.linkedin": "LinkedIn",
    "footer.copyright": "© {{year}} Aarogyacare. Все права защищены.",

    // Особенности (Features)
    "features.support": "Круглосуточная медицинская поддержка",
    "features.visa": "Помощь с визой",
    "features.interpreters": "Языковые переводчики",
    "features.transfers": "Трансфер из аэропорта",
    "features.accommodation": "Бронирование жилья",
    "features.postCare": "Послеоперационный уход",

    // Общие (Common)
    "common.loading": "Загрузка...",
    "common.readMore": "Читать далее",
    "common.learnMore": "Узнать больше",
    "common.viewAll": "Посмотреть все",
  },

  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.getStarted": "Commencer",

    // Page d'accueil (Home Page)
    "home.hero.badge":
      "De confiance pour plus de 8 500 patients internationaux",
    "home.hero.title1": "OUI, NOUS PRENONS SOIN",
    "home.hero.title2": "ET NOUS OSONS",
    "home.hero.title3": "FOURNIR",
    "home.hero.title4": "TOUT CE DONT VOUS AVEZ BESOIN",
    "home.hero.subtitle":
      "Bénéficiez d'un traitement médical de classe mondiale en Inde avec un soutien complet pour les patients du Kazakhstan, Kirghizistan, Tadjikistan, Turkménistan, Azerbaïdjan, Fidji, Myanmar, Indonésie, Afrique du Sud, Russie et au-delà. Votre parcours de santé commence ici avec notre engagement exceptionnel.",
    "home.hero.startJourney": "Commencer votre parcours",
    "home.hero.exploreServices": "Découvrir nos services",
    "home.stats.treatments": "Traitements réussis",
    "home.stats.patients": "Patients satisfaits",
    "home.stats.hospitals": "Hôpitaux partenaires",
    "home.stats.experience": "Années d'expérience",
    "home.hospitals.badge": "Partenaires de santé premium",
    "home.hospitals.title": "Nos hôpitaux partenaires",
    "home.hospitals.subtitle":
      "Nous collaborons avec les hôpitaux les plus prestigieux d'Inde pour vous offrir des soins médicaux de classe mondiale avec les normes de traitement les plus élevées et des services dédiés aux patients internationaux.",
    "home.popup.title": "Bonjour à tous,",
    "home.popup.subtitle":
      "OUI, NOUS PRENONS SOIN ET NOUS OSONS FOURNIR TOUT CE DONT VOUS AVEZ BESOIN.",
    "home.popup.description":
      "Nous offrons un soutien complet aux patients du Kazakhstan, Kirghizistan, Tadjikistan, Turkménistan, Azerbaïdjan, Fidji, Myanmar, Indonésie, Afrique du Sud, Russie et autres, recherchant un traitement de pointe en Inde. De l'assistance visa aux soins post-traitement, nous vous accompagnons à chaque étape.",
    "home.popup.contactUs": "Contactez-nous",
    "home.popup.visitServices": "Découvrir nos services",
    "home.hospitals.excellenceRating": "Note d'excellence",
    "home.hospitals.max.name": "Max Healthcare",
    "home.hospitals.max.description":
      "Services de santé complets selon les normes internationales avec des soins experts couvrant multiples spécialités.",
    "home.hospitals.artemis.name": "Hôpital Artemis",
    "home.hospitals.artemis.description":
      "Soins de classe mondiale avec accompagnement personnalisé et services complets pour patients internationaux.",
    "home.hospitals.apollo.name": "Hôpitaux Apollo",
    "home.hospitals.apollo.description":
      "Hôpital multispécialisé leader avec des installations de pointe et médecins expérimentés spécialisés en procédures complexes.",
    "home.hospitals.fortis.name": "Fortis Healthcare",
    "home.hospitals.fortis.description":
      "Soins médicaux avancés avec technologies de pointe et protocoles de traitement personnalisés pour patients internationaux.",
    "home.hospitals.medanta.name": "Hôpital Medanta",
    "home.hospitals.medanta.description":
      "Établissement médical ultramoderne spécialisé en chirurgies complexes et traitements avancés avec assistance robotique.",
    "home.popup.featureBestHospitals": "Meilleurs hôpitaux",
    "home.buttons.contactUs": "Nous contacter",

    // Page Services
    "services.hero.badge": "Services médicaux de classe mondiale",
    "services.hero.title": "Solutions de santé complètes",
    "services.hero.subtitle":
      "Découvrez notre large gamme de traitements et procédures médicales, dispensés par des spécialistes renommés utilisant des technologies de pointe et des protocoles de soins personnalisés.",
    "services.specialties.title": "Nos spécialités médicales",
    "services.specialties.subtitle":
      "Chaque service est soutenu par des spécialistes formés à l'international et des technologies médicales de pointe",
    "services.cancer.badge": "Soins oncologiques spécialisés",
    "services.cancer.title": "Traitements avancés du cancer",
    "services.cancer.subtitle":
      "Notre programme oncologique complet combine traitements innovants, médecine de précision et accompagnement personnalisé pour des résultats optimaux.",
    "services.successRate": "Taux de réussite",
    "services.treatmentSuccess": "Succès du traitement",
    "services.excellenceRating": "Note d'excellence",

    "services.features.hospitals": "50+ hôpitaux partenaires",
    "services.features.standards": "Normes internationales",
    "services.features.technology": "Technologie avancée",

    "services.cancer.breast.name": "Traitement du cancer du sein",
    "services.cancer.cervical.name": "Traitement du cancer du col utérin",
    "services.cancer.stomach.name": "Traitement du cancer de l'estomac",
    "services.cancer.lung.name": "Traitement du cancer du poumon",
    "services.cancer.ovarian.name": "Traitement du cancer des ovaires",
    "services.cancer.pancreatic.name": "Traitement du cancer du pancréas",
    "services.cancer.rectal.name": "Traitement du cancer rectal",
    "services.cancer.prostate.name": "Traitement du cancer de la prostate",
    "services.cancer.leukemia.name": "Traitement de la leucémie",
    "services.oncology.name": "Oncologie",
    "services.oncology.description":
      "Traitements cancéreux avancés avec médecine de précision, immunothérapie et protocoles personnalisés pour des résultats optimaux.",
    "services.liver.name": "Transplantation hépatique",
    "services.liver.description":
      "Transplantations du foie avec 95% de réussite, réalisées par des chirurgiens internationalement reconnus.",
    "services.kidney.name": "Transplantation rénale",
    "services.kidney.description":
      "Programme complet de transplantation rénale avec protocoles immunosuppresseurs avancés et suivi à long terme.",
    "services.cardiology.name": "Cardiologie",
    "services.cardiology.description":
      "Soins cardiaques complets incluant procédures mini-invasives, chirurgie robotique et programmes de réadaptation.",
    "services.neurosurgery.name": "Neurochirurgie",
    "services.neurosurgery.description":
      "Chirurgies cérébrales et rachidiennes de pointe utilisant imagerie avancée, microchirurgie et neuronavigation.",
    "services.hair.name": "Greffe de cheveux",
    "services.hair.description":
      "Techniques révolutionnaires FUE et DHI pour des résultats naturels avec temps de récupération minimal.",
    "services.dental.name": "Implants dentaires",
    "services.dental.description":
      "Implantologie dentaire de pointe avec planification 3D, mise en charge immédiate et options d'implants céramiques.",
    "services.cosmetic.name": "Chirurgie esthétique",
    "services.cosmetic.description":
      "Procédures esthétiques et reconstructives avec résultats naturels utilisant techniques avancées et matériaux premium.",
    "services.knee.name": "Prothèse de genou",
    "services.knee.description":
      "Chirurgie de remplacement articulaire assistée par robot, implants sur mesure et protocoles de récupération rapide.",
    "services.eye.name": "Chirurgie oculaire (LASIK)",
    "services.eye.description":
      "Correction visuelle de précision avec laser femtoseconde, analyse personnalisée et garanties à vie.",
    "services.breast.name": "Augmentation mammaire",
    "services.breast.description":
      "Procédures d'augmentation avancées avec implants premium, imagerie 3D et planification chirurgicale personnalisée.",
    "services.spine.name": "Chirurgie rachidienne",
    "services.spine.description":
      "Procédures rachidiennes mini-invasives avec navigation technologique, remplacement discal et gestion de la douleur.",
    "services.ivf.name": "Traitement FIV",
    "services.ivf.description":
      "Solutions complètes de fertilité avec technologies reproductives avancées, dépistage génétique et taux de réussite élevés.",
    "services.bone_marrow.name": "Greffe de moelle osseuse",
    "services.bone_marrow.description":
      "Transplantation de cellules souches hématopoïétiques avec régimes de conditionnement avancés et soins de soutien.",
    "services.gynecology.name": "Gynécologie",
    "services.gynecology.description":
      "Soins complets pour femmes avec procédures mini-invasives, chirurgie robotique et programmes de bien-être.",
    "services.bariatric.name": "Chirurgie bariatrique",
    "services.bariatric.description":
      "Procédures avancées de perte de poids avec options de chirurgie métabolique, conseils nutritionnels et suivi à long terme.",

    "services.testimonials.title": "Témoignages de patients",
    "services.testimonials.subtitle":
      "Découvrez les expériences et traitements réussis de nos patients",
    "services.buttons.bookNow": "Réserver maintenant",
    "sevices.buttons.learnMore": "En savoir plus",
    "services.buttons.callback": "Demander un rappel",
    "services.buttons.whatsapp": "WhatsApp maintenant",
    "services.buttons.whatsapp_message":
      "Bonjour, j'ai besoin de plus d'informations sur les services Aarogyacare.",
    "services.buttons.knowMore": "En savoir plus",

    // Page À propos
    "about.hero.title": "Notre histoire & mission",
    "about.hero.subtitle":
      "Relier l'excellence des soins entre l'Inde et la région CEI depuis plus de 15 ans. Nous nous engageons à rendre les traitements médicaux de classe mondiale accessibles et abordables.",
    "about.story.title": "Connecter les cœurs, guérir des vies",
    "about.values.title": "Nos valeurs fondamentales",
    "about.values.subtitle":
      "Ces principes guident tout ce que nous faisons et façonnent notre engagement envers l'excellence dans la facilitation des soins de santé.",
    "about.team.title": "Notre équipe",
    "about.team.subtitle":
      "Nos professionnels dévoués allient expertise médicale et compréhension culturelle pour fournir une coordination exceptionnelle des soins.",
    "about.journey.title": "Notre parcours",
    "about.journey.subtitle":
      "Étapes clés qui ont façonné notre croissance et notre engagement envers l'excellence.",
    "about.story.paragraph1":
      "Fondée en 2008, notre entreprise est née d'une vision simple mais puissante : rendre les soins de santé de classe mondiale accessibles aux patients du Kazakhstan et de Russie. Ce qui a commencé comme une petite initiative est devenu un pont de confiance entre les patients cherchant des soins de qualité et le système de santé réputé de l'Inde.",
    "about.story.paragraph2":
      "Nos fondateurs, ayant vécu les défis des systèmes de santé étrangers, ont compris la nécessité d'un système de soutien complet. Nous avons reconnu que le traitement médical à l'étranger implique plus que des soins cliniques - il nécessite une compréhension culturelle, un soutien linguistique et un accompagnement émotionnel.",
    "about.story.paragraph3":
      "Aujourd'hui, nous sommes fiers d'être le partenaire de confiance de milliers de patients, offrant non seulement une coordination médicale mais un écosystème de soins complet couvrant tous les aspects du tourisme médical.",
    "about.story.image_alt":
      "Notre équipe médicale discutant des soins aux patients",
    "about.values.compassionate.title": "Soins compatissants",
    "about.values.compassionate.description":
      "Nous traitons chaque patient avec empathie, comprenant ses besoins et préoccupations uniques.",
    "about.values.trust.title": "Confiance & transparence",
    "about.values.trust.description":
      "Transparence complète sur les coûts, procédures et résultats attendus du traitement.",
    "about.values.global.title": "Normes mondiales",
    "about.values.global.description":
      "Soins de santé de qualité internationale avec installations de classe mondiale et médecins experts.",
    "about.values.support.title": "Soutien personnalisé",
    "about.values.support.description":
      "Équipe dédiée pour vous accompagner tout au long de votre parcours médical en Inde.",
    "about.team.dr_meenu.name": "Dr Meenu Walia",
    "about.team.dr_meenu.role": "Oncologue",
    "about.team.dr_meenu.description":
      "Oncologue médicale renommée à Max Delhi, spécialisée en cancérologie.",
    "about.team.dr_subhash.name": "Dr Subhash Gupta",
    "about.team.dr_subhash.role": "Chirurgien transplant hépatique",
    "about.team.dr_subhash.description":
      "Chirurgien transplant hépatique réputé à Max Delhi (plus de 4 000 transplantations).",
    "about.team.dr_sanjeev.name": "Dr Sanjeev Dua",
    "about.team.dr_sanjeev.role": "Neurochirurgien",
    "about.team.dr_sanjeev.description":
      "Expert en chirurgies cérébrales et rachidiennes avec plus de 20 ans d'expérience",
    "about.milestones.2008.year": "2008",
    "about.milestones.2008.event": "Création de l'entreprise",
    "about.milestones.2008.description":
      "Commencé avec une vision de combler les lacunes en santé",
    "about.milestones.2012.year": "2012",
    "about.milestones.2012.event": "1000+ patients",
    "about.milestones.2012.description":
      "Atteint notre premier jalon important",
    "about.milestones.2016.year": "2016",
    "about.milestones.2016.event": "50+ hôpitaux partenaires",
    "about.milestones.2016.description": "Réseau étendu à travers l'Inde",
    "about.milestones.2020.year": "2020",
    "about.milestones.2020.event": "Transformation numérique",
    "about.milestones.2020.description":
      "Lancé des services de consultation en ligne",
    "about.milestones.2023.year": "2023",
    "about.milestones.2023.event": "10 000+ réussites",
    "about.milestones.2023.description":
      "Célébrant plus d'une décennie d'excellence",
    "about.buttons.callback": "Demander un rappel",
    "about.buttons.whatsapp": "WhatsApp maintenant",
    "about.buttons.whatsapp_message":
      "Bonjour, j'ai besoin de plus d'informations sur les services Aarogyacare.",

    // Page Contact
    "contact.hero.title": "Nous contacter",
    "contact.hero.subtitle":
      "Prêt à commencer votre parcours médical ? Notre équipe dédiée est là pour vous aider à chaque étape. Contactez-nous pour une consultation personnalisée et un soutien.",
    "contact.form.title": "Demander un rappel",
    "contact.form.subtitle":
      "Remplissez le formulaire ci-dessous et notre coordinateur médical vous contactera sous 24 heures.",
    "contact.form.name": "Nom complet",
    "contact.form.phone": "Numéro de téléphone",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder":
      "Parlez-nous de vos besoins médicaux ou questions...",
    "contact.form.submit": "Demander un rappel",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.success":
      "Merci ! Votre message a été envoyé avec succès. Nous vous contacterons bientôt.",
    "contact.info.title": "Coordonnées",
    "contact.info.subtitle":
      "Nous sommes là pour vous aider à naviguer votre parcours médical en toute confiance. Contactez-nous par l'un des canaux suivants.",
    "contact.emergency.title": "Support d'urgence",
    "contact.emergency.subtitle": "Pour assistance médicale urgente :",

    "contact.form.description":
      "Vos commentaires nous aident à améliorer nos services",

    "contact.form.name.label": "Nom complet",
    "contact.form.name.placeholder": "Entrez votre nom complet",
    "contact.form.address.label": "Adresse",
    "contact.form.address.placeholder": "Entrez votre adresse",
    "contact.form.phone.label": "Numéro de téléphone",
    "contact.form.phone.placeholder": "Entrez votre numéro de téléphone",
    "contact.form.email.label": "Adresse email",
    "contact.form.email.placeholder": "Entrez votre email",
    "contact.form.message.label": "Votre message",
    "contact.form.message.placeholder":
      "Parlez-nous de votre expérience ou préoccupations...",
    "contact.form.immediateAssistance": "Besoin d'aide immédiate ?",
    "contact.form.whatsapp": "Contactez-nous sur WhatsApp",
    "contact.info.description":
      "Nous sommes disponibles 24/7 pour vous fournir les meilleurs soins médicaux et soutien",
    "contact.info.phone.title": "Support téléphonique",
    "contact.info.phone.detail1": "+91 9097 272 726",
    "contact.info.phone.detail2": "+91 9599 023 663",
    "contact.info.phone.description": "Support d'urgence disponible 24/7",
    "contact.info.email.title": "Support email",
    "contact.info.email.detail1": "SHUBHAMAGRAWAL970@GMAIL.COM",
    "contact.info.email.description": "Réponse sous 2 heures",
    "contact.info.hours.title": "Heures d'ouverture",
    "contact.info.hours.detail1": "Lun-Ven : 9h00 - 20h00",
    "contact.info.hours.detail2": "Sam-Dim : 10h00 - 18h00",
    "contact.info.hours.description": "Heure normale de l'Inde (IST)",
    "contact.emergency.description":
      "Disponible 24/7 pour assistance médicale urgente",
    "contact.emergency.phone": "+91 90972 72726",
    "contact.faqs.title": "Questions fréquentes",
    "contact.faqs.subtitle":
      "Questions communes sur nos services de tourisme médical et soutien.",
    "contact.faqs.arrangement.question":
      "Quelle rapidité pour organiser un traitement ?",
    "contact.faqs.arrangement.answer":
      "Nous pouvons généralement organiser des consultations sous 48-72 heures et un traitement sous 1-2 semaines, selon la procédure.",
    "contact.faqs.visa.question": "Fournissez-vous une assistance visa ?",
    "contact.faqs.visa.answer":
      "Oui, nous fournissons une assistance visa complète incluant documentation pour visa médical et lettres d'invitation.",
    "contact.faqs.languages.question": "Quelles langues supportez-vous ?",
    "contact.faqs.languages.answer":
      "Nous fournissons un support en russe, kazakh et anglais avec coordinateurs dédiés pour chaque langue.",
    "contact.faqs.costs.question":
      "Les coûts de traitement sont-ils transparents ?",
    "contact.faqs.costs.answer":
      "Absolument. Nous fournissons des estimations détaillées sans frais cachés, incluant traitement, hébergement et voyage.",

    // Formulaire de feedback
    "feedback.title": "Formulaire de feedback",
    "feedback.subtitle":
      "Nous valorisons vos retours et voulons répondre à toutes vos préoccupations.",
    "feedback.successMessage":
      "Merci pour votre feedback ! Nous l'examinerons et vous recontacterons bientôt.",

    // Champs du formulaire
    "feedback.fields.name.label": "Nom",
    "feedback.fields.name.placeholder": "Entrez votre nom complet",
    "feedback.fields.address.label": "Adresse",
    "feedback.fields.address.placeholder": "Entrez votre adresse complète",
    "feedback.fields.address.required": "Adresse requise",
    "feedback.fields.telephone.label": "Téléphone",
    "feedback.fields.telephone.placeholder": "+91 98765 43210",
    "feedback.fields.telephone.required": "Veuillez entrer un numéro valide",
    "feedback.fields.email.label": "E-mail",
    "feedback.fields.email.placeholder": "votre.email@exemple.com",
    "feedback.fields.complaint.label": "Plainte détaillée",
    "feedback.fields.complaint.placeholder":
      "Veuillez fournir des informations détaillées sur votre plainte ou feedback...",

    // Boutons & Actions
    "feedback.submitButton": "Soumettre le feedback",
    "feedback.submitting": "Soumission en cours...",

    // Pied de page
    "feedback.assistanceText": "Besoin d'aide immédiate ?",
    "feedback.assistanceLink": "Contactez-nous directement sur WhatsApp",
    "footer.brand": "Aarogyacare",
    "footer.description":
      "Relier l'excellence des soins entre l'Inde et la région CEI. Votre partenaire de confiance pour des traitements médicaux de classe mondiale.",
    "footer.titles.services": "Services médicaux",
    "footer.titles.support": "Support patient",
    "footer.titles.company": "Entreprise",
    "footer.links.services.oncology": "Oncologie",
    "footer.links.services.cardiology": "Cardiologie",
    "footer.links.services.neurosurgery": "Neurochirurgie",
    "footer.links.services.transplantation": "Transplantation",
    "footer.links.services.cosmetic": "Chirurgie esthétique",
    "footer.links.services.dental": "Soins dentaires",
    "footer.links.support.contact": "Nous contacter",
    "footer.links.support.emergency": "Support d'urgence",
    "footer.links.support.portal": "Portail patient",
    "footer.links.support.insurance": "Aide assurance",
    "footer.links.support.travel": "Assistance voyage",
    "footer.links.support.language": "Support linguistique",
    "footer.links.company.about": "À propos",
    "footer.links.company.team": "Notre équipe",
    "footer.links.company.careers": "Carrières",
    "footer.links.company.privacy": "Politique de confidentialité",
    "footer.links.company.terms": "Conditions d'utilisation",
    "footer.links.company.blog": "Blog",
    "footer.contact.phone": "Téléphone",
    "footer.contact.email": "Email",
    "footer.contact.address": "Adresse",
    "footer.social.facebook": "Facebook",
    "footer.social.instagram": "Instagram",
    "footer.social.linkedin": "LinkedIn",
    "footer.copyright": "© {{year}} Aarogyacare. Tous droits réservés.",

    // Fonctionnalités
    "features.support": "Support médical 24/7",
    "features.visa": "Assistance visa",
    "features.interpreters": "Interprètes linguistiques",
    "features.transfers": "Transferts aéroport",
    "features.accommodation": "Réservation d'hébergement",
    "features.postCare": "Soins post-traitement",

    // Commun
    "common.loading": "Chargement...",
    "common.readMore": "Lire plus",
    "common.learnMore": "En savoir plus",
    "common.viewAll": "Voir tout",
  },

  indo: {
    // Navigasi
    "nav.home": "Beranda",
    "nav.services": "Layanan",
    "nav.about": "Tentang Kami",
    "nav.contact": "Kontak",
    "nav.getStarted": "Mulai",

    // Halaman Beranda
    "home.hero.badge": "Dipercaya oleh 8.500+ Pasien Internasional",
    "home.hero.title1": "YA, KAMI PEDULI",
    "home.hero.title2": "DAN KAMI BERANI",
    "home.hero.title3": "MENYEDIAKAN",
    "home.hero.title4": "SEGALANYA",
    "home.hero.subtitle":
      "Rasakan pengobatan kelas dunia di India dengan dukungan komprehensif untuk pasien dari Kazakhstan, Kirgizstan, Tajikistan, Turkmenistan, Azerbaijan, Fiji, Myanmar, Indonesia, Afrika Selatan, Rusia, dan lainnya. Perjalanan kesehatan Anda dimulai di sini dengan perawatan dan komitmen kami yang luar biasa.",
    "home.hero.startJourney": "Mulai Perjalanan Anda",
    "home.hero.exploreServices": "Jelajahi Layanan",
    "home.stats.treatments": "Perawatan Sukses",
    "home.stats.patients": "Pasien Puas",
    "home.stats.hospitals": "Rumah Sakit Mitra",
    "home.stats.experience": "Tahun Pengalaman",
    "home.hospitals.badge": "Mitra Kesehatan Premium",
    "home.hospitals.title": "Rumah Sakit Mitra Kami",
    "home.hospitals.subtitle":
      "Kami bekerja sama dengan rumah sakit paling bergengsi di India untuk memastikan Anda menerima perawatan medis kelas dunia dengan standar pengobatan dan layanan pasien internasional tertinggi.",
    "home.popup.title": "Halo semuanya,",
    "home.popup.subtitle":
      "YA, KAMI PEDULI DAN KAMI BERANI MENYEDIAKAN SEGALANYA.",
    "home.popup.description":
      "Kami menyediakan dukungan komprehensif untuk pasien dari Kazakhstan, Kirgizstan, Tajikistan, Turkmenistan, Azerbaijan, Fiji, Myanmar, Indonesia, Afrika Selatan, Rusia, dan lainnya yang mencari pengobatan kelas dunia di India. Mulai dari bantuan visa hingga perawatan pasca pengobatan, kami mendampingi Anda di setiap langkah.",
    "home.popup.contactUs": "Hubungi Kami Sekarang",
    "home.popup.visitServices": "Jelajahi Layanan Kami",
    "home.hospitals.excellenceRating": "Rating Keunggulan",
    "home.hospitals.max.name": "Max Healthcare",
    "home.hospitals.max.description":
      "Layanan kesehatan komprehensif dengan standar internasional dan perawatan medis ahli di berbagai spesialisasi.",
    "home.hospitals.artemis.name": "Rumah Sakit Artemis",
    "home.hospitals.artemis.description":
      "Layanan kesehatan kelas dunia dengan perawatan personal dan layanan pasien internasional yang komprehensif.",
    "home.hospitals.apollo.name": "Rumah Sakit Apollo",
    "home.hospitals.apollo.description":
      "Rumah sakit multi-spesialis terkemuka dengan fasilitas kelas dunia dan dokter berpengalaman yang mengkhususkan diri dalam prosedur kompleks.",
    "home.hospitals.fortis.name": "Fortis Healthcare",
    "home.hospitals.fortis.description":
      "Perawatan medis canggih dengan teknologi mutakhir dan protokol pengobatan personal untuk pasien internasional.",
    "home.hospitals.medanta.name": "Rumah Sakit Medanta",
    "home.hospitals.medanta.description":
      "Fasilitas medis canggih yang mengkhususkan diri dalam operasi kompleks dan pengobatan lanjutan dengan bantuan robot.",
    "home.popup.featureBestHospitals": "Rumah Sakit Terbaik",
    "home.buttons.contactUs": "Hubungi Kami",

    // Halaman Layanan
    "services.hero.badge": "Layanan Medis Kelas Dunia",
    "services.hero.title": "Solusi Kesehatan Komprehensif",
    "services.hero.subtitle":
      "Temukan berbagai perawatan dan prosedur medis kami, diberikan oleh spesialis ternama dunia menggunakan teknologi canggih dan protokol perawatan personal.",
    "services.specialties.title": "Spesialisasi Medis Kami",
    "services.specialties.subtitle":
      "Setiap layanan didukung oleh spesialis terlatih internasional dan teknologi medis canggih",
    "services.cancer.badge": "Perawatan Onkologi Spesialis",
    "services.cancer.title": "Perawatan Kanker Lanjutan",
    "services.cancer.subtitle":
      "Program onkologi komprehensif kami menggabungkan perawatan mutakhir, pengobatan presisi, dan perawatan penuh kasih untuk memberikan hasil terbaik bagi pasien kanker.",
    "services.successRate": "Tingkat Keberhasilan",
    "services.treatmentSuccess": "Keberhasilan Pengobatan",
    "services.excellenceRating": "Rating Keunggulan",

    "services.features.hospitals": "50+ Rumah Sakit Mitra",
    "services.features.standards": "Standar Internasional",
    "services.features.technology": "Teknologi Canggih",

    "services.cancer.breast.name": "Perawatan Kanker Payudara",
    "services.cancer.cervical.name": "Perawatan Kanker Serviks",
    "services.cancer.stomach.name": "Perawatan Kanker Lambung",
    "services.cancer.lung.name": "Perawatan Kanker Paru-paru",
    "services.cancer.ovarian.name": "Perawatan Kanker Ovarium",
    "services.cancer.pancreatic.name": "Perawatan Kanker Pankreas",
    "services.cancer.rectal.name": "Perawatan Kanker Rektum",
    "services.cancer.prostate.name": "Perawatan Kanker Prostat",
    "services.cancer.leukemia.name": "Perawatan Leukemia",
    "services.oncology.name": "Onkologi",
    "services.oncology.description":
      "Perawatan kanker lanjutan dengan pengobatan presisi, imunoterapi, dan protokol perawatan personal untuk hasil optimal.",
    "services.liver.name": "Transplantasi Hati",
    "services.liver.description":
      "Prosedur transplantasi hati kelas dunia dengan tingkat keberhasilan 95%, dilakukan oleh ahli bedah terlatih internasional.",
    "services.kidney.name": "Transplantasi Ginjal",
    "services.kidney.description":
      "Program transplantasi ginjal komprehensif dengan protokol imunosupresi lanjutan dan perawatan jangka panjang.",
    "services.cardiology.name": "Kardiologi",
    "services.cardiology.description":
      "Perawatan jantung lengkap termasuk prosedur minimal invasif, operasi robotik, dan program rehabilitasi jantung.",
    "services.neurosurgery.name": "Bedah Saraf",
    "services.neurosurgery.description":
      "Operasi otak dan tulang belakang canggih menggunakan pencitraan lanjutan, mikro bedah, dan teknologi neuro-navigasi.",
    "services.hair.name": "Transplantasi Rambut",
    "services.hair.description":
      "Teknik restorasi rambut revolusioner FUE dan DHI untuk hasil alami dengan waktu pemulihan minimal.",
    "services.dental.name": "Implan Gigi",
    "services.dental.description":
      "Implantologi gigi canggih dengan perencanaan 3D, pemuatan segera, dan opsi implan keramik.",
    "services.cosmetic.name": "Bedah Kosmetik",
    "services.cosmetic.description":
      "Prosedur estetika dan rekonstruktif dengan hasil alami menggunakan teknik canggih dan bahan premium.",
    "services.knee.name": "Penggantian Lutut",
    "services.knee.description":
      "Operasi penggantian sendi canggih dengan bantuan robot, implan khusus, dan protokol pemulihan cepat.",
    "services.eye.name": "Operasi Mata (LASIK)",
    "services.eye.description":
      "Koreksi penglihatan presisi dengan teknologi laser femtosecond, analisis wavefront khusus, dan garansi seumur hidup.",
    "services.breast.name": "Augmentasi Payudara",
    "services.breast.description":
      "Prosedur peningkatan payudara canggih dengan implan premium, pencitraan 3D, dan perencanaan bedah personal.",
    "services.spine.name": "Operasi Tulang Belakang",
    "services.spine.description":
      "Prosedur tulang belakang minimal invasif dengan teknologi navigasi, penggantian diskus buatan, dan manajemen nyeri.",
    "services.ivf.name": "Perawatan IVF",
    "services.ivf.description":
      "Solusi kesuburan komprehensif dengan teknologi reproduksi lanjutan, skrining genetik, dan tingkat keberhasilan tinggi.",
    "services.bone_marrow.name": "Transplantasi Sumsum Tulang",
    "services.bone_marrow.description":
      "Transplantasi sel punca hematopoietik penyelamat hidup dengan rejimen pengkondisian lanjutan dan perawatan pendukung.",
    "services.gynecology.name": "Ginekologi",
    "services.gynecology.description":
      "Perawatan kesehatan wanita lengkap dengan prosedur minimal invasif, operasi robotik, dan program kesehatan komprehensif.",
    "services.bariatric.name": "Operasi Bariatrik",
    "services.bariatric.description":
      "Prosedur penurunan berat badan canggih dengan opsi operasi metabolik, konseling nutrisi, dan dukungan jangka panjang.",

    "services.testimonials.title": "Testimoni Pasien",
    "services.testimonials.subtitle":
      "Dengar dari pasien kami tentang pengalaman dan perawatan sukses mereka",
    "services.buttons.bookNow": "Pesan Sekarang",
    "sevices.buttons.learnMore": "Pelajari Lebih Lanjut",
    "services.buttons.callback": "Minta Panggilan Balik",
    "services.buttons.whatsapp": "WhatsApp Sekarang",
    "services.buttons.whatsapp_message":
      "Hai, saya butuh detail lebih lanjut tentang layanan Aarogyacare.",
    "services.buttons.knowMore": "Tahu Lebih Banyak",
  },

  //burmese
  my: {
    // လမ်းညွှန်မှု (Navigation)
    "nav.home": "ပင်မ",
    "nav.services": "ဝန်ဆောင်မှုများ",
    "nav.about": "ကျွန်ုပ်တို့အကြောင်း",
    "nav.contact": "ဆက်သွယ်ရန်",
    "nav.getStarted": "စတင်မည်",

    // ပင်မစာမျက်နှာ (Home Page)
    "home.hero.badge": "နိုင်ငံတကာလူနာ ၈,၅၀၀+ ယုံကြည်စွာရွေးချယ်",
    "home.hero.title1": "ဟုတ်ကဲ့၊ ကျွန်ုပ်တို့စိတ်ဝင်စားသည်",
    "home.hero.title2": "နှင့် ကျွန်ုပ်တို့ရဲ့ရဲတင်းသည်",
    "home.hero.title3": "ပံ့ပိုးပေးရန်",
    "home.hero.title4": "အရာအားလုံး",
    "home.hero.subtitle":
      "အိန္ဒိယတွင် ကမ္ဘာ့အဆင့်မီဆေးကုသမှုကို ကဇာ့စတန်၊ ကာဂျစ်စတန်၊ တာဂျစ်ကစတန်၊ တာ့ခ်မင်နစ္စတန်၊ အဇာဘိုင်ဂျန်၊ ဖီဂျီ၊ မြန်မာ၊ အင်ဒိုနီးရှား၊ တောင်အာဖရိက၊ ရုရှားနှင့် အခြားနိုင်ငံများမှ လူနာများအတွက် အပြည့်အဝထောက်ပံ့မှုဖြင့် ခံစားလိုက်ပါ။ သင့်ကျန်းမာရေးခရီးစဉ်ကို ကျွန်ုပ်တို့၏ထူးခြားသောစောင့်ရှောက်မှုနှင့် မပြတ်မလပ်ကတိကဝတ်ဖြင့် စတင်ပါ။",
    "home.hero.startJourney": "သင့်ခရီးစဉ်စတင်ပါ",
    "home.hero.exploreServices": "ဝန်ဆောင်မှုများစူးစမ်းပါ",
    "home.stats.treatments": "အောင်မြင်သောကုသမှုများ",
    "home.stats.patients": "စိတ်ကျေနပ်သောလူနာများ",
    "home.stats.hospitals": "ပူးပေါင်းဆောင်ရွက်သောဆေးရုံများ",
    "home.stats.experience": "နှစ်ပေါင်းအတွေ့အကြုံ",
    "home.hospitals.badge": "အဆင့်မြင့်ကျန်းမာရေးမိတ်ဖက်များ",
    "home.hospitals.title": "ကျွန်ုပ်တို့၏ပူးပေါင်းဆောင်ရွက်သောဆေးရုံများ",
    "home.hospitals.subtitle":
      "သင့်အား ကမ္ဘာ့အဆင့်မီဆေးကုသမှုနှင့် အဆင့်မြင့်ကုသမှုစံနှုန်းများဖြင့် ဝန်ဆောင်မှုပေးရန် အိန္ဒိယ၏အထင်ရှားဆုံးဆေးရုံများနှင့် ပူးပေါင်းဆောင်ရွက်ပါသည်။",
    "home.popup.title": "အားလုံးမင်္ဂလာပါ၊",
    "home.popup.subtitle":
      "ဟုတ်ကဲ့၊ ကျွန်ုပ်တို့စိတ်ဝင်စားပြီး အရာအားလုံးကိုပံ့ပိုးရန် ရဲရင့်ပါသည်။",
    "home.popup.description":
      "အိန္ဒိယတွင် ကမ္ဘာ့အဆင့်မီကုသမှုရှာဖွေနေသော ကဇာ့စတန်၊ ကာဂျစ်စတန်၊ တာဂျစ်ကစတန်၊ တာ့ခ်မင်နစ္စတန်၊ အဇာဘိုင်ဂျန်၊ ဖီဂျီ၊ မြန်မာ၊ အင်ဒိုနီးရှား၊ တောင်အာဖရိက၊ ရုရှားနှင့် အခြားနိုင်ငံများမှ လူနာများအတွက် အပြည့်အဝထောက်ပံ့မှုပေးပါသည်။ ဗီဇာအကူအညီမှ ကုသမှုပြီးနောက်စောင့်ရှောက်မှုအထိ ကျွန်ုပ်တို့သည် သင့်အားအဆင့်တိုင်းတွင် ပံ့ပိုးပေးပါမည်။",
    "home.popup.contactUs": "ယခုဆက်သွယ်ပါ",
    "home.popup.visitServices": "ကျွန်ုပ်တို့၏ဝန်ဆောင်မှုများစူးစမ်းပါ",
    "home.hospitals.excellenceRating": "ထူးချွန်မှုအဆင့်",
    "home.hospitals.max.name": "Max Healthcare",
    "home.hospitals.max.description":
      "နိုင်ငံတကာစံနှုန်းများနှင့် အထူးကျွမ်းကျင်မှုများပါဝင်သော ကျန်းမာရေးဝန်ဆောင်မှုများ။",
    "home.hospitals.artemis.name": "Artemis ဆေးရုံ",
    "home.hospitals.artemis.description":
      "သီးသန့်စောင့်ရှောက်မှုနှင့် နိုင်ငံတကာလူနာဝန်ဆောင်မှုများပါဝင်သော ကမ္ဘာ့အဆင့်မီကျန်းမာရေး။",
    "home.hospitals.apollo.name": "Apollo ဆေးရုံများ",
    "home.hospitals.apollo.description":
      "ရှုပ်ထွေးသောလုပ်ငန်းစဉ်များတွင် အထူးကျွမ်းကျင်သော ကမ္ဘာ့အဆင့်မီဆေးရုံ။",
    "home.hospitals.fortis.name": "Fortis Healthcare",
    "home.hospitals.fortis.description":
      "နည်းပညာအဆင့်မြင့်နှင့် သီးသန့်ကုသမှုပေးသော ဆေးရုံ။",
    "home.hospitals.medanta.name": "Medanta ဆေးရုံ",
    "home.hospitals.medanta.description":
      "ရိုဘော့အကူအညီဖြင့် ရှုပ်ထွေးသောခွဲစိတ်မှုများအတွက် အဆင့်မြင့်ဆေးရုံ။",
    "home.popup.featureBestHospitals": "အကောင်းဆုံးဆေးရုံများ",
    "home.buttons.contactUs": "ဆက်သွယ်ရန်",

    // ဝန်ဆောင်မှုစာမျက်နှာ (Services Page)
    "services.hero.badge": "ကမ္ဘာ့အဆင့်မီဆေးဝန်ဆောင်မှုများ",
    "services.hero.title": "အပြည့်စုံဆုံးကျန်းမာရေးဖြေရှင်းနည်းများ",
    "services.hero.subtitle":
      "နည်းပညာအဆင့်မြင့်နှင့် သီးသန့်ကုသမှုပေးသော ကမ္ဘာကျော်ဆရာဝန်များမှ ကုသမှုများကို ရှာဖွေပါ။",
    "services.specialties.title": "ကျွန်ုပ်တို့၏ဆေးဘက်ဆိုင်ရာအထူးပြုမှုများ",
    "services.specialties.subtitle":
      "နိုင်ငံတကာအဆင့်မီဆရာဝန်များနှင့် နည်းပညာများဖြင့် ဝန်ဆောင်မှုပေးပါသည်။",
    "services.cancer.badge": "အထူးကင်ဆာကုသမှု",
    "services.cancer.title": "အဆင့်မြင့်ကင်ဆာကုသမှုများ",
    "services.cancer.subtitle":
      "ကျွန်ုပ်တို့၏ကင်ဆာကုသမှုစီမံချက်တွင် အကောင်းဆုံးနည်းလမ်းများ၊ တိကျသောဆေးဝါးနှင့် စာနာသောစောင့်ရှောက်မှုတို့ ပါဝင်ပါသည်။",
    "services.successRate": "အောင်မြင်မှုနှုန်း",
    "services.treatmentSuccess": "ကုသမှုအောင်မြင်မှု",
    "services.excellenceRating": "ထူးချွန်မှုအဆင့်",

    "services.features.hospitals": "ဆေးရုံ ၅၀+ ပူးပေါင်း",
    "services.features.standards": "နိုင်ငံတကာစံနှုန်းများ",
    "services.features.technology": "နည်းပညာအဆင့်မြင့်",

    "services.cancer.breast.name": "ရင်သားကင်ဆာကုသမှု",
    "services.cancer.cervical.name": "သားအိမ်ခေါင်းကင်ဆာကုသမှု",
    "services.cancer.stomach.name": "အစာအိမ်ကင်ဆာကုသမှု",
    "services.cancer.lung.name": "အဆုတ်ကင်ဆာကုသမှု",
    "services.cancer.ovarian.name": "သားဥအိမ်ကင်ဆာကုသမှု",
    "services.cancer.pancreatic.name": "ပန်ကရိယကင်ဆာကုသမှု",
    "services.cancer.rectal.name": "မစင်အိမ်ကင်ဆာကုသမှု",
    "services.cancer.prostate.name": "ဆီးကျိတ်ကင်ဆာကုသမှု",
    "services.cancer.leukemia.name": "သွေးကင်ဆာကုသမှု",
    "services.oncology.name": "ကင်ဆာကုသမှု",
    "services.oncology.description":
      "တိကျသောဆေးဝါး၊ ကိုယ်ခံအားကုထုံးနှင့် သီးသန့်ကုသမှုဖြင့် ကင်ဆာကုသမှု။",
    "services.liver.name": "အသည်းအစားထိုးကုသမှု",
    "services.liver.description":
      "ကမ္ဘာ့အဆင့်မီအသည်းအစားထိုးကုသမှု ၉၅% အောင်မြင်မှုနှုန်း။",
    "services.kidney.name": "ကျောက်ကပ်အစားထိုးကုသမှု",
    "services.kidney.description":
      "အဆင့်မြင့်ကုသမှုနှင့် ရေရှည်စောင့်ရှောက်မှုပါသော ကျောက်ကပ်အစားထိုးကုသမှု။",
    "services.cardiology.name": "နှလုံးရောဂါကုသမှု",
    "services.cardiology.description":
      "နှလုံးဆိုင်ရာကုသမှုများ၊ ခွဲစိတ်မှုနှင့် ပြန်လည်သန်စွမ်းရေးလုပ်ငန်းများ။",
    "services.neurosurgery.name": "ဦးနှောက်နှင့်အာရုံကြောခွဲစိတ်ကုသမှု",
    "services.neurosurgery.description":
      "ဦးနှောက်နှင့်ကျောရိုးဆိုင်ရာ ခွဲစိတ်ကုသမှုများ။",
    "services.hair.name": "ဆံပင်အစားထိုးကုသမှု",
    "services.hair.description":
      "FUE နှင့် DHI နည်းပညာများဖြင့် သဘာဝကျသောဆံပင်ပြန်လည်ရရှိရေး။",
    "services.dental.name": "သွားအစားထိုးကုသမှု",
    "services.dental.description": "၃D စီမံချက်ဖြင့် သွားအစားထိုးကုသမှု။",
    "services.cosmetic.name": "အလှအပခွဲစိတ်ကုသမှု",
    "services.cosmetic.description":
      "သဘာဝကျသောရလဒ်များရရှိရန် အဆင့်မြင့်နည်းပညာများဖြင့် ခွဲစိတ်ကုသမှု။",
    "services.knee.name": "ဒူးအစားထိုးကုသမှု",
    "services.knee.description": "ရိုဘော့အကူအညီဖြင့် အဆစ်အစားထိုးကုသမှု။",
    "services.eye.name": "မျက်စိခွဲစိတ်ကုသမှု (LASIK)",
    "services.eye.description": "လေဆာနည်းပညာဖြင့် အမြင်အာရုံပြုပြင်ခြင်း။",
    "services.breast.name": "ရင်သားကြီးထွားစေသောခွဲစိတ်မှု",
    "services.breast.description":
      "အဆင့်မြင့်နည်းပညာများဖြင့် ရင်သားပြုပြင်ခြင်း။",
    "services.spine.name": "ကျောရိုးခွဲစိတ်ကုသမှု",
    "services.spine.description":
      "အနည်းဆုံးထိခိုက်သောနည်းလမ်းဖြင့် ကျောရိုးဆိုင်ရာကုသမှု။",
    "services.ivf.name": "သားသမီးရရှိရေးကုသမှု",
    "services.ivf.description": "မျိုးအောင်စေသော ကုသမှုနည်းလမ်းများ။",
    "services.bone_marrow.name": "အရိုးချဉ်ဆီအစားထိုးကုသမှု",
    "services.bone_marrow.description": "အသက်ကယ်နိုင်သော ဆဲလ်အစားထိုးကုသမှု။",
    "services.gynecology.name": "မီးယပ်နှင့်သားဖွားဆိုင်ရာကုသမှု",
    "services.gynecology.description":
      "အမျိုးသမီးကျန်းမာရေးဆိုင်ရာ ကုသမှုများ။",
    "services.bariatric.name": "အဝလွန်ခြင်းဆိုင်ရာခွဲစိတ်ကုသမှု",
    "services.bariatric.description":
      "ကိုယ်အလေးချိန်လျှော့ချရေးအတွက် ခွဲစိတ်ကုသမှု။",

    "services.testimonials.title": "လူနာများ၏အမြင်များ",
    "services.testimonials.subtitle":
      "ကျွန်ုပ်တို့၏လူနာများ၏အတွေ့အကြုံများကို နားထောင်ပါ",
    "services.buttons.bookNow": "ယခုစာရင်းသွင်းပါ",
    "sevices.buttons.learnMore": "ပိုမိုလေ့လာပါ",
    "services.buttons.callback": "ဖုန်းပြန်ခေါ်ရန်တောင်းဆိုပါ",
    "services.buttons.whatsapp": "WhatsApp ဖြင့်ဆက်သွယ်ပါ",
    "services.buttons.whatsapp_message":
      "မင်္ဂလာပါ၊ Aarogyacare ၏ဝန်ဆောင်မှုများအကြောင်း ပိုမိုသိရှိလိုပါသည်။",
    "services.buttons.knowMore": "ပိုမိုသိရှိရန်",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru");

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
