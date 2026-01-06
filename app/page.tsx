import Image from 'next/image'
import SplashText from '@/components/SplashText'

export default function Home() {
  return (
    <>
      {/* Profile Section */}
      <section className="text-center mb-12 relative">
        <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-accent overflow-hidden shadow-xl shadow-accent/30">
          <Image
            src="/Assets/StarsArt/StarsChibiByRubicArt.png"
            alt="Profile Picture"
            width={192}
            height={192}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="relative inline-block">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Hi, I Am Stars
          </h1>
          <SplashText />
        </div>
      </section>

      {/* About Section */}
      <section className="section-card mb-8">
        <h2 className="section-title">About Me</h2>
        <p className="text-lg">
          Welcome to my site! There's nothing special on this website, just some information about me. 
          Oh yeah, I like Sunflowers 🌻.
        </p>
      </section>

      {/* Hobbies Section */}
      <section className="section-card mb-8">
        <h2 className="section-title">My Hobbies</h2>
        <ul className="space-y-3">
          {['📷 Photography', '🎮 Casual Gamer', '🎥 Movie Enthusiast', '🎧 Music Lover'].map((hobby) => (
            <li key={hobby} className="bg-accent/5 p-4 rounded-lg border-l-4 border-accent hover:bg-accent/10 transition-colors">
              {hobby}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience Section */}
      <section className="section-card mb-8">
        <h2 className="section-title">My Experience</h2>
        <div className="space-y-6">
          <div className="relative pl-8 border-l border-accent/30">
            <div className="absolute left-0 top-2 w-3 h-3 bg-accent rounded-full -translate-x-1.5" />
            <h3 className="text-xl font-semibold text-accent">Admin at r/FMM Reborn Discord Server</h3>
            <p className="text-gray-400 text-sm">2024 - Present</p>
            <p>Moderate and helping people in server</p>
          </div>
          <div className="relative pl-8 border-l border-accent/30">
            <div className="absolute left-0 top-2 w-3 h-3 bg-accent rounded-full -translate-x-1.5" />
            <h3 className="text-xl font-semibold text-accent">???</h3>
            <p className="text-gray-400 text-sm">??? - ???</p>
            <p>???</p>
          </div>
        </div>
      </section>

      {/* Webring Section */}
      <section className="section-card">
        <h2 className="section-title">Webring</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {[
            { name: 'Fan Club', url: 'https://discord.gg/fanclub', img: '/Assets/webring/fanclub.png' },
            { name: 'Bluecoin Community', url: 'https://t.me/+U7qdSQdu1fswZGY0', img: '/Assets/webring/bluecoin.png' },
            { name: 'hy.wtf', url: 'https://hy.wtf', img: '/Assets/webring/hy.png' },
            { name: 'Faav.top', url: 'https://faav.top', img: '/Assets/webring/faav.png' },
            { name: 'catmaid.coffee', url: 'https://catmaid.coffee', img: '/Assets/webring/ashley.png' },
            { name: 'Wreeper.com', url: 'https://wreeper.com', img: '/Assets/webring/wrepeer.png' },
            { name: 'Geigi.net', url: 'https://geigi.net', img: '/Assets/webring/geigi.png' },
          ].map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-700 rounded-lg overflow-hidden hover:border-accent transition-all hover:scale-105"
            >
              <div className="aspect-video relative bg-gray-900">
                <Image
                  src={site.img}
                  alt={site.name}
                  fill
                  className="object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
