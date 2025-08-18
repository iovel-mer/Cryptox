"use client";

import { useLocale, useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Clock,
  User,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const Page = () => {
  const t = useTranslations("blog");
  const locale = useLocale();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen  mx-auto py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
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

        {/* Decorative Background Effects */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-20 right-4 sm:right-16 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-4 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-gradient-to-br from-blue-500/25 to-cyan-500/25 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-orange-500/35 to-red-500/35 rounded-full blur-2xl animate-ping" style={{ animationDuration: '3s' }}></div>

        {/* Main Content */}
        <main className="relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              {t("title")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mx-auto leading-relaxed max-w-3xl">
              {t("subtitle")}
            </p>

            {/* Meta Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-full border border-violet-200/30">
                <Clock className="w-4 h-4" />
                <span>{t("meta.readTime")}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-full border border-violet-200/30">
                <User className="w-4 h-4" />
                <span>{t("meta.updated")}</span>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <section id="overview" className="mb-12">
            <Card className="bg-black backdrop-blur-sm border-violet-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:shadow-violet-500/10">
              <CardContent className="p-6 sm:p-8 text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl shadow-sm bg-violet-500/10">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-white m-0">
                    {t("overview.title")}
                  </h2>
                </div>
                <p className="text-white leading-relaxed m-0">
                  {t("overview.content")}
                </p>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;
