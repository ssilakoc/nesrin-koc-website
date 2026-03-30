"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Baby, Users, HeartHandshake, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Online Çocuk & Ergen Danışmanlığı",
    subtitle: "6 – 17 Yaş",
    description:
      "Çocuk ve ergenlerin duygusal zorluklar, okul stresi, sosyal kaygı, davranış sorunları ve kimlik gelişimi gibi konularda destek almasına yardımcı oluyorum. Oyun terapisi teknikleri ve yaşa uygun terapi yaklaşımlarıyla güvenli bir ortam sunuyorum.",
    features: ["Okul kaygısı", "Sosyal ilişki güçlükleri", "Duygusal düzenleme", "Davranış sorunları"],
    accent: "sage",
  },
  {
    icon: Users,
    title: "Online Yetişkin Danışmanlığı",
    subtitle: "18+ Yaş",
    description:
      "Kaygı, depresyon, özgüven sorunları, ilişki dinamikleri ve yaşam dönüm noktaları gibi yetişkinlere özgü konularda Bilişsel Davranışçı Terapi, Şema Terapi ve Gestalt yaklaşımlarıyla bireyselleştirilmiş destek sunuyorum.",
    features: ["Kaygı & Depresyon", "Öz-saygı çalışması", "İlişki sorunları", "Kişisel gelişim"],
    accent: "sage",
  },
  {
    icon: HeartHandshake,
    title: "Ebeveyn Danışmanlığı",
    subtitle: "Aileler İçin",
    description:
      "Çocuklarıyla sağlıklı iletişim kurmak isteyen ebeveynlere çocuk gelişimi, sınır koyma, duygusal zeka ve ebeveyn-çocuk ilişkisi konularında rehberlik ediyorum. Güçlü aile bağları için pratik araçlar sunuyorum.",
    features: ["Ebeveyn-çocuk iletişimi", "Sınır koyma", "Çocuk gelişimi", "Aile dinamikleri"],
    accent: "sage",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-inter text-xs text-sage-500 font-medium tracking-widest uppercase mb-3 block">
              Hizmetlerim
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-text-main leading-tight mb-4">
              Size Nasıl{" "}
              <span className="text-sage-500 italic">Yardımcı</span> Olabilirim?
            </h2>
            <p className="font-inter text-text-muted text-sm leading-relaxed">
              Tüm seanslar online olarak yürütülmektedir. Nerede olursanız olun, güvenli bir bağlantıyla destek alabilirsiniz.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  className="group relative bg-cream-100 rounded-3xl p-7 border border-cream-200 hover:border-sage-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-sage-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                  <div className="w-12 h-12 bg-sage-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-sage-200 transition-colors duration-200">
                    <Icon size={22} className="text-sage-500" />
                  </div>

                  <span className="font-inter text-xs text-sage-500 font-medium mb-2 block">
                    {service.subtitle}
                  </span>

                  <h3 className="font-playfair text-xl font-semibold text-text-main mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="font-inter text-sm text-text-muted leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-sage-400 rounded-full flex-shrink-0" />
                        <span className="font-inter text-xs text-text-muted">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 text-sage-500 font-inter text-sm font-medium hover:text-sage-600 transition-colors group/btn"
                  >
                    Randevu Al
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            variants={cardVariants}
            className="bg-sage-400 rounded-3xl p-8 md:p-10 text-center text-white"
          >
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-3">
              Hangi Konuda Destek İstiyorsunuz?
            </h3>
            <p className="font-inter text-sm opacity-85 mb-6 max-w-md mx-auto leading-relaxed">
              İlk adımı atmak için benimle iletişime geçin. Ücretsiz ön görüşme ile ihtiyaçlarınızı birlikte değerlendirelim.
            </p>
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-white text-sage-500 font-inter font-medium text-sm rounded-full hover:bg-cream-100 transition-colors duration-200 shadow-md"
            >
              İletişime Geç
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
