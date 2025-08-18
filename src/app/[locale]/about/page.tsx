"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { Header } from "../components/Header/Header";

const AboutPage = () => {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <>
      <Header />

      <section className="min-h-screen  pt-20 mx-auto relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden text-white">
        {/* BACKGROUND GRID OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* BACK TO HOME BUTTON */}
        <div>
          <Link
            href={`/${locale}`}
            className="m-15 inline-flex items-center gap-2 border-2 border-white bg-transparent text-white rounded-full px-4 py-2 text-sm font-medium transition shadow-sm"
          >
            <ArrowLeft size={18} />
            <span>{t("backToHome")}</span>
          </Link>
        </div>

        {/* FULL WIDTH FLEX GRID */}
        <div className="flex flex-col lg:flex-row h-full w-full px-6 lg:px-20 py-24 gap-16 relative z-10">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="bg-gray-800 bg-opacity-40 rounded-xl p-8 shadow-lg border border-gray-700">
              <h1 className="text-4xl md:text-5xl font-light mb-4">{t("title")}</h1>
              <p className="text-gray-300 leading-relaxed max-w-xl">{t("subtitle")}</p>
            </div>

            <div className="bg-gray-800 bg-opacity-40 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-2xl font-light mb-3">{t("missionTitle")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("missionText")}</p>
            </div>

            <div className="bg-gray-800 bg-opacity-40 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-2xl font-light mb-3">{t("whoTitle")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("whoText")}</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="bg-gray-800 bg-opacity-40 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-2xl font-light mb-3">{t("whyTitle")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("whyText")}</p>
            </div>

            <div className="bg-gray-800 bg-opacity-40 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-2xl font-light mb-6">{t("guidesTitle")}</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-light mb-2">{t("value1Title")}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{t("value1Text")}</p>
                </div>

                <div>
                  <h3 className="text-lg font-light mb-2">{t("value2Title")}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{t("value2Text")}</p>
                </div>

                <div>
                  <h3 className="text-lg font-light mb-2">{t("value3Title")}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{t("value3Text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
