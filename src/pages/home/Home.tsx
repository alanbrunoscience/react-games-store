function Home() {
  return (
    <section className="w-full h-screen flex justify-center items-center bg-slate-800">

      {/* Contêiner principal (consistente com cabeçalho/rodapé) */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:items-center lg:justify-between text-white">

        {/* Texto e botão à esquerda (em telas grandes) */}
        <div className="text-center lg:w-1/2">
          <h1 className="font-bold text-lg md:text-3xl lg:text-5xl mb-4">Bem-vindo à GameVerse!</h1>
          <p className="text-base md:text-xl lg:text-2xl mb-8">Seu universo gamer começa aqui!</p>
          <div className="rounded text-white border-gray-200 border-solid border-2 py-2 px-4 hover:bg-white hover:text-slate-800 transition duration-300 cursor-pointer inline-block text-sm md:text-base lg:text-lg">
            Novo Produto
          </div>
        </div>

        {/* Imagem à direita (em telas grandes) */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-center">
          <img
            src="https://ik.imagekit.io/alanbrunoscience/Games%20Stores/home.webp?updatedAt=1739976431953"
            alt="Main image of the Home Page"
            className="w-[200px] md:w-[300px] lg:w-[400px]"
          />
        </div>

      </div>

    </section >
  )
}

export default Home