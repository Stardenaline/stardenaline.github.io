import SplashText from '@/components/SplashText'
import { WebringItem, ExperienceItem, HobbyItem } from '@/lib/constants'
import { Mail, Camera, Gamepad2, Film, Music } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Profile Section */}
      <section className="flex flex-col items-center mb-12">
        <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-accent shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:scale-105 transition-transform">
          <img 
            src="/assets/StarsArt/StarsChibiByRubicArt.png" 
            alt="Profile Picture" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative inline-block">
          <h1 className="text-4xl md:text-5xl font-bold text-accent text-center mb-4 relative inline-block pr-12">
            Hi, I Am Stars
            <div className="absolute -top-2 right-0 z-10">
              <SplashText />
            </div>
          </h1>
          <div className="w-12 h-1 bg-accent mx-auto mt-2"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#1e1e1e] p-8 rounded-xl mb-8 card-hover border border-[#2a2a2a]">
        <h2 className="section-title">About Me</h2>
        <p className="text-lg mb-4">
          Welcome to my site! There&apos;s nothing special in this website, just some information about me.
        </p>
        <p className="text-lg">Oh yea, I like Sunflowers 🌻.</p>
      </section>

      {/* Hobbies Section */}
      <section className="bg-[#1e1e1e] p-8 rounded-xl mb-8 card-hover border border-[#2a2a2a]">
        <h2 className="section-title">My Hobbies</h2>
        <div className="space-y-3">
          <HobbyItem icon={<Camera />} text="📷 Photography" />
          <HobbyItem icon={<Gamepad2 />} text="🎮 Casual Gamer" />
          <HobbyItem icon={<Film />} text="🎥 Movie Enthusiast" />
          <HobbyItem icon={<Music />} text="🎧 Music Lover" />
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-[#1e1e1e] p-8 rounded-xl mb-8 card-hover border border-[#2a2a2a]">
        <h2 className="section-title">My Experience</h2>
        <div className="space-y-6">
          <ExperienceItem 
            title="Admin at r/FMM Reborn Discord Server"
            period="2024 - Present"
            description="Moderate and helping people in server"
          />
          <ExperienceItem 
            title="???"
            period="??? - ???"
            description="???"
          />
        </div>
      </section>

      {/* Webring Section */}
      <section className="bg-[#1e1e1e] p-8 rounded-xl card-hover border border-[#2a2a2a]">
        <h2 className="section-title">Webring</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-6">
          {WebringItem.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden border border-[#2a2a2a] hover:border-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,255,255,0.2)]"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-20 object-cover"
              />
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

function HobbyItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-[#2a2a2a] rounded-lg hover:bg-[#333] transition-all duration-300 hover:translate-x-2">
      <span className="text-accent">{icon}</span>
      <span>{text}</span>
    </div>
  )
}

function ExperienceItem({ title, period, description }: { 
  title: string, 
  period: string, 
  description: string 
}) {
  return (
    <div className="relative pl-6 border-l-2 border-accent">
      <div className="absolute -left-2 top-6 w-3 h-3 bg-accent rounded-full"></div>
      <h3 className="text-xl font-semibold text-accent mb-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-2">{period}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}