"use client";

import { motion} from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  nameKey: string;
  roleKey: string;
  image: string;
  descriptionKey: string;
}

const team: TeamMember[] = [
  {
    nameKey: "about.team.dr_meenu.name",
    roleKey: "about.team.dr_meenu.role",
    image: "/images/meenu.jpg",
    descriptionKey: "about.team.dr_meenu.description",
  },
  {
    nameKey: "about.team.dr_subhash.name",
    roleKey: "about.team.dr_subhash.role",
    image: "/images/dubhas.jpg",
    descriptionKey: "about.team.dr_subhash.description",
  },
  {
    nameKey: "about.team.dr_sanjeev.name",
    roleKey: "about.team.dr_sanjeev.role",
    image: "/images/sanjeev3.jpg",
    descriptionKey: "about.team.dr_sanjeev.description",
  },
  {
    nameKey: "about.team.vibhu.name",
    roleKey: "about.team.vibhu.role",
    image: "/images/vibhu.jpeg",
    descriptionKey: "about.team.vibhu.description",
  },
  {
    nameKey: "about.team.nivedita.name",
    roleKey: "about.team.nivedita.role",
    image: "/images/nivedita.jpg",
    descriptionKey: "about.team.nivedita.description",
  },
  {
    nameKey: "about.team.saxena.name",
    roleKey: "about.team.saxena.role",
    image: "/images/saxena.jpg",
    descriptionKey: "about.team.saxena.description",
  },
];

export default function TeamSection() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate total pages needed (3 doctors per page)
  const doctorsPerPage = 3;
  const totalPages = Math.ceil(team.length / doctorsPerPage);

  // Get the doctors for the current page
  const currentDoctors = team.slice(
    currentPage * doctorsPerPage,
    (currentPage + 1) * doctorsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("about.team.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("about.team.subtitle")}
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center">
          {/* Previous button - positioned to the left of the cards */}
          {team.length > doctorsPerPage && currentPage > 0 && (
            <button
              onClick={prevPage}
              className="absolute -left-4 md:-left-8 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-blue-50 text-blue-600 transition-all duration-300 hover:scale-110"
              aria-label="Previous page"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentDoctors.map((member, index) => (
              <TeamMemberCard
                key={`${currentPage}-${index}`}
                member={member}
                index={index}
                t={t}
              />
            ))}
          </div>

          {/* Next button - positioned to the right of the cards */}
          {team.length > doctorsPerPage && currentPage < totalPages - 1 && (
            <button
              onClick={nextPage}
              className="absolute -right-4 md:-right-8 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-blue-50 text-blue-600 transition-all duration-300 hover:scale-110"
              aria-label="Next page"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Page indicators at the bottom */}
          {team.length > doctorsPerPage && (
            <div className="absolute -bottom-10 left-0 right-0 flex justify-center space-x-2 mt-4">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentPage === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({
  member,
  index,
  t,
}: {
  member: TeamMember;
  index: number;
  t: (key: string) => string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
        <div className="relative overflow-hidden">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={t(member.nameKey)}
            width={300}
            height={500}
            className="w-full h-120 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {t(member.nameKey)}
          </h3>
          <p className="text-blue-600 font-medium mb-3">{t(member.roleKey)}</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {t(member.descriptionKey)}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
