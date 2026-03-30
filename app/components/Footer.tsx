"use client";

import { Mail, Heart } from "lucide-react";

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#374151] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-1">Nesrin Koç</h3>
            <p className="font-inter text-xs text-gray-400">Psikolog | Online Psikolojik Danışmanlık</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:nesrinkocc4@gmail.com"
              className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center hover:bg-sage-400 transition-colors"
              aria-label="E-posta"
            >
              <Mail size={15} />
            </a>
            <a
              href="https://www.instagram.com/nesrinkocc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center hover:bg-sage-400 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/nesrinko%C3%A7/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center hover:bg-sage-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-gray-500">
            © {new Date().getFullYear()} Nesrin Koç. Tüm hakları saklıdır.
          </p>
          <p className="font-inter text-xs text-gray-500 flex items-center gap-1">
            Made with <Heart size={11} className="text-sage-400 mx-0.5" /> in Turkey
          </p>
        </div>
      </div>
    </footer>
  );
}
