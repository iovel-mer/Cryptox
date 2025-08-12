'use client';

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  const t = useTranslations("terms");
  const locale = useLocale();

  return (
    <>
      <Header />
      <main className="min-h-screen container mx-auto bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pb-8 px-4 sm:px-6 lg:px-8 relative">
        
        {/* BACK TO HOME BUTTON */}
        <div className="pt-6 sm:pt-10">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 border border-white/60 bg-transparent text-white rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition hover:bg-white/10 hover:border-white shadow-sm"
          >
            <ArrowLeft size={16} className="sm:size-4" />
            <span>{t('backToHome')}</span>
          </Link>
        </div>

        {/* Background Grid */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none" />

        {/* Content Card */}
        <div className="relative z-10 max-w-5xl mx-auto w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg p-6 sm:p-10 lg:p-12 mt-6 sm:mt-10">
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
            {t("title")}
          </h1>

          {/* Sections */}
          <section className="space-y-8 sm:space-y-10 text-gray-200">
            {[...Array(8)].map((_, index) => (
              <div key={index}>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2">
                  {t(`section${index + 1}.title`)}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                  {t(`section${index + 1}.description`)}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
