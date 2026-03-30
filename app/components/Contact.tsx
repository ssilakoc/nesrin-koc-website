"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Send, CheckCircle, Video } from "lucide-react";

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

type ContactItem = {
  icon: React.ComponentType;
  label: string;
  value: string;
  href: string;
};

const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    label: "E-posta",
    value: "nesrinkocc4@gmail.com",
    href: "mailto:nesrinkocc4@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 535 941 2453",
    href: "tel:+905359412453",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@nesrinkocc",
    href: "https://www.instagram.com/nesrinkocc",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "Nesrin Koç",
    href: "https://www.linkedin.com/in/nesrinko%C3%A7/",
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

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission — connect to a real backend or Formspree in production
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-xl mx-auto mb-16">
            <span className="font-inter text-xs text-sage-500 font-medium tracking-widest uppercase mb-3 block">
              İletişim
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-text-main leading-tight mb-4">
              Benimle{" "}
              <span className="text-sage-500 italic">İletişime Geçin</span>
            </h2>
            <div className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-sage-400 text-white rounded-full">
              <Video size={14} />
              <span className="font-inter text-sm font-medium">
                Sadece Online Hizmet Verilmektedir
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="font-playfair text-xl font-semibold text-text-main mb-2">
                  İletişim Bilgileri
                </h3>
                <p className="font-inter text-sm text-text-muted leading-relaxed">
                  Sorularınız veya randevu talepleriniz için aşağıdaki kanallardan ulaşabilirsiniz.
                </p>
              </div>

              <div className="space-y-3">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-cream-200 hover:border-sage-200 hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="w-9 h-9 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sage-200 transition-colors text-sage-500">
                        <Icon />
                      </div>
                      <div>
                        <p className="font-inter text-xs text-text-light mb-0.5">{item.label}</p>
                        <p className="font-inter text-sm text-text-main font-medium">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Note */}
              <div className="bg-sage-50 border border-sage-200 rounded-2xl p-5">
                <p className="font-inter text-xs text-sage-600 leading-relaxed">
                  <strong className="font-semibold">Bilgi:</strong> Tüm seans ve danışmanlık hizmetleri yalnızca online (video görüşme) ortamında yürütülmektedir. Yüz yüze görüşme yapılmamaktadır.
                </p>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-cream-200 shadow-sm">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle size={32} className="text-sage-500" />
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-text-main mb-3">
                      Mesajınız Alındı!
                    </h3>
                    <p className="font-inter text-sm text-text-muted max-w-sm leading-relaxed">
                      En kısa sürede sizinle iletişime geçeceğim. İlk adımı attığınız için teşekkür ederim.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-inter text-xs text-text-muted font-medium block mb-1.5">
                          Ad Soyad *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Adınız Soyadınız"
                          className="w-full px-4 py-3 bg-cream-100 border border-cream-200 rounded-xl font-inter text-sm text-text-main placeholder:text-text-light focus:outline-none focus:border-sage-300 focus:bg-white transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="font-inter text-xs text-text-muted font-medium block mb-1.5">
                          E-posta *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ornek@email.com"
                          className="w-full px-4 py-3 bg-cream-100 border border-cream-200 rounded-xl font-inter text-sm text-text-main placeholder:text-text-light focus:outline-none focus:border-sage-300 focus:bg-white transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-inter text-xs text-text-muted font-medium block mb-1.5">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+90 5XX XXX XX XX"
                          className="w-full px-4 py-3 bg-cream-100 border border-cream-200 rounded-xl font-inter text-sm text-text-main placeholder:text-text-light focus:outline-none focus:border-sage-300 focus:bg-white transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="font-inter text-xs text-text-muted font-medium block mb-1.5">
                          Hizmet *
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-cream-100 border border-cream-200 rounded-xl font-inter text-sm text-text-main focus:outline-none focus:border-sage-300 focus:bg-white transition-all duration-200 appearance-none"
                        >
                          <option value="" disabled>
                            Seçiniz...
                          </option>
                          <option>Çocuk & Ergen Danışmanlığı</option>
                          <option>Yetişkin Danışmanlığı</option>
                          <option>Ebeveyn Danışmanlığı</option>
                          <option>Diğer</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="font-inter text-xs text-text-muted font-medium block mb-1.5">
                        Mesajınız *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Destek almak istediğiniz konu hakkında kısaca bilgi verebilirsiniz..."
                        className="w-full px-4 py-3 bg-cream-100 border border-cream-200 rounded-xl font-inter text-sm text-text-main placeholder:text-text-light focus:outline-none focus:border-sage-300 focus:bg-white transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-sage-400 text-white font-inter font-medium text-sm rounded-xl hover:bg-sage-500 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8z"
                            />
                          </svg>
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Mesaj Gönder
                        </>
                      )}
                    </button>

                    <p className="font-inter text-xs text-text-light text-center">
                      Bilgileriniz yalnızca iletişim amacıyla kullanılır.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
