import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center px-4 md:px-8"
        style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Pedro Oliveira</h1>
          <p className="text-xl md:text-2xl font-light">3D Character Artist for Digital Games</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 md:mr-12 flex justify-center">
            <Image
              src="/images/pedro-profile.jpg"
              alt="Pedro Oliveira Profile"
              width={300}
              height={300}
              className="rounded-full shadow-lg object-cover w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-300 mb-4">
              I'm Pedro Oliveira, a passionate 3D Character Artist with a strong focus on creating compelling and memorable characters for the digital games industry. With a keen eye for detail and a deep understanding of anatomy, form, and storytelling, I strive to bring virtual personalities to life.
            </p>
            <p className="text-lg text-gray-300">
              My journey into 3D art was driven by a lifelong love for games and animation. I specialize in the full character creation pipeline, from sculpting and modeling to texturing and rigging, always aiming for the highest quality and a unique artistic vision.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              [
                { src: "/images/asura.jpg", alt: "Asura 3D Model" },
                { src: "/images/piggy-executioner.jpg", alt: "Piggy Executioner 3D Model" },
                { src: "/images/sagat.jpg", alt: "Sagat 3D Model" },
                { src: "/images/rex-study.jpg", alt: "Rex Study 3D Model" },
                { src: "/images/1.png", alt: "Portfolio Image 1" },
                { src: "/images/2.png", alt: "Portfolio Image 2" },
                { src: "/images/2.jpg", alt: "Portfolio Image 3" },
                { src: "/images/3.jpg", alt: "Portfolio Image 4" },
                { src: "/images/4.png", alt: "Portfolio Image 5" },
                { src: "/images/5.jpg", alt: "Portfolio Image 6" },
                { src: "/images/final.jpg", alt: "Portfolio Image Final" },
                { src: "/images/than4.jpg", alt: "Portfolio Image Than4" },
              ].map((image, index) => (
                <div key={index} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <a
            href="mailto:pedrohao.art@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 mb-6"
          >
            Email Me: pedrohao.art@gmail.com
          </a>
          <div className="flex justify-center space-x-6">
            <a href="https://www.artstation.com/pedroaolivera" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl">
              ArtStation
            </a>
            <a href="https://www.instagram.com/pedrohaoliveira/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl">
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900 border-t border-gray-700">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Pedro Oliveira. All rights reserved.</p>
      </footer>
    </main>
  );
}

