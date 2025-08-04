"use client"

import React from "react"
import { useLocale, useTranslations } from "next-intl"
import { CheckCircle, TrendingUp, Shield, Zap, DollarSign, HeadphonesIcon, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Trading: React.FC = () => {
  const t = useTranslations("trade")
  const locale = useLocale();

  const featureIcons = [
    TrendingUp,
    Shield,
    Zap,
    DollarSign,
    HeadphonesIcon,
    Globe
  ]

  const features = [
    {
      icon: featureIcons[0],
      title: t("features.analytics.title"),
      description: t("features.analytics.description"),
      gradient: "from-amber-400 to-yellow-500",
      glow: "shadow-amber-500/50"
    },
    {
      icon: featureIcons[1],
      title: t("features.security.title"),
      description: t("features.security.description"),
      gradient: "from-green-400 to-emerald-500",
      glow: "shadow-green-500/50"
    },
    {
      icon: featureIcons[2],
      title: t("features.speed.title"),
      description: t("features.speed.description"),
      gradient: "from-red-400 to-orange-500",
      glow: "shadow-red-500/50"
    },
    {
      icon: featureIcons[3],
      title: t("features.fees.title"),
      description: t("features.fees.description"),
      gradient: "from-purple-400 to-violet-500",
      glow: "shadow-purple-500/50"
    },
    {
      icon: featureIcons[4],
      title: t("features.support.title"),
      description: t("features.support.description"),
      gradient: "from-pink-400 to-rose-500",
      glow: "shadow-pink-500/50"
    },
    {
      icon: featureIcons[5],
      title: t("features.access.title"),
      description: t("features.access.description"),
      gradient: "from-cyan-400 to-blue-500",
      glow: "shadow-cyan-500/50"
    }
  ]

  return (
    <section className="relative py-16 px-4 mx-auto overflow-hidden min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Matrix-style background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-gradient-conic from-amber-500 via-red-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-spin" style={{animationDuration: '15s'}}></div>
      <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-gradient-conic from-green-500 via-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-spin" style={{animationDuration: '18s', animationDirection: 'reverse'}}></div>
      
      {/* Floating Particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-32 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 right-40 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60" style={{animationDelay: '3s'}}></div>
      
      <div className="text-center relative z-10 max-w-6xl mx-auto">
        {/* Gaming-style Badge */}
        <div className="mb-8 inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-red-500/20 backdrop-blur-lg border-2 border-amber-400/40 px-6 py-3 text-sm font-bold uppercase tracking-widest text-amber-300 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105">
          <CheckCircle className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="text-amber-100">{t("badge")}</span>
        </div>

        {/* Gaming-inspired Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 uppercase tracking-wider">
          <span className="text-white font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            {t("title.line1")}
          </span>
          <br />
          <span className="bg-gradient-to-r from-amber-400 via-red-400 to-purple-400 bg-clip-text text-transparent font-black drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] animate-pulse">
            {t("title.line2")}
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
          {t("description")}
        </p>

        {/* Gaming Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl p-6 border-2 border-gray-700/50 hover:border-amber-400/70 transition-all duration-500 hover:scale-105 overflow-hidden transform hover:-rotate-1"
              >
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg ${feature.glow} group-hover:shadow-2xl group-hover:${feature.glow} transition-all duration-300 transform group-hover:rotate-12`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-bold mb-3 text-amber-100 group-hover:text-white transition-colors font-mono uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Gaming Corner Effects */}
                <div className="absolute top-1 left-1 w-4 h-4 border-l-2 border-t-2 border-amber-400 opacity-60 group-hover:opacity-100 transition-opacity transform group-hover:scale-110" />
                <div className="absolute top-1 right-1 w-4 h-4 border-r-2 border-t-2 border-amber-400 opacity-60 group-hover:opacity-100 transition-opacity transform group-hover:scale-110" />
                <div className="absolute bottom-1 left-1 w-4 h-4 border-l-2 border-b-2 border-amber-400 opacity-60 group-hover:opacity-100 transition-opacity transform group-hover:scale-110" />
                <div className="absolute bottom-1 right-1 w-4 h-4 border-r-2 border-b-2 border-amber-400 opacity-60 group-hover:opacity-100 transition-opacity transform group-hover:scale-110" />
                
                {/* Level indicator */}
                <div className="absolute top-2 right-2 text-xs font-mono text-amber-400 opacity-50 group-hover:opacity-100 transition-opacity">
                  LVL {index + 1}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}