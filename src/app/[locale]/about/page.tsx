"use client";

import Link from "next/link";
import { Header } from "../components/Header/Header";
import { useTranslations } from "next-intl";
import { Home, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const t = useTranslations("about");

  return (
    <>
      <Header />
      <section className="min-h-screen relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pt-0 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* HERO SECTION */}
        <section className="py-10 md:py-10 text-center px-6 md:px-12 max-w-3xl mx-auto relative z-10">
          <div className="flex justify-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              <Home className="h-4 w-4 mr-2" />
              {t("backToHome")}
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            {t("subtitle")}
          </p>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="max-w-2xl mx-auto px-6 md:px-12 pb-32 relative z-10 space-y-16">
          <div className="text-center">
            <h2 className="text-2xl font-light text-white mb-6">
              {t("missionTitle")}
            </h2>
            <p className="text-gray-400 leading-relaxed">{t("missionText")}</p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-light text-white mb-6">
              {t("whoTitle")}
            </h2>
            <p className="text-gray-400 leading-relaxed">{t("whoText")}</p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-light text-white mb-6">
              {t("whyTitle")}
            </h2>
            <p className="text-gray-400 leading-relaxed">{t("whyText")}</p>
          </div>

          <div className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-light text-white mb-12 text-center">
              {t("guidesTitle")}
            </h2>
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-lg font-light text-white mb-3">
                  {t("value1Title")}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t("value1Text")}</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-light text-white mb-3">
                  {t("value2Title")}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t("value2Text")}</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-light text-white mb-3">
                  {t("value3Title")}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t("value3Text")}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutPage;