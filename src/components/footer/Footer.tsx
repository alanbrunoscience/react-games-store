import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

  const date = new Date().getFullYear()

  return (

    <footer className="w-full flex justify-center bg-slate-800 text-white">

      {/* Footer para a versão Mobile */}
      <div className="flex flex-col items-center py-4 xl:hidden">
        <p className="text-base font-bold">
          GameVerse | Copyright: {date}
        </p>

        <p className="text-sm py-2">Acesse as nossas redes sociais</p>

        <section className="flex gap-3 py-1">
          <LinkedinLogo size={28} className="font-medium" />
          <InstagramLogo size={28} className="font-medium" />
          <FacebookLogo size={28} className="font-medium" />
        </section>

      </div>

      {/* Footer para a versão Desktop */}
      <div className="container mx-auto px-4 hidden xl:flex flex-col items-center py-4">
        <p className="text-xl font-bold">
          GameVerse | Copyright: {date}
        </p>

        <p className="text-lg py-2">Acesse as nossas redes sociais</p>

        <section className="flex gap-3 py-1">
          <LinkedinLogo size={40} className="font-medium" />
          <InstagramLogo size={40} className="font-medium" />
          <FacebookLogo size={40} className="font-medium" />
        </section>

      </div>

    </footer>

  )
}

export default Footer