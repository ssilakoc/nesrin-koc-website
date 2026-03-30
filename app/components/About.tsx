"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Heart, Globe, Star } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Akademik Başarı",
    text: "İstanbul Medipol Üniversitesi %100 İngilizce Psikoloji programından 3.47 GPA ile Onur Belgesi alarak mezun oldu.",
  },
  {
    icon: Heart,
    title: "Özel İlgi Alanı",
    text: "Çocuk ve ergenlerle çalışmaya duyduğu özel ilgi, klinik deneyim ve gönüllülük faaliyetleriyle pekişmiştir.",
  },
  {
    icon: Globe,
    title: "Erişilebilirlik",
    text: "Psikolojik desteğe erişimi sınırlı bireylere online hizmet yoluyla profesyonel destek sağlamayı misyon edinmiştir.",
  },
  {
    icon: Star,
    title: "Çok Boyutlu Eğitim",
    text: "BDT, Şema Terapi ve Gestalt ekollerini kapsayan mesleki gelişim programıyla kuramsal alt yapısını güçlendirmiştir.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="max-w-2xl mb-16">
            <span className="font-inter text-xs text-sage-500 font-medium tracking-widest uppercase mb-3 block">
              Hakkımda
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-text-main leading-tight mb-6">
              Empati ve Akademiyi
              <br />
              <span className="text-sage-500 italic">Harmanlayan</span> Bir Yaklaşım
            </h2>
            <div className="w-12 h-0.5 bg-sage-400" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Main Text */}
            <motion.div variants={itemVariants} className="space-y-5">
              <p className="font-inter text-base text-text-muted leading-relaxed">
                İstanbul Medipol Üniversitesi&apos;nin %100 İngilizce Psikoloji programını{" "}
                <strong className="text-text-main font-medium">
                  3.47 GPA ile Onur Belgesi
                </strong>{" "}
                alarak tamamladım. Eğitimim boyunca edindiğim akademik donanımı, gerçek dünya deneyimleriyle birleştirerek psikoloji alanına anlam taşıyan bir kariyer inşa etmeye çalışıyorum.
              </p>
              <p className="font-inter text-base text-text-muted leading-relaxed">
                Çocuk ve ergenlerle çalışmak, benim için yalnızca bir uzmanlık alanı değil; gerçek bir tutku. İstanbul Çapa Tıp Fakültesi&apos;ndeki klinik stajım, İZEV&apos;deki gönüllü çalışmalarım ve TEGV&apos;deki eğitmenlik deneyimlerim bu tutkunun izlerini taşımaktadır.
              </p>
              <p className="font-inter text-base text-text-muted leading-relaxed">
                Psikolojik desteğe coğrafi ya da ekonomik nedenlerle erişemeyen bireylere online danışmanlık yoluyla ulaşmak, çalışmalarımın temel motivasyonunu oluşturuyor.
              </p>

              <div className="pt-4 flex flex-wrap gap-2">
                {["BDT", "Şema Terapi", "Gestalt", "Çocuk Psikolojisi", "Ergen Psikolojisi"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-sage-100 text-sage-600 rounded-full text-xs font-inter font-medium"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Right: Highlight Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="p-5 bg-cream-100 rounded-2xl border border-cream-200 hover:border-sage-200 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 bg-sage-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sage-200 transition-colors">
                      <Icon size={17} className="text-sage-500" />
                    </div>
                    <h3 className="font-playfair text-base font-semibold text-text-main mb-2">
                      {item.title}
                    </h3>
                    <p className="font-inter text-xs text-text-muted leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
