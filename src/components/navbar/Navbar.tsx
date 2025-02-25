import { useState } from "react";
import { MagnifyingGlass, ShoppingCart, User, List } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Controlar quando o menu hambúrguer aparece (mobile)

  return (
    <header className="relative bg-slate-800 text-white w-full">

      {/* Navbar Responsiva (Mobile) - Exibir em telas de 1024px ou menos */}
      <div className="container mx-auto px-4 w-full flex items-center justify-between pt-6 pb-2 xl:hidden">

        {/* Ícone do menu hambúrguer (somente no Mobile) */}
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <div className="border border-gray-200 rounded-sm p-1">
            <List size={29} />
          </div>
        </button>

        {/* Logo e Nome (centralizado no Mobile) */}
        <div className="flex items-center md:w-auto">
          <Link to='/home'>
            <img
              className="h-[4vh]" // Define a altura da logo como 5% da altura da tela.
              src="https://ik.imagekit.io/alanbrunoscience/Games%20Stores/logolg.png?updatedAt=1739995098669"
              alt="GameVerse Logo"
            />
          </Link>
          <p>
            <Link to='/home' className="font-bold text-2xl mx-3">GameVerse</Link>
          </p>
        </div>

        {/* Ícone do Carrinho (somente no Mobile) */}
        <div className="border border-gray-200 rounded-sm p-1">
          <ShoppingCart size={29} />
        </div>
      </div>

      {/* Barra de pesquisa (centralizada no Mobile) */}
      <div className="container mx-auto px-4 py-4 xl:hidden">
        <div className="flex items-center bg-white rounded-2xl">
          <input
            type="text"
            placeholder="O que deseja buscar?"
            className="w-full text-gray-800 py-2 px-3 text-sm"
          />
          <MagnifyingGlass size={28} className="mx-2 text-gray-600" />
        </div>
      </div>

      {/* Menu Mobile (abre ao clicar no botão hambúrguer) */}

      {/* Explicações relevantes para o trecho de código abaixo

          - Se menuOpen for "true", a parte à direita de && (o componente de navegação) será renderizada. Caso seja "false", a parte da direita de && será ignorada e nada será renderizada;
          - "absolute": significa que o elemento <-nav> será posicionado fora do fluxo normal do documento, ou seja, ele não ocupará espaço no layout tradicional (como se fosse "flutuante"). Ele será posicionado em relação ao <header>, já que este é o elemento pai (position: relative). Caso não houvesse um elemento com "position: relative", o posicionamento absoluto iria se referir ao <body> ou ao <html> da página.

      */}

      {menuOpen && (
        <nav className="container mx-auto px-2 absolute top-[70px] left-0 w-5/6 bg-slate-900 text-white py-2 xl:hidden">
          <ul className="flex flex-col items-start px-4">
            <li className="w-full py-3 border-b border-gray-400">Login</li>
            <li className="w-full py-3 border-b border-gray-400">Produtos</li>
            <li className="w-full py-3 border-b border-gray-400">
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
            </li>
            <li className="w-full py-3">Cadastrar Categoria</li>
          </ul>
        </nav>
      )}

      {/* Navbar Completa para Desktop */}
      {/* 
          hidden: esconde essa <div> por padrão;
          xl:flex: mostra a <div> como modelo "flexbox" em telas de 1280px ou maiores.
      */}
      <div className="container mx-auto px-8 hidden xl:flex items-center justify-between py-8">

        {/* Logo e Nome (lado esquerdo) */}
        <div className="flex items-center">
          <Link to='/home'>
            <img
              className="h-[6vh]"
              src="https://ik.imagekit.io/alanbrunoscience/Games%20Stores/logolg.png?updatedAt=1739995098669"
              alt="GameVerse Logo"
            />
          </Link>
          <Link to='/home'>
            <p className="font-bold text-3xl mx-3">GameVerse</p>
          </Link>
        </div>

        {/* Barra de Pesquisa */}
        <div className="w-1/3 flex bg-white rounded-2xl items-center">
          <input
            type="text"
            placeholder="O que deseja buscar?"
            className="w-full text-gray-800 py-2 px-3 text-sm"
          />
          <MagnifyingGlass size={28} className="mx-2 text-gray-600" />
        </div>

        {/* Opções de Navegação */}
        <nav>
          <ul className="flex gap-6 text-lg">
            <li className="hover:text-gray-400 cursor-pointer">Produtos</li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">Cadastrar Categoria</li>
          </ul>
        </nav>

        {/* Ícones de Usuário e Carrinho */}
        <div className="flex gap-4">
          <User size={28} />
          <ShoppingCart size={28} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
