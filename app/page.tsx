'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SPLASH_TEXTS, WEBRING_SITES } from '@/lib/constants';

export default function HomePage() {
  const [splashText, setSplashText] = useState('Awesome!');

  useEffect(() => {
    const randomText = SPLASH_TEXTS[Math.floor(Math.random() * SPLASH_TEXTS.length)];
    setSplashText(randomText);
  }, []);

  return (
    <div className="space-y-12">
      {/* Profile Section */}
      <section className="text-center animate-fade-in">
        <div className="relative w-48 h-48 mx-auto mb-6 rounded-full border-4 border-accent overflow-hidden shadow-lg shadow-accent/30 transition-transform duration-300 hover:scale-105">
          <Image
            src="/Assets/StarsArt/StarsChibiByRubicArt.png"
            alt="Profile Picture"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative inline-block">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Hi, I Am Stars
            <span className="absolute top-0 right-0 text-yellow font-mono font-bold text-sm md:text-base transform rotate-12 animate-float">
              {splashText}
            </span>
          </h1>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-background-card rounded-2xl p-8 border border-accent/10 card-hover">
        <h2 className="section-title">About Me</h2>
        <p className="text-text-primary text-lg">
          Welcome to my site! There's nothing special in this website, just some information about me. 
          Oh yeah, I like Sunflowers 🌻.
        </p>
      </section>

      {/* Hobbies Section */}
      <section className="bg-background-card rounded-2xl p-8 border border-accent/10 card-hover">
        <h2 className="section-title">My Hobbies</h2>
        <ul className="space-y-4">
          {['📷 Photography', '🎮 Casual Gamer', '🎥 Movie Enthusiast', '🎧 Music Lover'].map((hobby, index) => (
            <li 
              key={index}
              className="bg-accent/5 p-4 rounded-lg border-l-4 border-accent transition-all duration-300 hover:bg-accent/10 hover:translate-x-2"
            >
              {hobby}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience Section */}
      <section className="bg-background-card rounded-2xl p-8 border border-accent/10 card-hover">
        <h2 className="section-title">My Experience</h2>
        <div className="space-y-6">
          <div className="relative pl-8 pb-6 border-b border-accent/10">
            <div className="absolute left-0 top-2 w-3 h-3 bg-accent rounded-full"></div>
            <h3 className="text-xl font-semibold text-accent">Admin at r/FMM Reborn Discord Server</h3>
            <p className="text-text-secondary text-sm">2024 - Present</p>
            <p className="text-text-primary mt-2">Moderate and helping people in server</p>
          </div>
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 w-3 h-3 bg-accent rounded-full"></div>
            <h3 className="text-xl font-semibold text-accent">???</h3>
            <p className="text-text-secondary text-sm">??? - ???</p>
            <p className="text-text-primary mt-2">???</p>
          </div>
        </div>
      </section>

      {/* Webring Section */}
      <section className="bg-background-card rounded-2xl p-8 border border-accent/10 card-hover">
        <h2 className="section-title">Webring</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {WEBRING_SITES.map((site, index) => (
            <Link
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg border border-accent/20 transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/20"
            >
              <div className="aspect-square relative">
                <Image
                  src={site.banner}
                  alt={site.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-xs text-text-primary truncate">{site.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
