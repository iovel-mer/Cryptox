"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { getHeroMarketData, type MarketData } from "@/app/api/market/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Coins, BarChart3, Globe, TrendingUp, Users, DollarSign, Star, Zap, UserPlus } from "lucide-react"

export const Hero: React.FC = () => {
  const t = useTranslations("hero")
  const locale = useLocale();
  const [marketData, setMarketData] = useState<MarketData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await getHeroMarketData()
        if (result.success) {
          setMarketData(result.data as any)
          setError(null)
        } else {
          setError(result.error || "Failed to load data")
        }
      } catch {
        setError("Failed to load market data")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const result = await getHeroMarketData()
        if (result.success) {
          setMarketData(result.data as any)
        }
      } catch {}
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)

  return (
    <section className="min-h-screen bg-black relative text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">{t("nextGen")}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">{t("trading")}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t("platform")}</span>
              </h1>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-base sm:text-lg font-mono">
                <div className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-yellow-400/30 rounded-full">
                  <Zap size={18} className="text-yellow-400 animate-pulse" />
                  <span className="text-yellow-300">{t("specs.execution")}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-green-400/30 rounded-full">
                  <Globe size={18} className="text-green-400 animate-pulse" />
                  <span className="text-green-300">{t("specs.uptime")}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-purple-400/30 rounded-full">
                  <Star size={18} className="text-purple-400 animate-pulse" />
                  <span className="text-purple-300">{t("specs.grade")}</span>
                </div>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">{t("description")}</p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Link href={`/${locale}/login`}>
                <Button className="group relative overflow-hidden flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold bg-blue-500 text-white hover:scale-105 transition-all">
                  <UserPlus size={18} className="relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">{t("startTrading")}</span>
                </Button>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              <div className="relative bg-black/60 border border-green-400/30 rounded-3xl p-6 text-center">
                <DollarSign size={28} className="text-green-400 mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-2">$2.4T</div>
                <div className="text-xs text-green-300 uppercase font-bold">{t("stats.volume")}</div>
              </div>
              <div className="relative bg-black/60 border border-cyan-400/30 rounded-3xl p-6 text-center">
                <Users size={28} className="text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent mb-2">5.7M</div>
                <div className="text-xs text-cyan-300 uppercase font-bold">{t("stats.traders")}</div>
              </div>
              <div className="relative bg-black/60 border border-purple-400/30 rounded-3xl p-6 text-center">
                <TrendingUp size={28} className="text-purple-400 mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent mb-2">0.08%</div>
                <div className="text-xs text-purple-300 uppercase font-bold">{t("stats.fees")}</div>
              </div>
            </div>
          </div>

          {/* Market Terminal */}
          <div className="lg:col-span-5 w-full">
            <Card className="bg-black/80 border border-cyan-400/30 rounded-3xl overflow-hidden">
              <CardHeader className="p-4 sm:p-6 border-b border-cyan-400/20 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <BarChart3 size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">{t("marketFeed")}</h3>
                    <p className="text-xs sm:text-sm text-cyan-300">{t("Advanced")}</p>
                  </div>
                </div>
                <span className="text-green-400 text-xs sm:text-sm font-bold">{t("live")}</span>
              </CardHeader>

              <CardContent className="p-4 sm:p-6">
                {loading ? (
                  <p className="text-center text-gray-400">{t("loading.title")}</p>
                ) : error ? (
                  <p className="text-center text-red-400">{t("error.title")}</p>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    {marketData.map((coin) => (
                      <div key={coin.symbol} className="flex justify-between items-center bg-black/40 border border-cyan-400/20 rounded-2xl p-3 sm:p-5">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <img
                            src={`/assets/images/${coin.symbol.toLowerCase()}.png`}
                            alt={coin.symbol}
                            className="w-8 h-8 sm:w-10 sm:h-10"
                          />
                          <div>
                            <div className="text-lg sm:text-xl font-bold">{coin.symbol}</div>
                            <div className="text-xs text-cyan-300">{t("USD")}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg sm:text-2xl font-bold">{formatPrice(coin.price)}</div>
                          <div className={`text-xs font-bold ${coin.change >= 0 ? "text-green-300" : "text-red-300"}`}>
                            {coin.change >= 0 ? "+" : ""}
                            {coin.change.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>

              <CardFooter className="p-4 sm:p-6 border-t border-cyan-400/20 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-cyan-300">
                <span>{t("updated")}: {mounted ? new Date().toLocaleTimeString() : "--:--:--"}</span>
                <span>{t("volume")}: {marketData[0]?.volume || "$3.2T"}</span>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
