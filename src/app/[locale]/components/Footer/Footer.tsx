'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Cpu, Feather, Rocket, Zap } from 'lucide-react';

export default function Footer() {
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  const routeMapping = {
    'About Us': `/${locale}/about`,
    Security: `/${locale}/security`,
    'Help Center': `/${locale}/help`,
    'Contact Us': `/${locale}/contact`,
    Blog: `/${locale}/blog`,
    Documentation: `/${locale}/documentation`,
    TermsOfService: `/${locale}/terms`,
    PrivacyPolicy: `/${locale}/privacy`,
    CookiePolicy: `/${locale}/cookie`,
  };

  const translationMapping = {
    'About Us': 'aboutUs',
    Security: 'security',
    'Help Center': 'helpCenter',
    'Contact Us': 'contactUs',
    Blog: 'blog',
    Documentation: 'documentation',
    TermsOfService: 'terms.title',
    PrivacyPolicy: 'privacy.title',
    CookiePolicy: 'cookies.title',
  };

  return (
    <div className='relative'>
      {/* Footer */}
      <footer className='py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-purple-900 relative text-white overflow-hidden'>
        {/* Matrix Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-conic from-green-400/20 via-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-spin" style={{animationDuration: '30s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-conic from-purple-400/15 via-pink-400/15 to-red-400/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
        
        {/* Neon Border Top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 animate-pulse shadow-[0_0_20px_rgba(0,255,255,0.5)]"></div>
        
        {/* Floating Data Points */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-80"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-80" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-80" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-80" style={{animationDelay: '1.5s'}}></div>

        <div className='container mx-auto relative z-10'>
          <div className='grid md:grid-cols-2 lg:grid-cols-6 gap-10 mb-8'>
            <div className='lg:col-span-2 md:col-span-2 px-8'>
              <div className='flex items-center space-x-3 mb-6'>
                <div className="relative group">
        
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-cyan-500 blur opacity-40 transition duration-300 group-hover:opacity-60"
                       style={{clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'}} />
                </div>
                 <div className='flex gap-4 items-center'>
                   <Feather size={24} className="text-white" />
                                   <span className='text-3xl font-black uppercase tracking-wider bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]'>
                    CryptoX
                                   </span>
                 </div>
              </div>
              <p className='text-green-100 mb-6 max-w-sm text-lg leading-relaxed font-mono'>
                {tFooter('description')}
              </p>
              
              {/* Circuit Lines */}
              <div className="space-y-1 opacity-50">
                <div className="h-px bg-gradient-to-r from-green-400 to-transparent w-3/4 shadow-[0_0_5px_rgba(0,255,0,0.5)]"></div>
                <div className="h-px bg-gradient-to-r from-cyan-400 to-transparent w-1/2 shadow-[0_0_5px_rgba(0,255,255,0.5)]"></div>
                <div className="h-px bg-gradient-to-r from-blue-400 to-transparent w-2/3 shadow-[0_0_5px_rgba(0,100,255,0.5)]"></div>
              </div>
            </div>

            {[
              {
                title: tFooter('company'),
                links: ['About Us', 'Security'],
                color: 'from-green-400 to-emerald-400',
                glow: 'shadow-green-400/30'
              },
              {
                title: tFooter('terms.title'),
                links: ['TermsOfService', 'PrivacyPolicy', 'CookiePolicy'],
                color: 'from-cyan-400 to-blue-400',
                glow: 'shadow-cyan-400/30'
              },
              {
                title: tFooter('support'),
                links: ['Help Center', 'Contact Us'],
                color: 'from-blue-400 to-purple-400',
                glow: 'shadow-blue-400/30'
              },
              {
                title: tFooter('resources'),
                links: ['Blog', 'Documentation'],
                color: 'from-purple-400 to-pink-400',
                glow: 'shadow-purple-400/30'
              },
            ].map((section, index) => (
              <div key={section.title} className='md:col-span-1'>
                <h3 className={`font-black mb-6 text-lg uppercase tracking-wider bg-gradient-to-r ${section.color} bg-clip-text text-transparent font-mono drop-shadow-lg`}>
                  {section.title}
                </h3>
                <ul className='space-y-4'>
                  {section.links.map(link => (
                    <li key={link} className="relative group">
                      <Link
                        href={routeMapping[link as keyof typeof routeMapping]}
                        className='text-gray-300 hover:text-white transition-all duration-300 cursor-pointer font-mono text-base relative inline-block group-hover:text-green-400'
                      >
                        <span className="relative z-10">
                          {tFooter(
                            translationMapping[
                              link as keyof typeof translationMapping
                            ]
                          )}
                        </span>
                        {/* Hover glow effect */}
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${section.color} w-0 group-hover:w-full transition-all duration-300 ${section.glow}`}></div>
                        {/* Side glow */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300`}></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Legal Info Section */}
          <div className='relative  p-8 mb-12 overflow-hidden shadow-2xl shadow-green-400/20'
               style={{clipPath: 'polygon(2% 0%, 98% 0%, 100% 15%, 98% 100%, 2% 100%, 0% 85%)'}}>
            
            {/* Corner Circuits */}
            {/* <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-green-400/70 shadow-[0_0_10px_rgba(0,255,0,0.5)]"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-cyan-400/70 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-blue-400/70 shadow-[0_0_10px_rgba(0,100,255,0.5)]"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-purple-400/70 shadow-[0_0_10px_rgba(128,0,255,0.5)]"></div>
             */}
            {/* Data Stream Animation */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
            
            <div className='flex flex-col w-full space-y-6'>
              <p className='text-green-100 font-mono text-base leading-relaxed'>{tFooter('company_info')}</p>
              <p className='text-cyan-100 font-mono text-base leading-relaxed'>{tFooter('risk_warning')}</p>
              <p className='text-blue-100 font-mono text-base leading-relaxed'>{tFooter('execution_notice')}</p>
              <p className='text-purple-100 font-mono text-base leading-relaxed'>{tFooter('age_restriction')}</p>
            </div>
          </div>

          {/* Copyright with Terminal Style */}
          <div className="text-center relative">
            <div className="inline-flex items-center space-x-4 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-black/50 backdrop-blur-sm border border-green-400/30 font-mono"
                 style={{clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'}}>
              <span className="text-green-400 animate-pulse"></span>
              <span className="text-gray-300">
                © {new Date().getFullYear()} CryptoX {tFooter('rights')}
                 
              </span>
             
            </div>
          </div>
        </div>
        
        {/* Bottom Data Stream */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400/30 via-cyan-400/30 to-blue-400/30 animate-pulse shadow-[0_0_15px_rgba(0,255,255,0.4)]"></div>
      </footer>
    </div>
  );
}