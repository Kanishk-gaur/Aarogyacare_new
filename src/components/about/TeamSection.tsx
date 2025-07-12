"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

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
];

export default function TeamSection() {
  const { t } = useLanguage();

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} t={t} />
          ))}
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
      key={index}
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
