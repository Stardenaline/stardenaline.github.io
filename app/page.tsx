import Image from 'next/image'
import SplashText from '@/components/SplashText'
import WebringBanner from '@/components/WebringBanner'
import { webringSites, hobbies, experiences } from '@/lib/constants'

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
      {/* Profile Section */}
      <section className="flex flex-col items-center mb-16 relative">
        <div className="relative w-48 h-48 md:w-60 md:h-60 mb-8 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-400/40 hover:scale-105 transition-all duration-500">
          <Image
            src="/Assets/StarsArt/StarsChibiByRubicArt.png"
            alt="Profile Picture"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 192px, 240px"
          />
        </div>
        <div className="relative inline-block text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Hi, I Am Stars
            <span className="absolute -top-2 right-0 md:right-4">
              <SplashText />
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto rounded-full"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="glass-effect rounded-2xl p-8 mb-10 card-hover">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">About Me</h2>
        </div>
        <p className="text-lg leading-relaxed text-gray-300">
          Welcome to my site! There&apos;s nothing special on this website, just some information about me. 
          Oh yeah, I like Sunflowers 🌻.
        </p>
      </section>

      {/* Hobbies Section */}
      <section className="glass-effect rounded-2xl p-8 mb-10 card-hover">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">My Hobbies</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className="bg-cyan-400/5 p-5 rounded-xl border border-cyan-400/20 hover:bg-cyan-400/10 hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{hobby.emoji}</span>
                <span className="text-lg font-medium text-white">{hobby.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="glass-effect rounded-2xl p-8 mb-10 card-hover">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">My Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10">
              <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div className="bg-cyan-400/5 rounded-xl p-5 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{exp.title}</h3>
                <p className="text-cyan-300/80 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Webring Section */}
      <section className="glass-effect rounded-2xl p-8 card-hover">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Webring</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {webringSites.map((site) => (
            <WebringBanner key={site.id} site={site} />
          ))}
        </div>
      </section>
    </div>
  )
}
