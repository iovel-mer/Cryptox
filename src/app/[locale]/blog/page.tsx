"use client";

import { useLocale, useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Zap,
  Shield,
  HelpCircle,
  Clock,
  User,
  Home,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const Page = () => {
  const t = useTranslations("blog");
  const locale = useLocale()

  const tableOfContents = [
    { id: "overview", title: t("overview.title"), icon: BookOpen },
    { id: "quickStart", title: t("quickStart.title"), icon: Zap },
    { id: "authentication", title: t("authentication.title"), icon: Shield },
    { id: "faq", title: t("faq.title"), icon: HelpCircle },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
    <div className="min-h-screen container mx-auto py-16  bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
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
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-20 right-16 w-48 h-48 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/25 to-cyan-500/25 rounded-full blur-3xl animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-orange-500/35 to-red-500/35 rounded-full blur-2xl animate-ping" style={{animationDuration: '3s'}}></div>

      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-6">
              {t("title")}
            </h1>
            <p className="text-xl text-blac max-w- text-white mx-auto leading-relaxed">
              {t("subtitle")}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-blac">
              <div className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-full border border-violet-200/30">
                <Clock className="w-4 h-4 text-blac" />
                <span>{t("meta.readTime")}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-full border border-violet-200/30">
                <User className="w-4 h-4 text-blac" />
                <span>{t("meta.updated")}</span>
              </div>
            </div>
          </div>

          
           

            <div className="lg:col-span-3">
              <article className="prose prose-lg prose-gray max-w-none">
                
                <section id="overview" className="mb-12 ">
                  <Card className="bg-black  backdrop-blur-sm border-violet-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:shadow-violet-500/10">
                    <CardContent className="p-8 text-white">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 b rounded-xl shadow-sm">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-semibold text-white m-0">
                          {t("overview.title")}
                        </h2>
                      </div>
                      <p className="text-white leading-relaxed m-0">
                        {t("overview.content")}
                      </p>
                    </CardContent>
                  </Card>
                </section>
              </article>
            </div>
          
        
      </main>
    </div>
    </>
  );
};

export default Page;