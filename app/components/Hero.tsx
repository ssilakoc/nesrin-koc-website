"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cream-100 flex items-center overflow-hidden"
    >
      {/* Subtle background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-sage-100/40 rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage-50/60 rounded-full blur-3xl -translate-x-1/3" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-sage-300 rounded-full opacity-40" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-sage-400 rounded-full opacity-30" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-sage-300 rounded-full opacity-25" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="order-2 md:order-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-semibold text-text-main leading-tight mb-4"
          >
            Psikolog
            <br />
            <span className="text-sage-500 italic">Nesrin Koç</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="font-inter text-lg text-text-muted leading-relaxed mb-3 max-w-md"
          >
            Çocuk, Ergen ve Yetişkinler için
            <br />
            <strong className="text-text-main font-medium">
              Online Psikolojik Danışmanlık
            </strong>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="font-inter text-sm text-text-light leading-relaxed mb-10 max-w-sm"
          >
            Güvenli, empatik ve bilimsel temelli bir yaklaşımla yanınızdayım.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-3.5 bg-sage-400 text-white font-inter font-medium text-sm rounded-full hover:bg-sage-500 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Randevu Al
            </button>
            <button
              onClick={scrollToAbout}
              className="px-8 py-3.5 border border-sage-300 text-text-main font-inter font-medium text-sm rounded-full hover:bg-sage-50 hover:border-sage-400 transition-all duration-200"
            >
              Hakkımda
            </button>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-3 bg-gradient-to-br from-sage-200 to-sage-100 rounded-[2.5rem] rotate-3 opacity-60" />
            <div className="absolute -inset-1.5 bg-cream-200 rounded-[2rem] -rotate-1" />

            <div className="relative w-72 h-96 md:w-80 md:h-[420px] lg:w-96 lg:h-[480px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/nesrinkoc.jpg.jpeg"
                alt="Psikolog Nesrin Koç"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-lg px-5 py-3.5 border border-sage-100"
            >
              <p className="font-inter text-xs text-text-muted mb-0.5">Uzmanlık</p>
              <p className="font-playfair text-sm font-semibold text-text-main">
                Çocuk & Ergen
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-sage-400 text-white rounded-2xl shadow-lg px-4 py-3"
            >
              <p className="font-inter text-xs opacity-80 mb-0.5">Mezuniyet</p>
              <p className="font-inter text-sm font-semibold">Onur Belgesi</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-sage-500 transition-colors group"
        aria-label="Aşağı kaydır"
      >
        <span className="font-inter text-xs tracking-widest uppercase">Keşfet</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: [0.45, 0, 0.55, 1] as const }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
