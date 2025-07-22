"use client";

import Image from 'next/image';
import React from 'react';

export default function ComingSoon() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Technological Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0 L30 20 M30 40 L30 60 M0 30 L20 30 M40 30 L60 30" stroke="#22c55e" strokeWidth="1" fill="none" />
                <circle cx="30" cy="30" r="2" fill="#22c55e" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-green-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-emerald-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>

        {/* Data Stream Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Corner Brackets - Keeping what you liked */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-green-400"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-green-400"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-green-400"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-green-400"></div>
      </div>

      {/* Main Content - Clean without background and borders */}
      <div className="relative z-20 max-w-4xl w-full mx-4 text-center p-8 flex flex-col items-center">
        <div className="relative mb-6">
          <Image
            src="/pusati360-1.png"
            alt="Pusati 360 Logo"
            width={160}
            height={160}
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>

        <h1 className="text-5xl font-black mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-600">
          PUSATI 360
        </h1>

        <div className="w-full max-w-2xl mx-auto mb-6">
          <h2 className="text-2xl font-bold mb-6 text-green-300">
            WEB SİTEMİZ YAPIM AŞAMASINDA
          </h2>

          <div className="bg-gray-800/60 border border-green-400/20 rounded-lg p-4 mb-6">
            <p className="text-base leading-relaxed text-gray-200 mb-3">
              <strong className="text-green-400">En son teknolojik gelişmeler</strong>, yerli üretim projeleri ve küresel savunma stratejileri hakkında derinlemesine bilgi mi edinmek istiyorsunuz? O zaman doğru adrestesiniz!
            </p>
            <p className="text-base leading-relaxed text-gray-200">
              <span className="text-green-400">Kara, deniz, hava ve siber güvenlik</span> alanlarındaki en son yenilikleri, insansız sistemleri, geleceğin savaş teknolojilerini ve <strong className="text-red-400">Türkiye'nin savunma sanayiindeki yükselişini</strong> yakından takip ediyoruz. Uzman konuklarımızla gerçekleştirdiğimiz söyleşilerde sektörün nabzını tutuyor, merak ettiğiniz sorulara yanıtlar arıyoruz.
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.youtube.com/@pusati360"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 border border-red-400/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.221 3.5 12 3.5 12 3.5s-7.221 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.351 0 12 0 12s0 3.649.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.779 20.5 12 20.5 12 20.5s7.221 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.649 24 12 24 12s0-3.649-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube'da Takip Et
          </a>
          <a
            href="https://sosyal.teknofest.app/@pusati360"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 border border-blue-400/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            Teknofest Sosyal'de Takip Et
          </a>
        </div>
      </div>
    </div>
  );
}
