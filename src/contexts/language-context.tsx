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
      "Hi, I need more details about AarogyCare services.",
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
      "Hi, I need more details about AarogyCare services.",

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
    "footer.brand": "AarogyCare",
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
    "footer.copyright": "© {{year}} AarogyCare. All rights reserved.",

    // Features
    "features.support": "24/7 Medical Support",
    "features.support.detail":
      "Immediate access to medical professionals day and night",
    "features.visa": "Visa Assistance",
    "features.visa.detail": "High success rate for medical visa applications",
    "features.interpreters": "Language Services",
    "features.interpreters.detail": "Covering all major world languages",
    "features.transfers": "Airport Transfers",
    "features.transfers.detail": "Quick response time for all transport needs",
    "features.accommodation": "Housing Solutions",
    "features.accommodation.detail":
      "Wide network of trusted accommodation partners",
    "features.postCare": "Aftercare",
    "features.postCare.detail": "Complete coverage for your recovery needs",
    "features.cta": "Begin your healthcare journey today",

    // Common
    "common.loading": "Loading...",
    "common.readMore": "Read More",
    "common.learnMore": "Learn More",
    "common.viewAll": "View All",

    //steps
    "header.trusted": "Trusted by 50,000+ Patients Worldwide",
    "header.title1": "How We",
    "header.title2": "Transform Lives",
    "header.subtitle1":
      "Experience our revolutionary 8-step healthcare journey designed to deliver",
    "header.highlight1": "world-class medical care",
    "header.subtitle2": "with",
    "header.highlight2": "unmatched personal attention",

    "steps.firstContact.title": "First Contact",
    "steps.firstContact.description":
      "Share your case details with us through our secure contact form or personalized phone consultation with our medical coordinators.",
    "steps.firstContact.time": "Immediate",

    "steps.expertTeam.title": "Expert Team Connection",
    "steps.expertTeam.description":
      "Our specialized medical team and patient coordinators will connect with you to understand your unique healthcare needs.",
    "steps.expertTeam.time": "Within 2 hours",

    "steps.assessment.title": "Medical & Cost Assessment",
    "steps.assessment.description":
      "Receive comprehensive medical evaluation and transparent cost breakdown with no hidden fees within 48 hours.",
    "steps.assessment.time": "48 hours",

    "steps.travel.title": "Travel Coordination",
    "steps.travel.description":
      "Complete travel assistance including flight booking, visa support, and accommodation arrangements tailored to your needs.",
    "steps.travel.time": "3-5 days",

    "steps.reception.title": "VIP Airport Reception",
    "steps.reception.description":
      "Our dedicated team provides premium airport reception with comfortable transportation to your accommodation.",
    "steps.reception.time": "On arrival",

    "steps.treatment.title": "World-Class Treatment",
    "steps.treatment.description":
      "Receive exceptional medical care from internationally certified specialists using cutting-edge technology and techniques.",
    "steps.treatment.time": "As scheduled",

    "steps.return.title": "Safe Journey Home",
    "steps.return.description":
      "Comfortable departure with complete medical documentation, prescriptions, and detailed post-treatment care instructions.",
    "steps.return.time": "Post-treatment",

    "steps.followup.title": "Lifelong Care Partnership",
    "steps.followup.description":
      "Continuous follow-up care, regular health check-ins, and 24/7 support for your ongoing wellness journey.",
    "steps.followup.time": "Ongoing",

    "stats.satisfaction": "Patient Satisfaction",
    "stats.response": "Response Time",
    "stats.success": "Success Rate",
    "stats.experience": "Years Experience",

    "cta.title": "Your Health Journey, Our Promise",
    "cta.subtitle":
      "Transforming lives through exceptional healthcare experiences",

    "features.response": "48hr Guaranteed Response",
    "features.network": "Global Healthcare Network",
    "features.plans": "Personalized Care Plans",

    //whatsappbuttons
    "home.buttons.knowMore": "Know More",
    "home.buttons.bookNow": "Book Now",
    "home.buttons.whatsapp": "WhatsApp Now",
    "home.buttons.whatsapp_message":
      "Hello, I would like to know more about AarogyCare.",
  },

  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.about": "О нас",
    "nav.contact": "Контакты",
    "nav.getStarted": "Начать",

    // Home Page
    "home.hero.badge": "Доверяют более 8 500 международных пациентов",
    "home.hero.title1": "ДА, МЫ ЗАБОТИМСЯ",
    "home.hero.title2": "И МЫ ГОТОВЫ",
    "home.hero.title3": "ПРЕДОСТАВИТЬ",
    "home.hero.title4": "ВСЁ НЕОБХОДИМОЕ",
    "home.hero.subtitle":
      "Получите мирового уровня медицинское лечение в Индии с комплексной поддержкой для пациентов из Казахстана, Кыргызстана, Таджикистана, Туркменистана, Азербайджана, Фиджи, Мьянмы, Индонезии, Южной Африки, России и других стран. Ваше путешествие к здоровью начинается здесь с нашей исключительной заботы и непоколебимой приверженности.",
    "home.hero.startJourney": "Начать Путешествие",
    "home.hero.exploreServices": "Изучить Услуги",
    "home.stats.treatments": "Успешных Лечений",
    "home.stats.patients": "Довольных Пациентов",
    "home.stats.hospitals": "Партнерских Больниц",
    "home.stats.experience": "Лет Опыта",
    "home.hospitals.badge": "Премиальные Партнеры в Сфере Здравоохранения",
    "home.hospitals.title": "Наши Партнерские Больницы",
    "home.hospitals.subtitle":
      "Мы сотрудничаем с самыми престижными больницами Индии, чтобы обеспечить вам медицинское обслуживание мирового класса с высочайшими стандартами лечения и услуг для международных пациентов.",
    "home.popup.title": "Всем привет,",
    "home.popup.subtitle":
      "ДА, МЫ ЗАБОТИМСЯ И ГОТОВЫ ПРЕДОСТАВИТЬ ВСЁ НЕОБХОДИМОЕ.",
    "home.popup.description":
      "Мы предоставляем комплексную поддержку пациентам из Казахстана, Кыргызстана, Таджикистана, Туркменистана, Азербайджана, Фиджи, Мьянмы, Индонезии, Южной Африки, России и других стран, ищущих лечение мирового уровня в Индии. От помощи с визой до послеоперационного ухода - мы с вами на каждом этапе пути.",
    "home.popup.contactUs": "Связаться Сейчас",
    "home.popup.visitServices": "Изучить Наши Услуги",
    "home.hospitals.excellenceRating": "Рейтинг Превосходства",
    "home.hospitals.max.name": "Max Healthcare",
    "home.hospitals.max.description":
      "Комплексные медицинские услуги по международным стандартам и экспертная медицинская помощь по различным специальностям.",
    "home.hospitals.artemis.name": "Artemis Hospital",
    "home.hospitals.artemis.description":
      "Медицинское обслуживание мирового класса с индивидуальным подходом и комплексными услугами для международных пациентов.",
    "home.hospitals.apollo.name": "Apollo Hospitals",
    "home.hospitals.apollo.description":
      "Ведущая многопрофильная больница с мировыми стандартами и опытными врачами, специализирующимися на сложных процедурах.",
    "home.hospitals.fortis.name": "Fortis Healthcare",
    "home.hospitals.fortis.description":
      "Современное медицинское обслуживание с передовыми технологиями и индивидуальными протоколами лечения для международных пациентов.",
    "home.hospitals.medanta.name": "Medanta Hospital",
    "home.hospitals.medanta.description":
      "Современное медицинское учреждение, специализирующееся на сложных операциях и передовых методах лечения с роботизированной помощью.",
    "home.popup.featureBestHospitals": "Лучшие Больницы",
    "home.buttons.contactUs": "Связаться с Нами",

    // Services Page
    "services.hero.badge": "Медицинские Услуги Мирового Уровня",
    "services.hero.title": "Комплексные Медицинские Решения",
    "services.hero.subtitle":
      "Откройте для себя наш широкий спектр медицинских процедур и методов лечения, предоставляемых всемирно известными специалистами с использованием передовых технологий и индивидуальных протоколов ухода.",
    "services.specialties.title": "Наши Медицинские Специализации",
    "services.specialties.subtitle":
      "Каждая услуга поддерживается международно обученными специалистами и современными медицинскими технологиями",
    "services.cancer.badge": "Специализированная Онкологическая Помощь",
    "services.cancer.title": "Передовые Методы Лечения Рака",
    "services.cancer.subtitle":
      "Наша комплексная онкологическая программа сочетает передовые методы лечения, прецизионную медицину и сострадательный уход для достижения наилучших результатов для пациентов с онкологическими заболеваниями.",
    "services.successRate": "Уровень Успеха",
    "services.treatmentSuccess": "Успешность Лечения",
    "services.excellenceRating": "Рейтинг Превосходства",

    "services.features.hospitals": "50+ Партнерских Больниц",
    "services.features.standards": "Международные Стандарты",
    "services.features.technology": "Передовые Технологии",

    "services.cancer.breast.name": "Лечение Рака Молочной Железы",
    "services.cancer.cervical.name": "Лечение Рака Шейки Матки",
    "services.cancer.stomach.name": "Лечение Рака Желудка",
    "services.cancer.lung.name": "Лечение Рака Легких",
    "services.cancer.ovarian.name": "Лечение Рака Яичников",
    "services.cancer.pancreatic.name": "Лечение Рака Поджелудочной Железы",
    "services.cancer.rectal.name": "Лечение Рака Прямой Кишки",
    "services.cancer.prostate.name": "Лечение Рака Простаты",
    "services.cancer.leukemia.name": "Лечение Лейкемии",
    "services.oncology.name": "Онкология",
    "services.oncology.description":
      "Передовое лечение рака с использованием прецизионной медицины, иммунотерапии и индивидуальных протоколов ухода для оптимальных результатов.",
    "services.liver.name": "Трансплантация Печени",
    "services.liver.description":
      "Трансплантация печени мирового уровня с 95% успешностью, выполняемая международно обученными хирургами.",
    "services.kidney.name": "Трансплантация Почки",
    "services.kidney.description":
      "Комплексная программа трансплантации почки с передовыми протоколами иммуносупрессии и долгосрочным уходом.",
    "services.cardiology.name": "Кардиология",
    "services.cardiology.description":
      "Полный кардиологический уход, включая малоинвазивные процедуры, роботизированную хирургию и программы кардиологической реабилитации.",
    "services.neurosurgery.name": "Нейрохирургия",
    "services.neurosurgery.description":
      "Передовые операции на головном и спинном мозге с использованием современных методов визуализации, микрохирургии и нейронавигационных технологий.",
    "services.hair.name": "Трансплантация Волос",
    "services.hair.description":
      "Революционные техники FUE и DHI для восстановления волос с естественным результатом и минимальным временем восстановления.",
    "services.dental.name": "Зубные Имплантаты",
    "services.dental.description":
      "Современная имплантология с 3D-планированием, немедленной нагрузкой и вариантами керамических имплантатов.",
    "services.cosmetic.name": "Косметическая Хирургия",
    "services.cosmetic.description":
      "Эстетические и реконструктивные процедуры с естественными результатами с использованием передовых техник и премиальных материалов.",
    "services.knee.name": "Замена Коленного Сустава",
    "services.knee.description":
      "Передовая операция по замене сустава с роботизированной помощью, индивидуальными имплантатами и протоколами быстрого восстановления.",
    "services.eye.name": "Лазерная Коррекция Зрения (LASIK)",
    "services.eye.description":
      "Точная коррекция зрения с использованием фемтосекундного лазера, индивидуального волнового анализа и пожизненных гарантий.",
    "services.breast.name": "Увеличение Груди",
    "services.breast.description":
      "Передовые процедуры увеличения груди с премиальными имплантатами, 3D-визуализацией и индивидуальным планированием операции.",
    "services.spine.name": "Хирургия Позвоночника",
    "services.spine.description":
      "Малоинвазивные процедуры на позвоночнике с навигационными технологиями, заменой межпозвоночного диска и управлением болью.",
    "services.ivf.name": "ЭКО Лечение",
    "services.ivf.description":
      "Комплексные решения по лечению бесплодия с использованием передовых репродуктивных технологий, генетического скрининга и высоких показателей успеха.",
    "services.bone_marrow.name": "Трансплантация Костного Мозга",
    "services.bone_marrow.description":
      "Спасительная трансплантация гемопоэтических стволовых клеток с передовыми режимами кондиционирования и поддерживающей терапией.",
    "services.gynecology.name": "Гинекология",
    "services.gynecology.description":
      "Полный спектр услуг по женскому здоровью, включая малоинвазивные процедуры, роботизированную хирургию и комплексные программы оздоровления.",
    "services.bariatric.name": "Бариатрическая Хирургия",
    "services.bariatric.description":
      "Передовые процедуры для снижения веса с вариантами метаболической хирургии, консультациями по питанию и долгосрочной поддержкой.",

    "services.testimonials.title": "Отзывы Пациентов",
    "services.testimonials.subtitle":
      "Услышьте от наших пациентов об их опыте и успешном лечении",
    "services.buttons.bookNow": "Забронировать",
    "sevices.buttons.learnMore": "Узнать Больше",
    "services.buttons.callback": "Заказать Обратный Звонок",
    "services.buttons.whatsapp": "Написать в WhatsApp",
    "services.buttons.whatsapp_message":
      "Привет, мне нужна дополнительная информация об услугах AarogyCare.",
    "services.buttons.knowMore": "Узнать Подробнее",

    // About Page
    "about.hero.title": "Наша История и Миссия",
    "about.hero.subtitle":
      "Связываем медицинское превосходство между Индией и странами СНГ уже более 15 лет. Мы стремимся сделать медицинское лечение мирового уровня доступным и экономичным.",
    "about.story.title": "Соединяя Сердца, Исцеляя Жизни",
    "about.values.title": "Наши Основные Ценности",
    "about.values.subtitle":
      "Эти принципы направляют всё, что мы делаем, и формируют нашу приверженность совершенству в организации медицинской помощи.",
    "about.team.title": "Наша Команда",
    "about.team.subtitle":
      "Наши преданные профессионалы сочетают медицинскую экспертизу с культурным пониманием, чтобы обеспечить исключительную координацию ухода.",
    "about.journey.title": "Наш Путь",
    "about.journey.subtitle":
      "Ключевые вехи, которые сформировали наш рост и приверженность совершенству.",
    "about.story.paragraph1":
      "Основанная в 2008 году, наша компания возникла из простого, но мощного видения: сделать мировое здравоохранение доступным для пациентов из Казахстана и России. То, что начиналось как небольшая инициатива, превратилось в надежный мост между пациентами, ищущими качественную медицинскую помощь, и признанной системой здравоохранения Индии.",
    "about.story.paragraph2":
      "Наши основатели, испытав на себе трудности навигации по иностранным системам здравоохранения, поняли необходимость комплексной системы поддержки. Мы осознали, что медицинское лечение за рубежом включает не только клиническую помощь – оно требует культурного понимания, языковой поддержки и эмоционального руководства.",
    "about.story.paragraph3":
      "Сегодня мы с гордостью служим доверенным партнером для тысяч пациентов, предлагая не только медицинскую координацию, но и полную экосистему ухода, которая охватывает все аспекты медицинского туризма.",
    "about.story.image_alt":
      "Наша медицинская команда обсуждает уход за пациентом",
    "about.values.compassionate.title": "Сострадательная Забота",
    "about.values.compassionate.description":
      "Мы относимся к каждому пациенту с эмпатией, понимая их уникальные потребности и проблемы.",
    "about.values.trust.title": "Доверие и Прозрачность",
    "about.values.trust.description":
      "Полная прозрачность в стоимости лечения, процедурах и ожидаемых результатах.",
    "about.values.global.title": "Международные Стандарты",
    "about.values.global.description":
      "Международное качественное здравоохранение с учреждениями мирового класса и опытными врачами.",
    "about.values.support.title": "Персональная Поддержка",
    "about.values.support.description":
      "Специальная команда поддержки, которая будет помогать вам на протяжении всего вашего медицинского путешествия в Индии.",
    "about.team.dr_meenu.name": "Доктор Мину Валиа",
    "about.team.dr_meenu.role": "Онколог",
    "about.team.dr_meenu.description":
      "Ведущий медицинский онколог в Max Delhi, специализирующийся на лечении рака.",
    "about.team.dr_subhash.name": "Доктор Субхаш Гупта",
    "about.team.dr_subhash.role": "Хирург по Трансплантации Печени",
    "about.team.dr_subhash.description":
      "Ведущий хирург по трансплантации печени в Max Delhi (более 4000 трансплантаций).",
    "about.team.dr_sanjeev.name": "Доктор Санджив Дуа",
    "about.team.dr_sanjeev.role": "Нейрохирург",
    "about.team.dr_sanjeev.description":
      "Эксперт в операциях на головном и спинном мозге с более чем 20-летним опытом",
    "about.milestones.2008.year": "2008",
    "about.milestones.2008.event": "Основание Компании",
    "about.milestones.2008.description":
      "Начали с видения преодоления разрыва в здравоохранении",
    "about.milestones.2012.year": "2012",
    "about.milestones.2012.event": "1000+ Пациентов",
    "about.milestones.2012.description":
      "Достигли нашей первой значительной вехи",
    "about.milestones.2016.year": "2016",
    "about.milestones.2016.event": "50+ Партнерских Больниц",
    "about.milestones.2016.description": "Расширили нашу сеть по всей Индии",
    "about.milestones.2020.year": "2020",
    "about.milestones.2020.event": "Цифровая Трансформация",
    "about.milestones.2020.description": "Запустили услуги онлайн-консультаций",
    "about.milestones.2023.year": "2023",
    "about.milestones.2023.event": "10 000+ Историй Успеха",
    "about.milestones.2023.description":
      "Отмечаем более десятилетия совершенства",
    "about.buttons.callback": "Заказать Обратный Звонок",
    "about.buttons.whatsapp": "Написать в WhatsApp",
    "about.buttons.whatsapp_message":
      "Привет, мне нужна дополнительная информация об услугах AarogyCare.",

    // Contact Page
    "contact.hero.title": "Свяжитесь с Нами",
    "contact.hero.subtitle":
      "Готовы начать ваше медицинское путешествие? Наша преданная команда готова помочь вам на каждом этапе пути. Свяжитесь с нами для персональной консультации и поддержки.",
    "contact.form.title": "Заказать Обратный Звонок",
    "contact.form.subtitle":
      "Заполните форму ниже, и наш медицинский координатор свяжется с вами в течение 24 часов.",
    "contact.form.name": "Полное Имя",
    "contact.form.phone": "Номер Телефона",
    "contact.form.message": "Сообщение",
    "contact.form.messagePlaceholder":
      "Расскажите нам о ваших медицинских потребностях или любых вопросах...",
    "contact.form.submit": "Заказать Обратный Звонок",
    "contact.form.sending": "Отправка...",
    "contact.form.success":
      "Спасибо! Ваше сообщение успешно отправлено. Мы скоро свяжемся с вами.",
    "contact.info.title": "Контактная Информация",
    "contact.info.subtitle":
      "Мы здесь, чтобы помочь вам ориентироваться в вашем медицинском путешествии с уверенностью. Свяжитесь с нами через любой из следующих каналов.",
    "contact.emergency.title": "Экстренная Поддержка",
    "contact.emergency.subtitle":
      "Для срочной медицинской помощи или экстренных случаев:",

    "contact.form.description": "Ваши отзывы помогают нам улучшать наши услуги",

    "contact.form.name.label": "Полное Имя",
    "contact.form.name.placeholder": "Введите ваше полное имя",
    "contact.form.address.label": "Адрес",
    "contact.form.address.placeholder": "Введите ваш адрес",
    "contact.form.phone.label": "Номер Телефона",
    "contact.form.phone.placeholder": "Введите ваш номер телефона",
    "contact.form.email.label": "Электронная Почта",
    "contact.form.email.placeholder": "Введите ваш адрес электронной почты",
    "contact.form.message.label": "Ваше Сообщение",
    "contact.form.message.placeholder":
      "Расскажите нам о вашем опыте или любых проблемах...",
    "contact.form.immediateAssistance": "Нужна немедленная помощь?",
    "contact.form.whatsapp": "Свяжитесь с нами в WhatsApp",
    "contact.info.description":
      "Мы доступны 24/7, чтобы предоставить вам лучшую медицинскую помощь и поддержку",
    "contact.info.phone.title": "Телефонная Поддержка",
    "contact.info.phone.detail1": "+91 9097 272 726",
    "contact.info.phone.detail2": "+91 9599 023 663",
    "contact.info.phone.description": "Круглосуточная экстренная поддержка",
    "contact.info.email.title": "Поддержка по Электронной Почте",
    "contact.info.email.detail1": "SHUBHAMAGRAWAL970@GMAIL.COM",
    "contact.info.email.description": "Ответ в течение 2 часов",
    "contact.info.hours.title": "Рабочие Часы",
    "contact.info.hours.detail1": "Пн-Пт: 9:00 - 20:00",
    "contact.info.hours.detail2": "Сб-Вс: 10:00 - 18:00",
    "contact.info.hours.description": "Индийское стандартное время (IST)",
    "contact.emergency.description":
      "Доступны 24/7 для срочной медицинской помощи",
    "contact.emergency.phone": "+91 90972 72726",
    "contact.faqs.title": "Быстрые Ответы",
    "contact.faqs.subtitle":
      "Часто задаваемые вопросы о наших услугах медицинского туризма и поддержке.",
    "contact.faqs.arrangement.question":
      "Как быстро вы можете организовать лечение?",
    "contact.faqs.arrangement.answer":
      "Мы обычно можем организовать консультации в течение 48-72 часов и лечение в течение 1-2 недель, в зависимости от процедуры.",
    "contact.faqs.visa.question": "Вы помогаете с визой?",
    "contact.faqs.visa.answer":
      "Да, мы предоставляем полную помощь с визой, включая документы для медицинской визы и пригласительные письма.",
    "contact.faqs.languages.question":
      "На каких языках вы предоставляете поддержку?",
    "contact.faqs.languages.answer":
      "Мы предоставляем поддержку на русском, казахском и английском языках с выделенными координаторами для каждого языка.",
    "contact.faqs.costs.question":
      "Являются ли расходы на лечение прозрачными?",
    "contact.faqs.costs.answer":
      "Абсолютно. Мы предоставляем подробные оценки стоимости заранее без скрытых платежей, включая лечение, проживание и проезд.",

    // Feedback Form
    "feedback.title": "Форма Обратной Связи",
    "feedback.subtitle":
      "Мы ценим ваши отзывы и хотим решить любые проблемы, которые у вас могут возникнуть.",
    "feedback.successMessage":
      "Спасибо за ваш отзыв! Мы рассмотрим его и свяжемся с вами в ближайшее время.",

    // Form Fields
    "feedback.fields.name.label": "Имя",
    "feedback.fields.name.placeholder": "Введите ваше полное имя",
    "feedback.fields.address.label": "Адрес",
    "feedback.fields.address.placeholder": "Введите ваш полный адрес",
    "feedback.fields.address.required": "Адрес обязателен",
    "feedback.fields.telephone.label": "Телефон",
    "feedback.fields.telephone.placeholder": "+91 98765 43210",
    "feedback.fields.telephone.required":
      "Пожалуйста, введите действительный номер телефона",
    "feedback.fields.email.label": "Электронная Почта",
    "feedback.fields.email.placeholder": "your.email@example.com",
    "feedback.fields.complaint.label": "Подробная жалоба",
    "feedback.fields.complaint.placeholder":
      "Пожалуйста, предоставьте подробную информацию о вашей жалобе или отзыве...",

    // Buttons & Actions
    "feedback.submitButton": "Отправить Отзыв",
    "feedback.submitting": "Отправка Отзыва...",

    // Footer
    "feedback.assistanceText": "Нужна немедленная помощь?",
    "feedback.assistanceLink": "Свяжитесь с нами в WhatsApp напрямую",
    "footer.brand": "AarogyCare",
    "footer.description":
      "Связываем медицинское превосходство между Индией и странами СНГ. Ваш надежный партнер в получении медицинского лечения мирового уровня.",
    "footer.titles.services": "Медицинские Услуги",
    "footer.titles.support": "Поддержка Пациентов",
    "footer.titles.company": "Компания",
    "footer.links.services.oncology": "Онкология",
    "footer.links.services.cardiology": "Кардиология",
    "footer.links.services.neurosurgery": "Нейрохирургия",
    "footer.links.services.transplantation": "Трансплантация",
    "footer.links.services.cosmetic": "Косметическая Хирургия",
    "footer.links.services.dental": "Стоматология",
    "footer.links.support.contact": "Контакты",
    "footer.links.support.emergency": "Экстренная Поддержка",
    "footer.links.support.portal": "Пациентский Портал",
    "footer.links.support.insurance": "Помощь со Страхованием",
    "footer.links.support.travel": "Помощь с Путешествием",
    "footer.links.support.language": "Языковая Поддержка",
    "footer.links.company.about": "О Нас",
    "footer.links.company.team": "Наша Команда",
    "footer.links.company.careers": "Карьера",
    "footer.links.company.privacy": "Политика Конфиденциальности",
    "footer.links.company.terms": "Условия Обслуживания",
    "footer.links.company.blog": "Блог",
    "footer.contact.phone": "Телефон",
    "footer.contact.email": "Электронная Почта",
    "footer.contact.address": "Адрес",
    "footer.social.facebook": "Facebook",
    "footer.social.instagram": "Instagram",
    "footer.social.linkedin": "LinkedIn",
    "footer.copyright": "© {{year}} AarogyCare. Все права защищены.",

    // Features
    "features.support": "Круглосуточная Медицинская Поддержка",
    "features.support.detail":
      "Немедленный доступ к медицинским специалистам в любое время",
    "features.visa": "Помощь с Визой",
    "features.visa.detail":
      "Высокий процент успешного получения медицинских виз",
    "features.interpreters": "Языковые Услуги",
    "features.interpreters.detail": "Поддержка всех основных мировых языков",
    "features.transfers": "Трансфер из Аэропорта",
    "features.transfers.detail":
      "Быстрое время реакции на все транспортные нужды",
    "features.accommodation": "Варианты Жилья",
    "features.accommodation.detail":
      "Широкая сеть проверенных партнеров по размещению",
    "features.postCare": "Послеоперационный Уход",
    "features.postCare.detail":
      "Полное покрытие ваших потребностей в восстановлении",
    "features.cta": "Начните ваше медицинское путешествие сегодня",

    // Common
    "common.loading": "Загрузка...",
    "common.readMore": "Читать Далее",
    "common.learnMore": "Узнать Больше",
    "common.viewAll": "Посмотреть Все",

    //steps
    "header.trusted": "Доверяют более 50 000 пациентов по всему миру",
    "header.title1": "Как Мы",
    "header.title2": "Преобразуем Жизни",
    "header.subtitle1":
      "Испытайте наше революционное 8-этапное медицинское путешествие, разработанное для предоставления",
    "header.highlight1": "медицинской помощи мирового класса",
    "header.subtitle2": "с",
    "header.highlight2": "непревзойденным личным вниманием",

    "steps.firstContact.title": "Первый Контакт",
    "steps.firstContact.description":
      "Поделитесь деталями вашего случая с нами через нашу безопасную контактную форму или персональную телефонную консультацию с нашими медицинскими координаторами.",
    "steps.firstContact.time": "Немедленно",

    "steps.expertTeam.title": "Связь с Экспертной Командой",
    "steps.expertTeam.description":
      "Наша специализированная медицинская команда и координаторы пациентов свяжутся с вами, чтобы понять ваши уникальные медицинские потребности.",
    "steps.expertTeam.time": "В течение 2 часов",

    "steps.assessment.title": "Медицинская и Финансовая Оценка",
    "steps.assessment.description":
      "Получите комплексную медицинскую оценку и прозрачную разбивку стоимости без скрытых платежей в течение 48 часов.",
    "steps.assessment.time": "48 часов",

    "steps.travel.title": "Организация Путешествия",
    "steps.travel.description":
      "Полная помощь с путешествием, включая бронирование авиабилетов, поддержку с визой и организацию проживания, адаптированную под ваши потребности.",
    "steps.travel.time": "3-5 дней",

    "steps.reception.title": "VIP Встреча в Аэропорту",
    "steps.reception.description":
      "Наша специальная команда обеспечивает премиальную встречу в аэропорту с комфортным транспортом до вашего места проживания.",
    "steps.reception.time": "По прибытии",

    "steps.treatment.title": "Лечение Мирового Уровня",
    "steps.treatment.description":
      "Получите исключительную медицинскую помощь от сертифицированных международных специалистов с использованием передовых технологий и методов.",
    "steps.treatment.time": "По расписанию",

    "steps.return.title": "Безопасное Возвращение Домой",
    "steps.return.description":
      "Комфортный отъезд с полной медицинской документацией, рецептами и подробными инструкциями по послеоперационному уходу.",
    "steps.return.time": "После лечения",

    "steps.followup.title": "Пожизненное Партнерство в Уходе",
    "steps.followup.description":
      "Непрерывное последующее наблюдение, регулярные проверки здоровья и круглосуточная поддержка для вашего постоянного пути к благополучию.",
    "steps.followup.time": "Постоянно",

    "stats.satisfaction": "Удовлетворенность Пациентов",
    "stats.response": "Время Ответа",
    "stats.success": "Процент Успеха",
    "stats.experience": "Лет Опыта",

    "cta.title": "Ваше Путешествие к Здоровью, Наше Обещание",
    "cta.subtitle": "Преобразуем жизни через исключительный медицинский опыт",

    "features.response": "Гарантированный Ответ за 48 часов",
    "features.network": "Глобальная Сеть Здравоохранения",
    "features.plans": "Индивидуальные Планы Ухода",

    //whatsappbuttons
    "home.buttons.knowMore": "Узнать Подробнее",
    "home.buttons.bookNow": "Забронировать",
    "home.buttons.whatsapp": "Написать в WhatsApp",
    "home.buttons.whatsapp_message":
      "Здравствуйте, я хотел бы узнать больше о AarogyCare.",
  },

  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.getStarted": "Commencer",

    // Home Page
    "home.hero.badge": "Fiable pour plus de 8 500 patients internationaux",
    "home.hero.title1": "OUI, NOUS PRENONS SOIN",
    "home.hero.title2": "ET NOUS OSONS",
    "home.hero.title3": "FOURNIR",
    "home.hero.title4": "TOUT CE DONT VOUS AVEZ BESOIN",
    "home.hero.subtitle":
      "Bénéficiez d'un traitement médical de classe mondiale en Inde avec un soutien complet pour les patients du Kazakhstan, Kirghizistan, Tadjikistan, Turkménistan, Azerbaïdjan, Fidji, Myanmar, Indonésie, Afrique du Sud, Russie et au-delà. Votre parcours de santé commence ici avec nos soins exceptionnels et notre engagement inébranlable.",
    "home.hero.startJourney": "Commencer votre parcours",
    "home.hero.exploreServices": "Découvrir nos services",
    "home.stats.treatments": "Traitements réussis",
    "home.stats.patients": "Patients satisfaits",
    "home.stats.hospitals": "Hôpitaux partenaires",
    "home.stats.experience": "Années d'expérience",
    "home.hospitals.badge": "Partenaires de santé premium",
    "home.hospitals.title": "Nos hôpitaux partenaires",
    "home.hospitals.subtitle":
      "Nous collaborons avec les hôpitaux les plus prestigieux d'Inde pour vous offrir des soins médicaux de classe mondiale avec les normes de traitement les plus élevées et des services pour patients internationaux.",
    "home.popup.title": "Bonjour à tous,",
    "home.popup.subtitle":
      "OUI, NOUS PRENONS SOIN ET NOUS OSONS FOURNIR TOUT CE DONT VOUS AVEZ BESOIN.",
    "home.popup.description":
      "Nous offrons un soutien complet aux patients du Kazakhstan, Kirghizistan, Tadjikistan, Turkménistan, Azerbaïdjan, Fidji, Myanmar, Indonésie, Afrique du Sud, Russie et d'autres pays recherchant un traitement de classe mondiale en Inde. De l'assistance pour le visa aux soins post-traitement, nous vous accompagnons à chaque étape.",
    "home.popup.contactUs": "Contactez-nous maintenant",
    "home.popup.visitServices": "Découvrir nos services",
    "home.hospitals.excellenceRating": "Note d'excellence",
    "home.hospitals.max.name": "Max Healthcare",
    "home.hospitals.max.description":
      "Services de santé complets avec des normes internationales et des soins médicaux experts dans diverses spécialités.",
    "home.hospitals.artemis.name": "Artemis Hospital",
    "home.hospitals.artemis.description":
      "Soins de santé de classe mondiale avec des services personnalisés et un soutien complet pour les patients internationaux.",
    "home.hospitals.apollo.name": "Apollo Hospitals",
    "home.hospitals.apollo.description":
      "Hôpital multispécialité leader avec des installations de classe mondiale et des médecins expérimentés spécialisés dans les procédures complexes.",
    "home.hospitals.fortis.name": "Fortis Healthcare",
    "home.hospitals.fortis.description":
      "Soins médicaux avancés avec une technologie de pointe et des protocoles de traitement personnalisés pour les patients internationaux.",
    "home.hospitals.medanta.name": "Medanta Hospital",
    "home.hospitals.medanta.description":
      "Installation médicale ultramoderne spécialisée dans les chirurgies complexes et les traitements avancés avec assistance robotique.",
    "home.popup.featureBestHospitals": "Meilleurs hôpitaux",
    "home.buttons.contactUs": "Contactez-nous",

    // Services Page
    "services.hero.badge": "Services médicaux de classe mondiale",
    "services.hero.title": "Solutions de santé complètes",
    "services.hero.subtitle":
      "Découvrez notre large gamme de traitements et procédures médicales, dispensés par des spécialistes de renommée mondiale utilisant une technologie de pointe et des protocoles de soins personnalisés.",
    "services.specialties.title": "Nos spécialités médicales",
    "services.specialties.subtitle":
      "Chaque service est soutenu par des spécialistes formés à l'international et une technologie médicale de pointe",
    "services.cancer.badge": "Soins oncologiques spécialisés",
    "services.cancer.title": "Traitements avancés du cancer",
    "services.cancer.subtitle":
      "Notre programme oncologique complet combine des traitements de pointe, une médecine de précision et des soins compatissants pour offrir les meilleurs résultats possibles aux patients atteints de cancer.",
    "services.successRate": "Taux de réussite",
    "services.treatmentSuccess": "Succès du traitement",
    "services.excellenceRating": "Note d'excellence",
    "services.features.hospitals": "50+ hôpitaux partenaires",
    "services.features.standards": "Normes internationales",
    "services.features.technology": "Technologie avancée",
    "services.cancer.breast.name": "Traitement du cancer du sein",
    "services.cancer.cervical.name": "Traitement du cancer du col de l'utérus",
    "services.cancer.stomach.name": "Traitement du cancer de l'estomac",
    "services.cancer.lung.name": "Traitement du cancer du poumon",
    "services.cancer.ovarian.name": "Traitement du cancer de l'ovaire",
    "services.cancer.pancreatic.name": "Traitement du cancer du pancréas",
    "services.cancer.rectal.name": "Traitement du cancer rectal",
    "services.cancer.prostate.name": "Traitement du cancer de la prostate",
    "services.cancer.leukemia.name": "Traitement de la leucémie",
    "services.oncology.name": "Oncologie",
    "services.oncology.description":
      "Traitement avancé du cancer avec médecine de précision, immunothérapie et protocoles de soins personnalisés pour des résultats optimaux.",
    "services.liver.name": "Transplantation hépatique",
    "services.liver.description":
      "Procédures de transplantation hépatique de classe mondiale avec un taux de réussite de 95%, réalisées par des chirurgiens formés à l'international.",
    "services.kidney.name": "Transplantation rénale",
    "services.kidney.description":
      "Programme complet de transplantation rénale avec protocoles avancés d'immunosuppression et soins à long terme.",
    "services.cardiology.name": "Cardiologie",
    "services.cardiology.description":
      "Soins cardiaques complets incluant des procédures mini-invasives, la chirurgie robotique et des programmes de réadaptation cardiaque.",
    "services.neurosurgery.name": "Neurochirurgie",
    "services.neurosurgery.description":
      "Chirurgies avancées du cerveau et de la colonne vertébrale utilisant l'imagerie de pointe, la microchirurgie et la technologie de neuronavigation.",
    "services.hair.name": "Greffe de cheveux",
    "services.hair.description":
      "Techniques révolutionnaires FUE et DHI pour une restauration capillaire aux résultats naturels avec un temps de récupération minimal.",
    "services.dental.name": "Implants dentaires",
    "services.dental.description":
      "Implantologie dentaire de pointe avec planification 3D, mise en charge immédiate et options d'implants en céramique.",
    "services.cosmetic.name": "Chirurgie esthétique",
    "services.cosmetic.description":
      "Procédures esthétiques et reconstructives avec des résultats naturels utilisant des techniques avancées et des matériaux premium.",
    "services.knee.name": "Prothèse de genou",
    "services.knee.description":
      "Chirurgie avancée de remplacement articulaire avec assistance robotique, implants sur mesure et protocoles de récupération rapide.",
    "services.eye.name": "Chirurgie oculaire (LASIK)",
    "services.eye.description":
      "Correction de la vision de précision avec technologie laser femtoseconde, analyse wavefront personnalisée et garanties à vie.",
    "services.breast.name": "Augmentation mammaire",
    "services.breast.description":
      "Procédures avancées d'augmentation mammaire avec implants premium, imagerie 3D et planification chirurgicale personnalisée.",
    "services.spine.name": "Chirurgie de la colonne vertébrale",
    "services.spine.description":
      "Procédures rachidiennes mini-invasives avec technologie de navigation, remplacement de disque artificiel et gestion de la douleur.",
    "services.ivf.name": "Traitement FIV",
    "services.ivf.description":
      "Solutions complètes de fertilité avec technologies de reproduction avancées, dépistage génétique et taux de réussite élevés.",
    "services.bone_marrow.name": "Greffe de moelle osseuse",
    "services.bone_marrow.description":
      "Greffe de cellules souches hématopoïétiques vitale avec régimes de conditionnement avancés et soins de soutien.",
    "services.gynecology.name": "Gynécologie",
    "services.gynecology.description":
      "Soins de santé féminins complets avec procédures mini-invasives, chirurgie robotique et programmes de bien-être complets.",
    "services.bariatric.name": "Chirurgie bariatrique",
    "services.bariatric.description":
      "Procédures avancées de perte de poids avec options de chirurgie métabolique, conseils nutritionnels et soutien à long terme.",
    "services.testimonials.title": "Témoignages de patients",
    "services.testimonials.subtitle":
      "Écoutez nos patients parler de leurs expériences et traitements réussis",
    "services.buttons.bookNow": "Réserver maintenant",
    "sevices.buttons.learnMore": "En savoir plus",
    "services.buttons.callback": "Demander un rappel",
    "services.buttons.whatsapp": "WhatsApp maintenant",
    "services.buttons.whatsapp_message":
      "Bonjour, j'ai besoin de plus de détails sur les services AarogyCare.",
    "services.buttons.knowMore": "En savoir plus",

    // About Page
    "about.hero.title": "Notre histoire et mission",
    "about.hero.subtitle":
      "Établir des ponts d'excellence en soins de santé entre l'Inde et la région CEI depuis plus de 15 ans. Nous nous engageons à rendre les traitements médicaux de classe mondiale accessibles et abordables.",
    "about.story.title": "Connecter les cœurs, guérir des vies",
    "about.values.title": "Nos valeurs fondamentales",
    "about.values.subtitle":
      "Ces principes guident tout ce que nous faisons et façonnent notre engagement envers l'excellence dans la facilitation des soins de santé.",
    "about.team.title": "Rencontrez notre équipe",
    "about.team.subtitle":
      "Nos professionnels dévoués combinent expertise médicale et compréhension culturelle pour fournir une coordination des soins exceptionnelle.",
    "about.journey.title": "Notre parcours",
    "about.journey.subtitle":
      "Étapes clés qui ont façonné notre croissance et notre engagement envers l'excellence.",
    "about.story.paragraph1":
      "Fondée en 2008, notre société est née d'une vision simple mais puissante : rendre les soins de santé de classe mondiale accessibles aux patients du Kazakhstan et de Russie. Ce qui a commencé comme une petite initiative est devenu un pont de confiance entre les patients cherchant des soins médicaux de qualité et le système de santé réputé de l'Inde.",
    "about.story.paragraph2":
      "Nos fondateurs, ayant eux-mêmes expérimenté les difficultés de naviguer dans des systèmes de santé étrangers, ont compris la nécessité d'un système de soutien complet. Nous avons reconnu qu'un traitement médical à l'étranger implique plus que des soins cliniques - il nécessite une compréhension culturelle, un soutien linguistique et un accompagnement émotionnel.",
    "about.story.paragraph3":
      "Aujourd'hui, nous sommes fiers d'être le partenaire de confiance de milliers de patients, offrant non seulement une coordination médicale mais un écosystème de soins complet qui couvre tous les aspects du tourisme médical.",
    "about.story.image_alt":
      "Notre équipe médicale discutant des soins aux patients",
    "about.values.compassionate.title": "Soins compatissants",
    "about.values.compassionate.description":
      "Nous traitons chaque patient avec empathie, en comprenant ses besoins et préoccupations uniques.",
    "about.values.trust.title": "Confiance et transparence",
    "about.values.trust.description":
      "Transparence totale sur les coûts des traitements, les procédures et les résultats attendus.",
    "about.values.global.title": "Normes mondiales",
    "about.values.global.description":
      "Soins de santé de qualité internationale avec des installations de classe mondiale et des médecins expérimentés.",
    "about.values.support.title": "Soutien personnalisé",
    "about.values.support.description":
      "Équipe de soutien dédiée pour vous accompagner tout au long de votre parcours médical en Inde.",
    "about.team.dr_meenu.name": "Dr Meenu Walia",
    "about.team.dr_meenu.role": "Oncologue",
    "about.team.dr_meenu.description":
      "Oncologue médical principal à Max Delhi, spécialisé dans les soins contre le cancer.",
    "about.team.dr_subhash.name": "Dr Subhash Gupta",
    "about.team.dr_subhash.role": "Chirurgien en transplantation hépatique",
    "about.team.dr_subhash.description":
      "Chirurgien principal en transplantation hépatique à Max Delhi (plus de 4000 transplantations).",
    "about.team.dr_sanjeev.name": "Dr Sanjeev Dua",
    "about.team.dr_sanjeev.role": "Neurochirurgien",
    "about.team.dr_sanjeev.description":
      "Expert en chirurgie du cerveau et de la colonne vertébrale avec plus de 20 ans d'expérience",
    "about.milestones.2008.year": "2008",
    "about.milestones.2008.event": "Création de l'entreprise",
    "about.milestones.2008.description":
      "Commencé avec une vision de combler le fossé en matière de soins de santé",
    "about.milestones.2012.year": "2012",
    "about.milestones.2012.event": "1000+ patients",
    "about.milestones.2012.description":
      "Atteint notre premier jalon important",
    "about.milestones.2016.year": "2016",
    "about.milestones.2016.event": "50+ hôpitaux partenaires",
    "about.milestones.2016.description": "Étendu notre réseau à travers l'Inde",
    "about.milestones.2020.year": "2020",
    "about.milestones.2020.event": "Transformation numérique",
    "about.milestones.2020.description":
      "Lancé les services de consultation en ligne",
    "about.milestones.2023.year": "2023",
    "about.milestones.2023.event": "10 000+ réussites",
    "about.milestones.2023.description":
      "Célébrant plus d'une décennie d'excellence",
    "about.buttons.callback": "Demander un rappel",
    "about.buttons.whatsapp": "WhatsApp maintenant",
    "about.buttons.whatsapp_message":
      "Bonjour, j'ai besoin de plus de détails sur les services AarogyCare.",

    // Contact Page
    "contact.hero.title": "Contactez-nous",
    "contact.hero.subtitle":
      "Prêt à commencer votre parcours médical ? Notre équipe dévouée est là pour vous aider à chaque étape. Contactez-nous pour une consultation personnalisée et un soutien.",
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
    "contact.info.title": "Coordonnées",
    "contact.info.subtitle":
      "Nous sommes là pour vous aider à naviguer dans votre parcours médical en toute confiance. Contactez-nous par l'un des canaux suivants.",
    "contact.emergency.title": "Support d'urgence",
    "contact.emergency.subtitle":
      "Pour une assistance médicale urgente ou des urgences :",
    "contact.form.description":
      "Vos commentaires nous aident à améliorer nos services",
    "contact.form.name.label": "Nom complet",
    "contact.form.name.placeholder": "Entrez votre nom complet",
    "contact.form.address.label": "Adresse",
    "contact.form.address.placeholder": "Entrez votre adresse",
    "contact.form.phone.label": "Numéro de téléphone",
    "contact.form.phone.placeholder": "Entrez votre numéro de téléphone",
    "contact.form.email.label": "Adresse e-mail",
    "contact.form.email.placeholder": "Entrez votre adresse e-mail",
    "contact.form.message.label": "Votre message",
    "contact.form.message.placeholder":
      "Parlez-nous de votre expérience ou de vos préoccupations...",
    "contact.form.immediateAssistance": "Besoin d'une assistance immédiate ?",
    "contact.form.whatsapp": "Contactez-nous sur WhatsApp",
    "contact.info.description":
      "Nous sommes disponibles 24h/24 et 7j/7 pour vous fournir les meilleurs soins médicaux et soutien",
    "contact.info.phone.title": "Support téléphonique",
    "contact.info.phone.detail1": "+91 9097 272 726",
    "contact.info.phone.detail2": "+91 9599 023 663",
    "contact.info.phone.description": "Support d'urgence disponible 24h/24",
    "contact.info.email.title": "Support par e-mail",
    "contact.info.email.detail1": "SHUBHAMAGRAWAL970@GMAIL.COM",
    "contact.info.email.description": "Réponse dans les 2 heures",
    "contact.info.hours.title": "Heures d'ouverture",
    "contact.info.hours.detail1": "Lun-Ven : 9h00 - 20h00",
    "contact.info.hours.detail2": "Sam-Dim : 10h00 - 18h00",
    "contact.info.hours.description": "Heure normale de l'Inde (IST)",
    "contact.emergency.description":
      "Disponible 24h/24 pour une assistance médicale urgente",
    "contact.emergency.phone": "+91 90972 72726",
    "contact.faqs.title": "Réponses rapides",
    "contact.faqs.subtitle":
      "Questions fréquentes sur nos services de tourisme médical et soutien.",
    "contact.faqs.arrangement.question":
      "Quelle rapidité pouvez-vous organiser un traitement ?",
    "contact.faqs.arrangement.answer":
      "Nous pouvons généralement organiser des consultations dans les 48-72 heures et des traitements dans les 1-2 semaines, selon la procédure.",
    "contact.faqs.visa.question":
      "Fournissez-vous une assistance pour le visa ?",
    "contact.faqs.visa.answer":
      "Oui, nous fournissons une assistance complète pour le visa, y compris la documentation pour les visas médicaux et les lettres d'invitation.",
    "contact.faqs.languages.question": "Quelles langues supportez-vous ?",
    "contact.faqs.languages.answer":
      "Nous fournissons un support en russe, kazakh et anglais avec des coordinateurs dédiés pour chaque langue.",
    "contact.faqs.costs.question":
      "Les coûts de traitement sont-ils transparents ?",
    "contact.faqs.costs.answer":
      "Absolument. Nous fournissons des estimations de coûts détaillées à l'avance sans frais cachés, y compris le traitement, l'hébergement et les voyages.",

    // Feedback Form
    "feedback.title": "Formulaire de commentaires",
    "feedback.subtitle":
      "Nous apprécions vos commentaires et voulons répondre à toutes vos préoccupations.",
    "feedback.successMessage":
      "Merci pour vos commentaires ! Nous les examinerons et vous répondrons bientôt.",
    "feedback.fields.name.label": "Nom",
    "feedback.fields.name.placeholder": "Entrez votre nom complet",
    "feedback.fields.address.label": "Adresse",
    "feedback.fields.address.placeholder": "Entrez votre adresse complète",
    "feedback.fields.address.required": "L'adresse est requise",
    "feedback.fields.telephone.label": "Téléphone",
    "feedback.fields.telephone.placeholder": "+91 98765 43210",
    "feedback.fields.telephone.required":
      "Veuillez entrer un numéro de téléphone valide",
    "feedback.fields.email.label": "E-mail",
    "feedback.fields.email.placeholder": "votre.email@exemple.com",
    "feedback.fields.complaint.label": "Plainte détaillée",
    "feedback.fields.complaint.placeholder":
      "Veuillez fournir des informations détaillées sur votre plainte ou commentaire...",
    "feedback.submitButton": "Soumettre les commentaires",
    "feedback.submitting": "Soumission des commentaires...",
    "feedback.assistanceText": "Besoin d'une assistance immédiate ?",
    "feedback.assistanceLink": "Contactez-nous directement sur WhatsApp",
    "footer.brand": "AarogyCare",
    "footer.description":
      "Établir des ponts d'excellence en soins de santé entre l'Inde et la région CEI. Votre partenaire de confiance pour des traitements médicaux de classe mondiale.",
    "footer.titles.services": "Services médicaux",
    "footer.titles.support": "Soutien aux patients",
    "footer.titles.company": "Entreprise",
    "footer.links.services.oncology": "Oncologie",
    "footer.links.services.cardiology": "Cardiologie",
    "footer.links.services.neurosurgery": "Neurochirurgie",
    "footer.links.services.transplantation": "Transplantation",
    "footer.links.services.cosmetic": "Chirurgie esthétique",
    "footer.links.services.dental": "Soins dentaires",
    "footer.links.support.contact": "Contact",
    "footer.links.support.emergency": "Support d'urgence",
    "footer.links.support.portal": "Portail patient",
    "footer.links.support.insurance": "Aide à l'assurance",
    "footer.links.support.travel": "Aide aux voyages",
    "footer.links.support.language": "Support linguistique",
    "footer.links.company.about": "À propos",
    "footer.links.company.team": "Notre équipe",
    "footer.links.company.careers": "Carrières",
    "footer.links.company.privacy": "Politique de confidentialité",
    "footer.links.company.terms": "Conditions d'utilisation",
    "footer.links.company.blog": "Blog",
    "footer.contact.phone": "Téléphone",
    "footer.contact.email": "E-mail",
    "footer.contact.address": "Adresse",
    "footer.social.facebook": "Facebook",
    "footer.social.instagram": "Instagram",
    "footer.social.linkedin": "LinkedIn",
    "footer.copyright": "© {{year}} AarogyCare. Tous droits réservés.",

    // Features
    "features.support": "Support médical 24h/24",
    "features.support.detail":
      "Accès immédiat à des professionnels de santé jour et nuit",
    "features.visa": "Assistance visa",
    "features.visa.detail":
      "Taux de réussite élevé pour les demandes de visa médical",
    "features.interpreters": "Services linguistiques",
    "features.interpreters.detail":
      "Couvrant toutes les principales langues du monde",
    "features.transfers": "Transferts aéroport",
    "features.transfers.detail":
      "Temps de réponse rapide pour tous les besoins de transport",
    "features.accommodation": "Solutions de logement",
    "features.accommodation.detail":
      "Large réseau de partenaires d'hébergement de confiance",
    "features.postCare": "Suivi post-traitement",
    "features.postCare.detail":
      "Couverture complète de vos besoins de rétablissement",
    "features.cta": "Commencez votre parcours de santé aujourd'hui",

    // Common
    "common.loading": "Chargement...",
    "common.readMore": "Lire la suite",
    "common.learnMore": "En savoir plus",
    "common.viewAll": "Voir tout",

    //steps
    "header.trusted": "Fiable pour plus de 50 000 patients dans le monde",
    "header.title1": "Comment nous",
    "header.title2": "Transformons des vies",
    "header.subtitle1":
      "Découvrez notre parcours de santé révolutionnaire en 8 étapes conçu pour offrir",
    "header.highlight1": "des soins médicaux de classe mondiale",
    "header.subtitle2": "avec",
    "header.highlight2": "une attention personnelle inégalée",
    "steps.firstContact.title": "Premier contact",
    "steps.firstContact.description":
      "Partagez les détails de votre cas avec nous via notre formulaire de contact sécurisé ou une consultation téléphonique personnalisée avec nos coordinateurs médicaux.",
    "steps.firstContact.time": "Immédiat",
    "steps.expertTeam.title": "Connexion avec l'équipe d'experts",
    "steps.expertTeam.description":
      "Notre équipe médicale spécialisée et nos coordinateurs patients vous contacteront pour comprendre vos besoins de santé uniques.",
    "steps.expertTeam.time": "Dans les 2 heures",
    "steps.assessment.title": "Évaluation médicale et financière",
    "steps.assessment.description":
      "Recevez une évaluation médicale complète et une répartition transparente des coûts sans frais cachés dans les 48 heures.",
    "steps.assessment.time": "48 heures",
    "steps.travel.title": "Coordination des voyages",
    "steps.travel.description":
      "Assistance complète aux voyages incluant la réservation de vols, le soutien pour le visa et l'organisation de l'hébergement adapté à vos besoins.",
    "steps.travel.time": "3-5 jours",
    "steps.reception.title": "Accueil VIP à l'aéroport",
    "steps.reception.description":
      "Notre équipe dédiée fournit un accueil premium à l'aéroport avec un transport confortable vers votre hébergement.",
    "steps.reception.time": "À l'arrivée",
    "steps.treatment.title": "Traitement de classe mondiale",
    "steps.treatment.description":
      "Recevez des soins médicaux exceptionnels de spécialistes certifiés à l'international utilisant des technologies et techniques de pointe.",
    "steps.treatment.time": "Comme prévu",
    "steps.return.title": "Retour en toute sécurité",
    "steps.return.description":
      "Départ confortable avec une documentation médicale complète, des ordonnances et des instructions détaillées pour les soins post-traitement.",
    "steps.return.time": "Après traitement",
    "steps.followup.title": "Partenariat de soins à vie",
    "steps.followup.description":
      "Suivi continu, contrôles de santé réguliers et support 24h/24 pour votre parcours de bien-être permanent.",
    "steps.followup.time": "En cours",
    "stats.satisfaction": "Satisfaction des patients",
    "stats.response": "Temps de réponse",
    "stats.success": "Taux de réussite",
    "stats.experience": "Années d'expérience",
    "cta.title": "Votre parcours de santé, notre promesse",
    "cta.subtitle":
      "Transformer des vies à travers des expériences de soins de santé exceptionnelles",
    "features.response": "Réponse garantie en 48h",
    "features.network": "Réseau de santé mondial",
    "features.plans": "Plans de soins personnalisés",

    //whatsappbuttons
    "home.buttons.knowMore": "En savoir plus",
    "home.buttons.bookNow": "Réserver maintenant",
    "home.buttons.whatsapp": "WhatsApp maintenant",
    "home.buttons.whatsapp_message":
      "Bonjour, je souhaite en savoir plus sur AarogyCare.",
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
      "Hai, saya butuh detail lebih lanjut tentang layanan AarogyCare.",
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
      "မင်္ဂလာပါ၊ AarogyCare ၏ဝန်ဆောင်မှုများအကြောင်း ပိုမိုသိရှိလိုပါသည်။",
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
