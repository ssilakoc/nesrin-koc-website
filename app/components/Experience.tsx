"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, Heart, BookOpen } from "lucide-react";

type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  tags?: string[];
};

type Category = {
  id: string;
  label: string;
  color: string;
  iconBg: string;
  icon: React.ElementType;
  items: ExperienceItem[];
};

const categories: Category[] = [
  {
    id: "clinical",
    label: "Klinik Deneyim",
    color: "text-rose-500",
    iconBg: "bg-rose-50",
    icon: Stethoscope,
    items: [
      {
        period: "2024",
        title: "Çocuk ve Ergen Psikiyatrisi Stajyeri",
        org: "İstanbul Çapa Tıp Fakültesi",
        description:
          "Çocuk ve ergen psikiyatrisi biriminde klinik gözlem ve vaka analizi gerçekleştirdim. Ruh sağlığı uzmanlarıyla multidisipliner ekip çalışmasına katıldım.",
        tags: ["Klinik Gözlem", "Vaka Analizi", "Psikiyatri"],
      },
    ],
  },
  {
    id: "volunteer",
    label: "Toplumsal Fayda",
    color: "text-sage-500",
    iconBg: "bg-sage-50",
    icon: Heart,
    items: [
      {
        period: "2023 – 2024",
        title: "Gönüllü Psikolog",
        org: "İZEV (İzmir Engelli Vakfı)",
        description:
          "Zihinsel engelli bireylerle bireysel ve grup etkinlikleri düzenledim. Sosyal uyum ve gelişim odaklı destek programlarına aktif olarak katıldım.",
        tags: ["Engelli Bireyleri", "Sosyal Hizmet"],
      },
      {
        period: "2022 – 2023",
        title: "Gönüllü Eğitmen",
        org: "TEGV (Türkiye Eğitim Gönüllüleri Vakfı)",
        description:
          "Dezavantajlı çocuklara yönelik eğitim etkinliklerinde gönüllü eğitmen olarak görev aldım; eğitime erişim konusundaki toplumsal sorumluluğumu pekiştirdim.",
        tags: ["Çocuk Eğitimi", "Gönüllülük"],
      },
    ],
  },
  {
    id: "training",
    label: "Mesleki Eğitimler",
    color: "text-amber-600",
    iconBg: "bg-amber-50",
    icon: BookOpen,
    items: [
      {
        period: "2023 – Devam",
        title: "Klinik Psikoloji Mesleki Gelişim Programı",
        org: "Korto Psikoloji",
        description:
          "Bilişsel Davranışçı Terapi (BDT), Şema Terapi ve Gestalt Terapisi ekollerini kapsayan kapsamlı mesleki gelişim programına devam etmekteyim.",
        tags: ["BDT", "Şema Terapi", "Gestalt"],
      },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="max-w-xl mb-16">
            <span className="font-inter text-xs text-sage-500 font-medium tracking-widest uppercase mb-3 block">
              Deneyim & Eğitim
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-text-main leading-tight mb-6">
              Deneyimlerim &{" "}
              <span className="text-sage-500 italic">Eğitimlerim</span>
            </h2>
            <div className="w-12 h-0.5 bg-sage-400" />
          </motion.div>

          {/* Categories */}
          <div className="space-y-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.div key={cat.id} variants={itemVariants}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-9 h-9 ${cat.iconBg} rounded-xl flex items-center justify-center`}>
                      <Icon size={17} className={cat.color} />
                    </div>
                    <h3 className={`font-playfair text-xl font-semibold ${cat.color}`}>
                      {cat.label}
                    </h3>
                    <div className="flex-1 h-px bg-cream-300" />
                  </div>

                  {/* Items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-12">
                    {cat.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="bg-white rounded-2xl p-6 border border-cream-200 hover:border-sage-200 hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-playfair text-base font-semibold text-text-main mb-1">
                              {item.title}
                            </h4>
                            <p className="font-inter text-sm text-sage-500 font-medium">
                              {item.org}
                            </p>
                          </div>
                          <span className="font-inter text-xs text-text-light bg-cream-200 px-3 py-1 rounded-full whitespace-nowrap ml-3 mt-0.5">
                            {item.period}
                          </span>
                        </div>
                        <p className="font-inter text-sm text-text-muted leading-relaxed mb-4">
                          {item.description}
                        </p>
                        {item.tags && (
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-0.5 bg-sage-50 text-sage-600 rounded-full text-xs font-inter"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
