"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  const t = useTranslations("Privacy");
  const locale = useLocale();

  return (
    <>
      <Header />
      <div className="min-h-screen  mx-auto bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        
        {/* BACK TO HOME BUTTON */}
        <div className="mt-6 sm:mt-10">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 border border-white/60 bg-transparent text-white rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition hover:bg-white/10 hover:border-white shadow-sm"
          >
            <ArrowLeft size={16} className="sm:size-4" />
            <span>{t("backToHome")}</span>
          </Link>
        </div>

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Subtle Background Orbs */}
        <div className="absolute top-20 right-20 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-slate-600/10 to-blue-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Main Content */}
        <div className="relative z-10 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto">

            {/* Header Section */}
            <div className="text-center mb-10 sm:mb-12">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent leading-tight">
                {t("title")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                {t("description")}
              </p>
              <div className="mt-6 inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium">
                {t("lastUpdated")}
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-6 sm:space-y-8">
              {Array.from({ length: 2 }, (_, i) => {
                const section = i + 1;
                return (
                  <div
                    key={section}
                    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                  >
                    {/* Section Number Badge */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-sm sm:text-lg shadow-lg">
                      {section}
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>

                    <div className="relative z-10">
                      <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white group-hover:text-blue-200 transition-colors duration-300">
                        {t(`section${section}.title`)}
                      </h2>

                      <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-slate-200 transition-colors duration-300">
                        {t(`section${section}.description`)}
                      </p>

                      {t.raw(`section${section}.list`)?.length > 0 && (
                        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                          <ul className="space-y-3">
                            {t.raw(`section${section}.list`).map(
                              (item: string, idx: number) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 text-slate-300"
                                >
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-xs sm:text-sm md:text-base leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>
    </>
  );
};


