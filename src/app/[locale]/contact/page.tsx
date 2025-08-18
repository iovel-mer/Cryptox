"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Users, Clock, ArrowLeft } from "lucide-react";
import { Header } from "../components/Header/Header";

export default function ContactPage() {
  const t = useTranslations("contact");
  const router = useRouter();
  const locale = useLocale();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const valid =
      name.trim().length > 0 &&
      emailRegex.test(email) &&
      subject.trim().length > 0 &&
      message.trim().length > 0;
    setIsFormValid(valid);
  }, [name, email, subject, message]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  const contactOptions = [
    {
      icon: Mail,
      title: t("general.title"),
      description: t("general.description"),
      hours: t("general.hours"),
      gradient: "from-rose-400 via-pink-500 to-purple-600",
      bgGlow: "bg-gradient-to-br from-rose-500/20 to-purple-500/20",
    },
    {
      icon: Phone,
      title: t("technical.title"),
      description: t("technical.description"),
      hours: t("technical.hours"),
      gradient: "from-blue-400 via-cyan-500 to-teal-600",
      bgGlow: "bg-gradient-to-br from-blue-500/20 to-teal-500/20",
    },
    {
      icon: Users,
      title: t("partnership.title"),
      description: t("partnership.description"),
      hours: t("partnership.hours"),
      gradient: "from-amber-400 via-orange-500 to-red-600",
      bgGlow: "bg-gradient-to-br from-amber-500/20 to-red-500/20",
    },
  ];

  return (
    <>
    <Header />
<div className="min-h-screen  mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
  {/* Back to Home */}
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

  {/* Floating Elements */}
  <div className="absolute top-10 sm:top-20 right-6 sm:right-16 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
  <div
    className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-500/25 to-cyan-500/25 rounded-full blur-3xl animate-bounce"
    style={{ animationDuration: "4s" }}
  />
  <div
    className="absolute top-1/2 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-500/35 to-red-500/35 rounded-full blur-2xl animate-ping"
    style={{ animationDuration: "3s" }}
  />

  {/* Title & Subtitle */}
  <div className="max-w-5xl mx-auto relative z-10 px-2 sm:px-0">
    <div className="text-center mb-12 sm:mb-20">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-pink-300 via-purple-200 to-blue-300 bg-clip-text text-transparent leading-tight">
        {t("title")}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
        {t("subtitle")}
      </p>
    </div>
  </div>

  {/* Content Grid */}
  <div className="max-w-6xl mx-auto relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-20">
      {/* Contact Options */}
      <div className="space-y-6 sm:space-y-8">
        {contactOptions.map((item, index) => (
          <Card
            key={index}
            className="group relative bg-gradient-to-br from-gray-800/60 to-slate-900/70 backdrop-blur-xl border border-gray-600/40 hover:border-gray-400/60 transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl"
          >
            <div
              className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl rounded-2xl sm:rounded-3xl`}
            />
            <div
              className={`absolute inset-0 ${item.bgGlow} opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}
            />

            <CardHeader className="relative z-10 p-5 sm:p-6">
              <CardTitle className="flex items-center gap-4 text-lg sm:text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                {item.title}
              </CardTitle>
              <CardDescription className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-lg font-medium">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-3 text-sm sm:text-base p-5 sm:p-6">
              <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300 flex items-center gap-3 font-medium">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" /> {item.hours}
              </p>
            </CardContent>
            <div
              className={`absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center rounded-b-2xl sm:rounded-b-3xl`}
            />
          </Card>
        ))}
      </div>

      {/* Contact Form */}
      <Card className="h-fit shadow-xl sm:shadow-2xl border border-gray-600/40 bg-gradient-to-br from-gray-800/60 to-slate-900/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-500 blur-2xl rounded-2xl sm:rounded-3xl" />

        <CardHeader className="relative z-10 p-5 sm:p-6 pb-4 sm:pb-6">
          <CardTitle className="text-2xl sm:text-3xl text-white font-black bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text">
            {t("form.title")}
          </CardTitle>
          <CardDescription className="text-gray-300 text-sm sm:text-lg font-medium">
            {t("form.description")}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative z-10 p-5 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Name */}
            <div className="grid gap-2 sm:gap-3">
              <Label htmlFor="name" className="text-white font-semibold text-sm sm:text-base">
                {t("form.name")}
              </Label>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="text-white bg-gray-700/50 border-gray-600/50 focus:border-pink-400/50 rounded-lg sm:rounded-xl h-10 sm:h-12 text-sm sm:text-base backdrop-blur-sm"
              />
            </div>

            {/* Email */}
            <div className="grid gap-2 sm:gap-3">
              <Label htmlFor="email" className="text-white font-semibold text-sm sm:text-base">
                {t("form.email")}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="text-white bg-gray-700/50 border-gray-600/50 focus:border-pink-400/50 rounded-lg sm:rounded-xl h-10 sm:h-12 text-sm sm:text-base backdrop-blur-sm"
              />
            </div>

            {/* Subject */}
            <div className="grid gap-2 sm:gap-3">
              <Label htmlFor="subject" className="text-white font-semibold text-sm sm:text-base">
                {t("form.subject")}
              </Label>
              <Select value={subject} onValueChange={(val) => setSubject(val)}>
                <SelectTrigger className="text-white bg-gray-700/50 border-gray-600/50 focus:border-pink-400/50 rounded-lg sm:rounded-xl h-10 sm:h-12 text-sm sm:text-base backdrop-blur-sm">
                  <SelectValue placeholder={t("form.placeholder")} />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600 rounded-xl">
                  <SelectItem value="general">{t("form.options.general")}</SelectItem>
                  <SelectItem value="technical">{t("form.options.technical")}</SelectItem>
                  <SelectItem value="billing">{t("form.options.billing")}</SelectItem>
                  <SelectItem value="partnership">{t("form.options.partnership")}</SelectItem>
                  <SelectItem value="other">{t("form.options.other")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="grid gap-2 sm:gap-3">
              <Label htmlFor="message" className="text-white font-semibold text-sm sm:text-base">
                {t("form.message")}
              </Label>
              <Textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("form.placeholderMessage")}
                className="min-h-[120px] sm:min-h-[140px] text-white bg-gray-700/50 border-gray-600/50 focus:border-pink-400/50 rounded-lg sm:rounded-xl text-sm sm:text-base backdrop-blur-sm resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={!isFormValid}
              className="w-full text-base sm:text-lg font-bold bg-black text-white hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 rounded-lg sm:rounded-xl h-12 sm:h-14"
            >
              {t("form.button")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</div>

    </>
  );
};


