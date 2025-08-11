"use client";

import { useLocale, useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import Link from "next/link";
import { ArrowRight, Home, BookOpen, Shield, TrendingUp, Lightbulb, ArrowLeft } from "lucide-react";

const page = () => {
  const t = useTranslations("docs");
  const locale = useLocale()


  return (
    <>
      <Header />
      <main className="min-h-screen relative container mx-auto bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-12 px-6 md:px-20 overflow-hidden">
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
        

          <div className="max-w-5xl mx-auto mt-8 space-y-12">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-7xl font-black mb-6 text-white">
                {t("title")}
              </h1>
            </div>

            {/* SECTION TEMPLATE */}
            {[
              
              {
                icon: <Shield className="w-6 h-6 text-white" />,
                title: t("blockchain.title"),
                text: t("blockchain.text"),
                colors: "from-blue-500 to-purple-600",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                title: t("popular.title"),
                colors: "from-orange-500 to-pink-600",
                content: (
                  <ul className="space-y-4 text-gray-300 text-lg font-medium">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-3"></div>
                      <span><strong className="text-orange-300">Bitcoin (BTC):</strong> {t("popular.bitcoin")}</span>
                    </li>
                    
                   
                  </ul>
                ),
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                title: t("buy.title"),
                colors: "from-cyan-500 to-emerald-600",
                content: (
                  <ol className="space-y-4 text-gray-300 text-lg font-medium">
                    {[1, 2].map((step) => (
                      <li key={step} className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-3"></div>
                        <span>{t(`buy.step${step}`)}</span>
                      </li>
                    ))}
                  </ol>
                ),
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-white" />,
                title: t("tips.title"),
                colors: "from-violet-500 to-fuchsia-600",
                content: (
                  <ul className="space-y-4 text-gray-300 text-lg font-medium">
                    {[1, 2].map((tip) => (
                      <li key={tip} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-3"></div>
                        <span>{t(`tips.tip${tip}`)}</span>
                      </li>
                    ))}
                  </ul>
                ),
              },
            ].map(({ icon, title, text, content, colors }, i) => (
              <section
                key={i}
                className="relative bg-gradient-to-br from-gray-800/60 to-slate-900/70 backdrop-blur-xl border border-gray-600/40 rounded-3xl p-8 shadow-2xl overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${colors} rounded-xl flex items-center justify-center shadow-lg`}>
                      {icon}
                    </div>
                    <h2 className="text-3xl font-black mb-0 text-white">{title}</h2>
                  </div>
                  {text && <p className="text-gray-300 text-lg leading-relaxed font-medium">{text}</p>}
                  {content}
                </div>
              </section>
            ))}
          </div>
        
      </main>
    </>
  );
};

export default page;
