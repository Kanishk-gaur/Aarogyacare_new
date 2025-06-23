"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

const hospitals = [
  {
    id: 1,
    nameKey: "home.hospitals.max.name",
    weblink: "https://www.maxhealthcare.in",
    descriptionKey: "home.hospitals.max.description",
    image: "/images/max-hospital.jpg",
    rating: 4.90,
    specialties: ["IVF", "Cosmetic Surgery", "Spine Care"],
    gradient: "from-purple-500 to-violet-600",
  },
  {
    id: 2,
    nameKey: "home.hospitals.artemis.name",
    weblink: "https://www.artemishospitals.com",
    descriptionKey: "home.hospitals.artemis.description",
    image: "/images/artemis.jpg",
    rating: 4.65,
    specialties: ["Bariatric Surgery", "Joint Replacement", "Eye Care"],
    gradient: "from-blue-500 to-yellow-600",
  },
  {
    id: 3,
    nameKey: "home.hospitals.apollo.name",
    weblink: "https://www.apollohospitals.com",
    descriptionKey: "home.hospitals.apollo.description",
    image: "/images/Apoolo.jpg",
    rating: 4.75,
    specialties: ["Cardiology", "Oncology", "Neurosurgery"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: 4,
    nameKey: "home.hospitals.fortis.name",
    weblink: "https://www.fortishospitals.com",
    descriptionKey: "home.hospitals.fortis.description",
    image: "/images/Forties2.jpg",
    rating: 4.7,
    specialties: ["Transplants", "Orthopedics", "Gastroenterology"],
    gradient: "from-blue-500 to-green-600",
  },
  {
    id: 5,
    nameKey: "home.hospitals.medanta.name",
    weblink: "https://www.medanta.org",
    descriptionKey: "home.hospitals.medanta.description",
    image: "/images/Medanta2.jpg",
    rating: 4.75,
    specialties: ["Robotic Surgery", "Cancer Care", "Pediatrics"],
    gradient: "from-blue-500 to-pink-600",
  },
];
function chunkArray<T>(array: T[], size: number): T[][] {
  const chunked: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}


export default function PopularHospitalsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Award className="w-4 h-4 mr-2" />
            {t("home.hospitals.badge")}
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-8">
            {t("home.hospitals.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t("home.hospitals.subtitle")}
          </p>
        </motion.div>

        {chunkArray(hospitals, 3).map((row, rowIndex) => (
  <div
    key={rowIndex}
    className={`flex flex-wrap justify-center gap-8 mb-8 ${
      row.length < 3 ? "justify-center" : "justify-start lg:justify-between"
    }`}
  >
    {row.map((hospital, index) => (
      <motion.div
        key={hospital.id}
        initial={{ opacity: 0, y: 50, rotateY: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -15, rotateY: 5 }}
        className="group w-full md:w-[47%] lg:w-[30%]"
        style={{ perspective: "1000px" }}
      >
              <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full">
                <div className="relative overflow-hidden h-64">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br  opacity-20`}
                  ></div>
                  <Image
                    src={hospital.image || "/placeholder.svg"}
                    alt={t(hospital.nameKey)}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-bold text-gray-800">
                      {hospital.rating}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 relative">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br  opacity-5 rounded-full blur-2xl`}
                  ></div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent">
                      <a
                        href={hospital.weblink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {t(hospital.nameKey)}
                      </a>
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {t(hospital.descriptionKey)}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>{t("home.hospitals.excellenceRating")}</span>
                      <span className="font-semibold">
                        {Math.round(hospital.rating * 20)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${hospital.rating * 20}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`h-2 bg-gradient-to-r ${hospital.gradient} rounded-full shadow-sm`}
                      ></motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ))}
      </div>
    </section>
  );
}