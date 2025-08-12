'use client';


import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ShieldCheck,
  Lock,
  Banknote,
  Gem,
  Lightbulb,
  FileText,
  Fingerprint,
  Scale,
  Landmark,
  Wallet,
  ClipboardList,
  Eye,
  ArrowRight,
  CheckCircle,
  Home,
  ArrowLeft,
} from 'lucide-react';
import { Header } from '../components/Header/Header';
import { useLocale, useTranslations } from 'next-intl';

export default function SecurityPage() {
  const t = useTranslations('security');  
  const locale = useLocale()

  return (
    <>
      <Header />
      <main className='min-h-screen pt-20 container mx-auto bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden'>
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

     

        <div className='relative z-10'>
          <section className='container mx-auto text-center pt-20 pb-16 px-4 md:px-6'>
            <div className='animate-fade-in-up'>

              <div className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8'>
                <ShieldCheck className='h-5 w-5 text-amber-400 mr-2' />
                <span className='text-sm font-medium'>{t('enhancedTrustVerification')}</span>
              </div>

              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white bg-clip-text  leading-tight'>
                {t('yourDigitalSafetyReimagined')}
              </h1>

              <p className='text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8'>
                {t('securityDescription')}
              </p>

              <div className='flex flex-wrap justify-center gap-6 text-sm text-slate-400'>
                <div className='flex items-center'>
                  <CheckCircle className='h-4 w-4 text-teal-400 mr-2' />
                  {t('endToEndEncryption')}
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='h-4 w-4 text-teal-400 mr-2' />
                  {t('multiLayerAccess')}
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='h-4 w-4 text-teal-400 mr-2' />
                  {t('realTimeAudits')}
                </div>
              </div>
            </div>
          </section>

          {/* Cards section remains structurally the same */}
          <section className='container mx-auto px-4 md:px-6 mb-20'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

              {/* Your cards here */}

            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </>
  );
}
