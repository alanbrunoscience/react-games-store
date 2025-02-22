function Home() {
  return (
    <section className="w-full h-screen flex justify-center items-center bg-slate-800">

      {/* Seção Home Responsiva (Mobile e Desktop) */}
      <div className="w-full h-full flex flex-col justify-around items-center text-white">

        <div className="text-center">
          <h1 className="font-bold text-lg mx-3">Bem-vindo à GameVerse!</h1>
          <p className="text-base py-2">Seu universo gamer começa aqui!</p>
        </div>

        <div>
          <div className="text-white border-2 border-gray-200 rounded-sm py-2 px-4 hover:bg-white hover:text-slate-800 transition duration-300 cursor-pointer">
            Novo Produto
          </div>
        </div>

        <div>
          <img
            src="https://ik.imagekit.io/alanbrunoscience/Games%20Stores/home.webp?updatedAt=1739976431953"
            alt="Main image of the Home Page"
            className="w-[200px]"
          />
        </div>

      </div>

    </section >
  )
}

export default Home