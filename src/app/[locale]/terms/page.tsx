'use client';

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";

export default function TermsOfService() {
  const t = useTranslations("terms");
  const locale = useLocale()
  return (
    <>
      <Header />
      <main className="min-h-screen container mx-auto bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white   relative ">
         {/* BACK TO HOME BUTTON */}
        <div>
           <Link
  href={`/${locale}`}
  className=" m-15
    inline-flex items-center gap-2
    border-2 border-white
    bg-transparent
    text-white
    rounded-full
    px-4 py-2
    text-sm font-medium
    transition
    shadow-sm
  "
>
  <ArrowLeft size={18} />
  <span>{t('backToHome')}</span>
</Link>
        </div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg p-8 sm:p-12">
          
         

          {/* Title */}
          <h1 className="text-5xl font-bold mb-10  bg-clip-text text-white">
            {t("title")}
          </h1>

          {/* Sections */}
          <section className="space-y-10 text-sm sm:text-base leading-relaxed text-gray-200">
            {[...Array(8)].map((_, index) => (
              <div key={index}>
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  {t(`section${index + 1}.title`)}
                </h2>
                <p className="text-gray-300">
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
