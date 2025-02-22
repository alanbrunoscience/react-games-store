import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

  const date = new Date().getFullYear()

  return (

    <footer className="w-full flex justify-center bg-slate-800 text-white">

      {/* Footer Responsivo (Mobile e Desktop) */}
      <div className="container mx-auto px-4 flex flex-col items-center py-4">
        <p className="font-bold text-base md:text-lg xl:text-xl">
          GameVerse | Copyright: {date}
        </p>

        <p className="text-sm md:text-base xl:text-lg py-2">Acesse as nossas redes sociais</p>

        <section className="flex gap-3 py-1">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinLogo
              className="font-medium w-7 h-7 md:w-[40px] md:h-[40px] hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramLogo
              className="font-medium w-7 h-7 md:w-[40px] md:h-[40px] hover:text-blue-500 transition-colors"
              aria-label="Instagram"
            />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FacebookLogo
              className="font-medium w-7 h-7 md:w-[40px] md:h-[40px] hover:text-blue-500 transition-colors"
              aria-label="Facebook"
            />
          </a>
        </section>

      </div>

    </footer>

  )
}

export default Footer