import Image from 'next/image'

const artData = [
  { id: 1, src: '/Assets/StarsArt/StarsByAmuu.png', title: 'Stars', artist: 'AmuuSalto', artistLink: 'https://discord.com/users/739007222201319515' },
  { id: 2, src: '/Assets/StarsArt/StarsByJOVE.png', title: 'Stars', artist: 'JOVE', artistLink: 'https://vgen.co/JOVE' },
  // Add all your art entries here following the same pattern
]

export default function ArtPage() {
  return (
    <>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-accent mb-4">Welcome to My Art Gallery</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          This page shows all art that I have. Usually I ask people to make it.
        </p>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artData.map((art) => (
          <div key={art.id} className="bg-card rounded-xl overflow-hidden border border-gray-800 hover:border-accent transition-all hover:scale-105">
            <div className="aspect-square relative">
              <Image
                src={art.src}
                alt={art.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-accent">{art.title}</h3>
              <p className="text-gray-400">
                By{' '}
                <a href={art.artistLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  {art.artist}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
