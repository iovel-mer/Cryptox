"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Home, ArrowRight } from "lucide-react";
import { Header } from "../components/Header/Header";

const AboutPage = () => {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <>
      <Header />

      <section className="min-h-screen relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden text-white">
        {/* BACKGROUND GRID OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* BACK TO HOME BUTTON */}
        <div className="absolute top-6 m-6 left-6 z-20 ">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group text-sm font-medium text-white"
          >
            <Home className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            {t("backToHome")}
            <ArrowRight className="h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* FULL WIDTH FLEX GRID */}
        <div className="flex mt-20 flex-col lg:flex-row h-full w-full px-6 lg:px-20 py-24 gap-16 relative z-10">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-light mb-4">
                {t("title")}
              </h1>
              <p className="text-gray-400 leading-relaxed max-w-xl">
                {t("subtitle")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-3">
                {t("missionTitle")}
              </h2>
              <p className="text-gray-400 leading-relaxed">{t("missionText")}</p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-3">
                {t("whoTitle")}
              </h2>
              <p className="text-gray-400 leading-relaxed">{t("whoText")}</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <h2 className="text-2xl font-light mb-3">
                {t("whyTitle")}
              </h2>
              <p className="text-gray-400 leading-relaxed">{t("whyText")}</p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-6">{t("guidesTitle")}</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-light mb-2">
                    {t("value1Title")}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t("value1Text")}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-light mb-2">
                    {t("value2Title")}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t("value2Text")}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-light mb-2">
                    {t("value3Title")}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t("value3Text")}
                  </p>
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
